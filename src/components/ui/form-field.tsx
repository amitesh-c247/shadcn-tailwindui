import * as React from "react";
import { Label } from "./label";
import { Input, type InputProps } from "./input";

export interface FormFieldProps extends InputProps {
  label: string;
  error?: string;
  helperText?: string;
}

export function FormField({
  label,
  error,
  helperText,
  required,
  id,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="grid gap-2">
      <Label htmlFor={fieldId} required={required}>
        {label}
      </Label>
      <Input id={fieldId} error={!!error} {...inputProps} />
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
