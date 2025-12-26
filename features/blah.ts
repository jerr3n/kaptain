import {configureStore} from "@reduxjs/toolkit";
import { readdir } from "node:fs/promises"
const root: string = import.meta.dir
const dirName = "slices"
const directory = await readdir(root.concat(`/${dirName}`));

const reducers = {}

for (const file of directory) {
    const slice = await import(`${root}/${dirName}/${slice}`);
    reducers[slice.name] = slice.reducer //i think
}


configureStore({
    reducer: reducers
})/*
file obj structure
file.name is anything
file.reducer should always be {fileName}Reducer
*/
