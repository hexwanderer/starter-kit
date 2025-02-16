import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppSidebar } from "@/components/sidebar";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const session = await context.authClient.getSession();
    console.log("session", session);
    if (!session || !session.data?.session) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { isMobile } = useSidebar();
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <AppSidebar className="hidden lg:block w-64 bg-gray-800 text-white" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Sidebar Trigger */}
        <div className={`fixed bottom-4 left-4 ${isMobile ? "" : "hidden"}`}>
          <SidebarTrigger />
        </div>

        {/* Main Outlet Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Toast Container */}
        <Toaster />
      </div>

      {/* TanStack Router DevTools */}
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
