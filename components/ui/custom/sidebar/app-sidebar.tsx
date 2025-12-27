"use client";
import {
	LayoutDashboard,
	Terminal,
	Grid3x3,
	Folder,
	FileAxis3d,
	History,
	Server,
	OctagonAlert,
	Bell,
	Settings,
	Power,
} from "lucide-react";
import { Footer } from "@/components/ui/custom/sidebar/footer";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "#",
		icon: LayoutDashboard,
	},
	{
		title: "Console",
		url: "#",
		icon: Terminal,
	},
	{
		title: "Heightmap",
		url: "#",
		icon: Grid3x3,
	},
	{
		title: "Files",
		url: "#",
		icon: Folder,
	},
	{
		title: "Viewer",
		url: "#",
		icon: FileAxis3d,
	},
	{
		title: "History",
		url: "#",
		icon: History,
	},
	{
		title: "Machine",
		url: "#",
		icon: Server,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						{/*<SidebarMenuButton size="lg" asChild>*/}
						<a className="flex items-stretch">
							<div className="flex-col flex">
								<div className="leading-none p-2">
									<span className="font-bold text-lg">Kaptain</span>
									<span className="text-sm font-light">v2.4</span>
								</div>
							</div>
							<div className="flex items-center justify-center px-3  ml-auto">
								{" "}
								{/*claude helped with this styling a lot*/}
								<Bell />
							</div>
						</a>
						<Badge variant="outline">
							<Spinner />
							Connecting
						</Badge>
						{/*</SidebarMenuButton>*/}
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<Footer />
		</Sidebar>
	);
}
