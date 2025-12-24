import { slop, parse } from "./parse";
import React from "react";
import {pos, raw, lambda} from "@/util/types"

async function httpFallback() {
	const res = await fetch(
		"http://vanilla.local:7125/printer/objects/query?toolhead",
		{ method: "GET" },
	);
	const json = await res.json();
    console.log(json)
	const position: raw = json.result.status.toolhead.position;
	return lambda(position);
}
function usePosition() {
	const [position, setPosition] = React.useRef<pos>(null);
    const [err, setErr] = React.useState(null);
	const wref = React.useRef<WebSocket>(null);
	const w = new WebSocket("ws://vanilla.local:7125/websocket");
	let count = 0;
	React.useEffect(() => {
		w.onopen = () => {
			console.log("open");
			w.send(
				`{"jsonrpc":"2.0","method":"printer.objects.subscribe","params":{"objects":{"toolhead":["position"]}},"id":8}`,
			);

			w.onmessage = (e) => {
				///            const   data = e.data?.["result"] ?? null
				const data = parse(e.data);
				if (slop(data)) {
					// moonraker (for some reason) decides to send data about it's system information and other things you dont ask for when you request the position (or anything, really).
					count++;
				} else {
					count = 0;
					const toolhead: raw = data?.toolhead?.position;
                    setPosition(lambda(toolhead));
				}
			};
		};
		w.onerror = (e) => {
			setErr(e)
		};
		w.onclose = (e) => {}; //this isnt really needed, if it closes it closes :shrug:
		setInterval(async () => {
			if (count >= 10) {
				const x = await httpFallback();
                setPosition(x);
			}
		}, 1000 /*we dont wanna ddos the server*/);
	});
	return { position };
}
