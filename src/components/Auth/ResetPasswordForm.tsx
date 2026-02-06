"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/routes"
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/lib/validations"

type ResetPasswordFormProps = {
  defaultValues?: Partial<ResetPasswordFormValues>
  isLoading?: boolean
  onSubmit?: (values: ResetPasswordFormValues & { token: string }) => void
}

export function ResetPasswordForm({
  defaultValues,
  isLoading = false,
  onSubmit,
}: ResetPasswordFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState(false)

  const token = searchParams.get("token")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues,
  })

  const submitting = isLoading || isSubmitting

  React.useEffect(() => {
    if (!token) {
      setError("Invalid or missing reset token.")
    }
  }, [token])

  const onFormSubmit = async (values: ResetPasswordFormValues) => {
    if (!token) {
      setError("Invalid or missing reset token.")
      return
    }

    setError(null)

    try {
      if (onSubmit) {
        await onSubmit({ ...values, token })
      }
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess(true)
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push(routes.login)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  if (success) {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-lg bg-primary/10 p-4">
          <h3 className="font-semibold text-foreground mb-2">Password Reset Successful!</h3>
          <p className="text-sm text-muted-foreground">
            Your password has been reset. Redirecting to login...
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-4">
      <div className="space-y-2 text-center mb-4">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-sm text-muted-foreground">
          Enter your new password below.
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="reset-password" required>
          New Password
        </Label>
        <Input
          id="reset-password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={!!errors.password}
          {...register("password")}
          disabled={!token || submitting}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="reset-confirm-password" required>
          Confirm Password
        </Label>
        <Input
          id="reset-confirm-password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={!!errors.confirmPassword}
          {...register("confirmPassword")}
          disabled={!token || submitting}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={!token || submitting}>
        {submitting ? "Resetting..." : "Reset Password"}
      </Button>

      {error && (
        <p className="text-sm text-destructive text-center" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
