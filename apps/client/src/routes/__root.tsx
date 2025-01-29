import { AppSidebar } from "@/components/Sidebar";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { isMobile } = useSidebar();
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AppSidebar className="hidden lg:block w-64 bg-gray-800 text-white" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Sidebar Trigger */}
        <div className={`fixed bottom-4 left-4 ${isMobile ? "" : "hidden"}`}>
          <SidebarTrigger />
        </div>

        {/* Navbar */}
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />

        {/* Main Outlet Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Toast Container */}
        <Toaster />
      </div>

      {/* TanStack Router DevTools */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
