import Link from "next/link"

import { routes } from "@/routes"

const navLinks = [
  { label: "Overview", href: routes.dashboard },
  { label: "Teams", href: "/teams" },
  { label: "Billing", href: "/billing" },
  { label: "Settings", href: routes.settings },
]

export function Sidebar() {
  return (
    <aside className="w-60 border-r px-4 py-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Workspace
      </p>
      <nav className="grid gap-2 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
