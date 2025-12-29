import {params, of} from "@/util/drax/params";
import methods from "@/util/drax/enum";

class client extends WebSocket{
    private socket: WebSocket;
    private id = 1;
    private connected = false;
    private setup(){
        this.onopen = () => {
            console.log("ok im ready")
        }
    }

    constructor(url: string) {
        super(url)
        this.socket = new WebSocket(url);
    }

    call<t extends keyof params>(
        method: t,
        ...params: params[t] extends undefined ? [] : [of<t>]
    ): Promise<any>{
        return new Promise((resolve) => { //if you dont define reject it cant hurt you
            const payload = {
                jsonrpc: "2.0",
                method,
                id: this.id,
                ...(params[0] && { params: params[0] }),
            }
            console.log(payload)
            this.socket.send(JSON.stringify(payload));
        })
    }

    identify(){
        this.call(methods.server.id, {
            client_name: "drax",
            version: 1,
            type: "other",
            url: "localhost:8080"
        })
    }

}

const x = new client("ws://vanilla.local:7125/websocket");
//x.identify()
x.identify()
x.call(methods.server.websocketId);