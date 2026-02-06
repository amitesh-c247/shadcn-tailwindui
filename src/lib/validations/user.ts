import * as yup from "yup";

/**
 * User Profile Update Validation Schema
 */
export const updateProfileSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .trim()
    .lowercase(),
  phone: yup
    .string()
    .nullable()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Please enter a valid phone number"
    )
    .transform((value) => value || null),
  bio: yup
    .string()
    .nullable()
    .max(500, "Bio must not exceed 500 characters")
    .transform((value) => value || null),
});

export type UpdateProfileFormValues = yup.InferType<typeof updateProfileSchema>;

/**
 * User Settings Validation Schema
 */
export const userSettingsSchema = yup.object({
  emailNotifications: yup.boolean().default(true),
  pushNotifications: yup.boolean().default(false),
  marketingEmails: yup.boolean().default(false),
  language: yup.string().oneOf(["en", "es", "fr", "de"]).default("en"),
  timezone: yup.string().default("UTC"),
});

export type UserSettingsFormValues = yup.InferType<typeof userSettingsSchema>;
