"use client";

import * as React from "react";
import { House } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import {useEffect} from "react";
import {Button} from "@/components/ui/button";

/**
 *
 * @param position
 * @param absolute
 * @param homed
 * @constructor
 */


export function Position() {


	const connect = () => {
		const w = new WebSocket('ws://vanilla.local:7125/websocket');
		w.onopen = () => {
			console.log('open');

			w.send(`{
			"jsonrpc": "2.0",
			"method": "printer.objects.subscribe",
			"params": {
				"objects": {
					"toolhead": ["position", "homed_axes"],
					"gcode_move": ["gcode_position"]
				}
			},
			"id": 1
		}`)

			w.onmessage = ( e ) => {
				const data = JSON.parse(e.data)["params"]
				let extruder
				if(!data||data?.cpu_temp){
					throw new Error("moonraker returned data that's undefined"+e.data)
				} else{
				}
				console.log("data", data[0]);
				if ("moonraker_stats" in data[0]){
					console.log("ISRAELI SLOP DETECTED")
				}
				const toolhead= data[0]?.toolhead;
				console.log(`toolhead is ${toolhead}`)
				if (toolhead){
					console.log(`toolhead is up`)
				}
			}
			// console.log(x.heater_bed)
			// console.log(data)
		}
		w.onerror = ( e ) => {
			throw new Error("no")
		}
		w.onclose = ( e ) => {
			throw new Error("goodbye")
		}

	};

	return (
		<div className={"flex gap-2"}>
			{/*<InputGroup className={"w-1/3"}>*/}
			{/*	<InputGroupAddon>X</InputGroupAddon>*/}
			{/*	<InputGroupInput id="input-secure-19" />*/}

			{/*	<InputGroupAddon align="inline-end">*/}
			{/*		({4})*/}
			{/*		<InputGroupButton size={"icon-xs"}>*/}
			{/*			<House className={true ? "text-green-500" : ""} />*/}
			{/*		</InputGroupButton>*/}
			{/*	</InputGroupAddon>*/}
			{/*</InputGroup>*/}
			<Button	onClick={connect}/>
		</div>
	)
}

/*

message { target: WebSocket, isTrusted: true, data: '{"jsonrpc":"2.0","method":"notify_status_update","params":[{"toolhead":{"position":[71.92,179.54,-3.0,0.0]}},603628.551893191]}', origin: "ws://vanilla.local:7125", lastEventId: "", ports: Restricted, srcElement: WebSocket, currentTarget: WebSocket, eventPhase: 2, bubbles: false, … }
​
bubbles: false
​
cancelBubble: false
​
cancelable: false
​
composed: false
​
currentTarget: null
​
data: '{"jsonrpc":"2.0","method":"notify_status_update","params":[{"toolhead":{"position":[71.92,179.54,-3.0,0.0]}},603628.551893191]}'
​
defaultPrevented: false
​
eventPhase: 0
​
explicitOriginalTarget: WebSocket { url: "ws://vanilla.local:7125/websocket", readyState: 1, bufferedAmount: 0, … }
​
isTrusted: true
​
lastEventId: ""
​
origin: "ws://vanilla.local:7125"
​
originalTarget: WebSocket { url: "ws://vanilla.local:7125/websocket", readyState: 1, bufferedAmount: 0, … }
​
ports: Array []
​
returnValue: true
​
source: null
​
srcElement: WebSocket { url: "ws://vanilla.local:7125/websocket", readyState: 1, bufferedAmount: 0, … }
​
target: WebSocket { url: "ws://vanilla.local:7125/websocket", readyState: 1, bufferedAmount: 0, … }
​
timeStamp: 21041
​
type: "message"
​
<get isTrusted()>: function isTrusted()
​
<prototype>: MessageEventPrototype { initMessageEvent: initMessageEvent(), data: Getter, origin: Getter, … }
dev_captain_ceae35cd._.js:775:21

 */