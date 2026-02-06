"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { signup } from "@/services"
import { signupSchema, type SignupFormValues } from "@/lib/validations"

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
    defaultValues,
  })

  const submitting = isLoading || isSubmitting

  const onFormSubmit = async (values: SignupFormValues) => {
    if (onSubmit) {
      onSubmit(values)
      return
    }

    setError(null)

    try {
      await signup(values)
      router.push(routes.dashboard)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="signup-name" required>
          Name
        </Label>
        <Input
          id="signup-name"
          placeholder="John Doe"
          autoComplete="name"
          error={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="signup-email" required>
          Email
        </Label>
        <Input
          id="signup-email"
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
        <Label htmlFor="signup-password" required>
          Password
        </Label>
        <Input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={!!errors.password}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="signup-confirm-password" required>
          Confirm Password
        </Label>
        <Input
          id="signup-confirm-password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Creating account..." : "Create account"}
      </Button>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
