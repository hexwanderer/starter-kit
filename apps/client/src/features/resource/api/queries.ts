import { useServer } from "@/hooks/use-server";
import { queryOptions } from "@tanstack/react-query";

export const resourceQueries = () => {
  const { serverClient } = useServer();

  return {
    getAll: queryOptions({
      queryKey: ["resources"],
      queryFn: async () => {
        const resp = await serverClient.api.resources.all.get();
        if (resp.error) throw resp.error;
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
