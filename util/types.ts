/**
 * position type usable for kaptain
 * @property {number} x - x axis
 * @property {number} y - y axis
 * @property {number} z - z axis
 */
export type pos = {
    x: number;
    y: number;
    z: number;
};
/**
 * raw position from whatever its fetched from
 * @property {number} 0 - x axis coord
 * @property {number} 1 - y axis coord
 * @property {number} 2 - z axis coord
 * @property {number} 3 - extruder whatever it is
 */
export type raw = [number, number, number, number];

/**
 * turns moonraker's data -> usable data 4 kaptain
 * @param {raw} arr - raw position from moonraker
 * @returns {pos} position that kaptain can use
 */
export const lambda = (arr: raw): pos => {
    return {
        x: arr[0],
        y: arr[1],
        z: arr[2]
    }
}