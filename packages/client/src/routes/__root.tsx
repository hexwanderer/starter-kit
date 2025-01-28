import { AppSidebar } from "@/components/Sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <AppSidebar />
      <SidebarInset>
        <div className="p-2 flex gap-2">
          <SidebarTrigger />
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </SidebarInset>
    </>
  ),
});
