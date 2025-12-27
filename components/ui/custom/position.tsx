"use client";

import * as React from "react";
import { House } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

/**
 *
 * @param position
 * @param absolute
 * @param homed
 * @constructor
 */

export function Position() {
	const count = useSelector(selectCount);

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
			<Button
				onClick={() => {
					console.log(x.position);
				}}
			/>
		</div>
	);
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
