# Form Validation Schemas

This directory contains all Yup validation schemas for forms throughout the application. These schemas work seamlessly with React Hook Form via `@hookform/resolvers/yup`.

## 📁 Structure

```
validations/
├── auth.ts          # Authentication-related forms
├── user.ts          # User profile and settings forms
├── assessment.ts    # Assessment and contact forms
├── index.ts         # Central export file
└── README.md        # This file
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      {/* ... */}
    </form>
  );
}
```

## 📋 Available Schemas

### Authentication Forms (`auth.ts`)

#### `loginSchema`
- **Fields**: email, password
- **Use case**: User login form
- **Type**: `LoginFormValues`

#### `signupSchema`
- **Fields**: name, email, password, confirmPassword
- **Use case**: User registration form
- **Type**: `SignupFormValues`
- **Validation**: Password strength, email format, password confirmation

#### `forgotPasswordSchema`
- **Fields**: email
- **Use case**: Forgot password form
- **Type**: `ForgotPasswordFormValues`

#### `resetPasswordSchema`
- **Fields**: password, confirmPassword
- **Use case**: Password reset form
- **Type**: `ResetPasswordFormValues`
- **Validation**: Password strength, password confirmation

#### `changePasswordSchema`
- **Fields**: currentPassword, newPassword, confirmNewPassword
- **Use case**: Change password form (in settings)
- **Type**: `ChangePasswordFormValues`
- **Validation**: New password different from current

### User Forms (`user.ts`)

#### `updateProfileSchema`
- **Fields**: name, email, phone (optional), bio (optional)
- **Use case**: User profile update
- **Type**: `UpdateProfileFormValues`

#### `userSettingsSchema`
- **Fields**: emailNotifications, pushNotifications, marketingEmails, language, timezone
- **Use case**: User preferences and settings
- **Type**: `UserSettingsFormValues`

### Assessment Forms (`assessment.ts`)

#### `riasecAssessmentSchema`
- **Fields**: studentName, age, grade, email (optional)
- **Use case**: Initial RIASEC assessment form
- **Type**: `RiasecAssessmentFormValues`
- **Validation**: Age range 12-22

#### `academicInfoSchema`
- **Fields**: gpa, testScores (sat, act), readingLevel, subjects
- **Use case**: Academic information collection
- **Type**: `AcademicInfoFormValues`

#### `characterStrengthSchema`
- **Fields**: currentStrengths, strengthsToDevelop
- **Use case**: Character strength selection
- **Type**: `CharacterStrengthFormValues`

#### `contactFormSchema`
- **Fields**: name, email, subject, message
- **Use case**: Contact/support form
- **Type**: `ContactFormValues`

## 🔒 Validation Rules

### Common Validations

- **Email**: Valid email format, trimmed, lowercase
- **Password**: 
  - Minimum 8 characters
  - Maximum 100 characters
  - Must contain: uppercase, lowercase, and number
- **Name**: 2-50 characters, trimmed
- **Required Fields**: Custom error messages for each field

### Password Strength Requirements

All password fields require:
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one number (0-9)
- Minimum length: 8 characters

## 💡 Best Practices

### 1. **Use TypeScript Types**
Always import and use the inferred types:

```tsx
import { loginSchema, type LoginFormValues } from "@/lib/validations";

const onSubmit = (data: LoginFormValues) => {
  // TypeScript knows the exact shape of data
};
```

### 2. **Handle Errors Gracefully**

```tsx
{errors.email && (
  <p className="text-sm text-destructive">
    {errors.email.message}
  </p>
)}
```

### 3. **Default Values**

```tsx
const form = useForm<LoginFormValues>({
  resolver: yupResolver(loginSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});
```

### 4. **Async Validation**
For server-side validation, wrap in try-catch:

```tsx
const onSubmit = async (data: LoginFormValues) => {
  try {
    await login(data);
    router.push("/dashboard");
  } catch (error) {
    setError(error.message);
  }
};
```

## 🛠 Extending Schemas

### Adding a New Validation

```typescript
// In src/lib/validations/auth.ts
export const twoFactorSchema = yup.object({
  code: yup
    .string()
    .required("Verification code is required")
    .length(6, "Code must be 6 digits")
    .matches(/^\d+$/, "Code must contain only numbers"),
});

export type TwoFactorFormValues = yup.InferType<typeof twoFactorSchema>;
```

### Conditional Validation

```typescript
export const conditionalSchema = yup.object({
  type: yup.string().required(),
  email: yup.string().when("type", {
    is: "email",
    then: (schema) => schema.required().email(),
    otherwise: (schema) => schema.notRequired(),
  }),
});
```

### Custom Validation

```typescript
export const customSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .test(
      "unique-username",
      "Username already exists",
      async (value) => {
        const exists = await checkUsername(value);
        return !exists;
      }
    ),
});
```

## 🧪 Testing Schemas

```typescript
import { loginSchema } from "@/lib/validations";

describe("loginSchema", () => {
  it("should validate correct data", async () => {
    const validData = {
      email: "test@example.com",
      password: "Password123",
    };
    
    await expect(loginSchema.validate(validData)).resolves.toBeDefined();
  });

  it("should reject invalid email", async () => {
    const invalidData = {
      email: "invalid-email",
      password: "Password123",
    };
    
    await expect(loginSchema.validate(invalidData)).rejects.toThrow();
  });
});
```

## 📚 Resources

- [Yup Documentation](https://github.com/jquense/yup)
- [React Hook Form](https://react-hook-form.com/)
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)

## 🤝 Contributing

When adding new schemas:
1. Keep them organized by feature/domain
2. Export both schema and TypeScript type
3. Add comprehensive validation rules
4. Update this README with usage examples
5. Write tests for complex validations
