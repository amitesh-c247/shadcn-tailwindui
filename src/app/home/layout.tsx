import type { ReactNode } from "react"
import { DefaultLayout } from "@/components/Common"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>
}
