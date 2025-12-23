import {
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function PowerDropdown() {
	return (
		<DropdownMenuContent className="w-56" align="start">
			<DropdownMenuLabel>Klipper Control</DropdownMenuLabel>
			<DropdownMenuGroup>
				<DropdownMenuItem>Restart</DropdownMenuItem>
				<DropdownMenuItem>Firmware Restart</DropdownMenuItem>
				<DropdownMenuItem>Shutdown</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuLabel>Moonraker</DropdownMenuLabel>
			<DropdownMenuGroup>
				<DropdownMenuItem>Restart</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuLabel>Host Control</DropdownMenuLabel>
			<DropdownMenuGroup>
				<DropdownMenuItem>Shutdown</DropdownMenuItem>
				<DropdownMenuItem>Reboot</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	);
}
