import { useAuth } from "@/hooks/use-auth";
import { useServer } from "@/hooks/use-server";
import type { treaty } from "@elysiajs/eden";
import type { Organization } from "@repo/database";
import type { App } from "@repo/server";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export type EdenClient = ReturnType<typeof treaty<App>>;

export const users = () => {
  const { serverClient } = useServer();

  return {
    getAll: () =>
      infiniteQueryOptions({
        queryKey: ["users"],
        queryFn: async () => {
          const response = await serverClient.index.get();
          if (response.error) throw response.error;
          return response.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.length,
      }),
  };
};

export const auth = () => {
  const { authClient } = useAuth();
  return {
    listAllOrganizations: () =>
      queryOptions<Organization[]>({
        queryKey: ["auth", "listAllOrganizations"],
        queryFn: async () => {
          const { data, error } = authClient.useListOrganizations();
          if (error) throw error;
          if (!data) throw new Error("No data");
          return data.map((org) => ({
            id: org.id,
            name: org.name,
            slug: org.slug,
            logo: org.logo ?? null,
            createdAt: org.createdAt,
            metadata: org.metadata,
          }));
        },
      }),
  };
};
