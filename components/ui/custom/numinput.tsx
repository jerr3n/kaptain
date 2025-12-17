"use client";
import * as React from "react";
import {
	useRef,
	useEffect,
	useCallback,
	forwardRef,
	useImperativeHandle,
} from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";

export interface reference {
	get: () => number;
	set: (n: number) => void;
}

export const NumInput = forwardRef<
	reference,
	{
		value?: number;
		onChange?: (value: number) => void;
		initial?: number;
		step?: number;
		min?: number;
		max?: number;
		name?: string;
	}
>(
	(
		{ value, onChange, initial = 0, step = 0.1, min = 0, max = 10, name },
		ref,
	) => {
		const rnd = (a: number, b: number): number => {
			const decimal = b.toString().split(".")[1]?.length || 0;
			return parseFloat(a.toFixed(decimal));
		};

		const r = useRef<HTMLInputElement>(null);
		const [internalValue, setInternalValue] = React.useState(initial);
		const [, F] = React.useState(false);

		const controlled = value !== undefined;
		const v = controlled ? value : internalValue;

		const V = useCallback(
			(newVal: number) => {
				if (onChange) onChange(newVal);
				if (!controlled) setInternalValue(newVal);
			},
			[onChange, controlled],
		);

		useImperativeHandle(
			ref,
			() => ({
				get: () => v,
				set: (n) => V(n),
			}),
			[v, V],
		);

		const down = useCallback(() => {
			V(v - step >= min ? rnd(v - step, step) : v);
		}, [step, min, v, V]);

		const up = useCallback(() => {
			V(v + step <= max ? rnd(v + step, step) : v);
		}, [step, max, v, V]);

		useEffect(() => {
			const k = (e: KeyboardEvent) => {
				if (document.activeElement === r.current) {
					if (e.key === "ArrowUp") up();
					else if (e.key === "ArrowDown") down();
				}
			};
			window.addEventListener("keydown", k);
			return () => window.removeEventListener("keydown", k);
		}, [down, up]);

		const [val, setVal] = React.useState(String(initial));

		useEffect(() => {
			setVal(String(v));
		}, [v]);

		return (
			<div>
				{name && <Label className={"pb-1"}>{name}</Label>}
				<InputGroup>
					<InputGroupAddon>
						<InputGroupButton size={"icon-xs"} onClick={down}>
							<ChevronDown />
						</InputGroupButton>
					</InputGroupAddon>
					<InputGroupInput
						className={"text-center"}
						ref={r}
						value={val}
						onChange={(e) => {
							const targetValue = e.target.value;
							if (
								targetValue === "." ||
								targetValue === "-" ||
								targetValue === "-." ||
								targetValue === ""
							) {
								setVal(targetValue);
								return;
							}
							const stepDec = step.toString().split(".")[1]?.length || 0;
							const inputDec = targetValue.split(".")[1]?.length || 0;
							if (inputDec > stepDec) return;
							const trueValue = Number(targetValue);
							if (!isNaN(trueValue) && trueValue >= min && trueValue <= max) {
								setVal(targetValue);
								V(rnd(trueValue, step));
							}
						}}
						onFocus={() => F(true)}
						onBlur={() => F(false)}
					/>
					<InputGroupAddon align={"inline-end"}>
						<InputGroupButton size={"icon-xs"} onClick={up}>
							<ChevronUp />
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</div>
		);
	},
);
NumInput.displayName = "numerical input";
