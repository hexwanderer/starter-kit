import { OrganizationManage } from "./organization-management";
import {
  SettingsTabs,
  SettingsTabsList,
  SettingsTabsTrigger,
  SettingsTabsContent,
} from "../../settings-tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { OrganizationDelete } from "./organization-delete";

export interface OrganizationSettingsPageProps {
  organization: {
    id: string;
    name: string;
    slug: string;
  };
}

export function OrganizationSettingsPage({
  organization,
}: OrganizationSettingsPageProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <h2>Settings</h2>
      <SettingsTabs defaultValue="tab-1" isMobile={isMobile}>
        <SettingsTabsList>
          <SettingsTabsTrigger value="tab-1">General</SettingsTabsTrigger>
        </SettingsTabsList>
        <div className="flex max-w-lg mx-auto w-full">
          <SettingsTabsContent value="tab-1">
            <div className="flex flex-col gap-4">
              <OrganizationManage organization={organization} />
              <OrganizationDelete organization={organization} />
            </div>
          </SettingsTabsContent>
        </div>
      </SettingsTabs>
    </>
  );
}
