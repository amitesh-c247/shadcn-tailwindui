# Form Validation Guide

## 🎨 Enhanced Form Features

### Visual Feedback
- ✅ **Red border** on inputs with validation errors
- ✅ **Asterisk (*)** on required field labels
- ✅ **Error messages** displayed below fields
- ✅ **Smooth transitions** for better UX

## 🚀 Quick Usage

### Method 1: Using Enhanced Components

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          error={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>
    </form>
  );
}
```

### Method 2: Using FormField Wrapper

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "@/components/ui/form-field";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email"
        type="email"
        required
        error={errors.email?.message}
        {...register("email")}
      />
    </form>
  );
}
```

## 📝 Component Props

### Input Component

```tsx
interface InputProps {
  error?: boolean;  // Shows red border when true
  // ... all standard input props
}
```

### Label Component

```tsx
interface LabelProps {
  required?: boolean;  // Shows red asterisk when true
  // ... all standard label props
}
```

### FormField Component

```tsx
interface FormFieldProps {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  // ... all standard input props
}
```

## 🎯 Visual States

### Normal State
```tsx
<Input type="email" />
```
- Gray border (`border-input`)
- Blue focus ring

### Error State
```tsx
<Input type="email" error={true} />
```
- Red border (`border-destructive`)
- Red focus ring (`ring-destructive`)
- Error message displayed below

### Required Field
```tsx
<Label required>Email</Label>
```
- Red asterisk (*) after label text

## 🔥 Complete Form Example

```tsx
"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

export function EnhancedLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {/* Email Field */}
      <div className="grid gap-2">
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          error={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="grid gap-2">
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          error={!!errors.password}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
```

## 🎨 Styling Reference

### CSS Classes Used

- **Normal Input**: `border-input focus-visible:ring-ring`
- **Error Input**: `border-destructive focus-visible:ring-destructive/50`
- **Required Label**: `<span className="text-destructive ml-1">*</span>`
- **Error Message**: `text-sm text-destructive`
- **Helper Text**: `text-sm text-muted-foreground`

### Customizing Colors

You can customize the error colors in your `globals.css`:

```css
:root {
  --destructive: 0 84% 60%;  /* Red for errors */
  --destructive-foreground: 0 0% 100%;
}
```

## ✅ Best Practices

1. **Always show validation errors** below the field
2. **Mark required fields** with asterisk (*)
3. **Use error prop** to show red border on invalid inputs
4. **Provide clear error messages** in validation schemas
5. **Add placeholders** to guide users
6. **Disable submit** while form is submitting

## 🔍 Accessibility

All components are accessible:
- ✅ Proper `htmlFor` / `id` associations
- ✅ `role="alert"` on error messages
- ✅ Keyboard navigation supported
- ✅ Screen reader friendly
- ✅ Focus indicators visible

## 🐛 Troubleshooting

### Red border not showing?
Make sure you're passing `error={!!errors.fieldName}`

### Asterisk not appearing?
Check that `required` prop is set on Label component

### Error message not visible?
Verify error message exists: `{errors.fieldName && <p>...</p>}`
