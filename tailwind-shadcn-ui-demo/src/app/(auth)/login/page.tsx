import Link from "next/link"

import { LoginForm } from "@/components/Auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { routes } from "@/routes"

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to continue to your dashboard.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <LoginForm />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">New here?</span>
          <Button variant="link" asChild className="px-0">
            <Link href={routes.signup}>Create an account</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
