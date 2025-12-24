
export type pos = {
    x: number;
    y: number;
    z: number;
};
/**
 * raw position from whatever its fetched from
 * @typedef {[x: number, y: number, z: number, e: number]} rawposition
 * @property {number} 0 - x axis coord
 * @property {number} 1 - y axis coord
 * @property {number} 2 - z axis coord
 * @property {number} 3 - extruder whatever it is
 */
export type raw = [number, number, number, number];
//lambda converts raw data from the API/ws to usable data in the type of pos
//i know it seems overengineered, but i realized its an easy fix
export const lambda = (arr: raw): pos => {
    return {
        x: arr[0],
        y: arr[1],
        z: arr[2]
    }
}