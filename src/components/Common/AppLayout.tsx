import * as React from "react"

import { Sidebar } from "./Sidebar"
import Header from "./Header"

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  )
}
