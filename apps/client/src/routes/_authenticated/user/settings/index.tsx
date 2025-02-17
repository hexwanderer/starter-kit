import { createFileRoute } from "@tanstack/react-router";
import { UserSettingsPage } from "@/features/settings/user/components/page";

export const Route = createFileRoute("/_authenticated/user/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserSettingsPage />;
}
