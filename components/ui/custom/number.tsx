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
export function NumInput({iV=0}: {iV?: number}) { //i swear to god react has some of the weirdest syntax
    const r = useRef<HTMLInputElement>(null)
    const [v, V] = React.useState(iV)
    const [f, F] = React.useState(false); //im aware that this MIGHT bug, but it's better practice to be safe then sorry in my opinion
    const d = () => {V(v-1)}
    const u = () => {V(v+1); console.log(v+typeof(v))}
    // const d = () => {}
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                document.activeElement ===
                (r as React.RefObject<HTMLInputElement>).current
            ) {
                console.log(e.key)
                if (e.key === 'ArrowUp'&&f) {
                    console.log("arrow up")
                    u()
                } else if (e.key === 'ArrowDown') {
                    console.log("arrow down")
                    d()
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },[])
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
                onChange={(e) => V(e.target.value)}
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
