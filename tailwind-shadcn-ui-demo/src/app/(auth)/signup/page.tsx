import Link from "next/link"

import { SignupForm } from "@/components/Auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { routes } from "@/routes"

export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>Start building your workspace today.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <SignupForm />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Already have an account?</span>
          <Button variant="link" asChild className="px-0">
            <Link href={routes.login}>Sign in</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
