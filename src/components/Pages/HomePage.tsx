import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { routes } from "@/routes"

export function HomePage() {
  return (
    <section className="mx-auto grid max-w-4xl gap-6 py-12">
      <div className="grid gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Welcome
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Build your next dashboard faster
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          This scaffold includes auth, user areas, services, and UI helpers. Start by
          plugging in your real API calls.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get started</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <p className="text-sm text-muted-foreground">
              Explore the auth area and replace the sample routes with your own.
            </p>
            <Button asChild size="sm">
              <Link href={routes.login}>Open login</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team spaces</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <p className="text-sm text-muted-foreground">
              Add your own service calls in src/services to power the UI.
            </p>
            <Button variant="outline" size="sm">
              View services
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
