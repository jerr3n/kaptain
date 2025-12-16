"use client";
import React, { useState } from "react";
import { Field } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { NumInput } from "@/components/ui/custom/numinput";
export function Slide() {
	const [val, setVal] = useState([50]);
	const [inputValue, setInputValue] = useState("");

	const x = (y: number[]) => {
		setVal([y]);
		setInputValue([y]);
	};
	const o = (f) => {
		return f <= 100 && f >= 0;
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const n = parseInt(e.target.value, 10);
		// setInputValue(e.target.value==""||(n>=0&&n<=100));
		console.log(o(n));
		console.log(n);
		if (e.target.value == "" || o(n)) {
			setInputValue(e.target.value);
		}
		if (!isNaN(n) && o(n)) {
			setVal([n]);
			setInputValue([n]);
		}
	};

	return (
		<div className={"flex gap-2"}>
			<Slider
				className={"w-4/5"}
				value={val}
				onValueChange={x}
				max={100}
				step={1}
			/>
			<Input
				className={"w-1/5"}
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter text"
			/>
		</div>
	);
}
