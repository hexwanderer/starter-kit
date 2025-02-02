import { SignIn } from "@/components/auth/sign-in";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>
        Welcome Home! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quia.
      </h3>
      <SignIn />
    </div>
  );
}
