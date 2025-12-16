"use client"

import * as React from "react"
import {useRef, useEffect, useCallback} from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"
import {ChevronUp, ChevronDown} from "lucide-react"
import {Label} from "@/components/ui/label"
export function NumInput({initial=0, step=.1, min=0, max=10, name}: {initial?: number, step?:number, min?:number, max?:number, name:string}) { //i swear to god react has some of the weirdest syntax
    const R = (a: number, b: number): number => {
        const d = b.toString().split('.')[1]?.length || 0;
        return parseFloat(a.toFixed(d));
    }
    const r = useRef<HTMLInputElement>(null)
    const [v, V] = React.useState(initial)
    const [, F] = React.useState(false); //yeah the entire purpose of _ is to not be used
    const d = useCallback(() => {V((z) => (z - step >= min ? R(z - step, step) : z))}, [step, min, V])
    const u = useCallback(() => {V((z) => (z + step <= max ? R(z + step, step) : z))}, [step, max, V])
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
        <div>
            <Label className={"pb-1"} >{name}</Label>
            <InputGroup className={""}>
            <InputGroupAddon>
                <InputGroupButton size={"icon-xs"} onClick={d}>
                    <ChevronDown/>
                </InputGroupButton>

            </InputGroupAddon>
            <InputGroupInput
                className={"text-center"}
                ref={r}
                value={v}
                onChange={(e) => {
                    const x = e.target.value;
                    if (x === '') {
                        V(min);
                        return;
                    }
                    const y = Number(x);
                    if (!isNaN(y)) V(R(y, step));
                }}
                onFocus={()=>F(true) }
                onBlur={()=>F(false)}
            />
            <InputGroupAddon align={"inline-end"}>
                <InputGroupButton size={"icon-xs"} onClick={u}>
                    <ChevronUp/>
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
        </div>
    )
}
