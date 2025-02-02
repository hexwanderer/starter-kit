import { createFileRoute, redirect } from "@tanstack/react-router";

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
  return <div>Hello "/_authenticated"!</div>;
}
