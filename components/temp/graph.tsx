'use client'
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from "recharts";


import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
    { month: "0:00", desktop: 5 },
    { month: "0:10", desktop: 15 },
    { month: "0:20", desktop: 45 },
    { month: "0:30", desktop: 90 },
    { month: "0:40", desktop: 120 },
    { month: "0:50", desktop: 140 },
    { month: "0:60", desktop: 145 },
    { month: "0:70", desktop: 145 },
    { month: "0:80", desktop: 145 },
    { month: "0:90", desktop: 145 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig
export default function Graph() {
    return (
    <ChartContainer config={chartConfig} className={"h-[200px] w-full"}>
        <AreaChart
            accessibilityLayer
    data={chartData}

    >
    <CartesianGrid vertical={true} />
    <XAxis
    dataKey="month"
    tickLine={true}
    axisLine={false}
    tickMargin={8}
    tickFormatter={(value) => value.slice(0, 3)}

    />
    <YAxis domain={[0, 250]} />
    <ChartTooltip
    cursor={false}
    content={<ChartTooltipContent indicator="dot" hideLabel />}
    />
    <Area
    dataKey="desktop"
    type="linear"
    fill="var(--color-desktop)"
    fillOpacity={0}
    stroke="var(--color-desktop)"
        />
        </AreaChart>
        </ChartContainer>

)
}