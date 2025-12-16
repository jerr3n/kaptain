"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Graph from "@/components/temp/graph";
import { TableDemo } from "@/components/temp/Table";
import { Separator } from "@/components/ui/separator";
import { Position } from "@/components/tool/position";
import { NumInput } from "@/components/ui/custom/numinput";
import { Slide } from "@/components/ui/custom/slider";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
export default function Home() {
	const n = useRef<NumInputRef>(null);
	return (
		<div className={"grid grid-cols-12 gap-2"}>
			<Card className={"col-span-5 h-100"}>
				<CardHeader>
					<CardTitle>Toolhead</CardTitle>
				</CardHeader>
				<CardContent className={"w-full "}>
					<div className={"flex gap-2"}>
						<Position pos={"x"} abs={"XXX"} homed={false} />
						<Position pos={"y"} abs={"YYY"} homed={false} />
						<Position pos={"z"} abs={"ZZZ"} homed={true} />
					</div>
					<div className={"py-4"}></div>
					<div>
						<Slide />
					</div>
					<div className={"w-1/5"}>
						<NumInput name={"testing"} ref={n} />
						<Button
							onClick={() => {
								console.log(n.current?.get());
							}}
						>
							ok
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className={"col-span-7"}>
				<CardHeader>
					<CardTitle>Temperature</CardTitle>
				</CardHeader>
				<CardContent>
					<TableDemo />
					<Separator className={"my-5"} />
					<Graph />
				</CardContent>
			</Card>
		</div>
	);
}
