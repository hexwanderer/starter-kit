import { useServer } from "@/hooks/useServer";
import type { treaty } from "@elysiajs/eden";
import type { Organization } from "@starter-kit/database/schema";
import type { App } from "@starter-kit/server/index";
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
  const { serverClient } = useServer();
  return {
    listAllOrganizations: () =>
      infiniteQueryOptions<Organization[]>({
        queryKey: ["auth", "listAllOrganizations"],
        queryFn: async () => {
          return [
            {
              name: "Org 1",
              id: "1",
              slug: "org-1",
              logo: "",
              metadata: "",
              createdAt: new Date(),
            },
            {
              name: "Org 2",
              id: "2",
              slug: "org-2",
              logo: "",
              metadata: "",
              createdAt: new Date(),
            },
            {
              name: "Org 3",
              id: "3",
              slug: "org-3",
              logo: "",
              metadata: "",
              createdAt: new Date(),
            },
          ];
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.length,
      }),
  };
};
