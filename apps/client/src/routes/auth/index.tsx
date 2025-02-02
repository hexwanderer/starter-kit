import { SignOn } from "@/components/auth/sign-on";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignOn />;
}
