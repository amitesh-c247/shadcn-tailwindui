"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { signup } from "@/services"

type SignupFormValues = {
  name: string
  email: string
  password: string
}

type SignupFormProps = {
  defaultValues?: Partial<SignupFormValues>
  isLoading?: boolean
  onSubmit?: (values: SignupFormValues) => void
}

export function SignupForm({
  defaultValues,
  isLoading = false,
  onSubmit,
}: SignupFormProps) {
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const submitting = isLoading || isSubmitting

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const values: SignupFormValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    }

    if (onSubmit) {
      onSubmit(values)
      return
    }

    setIsSubmitting(true)
    setError(null)

    signup(values)
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
        <Label htmlFor="signup-name">Name</Label>
        <Input
          id="signup-name"
          name="name"
          autoComplete="name"
          defaultValue={defaultValues?.name}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={defaultValues?.email}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input
          id="signup-password"
          name="password"
          type="password"
          autoComplete="new-password"
          defaultValue={defaultValues?.password}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Creating account..." : "Create account"}
      </Button>
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  )
}
