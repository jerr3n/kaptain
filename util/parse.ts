 export function slop(data: object){
    if (!data || data?.["moonraker_stats"]){
        return true
    } else {
        return false
    }
}

export function parse(data: string){
    return JSON.parse(data)?.["params"]?.[0] ?? null;
}