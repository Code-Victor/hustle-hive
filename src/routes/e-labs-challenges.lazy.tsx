import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/e-labs-challenges')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/e-lab-challenges"!</div>
}
