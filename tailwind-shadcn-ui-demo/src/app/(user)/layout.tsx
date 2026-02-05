import type { ReactNode } from "react"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { AppLayout } from "@/components/Common"
import { routes } from "@/routes"

export default async function UserLayout({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = await cookies()
  const hasSession = Boolean(cookieStore.get("session")?.value)

  if (!hasSession) {
    redirect(routes.login)
  }

  return <AppLayout>{children}</AppLayout>
}
