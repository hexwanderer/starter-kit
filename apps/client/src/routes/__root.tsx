import type { AuthContextType } from "@/hooks/use-auth";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<AuthContextType>()({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
