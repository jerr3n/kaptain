import React, { useState, useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";
import {
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
	Area,
	AreaChart,
} from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";

export const description = "A linear line chart";
const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

const m = 60_000;
function minuteTicks(now, minutes = 5) {
	const start = Math.floor((now - minutes * m) / m) * m;
	const ticks = [];

	for (let t = start; t <= now; t += m) {
		ticks.push(t);
	}
	return ticks;
}

export default function Graph() {
	const [data, setData] = useState([]);

	const r = useRef(null);

	const connect = () => {
		const w = new WebSocket("ws://vanilla.local:7125/websocket");
		r.current = w;
		w.onopen = () => {
			console.log("open");

			w.send(
				JSON.stringify({
					jsonrpc: "2.0",
					method: "printer.objects.subscribe",
					params: {
						objects: {
							heater_bed: ["temperature", "target", "power"], //,
							// extruder: ['temperature', 'target']
						},
					},
				}),
			);

			w.onmessage = (e) => {
				const x = JSON.parse(e.data).params?.[0];
				const z = JSON.parse(e.data);

				// console.log(typeof(JSON.parse(e.data).params[0]));

				if (x.heater_bed.target) {
					console.warn(x.heater_bed.target);
				}

				if (x.heater_bed) {
					const datenow = new Date(Date.now());
					new Date(Date.now());
					console.log(x);
					// if (x.heater_bed.target==undefined){
					const y = {
						time: Date.now(),
						temperature: x.heater_bed.temperature,
						target: x.heater_bed.target,
					};
					// }
					setData((data) => {
						return [...data, y];
					});
				}
				// console.log(x.heater_bed)
				// console.log(data)
			};
			w.onerror = (e) => {
				throw new Error("no");
			};
			w.onclose = (e) => {
				throw new Error("goodbye");
			};
		};
	};
	const disconnect = () => {
		if (r.current) {
			r.current.close();
		}
	};

	return (
		<div>
			<div onClick={connect}>jarvis open a websocket</div>
			<div onClick={disconnect}>CLOSE THE WEBSOCKET NOW</div>
			<ChartContainer config={chartConfig}>
				<AreaChart
					accessibilityLayer
					data={data}
					margin={{
						left: 12,
						right: 12,
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="time"
						type="number"
						scale="time"
						domain={[Date.now() - 5 * 60_000, Date.now()]}
						ticks={minuteTicks(Date.now())}
						tickFormatter={(t) =>
							new Date(t).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})
						}
					/>

					<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
					<defs>
						<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
							<stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
						</linearGradient>
						<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
							<stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
						</linearGradient>
					</defs>
					<Area
						dataKey="temperature"
						type="natural"
						fill="var(--chart-1)"
						fillOpacity={0}
						stroke="var(--chart-1)"
					/>
					<Area
						dataKey="target"
						type="natural"
						fill="url(#fillDesktop)"
						fillOpacity={0.4}
						stroke="var(--chart-1)"
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	);
}
