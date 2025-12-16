import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const devices = [
	{
		type: "Bed",
		status: "0%",
		current: "200c",
	},
];

export function TableDemo() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Device</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Current</TableHead>
					<TableHead>Target</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{devices.map((device) => (
					<TableRow key={device.type}>
						<TableCell className="font-medium">{device.type}</TableCell>
						<TableCell className="font-medium">{device.status}</TableCell>
						<TableCell className="font-medium">{device.current}</TableCell>
						<TableCell>
							<Input type={"number"} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
