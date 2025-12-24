/**
 * is moonraker sending slop? this determines
 * @param data - data object from moonraker
 * @returns boolean - is it slop?
 */
export function slop(data: object) {
	if (!data || data?.["moonraker_stats"]) {
		return true;
	} else {
		return false;
	}
}

/**
 * parses the important data from the websocket
 * @param data - the data string from the ws
 * @returns object - the data in an object form
 */

export const parse = (data: string): object => {return JSON.parse(data)?.["params"]?.[0] ?? null;}
