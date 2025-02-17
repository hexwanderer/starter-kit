import { OrganizationManage } from "@/components/auth/organization-manage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/organizations/$organizationId/settings",
)({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    if (!params.organizationId) throw new Error("No organization id provided");
    const { data, error } =
      await context.authClient.organization.getFullOrganization({
        query: {
          organizationId: params.organizationId,
        },
      });

    if (error) throw error;

    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
    };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div>
      <OrganizationManage organization={data} />
    </div>
  );
}
