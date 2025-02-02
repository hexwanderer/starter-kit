import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/s")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/s"!</div>
}
