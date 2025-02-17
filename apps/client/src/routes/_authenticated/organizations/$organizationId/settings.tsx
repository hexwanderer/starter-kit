import { OrganizationManage } from "@/components/auth/organization-manage";
import {
  SettingsTabs,
  SettingsTabsContent,
  SettingsTabsList,
  SettingsTabsTrigger,
} from "@/components/settings-tabs";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const isMobile = useIsMobile();
  const data = Route.useLoaderData();
  return (
    <>
      <h2>Settings</h2>
      <SettingsTabs defaultValue="tab-1" isMobile={isMobile}>
        <SettingsTabsList>
          <SettingsTabsTrigger value="tab-1">General</SettingsTabsTrigger>
        </SettingsTabsList>
        <div className="flex max-w-lg mx-auto w-full">
          <SettingsTabsContent value="tab-1">
            <OrganizationManage organization={data} />
          </SettingsTabsContent>
        </div>
      </SettingsTabs>
    </>
  );
}
