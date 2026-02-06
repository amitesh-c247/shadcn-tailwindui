import type { ReactNode } from "react"
import { DefaultLayout } from "@/components/Common"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <DefaultLayout>
      <div className="mx-auto flex min-h-[calc(100vh-200px)] w-full max-w-lg items-center px-6 py-12">
        <div className="w-full">{children}</div>
      </div>
    </DefaultLayout>
  )
}
