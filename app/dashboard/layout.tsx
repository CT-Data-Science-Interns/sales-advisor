import { SidebarProvider } from "@/contexts/sidebar-context";
import { sidebarCookie } from "@/lib/sidebar-cookie";
import type { PropsWithChildren } from "react";
import { LayoutContent } from "./components/layout-content";
import { DashboardNavbar } from "./components/navbar";
import { DashboardSidebar } from "./components/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider initialCollapsed={sidebarCookie.get().isCollapsed}>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <LayoutContent>{children}</LayoutContent>
      </div>
    </SidebarProvider>
  );
}
