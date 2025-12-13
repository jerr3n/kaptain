import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Dropdown() {
    return (

            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Klipper Control</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Restart
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Firmware Restart
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Shutdown
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Moonraker</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Restart
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Host Control</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Shutdown
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Reboot
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
    )
}
