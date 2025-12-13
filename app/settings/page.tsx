'use client'

import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className={"grid grid-cols-3 grid-rows-3 h-full"}>
        <Alert variant="destructive" className={""}>
            <Terminal />
            <AlertTitle>SHUTDOWN</AlertTitle>
            <AlertDescription className={"font-mono mt-0 h-full w-auto"}>

            </AlertDescription>
            <div className={"w-full"}>

            </div>
        </Alert>
        </div>
    )
}