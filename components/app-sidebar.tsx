import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { Logo } from "./logo";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "History",
      url: "/history",
    },
    {
      title: "Reports",
      url: "/reports",
    },
    {
      title: "Settings",
      url: "#",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-blue-500 dark:bg-blue-800 gap-0 flex items-center justify-between px-4 py-2">
        <Logo size={80} />
        <div className="flex items-center justify-center gap-0"></div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
