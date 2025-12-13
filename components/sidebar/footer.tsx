import {SidebarFooter, SidebarMenuItem} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {OctagonAlert, Power, Settings} from "lucide-react";

export function AppSidebar() {
    require(
    <SidebarFooter>
        <SidebarMenuItem key = {"settings"} >
    <Button className = {"w-full"}
    variant = {"default"}
    onClick = {showalert} >
        <Settings / > Settings
        < /Button>
        < /SidebarMenuItem>
        < SidebarMenuItem
    key = {"power"} >
    <Button className = {"w-full"}
    variant = {"default"}
    onClick = {showalert} >
        <Power / > Power
        < /Button>
        < /SidebarMenuItem>
        < SidebarMenuItem
    key = {"shutdown"} >
    <Button className = {"w-full"}
    variant = {"destructive"}
    onClick = {showalert} >
        <OctagonAlert / > Emergency
    Shutdown
    < /Button>
    < /SidebarMenuItem>
    < /SidebarFooter>
)
}