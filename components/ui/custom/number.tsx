"use client"

import * as React from "react"
import {useRef, useEffect} from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import {ChevronUp, ChevronDown} from "lucide-react"
export function NumInput({iV=0, s=.1, m=0, M=10}: {iV?: number, s?:number, n?:boolean, m?:number, M?:number}) { //i swear to god react has some of the weirdest syntax
    const R = (a: number, b: number): number => {
        const d = b.toString().split('.')[1]?.length || 0;
        return parseFloat(a.toFixed(d));
    }
    const r = useRef<HTMLInputElement>(null)
    const [v, V] = React.useState(iV)
    const [_, F] = React.useState(false); //yeah the entire purpose of _ is to not be used
    /*I HATE FLOATING POINT OPERATION ERRORS
    WJHY DO I HAVE TOFIX THE ENGINEERS PROBLEMS
    very dodgy workaround but a working workaround nonetheless
    */
    const d = () => {V((z) => (z - s >= m ? R(z - s, s) : z))}
    const u = () => {V((z) => (z + s <= M ? R(z + s, s) : z))}
    useEffect(() => {
        const k = (e: KeyboardEvent) => {
            if (
                document.activeElement === (r as React.RefObject<HTMLInputElement>).current
            ) {
                console.log(e.key)
                if (e.key === 'ArrowUp') {
                    u()
                } else if (e.key === 'ArrowDown') {
                    d()
                }
            }
        };

        window.addEventListener('keydown', k);

        return () => {
            window.removeEventListener('keydown', k);
        };
    },[d, u, v])
    //this code does not look minified
    // dont tell me it does
    // that hurts my feelings
    return (
        <InputGroup className={""}>
            <InputGroupAddon>
            <InputGroupButton size={"icon-xs"} onClick={u}>
                <ChevronUp/>
            </InputGroupButton>
            </InputGroupAddon>
            <InputGroupInput
                className={"text-center"}
                ref={r}
                value={v}
                onChange={(e) => {
                    const x = e.target.value;
                    if (x === '') {
                        V(m);
                        return;
                    }
                    const y = Number(x);
                    if (!isNaN(y)) V(R(y, s));
                }}
                onFocus={()=>F(true) }
                onBlur={()=>F(false)}
            />
            <InputGroupAddon align={"inline-end"}>
                <InputGroupButton size={"icon-xs"} onClick={d}>
                    <ChevronDown/>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}
