import { LucideInfo, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2">
			<div className="flex items-center gap-2 px-4">
				<Wrench size={20} />
				<h1>Development Build</h1>
			</div>
		</header>
	);
}
