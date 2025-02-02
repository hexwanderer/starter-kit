import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/x")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/x"!</div>
}
