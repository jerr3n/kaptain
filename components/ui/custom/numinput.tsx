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
//there are 3 indents here and prettier will get rid of them, lets see
export interface reference {
	get: () => number;
}
export const NumInput = forwardRef<
	reference,
	{
		initial?: number;
		step?: number;
		min?: number;
		max?: number;
		name?: string;
	}
>(({ initial = 0, step = 0.1, min = 0, max = 10, name }, ref) => {
	const rnd = (a: number, b: number): number => {
		const decimal = b.toString().split(".")[1]?.length || 0;
		return parseFloat(a.toFixed(decimal));
	};
	const r = useRef<HTMLInputElement>(null);
	const [v, V] = React.useState(initial);
	const [, F] = React.useState(false);
	useImperativeHandle(
		ref,
		() => ({
			get: () => v,
		}),
		[v],
	);
	const down = useCallback(() => {
		V((z) => (z - step >= min ? rnd(z - step, step) : z));
	}, [step, min, V]);
	const up = useCallback(() => {
		V((z) => (z + step <= max ? rnd(z + step, step) : z));
	}, [step, max, V]);
	useEffect(() => {
		const k = (e: KeyboardEvent) => {
			if (
				document.activeElement === (r as React.RefObject<HTMLInputElement>).current
			) {
				console.log(e.key);
				if (e.key === "ArrowUp") {
					up();
				} else if (e.key === "ArrowDown") {
					down();
				}
			}
		};

		window.addEventListener("keydown", k);

		return () => {
			window.removeEventListener("keydown", k);
		};
	}, [down, up, v]);
	const [val, setVal] = React.useState(String(initial));

	useEffect(() => {
		setVal(String(v));
	}, [v]);
	return (
		<div>
			{name && <Label className={"pb-1"}>{name}</Label>}
			<InputGroup className={""}>
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

						if (inputDec > stepDec) {
							return; // Reject input with too many decimals
						}
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
});
NumInput.displayName = "numerical input";
