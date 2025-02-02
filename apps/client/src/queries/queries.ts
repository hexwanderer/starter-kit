import { useAuth } from "@/hooks/use-auth";
import { useServer } from "@/hooks/use-server";
import type { treaty } from "@elysiajs/eden";
import type { Organization } from "@repo/database";
import type { App } from "@repo/server";
import { infiniteQueryOptions } from "@tanstack/react-query";

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
  // const { serverClient } = useServer();
  const { authClient } = useAuth();
  return {
    listAllOrganizations: () =>
      infiniteQueryOptions<any>({
        queryKey: ["auth", "listAllOrganizations"],
        queryFn: async () => {
          const { data, error } = await authClient.useListOrganizations();
          if (error) throw error;
          return data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.length,
      }),
  };
};
