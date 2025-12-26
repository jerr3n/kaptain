/*
This is for the data requested from the printer
---
moonraker docs:
https://moonraker.readthedocs.io/en/stable/printer_objects/s
---
temperature data
heater_bed: ['temperature', 'target', 'power']//,

{
    jsonrpc: '2.0',
    method: 'printer.objects.subscribe',
    params: {
        objects: {
            we need objects here
            temperature_sensor
        }
    }
}

 */

const w = new WebSocket('ws://vanilla.local:7125/websocket');
enum

class Request {
    static rpc = "2.0";
    method!: string;

    make() {
        return {
            jsonrpc: '2.0',
            method: this.method,
            params: {
                objects: this.objects
            }
        }
    }
}

class dat {
    jsonrpc: '2.0';

}
w.onopen = ()  => {
    w.send(JSON.stringify(data));
    w.onmessage = (e) => {
        console.log(e.data);
    }
}