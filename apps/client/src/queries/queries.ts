import { useServer } from "@/hooks/useServer";
import type { treaty } from "@elysiajs/eden";
import type { App } from "@starter-kit/server/index";
import { infiniteQueryOptions } from "@tanstack/react-query";

export type EdenClient = ReturnType<typeof treaty<App>>;

export const users = () => {
  const { serverClient: app } = useServer();

  return {
    getAll: () =>
      infiniteQueryOptions({
        queryKey: ["users"],
        queryFn: async () => {
          const response = await app.index.get();
          if (response.error) throw response.error;
          return response.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.length,
      }),
  };
};
