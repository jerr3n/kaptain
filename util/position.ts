import {slop, parse} from "./parse"
async function http(){
    const res = await fetch("http://vanilla.local:7125/printer/objects/query?toolhead", {method: "GET"});
    const json = await res.json();
    const position = json.result.status.toolhead.position;
    return {
        x: position[0],
        y: position[1],
        z: position[2]
    }
}
function position() {

    const w = new WebSocket('ws://vanilla.local:7125/websocket');
    let count = 0
    w.onopen = () => {
        console.log('open');

        w.send(`{
			"jsonrpc": "2.0",
			"method": "printer.objects.subscribe",
			"params": {
				"objects": {
					"toolhead": ["position", "homed_axes"],
				}
			},
			"id": 1
		}`)

        w.onmessage = ( e ) => {
            //console.log( typeof(e.data))
            const data = parse(e.data);
            if(slop(data)){
                // moonraker (for some reason) decides to send data about it's system information and other things you dont ask for when you request the position (or anything, really).
                count++
            } else{
                count=0
            }
        }
    }
    w.onerror = ( e ) => {
        throw new Error("no")
    }
    w.onclose = ( e ) => {
        throw new Error("goodbye")
    }
    setInterval(async ()=>{
        if (count>=10){
            console.log("slop mode enabled, moonraker sent more than 10 bad responses")
            const x = await http()
            console.log(x)
        }
    },1000/*we dont wanna ddos the server*/)
}

position();
