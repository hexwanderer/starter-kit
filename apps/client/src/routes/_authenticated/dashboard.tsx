import { useAuth } from "@/hooks/use-auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { authClient } = useAuth();
  const activeOrg = authClient.useActiveOrganization();

  return (
    <>
      <div>{`Hello! Active organziation is ${activeOrg.data?.name ?? "unknown"}`}</div>
    </>
  );
}
