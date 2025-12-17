"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { NumInput } from "@/components/ui/custom/numinput";

export function Slide({
	min = 0,
	max = 100,
	step = 1,
	initial = 50,
}: {
	min?: number;
	max?: number;
	step?: number;
	initial?: number;
}) {
	const [val, setVal] = useState(initial);
	//	console.log(setVal.toString())

	return (
		<div className={"flex gap-2 items-center"}>
			<Slider
				className={"w-4/5"}
				value={[val]}
				onValueChange={(v) => setVal(v[0])}
				min={min}
				max={max}
				step={step}
			/>
			<div className={"w-1/5"}>
				<NumInput value={val} onChange={setVal} min={min} max={max} step={step} />
			</div>
		</div>
	);
}
