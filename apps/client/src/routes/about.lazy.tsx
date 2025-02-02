// import { users } from "@/queries/queries";
// import { useInfiniteQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  // const usersData = useInfiniteQuery(users().getAll());
  return <div className="p-2">Hello from About!</div>;
}
