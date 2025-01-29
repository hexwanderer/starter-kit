import { auth } from "@/queries/queries";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function OrganizationSelectScreen() {
  const organizationsQuery = useInfiniteQuery(auth().listAllOrganizations());

  const allOrganizations = useMemo(() => {
    if (!organizationsQuery.data) return [];
    return organizationsQuery.data.pages.flat();
  }, [organizationsQuery.data]);

  return (
    <div className="space-y-2">
      {organizationsQuery.data &&
        allOrganizations.map((org) => (
          <div className="rounded-md border px-4 py-3 text-sm" key={org.id}>
            {org.name}
          </div>
        ))}
    </div>
  );
}
