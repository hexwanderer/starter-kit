import { SignIn } from "@/components/auth/sign-in";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
