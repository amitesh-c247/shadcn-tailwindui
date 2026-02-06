"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "@/lib/validations"

type ForgotPasswordFormProps = {
  defaultValues?: Partial<ForgotPasswordFormValues>
  isLoading?: boolean
  onSubmit?: (values: ForgotPasswordFormValues) => void
}

export function ForgotPasswordForm({
  defaultValues,
  isLoading = false,
  onSubmit,
}: ForgotPasswordFormProps) {
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues,
  })

  const submitting = isLoading || isSubmitting

  const onFormSubmit = async (values: ForgotPasswordFormValues) => {
    setError(null)
    setSuccess(false)

    try {
      if (onSubmit) {
        await onSubmit(values)
      }
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  if (success) {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-lg bg-primary/10 p-4">
          <h3 className="font-semibold text-foreground mb-2">Check your email</h3>
          <p className="text-sm text-muted-foreground">
            We've sent password reset instructions to your email address.
          </p>
        </div>
        <Link href={routes.login}>
          <Button variant="outline" className="w-full">
            Back to Login
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-4">
      <div className="space-y-2 text-center mb-4">
        <h1 className="text-2xl font-bold">Forgot Password?</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="forgot-email" required>
          Email
        </Label>
        <Input
          id="forgot-email"
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

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Reset Link"}
      </Button>

      {error && (
        <p className="text-sm text-destructive text-center" role="alert">
          {error}
        </p>
      )}

      <div className="text-center text-sm">
        <Link href={routes.login} className="text-primary hover:underline">
          Back to Login
        </Link>
      </div>
    </form>
  )
}
