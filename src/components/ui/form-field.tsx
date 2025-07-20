import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  children: React.ReactNode
  label?: string
  error?: string
  success?: string
  required?: boolean
  className?: string
  variant?: "default" | "enhanced" | "premium"
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ children, label, error, success, required, className, variant = "default", ...props }, ref) => {
    const getLabelClasses = () => {
      switch (variant) {
        case "enhanced":
        case "premium":
          return "label-enhanced"
        default:
          return "block text-sm font-medium text-foreground mb-2"
      }
    }

    const getErrorClasses = () => {
      switch (variant) {
        case "enhanced":
        case "premium":
          return "form-error"
        default:
          return "text-red-500 text-sm mt-1"
      }
    }

    const getSuccessClasses = () => {
      switch (variant) {
        case "enhanced":
        case "premium":
          return "form-success"
        default:
          return "text-green-500 text-sm mt-1"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "space-y-2",
          variant === "enhanced" && "form-enhanced",
          className
        )}
        {...props}
      >
        {label && (
          <label className={getLabelClasses()}>
            {label}
            {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        {children}
        {error && (
          <p className={getErrorClasses()} role="alert" aria-live="polite">
            {error}
          </p>
        )}
        {success && (
          <p className={getSuccessClasses()} role="status" aria-live="polite">
            {success}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }