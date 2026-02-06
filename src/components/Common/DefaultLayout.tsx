import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

type DefaultLayoutProps = {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export function DefaultLayout({ 
  children, 
  showHeader = true, 
  showFooter = true 
}: DefaultLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
