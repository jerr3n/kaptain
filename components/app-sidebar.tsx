'use client'
import {LayoutDashboard, Terminal, Grid3x3, Folder, FileAxis3d, History, Server, OctagonAlert, Bell} from "lucide-react"

import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button";

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
]

export function AppSidebar() {
  const showalert = () => {alert("hi")}
  return (
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                {/*<SidebarMenuButton size="lg" asChild>*/}
                <a className="flex items-stretch">
                  <div className="flex flex-col  leading-none p-2">
                    <span className="font-bold text-lg">Kaptain</span>
                    <span className="text-sm font-light">v2.4</span>
                  </div>
                  <div className="flex items-center justify-center px-3  ml-auto"> {/*claude helped with this styling a lot*/}
                    <Bell />
                  </div>
                </a>
                {/*</SidebarMenuButton>*/}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
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
          <SidebarFooter>
              <Button className={"w-full"} variant={"destructive"} onClick={showalert}>
                <OctagonAlert/> Shutdown
              </Button>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
  )
}