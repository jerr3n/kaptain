import { SidebarFooter, SidebarMenuItem } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { OctagonAlert, Power, Settings } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PowerDropdown } from "@/components/ui/custom/sidebar/power-dropdown";
import Link from "next/link";

export function Footer() {
	const showalert = () => {
		alert("hi");
	};

	return (
		<DropdownMenu>
			<SidebarFooter>
				<SidebarMenuItem key={"settings"}>
					<Link href={"/settings"}>
						<Button className={"w-full"} variant={"default"}>
							<Settings /> Settings
						</Button>
					</Link>
				</SidebarMenuItem>
				<SidebarMenuItem key={"power"}>
					<DropdownMenuTrigger asChild>
						<Button className={"w-full"} variant={"default"}>
							<Power /> Power
						</Button>
					</DropdownMenuTrigger>
					<PowerDropdown />
				</SidebarMenuItem>
				<SidebarMenuItem key={"shutdown"}>
					<Button className={"w-full"} variant={"destructive"} onClick={showalert}>
						<OctagonAlert /> Emergency Shutdown
					</Button>
				</SidebarMenuItem>
			</SidebarFooter>
		</DropdownMenu>
	);
}
