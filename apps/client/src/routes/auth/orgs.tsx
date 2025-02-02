import { OrganizationSelectScreen } from "@/components/auth/organization-select";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/orgs")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OrganizationSelectScreen />;
}
