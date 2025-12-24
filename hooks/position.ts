import { slop, parse } from "@/util/parse";
import React from "react";
import {pos, raw, lambda} from "@/util/types"

/**
 * fallback for if websocket doesnt work
 * @returns pos
 */
async function httpFallback() {
	const res = await fetch(
		"http://vanilla.local:7125/printer/objects/query?toolhead",
		{ method: "GET" },
	);
	const json = await res.json();
	const position: raw = json.result.status.toolhead.position;
	return lambda(position);
}

/**
 * idk how to write this syntax you get the gist i hope
 * @returns {{position: pos, err: any}}
 */
export function usePosition() {
	const [position, setPosition] = React.useState<pos| null>(null);
    const [err, setErr] = React.useState(null);
	const wref = React.useRef<WebSocket>(null);
	let count = 0;
	React.useEffect(() => {
		const w = new WebSocket("ws://vanilla.local:7125/websocket");
		wref.current = w;
		w.onopen = () => {
			w.send(
				`{"jsonrpc":"2.0","method":"printer.objects.subscribe","params":{"objects":{"toolhead":["position"]}},"id":8}`,
			);

			w.onmessage = (e) => {
				///            const   data = e.data?.["result"] ?? null
				const data = parse(e.data);
				if (slop(data)||typeof(data)=="string") {
					// moonraker (for some reason) decides to send data about it's system information and other things you dont ask for when you request the position (or anything, really).
					count++;
				} else {
					count = 0;
					const toolhead: raw = data?.toolhead?.position; // yeah webstorm i wonder why ?. is there
                    setPosition(lambda(toolhead));
				}
			};
		};
		w.onerror = (e) => {
			setErr(e)
		};
		w.onclose = (e) => {return}; //this isnt really needed, if it closes it closes :shrug:
		setInterval(async () => { //when moonraker returns too much data that is excess this just shuts it up and goes to another source
			if (count >= 10) {
				const httpData: pos = await httpFallback();
                setPosition(httpData);
			}
		}, 1000 /*we dont wanna ddos the server, 1 second is good.*/);
	}, []);
	return { position, err };
}
