"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { login } from "@/services"
import { loginSchema, type LoginFormValues } from "@/lib/validations"

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  })

  const submitting = isLoading || isSubmitting

  const onFormSubmit = async (values: LoginFormValues) => {
    if (onSubmit) {
      onSubmit(values)
      return
    }

    setError(null)

    try {
      await login(values)
      router.push(routes.dashboard)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="login-email" required>
          Emailss
        </Label>
        <Input
          id="login-email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          error={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="login-password" required>
          Password
        </Label>
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          error={!!errors.password}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Signing in..." : "Sign in"}
      </Button>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
