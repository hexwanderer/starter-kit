import { useQuery } from "@tanstack/react-query";
import { resourceQueries } from "../api/queries";

export function ResourceList() {
  const resourceListQuery = useQuery(resourceQueries().getAll);

  return (
    <div>
      {resourceListQuery.data?.map((resource) => (
        <div key={resource.id}>{resource.title}</div>
      ))}
    </div>
  );
}
