import { auth } from "@/queries/queries";
import { useQuery } from "@tanstack/react-query";

export function OrganizationSelectScreen() {
  const organizationsQuery = useQuery(auth().listAllOrganizations());

  return (
    <div className="space-y-2">
      {organizationsQuery.data?.map((org) => (
        <div className="rounded-md border px-4 py-3 text-sm" key={org.id}>
          {org.name}
        </div>
      ))}
    </div>
  );
}
