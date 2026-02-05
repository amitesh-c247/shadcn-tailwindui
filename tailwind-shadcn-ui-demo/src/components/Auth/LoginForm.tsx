"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { login } from "@/services"

type LoginFormValues = {
  email: string
  password: string
}

type LoginFormProps = {
  defaultValues?: Partial<LoginFormValues>
  isLoading?: boolean
  onSubmit?: (values: LoginFormValues) => void
}

export function LoginForm({
  defaultValues,
  isLoading = false,
  onSubmit,
}: LoginFormProps) {
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const submitting = isLoading || isSubmitting

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const values: LoginFormValues = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    }

    if (onSubmit) {
      onSubmit(values)
      return
    }

    setIsSubmitting(true)
    setError(null)

    login(values)
      .then(() => {
        router.push(routes.dashboard)
        router.refresh()
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Something went wrong.")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="login-email">Email</Label>
        <Input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={defaultValues?.email}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="login-password">Password</Label>
        <Input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          defaultValue={defaultValues?.password}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Signing in..." : "Sign in"}
      </Button>
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  )
}
