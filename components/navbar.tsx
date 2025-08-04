import { NavUser } from "./nav-user";
import { SidebarTrigger } from "./ui/sidebar";

export function Navbar() {
  return (
    <header className="sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-12 px-3">
      <SidebarTrigger />
      <div className="ml-auto">
        <NavUser
          username="admin"
          departName="IT Department"
          level="SuperAdmin"
        />
      </div>
    </header>
  );
}
