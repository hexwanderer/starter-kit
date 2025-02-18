import { useServer } from "@/hooks/use-server";
import { queryOptions } from "@tanstack/react-query";
import type { Resource } from "@repo/server";

export const resourceQueries = () => {
  const { serverClient } = useServer();

  return {
    getAll: queryOptions({
      queryKey: ["resources"],
      queryFn: async () => {
        const { data, error } = await serverClient.api.resources.all.get();
        if (error) throw error;
        return data as Resource[];
      },
    }),
    getById: (id: string) => {
      queryOptions({
        queryKey: ["resources", id],
        queryFn: async () => {
          const { data, error } = await serverClient.api
            .resources({ id })
            .get();
          if (error) throw error;
          return data;
        },
      });
    },
  };
};
