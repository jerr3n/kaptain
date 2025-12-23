"use client";

import * as React from "react";
import { House } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
export function Position({ pos, abs, homed }) {
	return (
		<InputGroup className={"w-1/3"}>
			<InputGroupAddon>{pos}</InputGroupAddon>
			<InputGroupInput id="input-secure-19" />

			<InputGroupAddon align="inline-end">
				({abs})
				<InputGroupButton size={"icon-xs"}>
					<House className={homed ? "text-green-500" : ""} />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
