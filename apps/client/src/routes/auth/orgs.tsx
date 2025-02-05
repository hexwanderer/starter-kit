import { OrganizationSelect } from "@/components/auth/organization-select";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/orgs")({
  component: RouteComponent,
  shouldReload: false,
  gcTime: 0,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <OrganizationSelect />
    </div>
  );
}
