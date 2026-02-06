import * as yup from "yup";

/**
 * RIASEC Assessment Validation Schema
 */
export const riasecAssessmentSchema = yup.object({
  studentName: yup
    .string()
    .required("Student name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  age: yup
    .number()
    .required("Age is required")
    .min(12, "Student must be at least 12 years old")
    .max(22, "Student must be 22 years old or younger")
    .integer("Age must be a whole number"),
  grade: yup
    .string()
    .required("Grade level is required")
    .oneOf(
      ["6", "7", "8", "9", "10", "11", "12", "college"],
      "Please select a valid grade level"
    ),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .nullable()
    .transform((value) => value || null),
});

export type RiasecAssessmentFormValues = yup.InferType<typeof riasecAssessmentSchema>;

/**
 * Academic Information Validation Schema
 */
export const academicInfoSchema = yup.object({
  gpa: yup
    .number()
    .required("GPA is required")
    .min(0, "GPA must be at least 0.0")
    .max(4, "GPA must not exceed 4.0"),
  testScores: yup.object({
    sat: yup
      .number()
      .nullable()
      .min(400, "SAT score must be at least 400")
      .max(1600, "SAT score must not exceed 1600")
      .transform((value) => (isNaN(value) ? null : value)),
    act: yup
      .number()
      .nullable()
      .min(1, "ACT score must be at least 1")
      .max(36, "ACT score must not exceed 36")
      .transform((value) => (isNaN(value) ? null : value)),
  }),
  readingLevel: yup
    .string()
    .required("Reading level is required")
    .oneOf(
      ["below-grade", "at-grade", "above-grade"],
      "Please select a valid reading level"
    ),
  subjects: yup
    .array()
    .of(yup.string())
    .min(1, "Please select at least one favorite subject")
    .required("Favorite subjects are required"),
});

export type AcademicInfoFormValues = yup.InferType<typeof academicInfoSchema>;

/**
 * Character Strength Selection Validation Schema
 */
export const characterStrengthSchema = yup.object({
  currentStrengths: yup
    .array()
    .of(yup.string())
    .min(3, "Please select at least 3 current strengths")
    .max(10, "Please select no more than 10 strengths")
    .required("Current strengths are required"),
  strengthsToDevelop: yup
    .array()
    .of(yup.string())
    .min(2, "Please select at least 2 strengths to develop")
    .max(5, "Please select no more than 5 strengths")
    .required("Strengths to develop are required"),
});

export type CharacterStrengthFormValues = yup.InferType<typeof characterStrengthSchema>;

/**
 * Contact Form Validation Schema
 */
export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .trim()
    .lowercase(),
  subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters")
    .trim(),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
    .trim(),
});

export type ContactFormValues = yup.InferType<typeof contactFormSchema>;
