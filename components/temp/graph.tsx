import React, {useState, useEffect, useRef} from 'react';
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart"

export const description = "A linear line chart"
const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig
export default function Graph() {
	const [data, setData] = useState([])

	const r = useRef(null);

	const connect = () => {
		const w = new WebSocket('ws://vanilla.local:7125/websocket');
		r.current = w;
		w.onopen = () => {
			console.log('open');

			w.send(JSON.stringify({
				jsonrpc: '2.0',
				method: 'printer.objects.subscribe',
				params: {
					objects: {
						heater_bed: ['temperature', 'target']//,
						// extruder: ['temperature', 'target']
					}
				}
			}))

			w.onmessage = ( e ) => {
				const x = JSON.parse(e.data).params?.[0]
				// console.log(typeof(JSON.parse(e.data).params[0]));
				if (x.heater_bed){
					const y = {time: Date.now().toLocaleString(), temperature: x.heater_bed.temperature}
					setData(data => {
						console.log(data)
						return [...data, y]
					})
				}
				console.log(x.heater_bed)
				console.log(data)
			}
			w.onerror = ( e ) => {
				throw new Error("no")
			}
			w.onclose = ( e ) => {
				throw new Error("goodbye")
			}
		}
	};
	const disconnect = () => {
		if (r.current) {
			r.current.close()
		}
	}



	return (
		<div>
			<div onClick={connect}>
				jarvis open a websocket
			</div>
			<div onClick={disconnect}>
				CLOSE THE WEBSOCKET NOW
			</div>
			<ChartContainer config={chartConfig}>
				<LineChart
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
						tickLine={false}
						axisLine={false}
						tickMargin={8}
					/>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Line
						dataKey="temperature"
						type="linear"
						stroke="var(--chart-1)"
						strokeWidth={2}
						dot={true}
					/>
				</LineChart>
			</ChartContainer>
		</div>

	);
}