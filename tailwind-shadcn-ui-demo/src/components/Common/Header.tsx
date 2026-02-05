import Link from "next/link"

import { Button } from "@/components/ui/button"
import { routes } from "@/routes"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <Link href={routes.home} className="text-sm font-semibold">
        Shadcn UI Demo
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link href={routes.dashboard} className="text-muted-foreground hover:text-foreground">
          Dashboard
        </Link>
        <Link href={routes.settings} className="text-muted-foreground hover:text-foreground">
          Settings
        </Link>
        <Button size="sm" asChild>
          <Link href={routes.login}>Sign in</Link>
        </Button>
      </nav>
    </header>
  )
}
