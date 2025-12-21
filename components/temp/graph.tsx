import React, {useState, useEffect, useRef} from 'react';

export default function Step1Connection() {
	const r = useRef(null);

	const connect = () => {
		const w = new WebSocket('ws://vanilla.local:7125/websocket');
		r.current = w;
		w.onopen = () => {
			console.log('open');

			w.send(JSON.stringify({
				jsonrpc: '2.0',
				method: 'printer.objects.subscribe',

			}))

			w.onmessage = ( e ) => {
				console.log(e);
			}
			w.onerror = ( e ) => {
				throw new Error("no")
			}
			w.onclose = ( e ) => {
				throw new Error("goodbye")
			}
		}
	};



	return (
		<div>
		<div onClick={connect}>
			jarvis open a websocket
		</div>
		</div>
	);
}