import { LayoutDashboard, Terminal, Grid3x3, Folder, FileAxis3d, History, Server } from "lucide-react"

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
  return (
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate text-xl font-bold">Kaptain</span>
              <span className="truncate text-sm ">Nonfunc.</span>
            </div>
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
            <SidebarMenuItem key="keys">
              <SidebarMenuButton asChild>

              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
  )
}