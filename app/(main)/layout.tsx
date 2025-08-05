import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <main className="p-6 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
