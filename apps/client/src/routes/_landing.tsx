import { Button } from "@/components/ui/button";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-screen">
      <div className="justify-between flex items-center">
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <div>
          <Link to="/auth/sign-in">
            <Button className="m-2">Sign In</Button>
          </Link>
        </div>
      </div>
      <hr />

      <Outlet />
    </div>
  );
}
