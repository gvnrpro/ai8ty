import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "enhanced" | "premium"
  error?: boolean
  success?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", error, success, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "enhanced":
          return "textarea-enhanced"
        case "premium":
          return "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 min-h-[120px] resize-none focus:bg-white/10 focus:border-blue-400/50 focus:shadow-lg"
        default:
          return "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      }
    }

    const getStateClasses = () => {
      if (error) return "border-red-500 focus:ring-red-500 focus:border-red-500"
      if (success) return "border-green-500 focus:ring-green-500 focus:border-green-500"
      return ""
    }

    return (
      <textarea
        className={cn(
          getVariantClasses(),
          getStateClasses(),
          className
        )}
        ref={ref}
        aria-invalid={error ? "true" : undefined}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }