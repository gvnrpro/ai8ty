import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "enhanced" | "premium"
  error?: boolean
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", error, success, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "enhanced":
          return "input-enhanced"
        case "premium":
          return "px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 min-h-[48px] focus:bg-white/10 focus:border-blue-400/50 focus:shadow-lg"
        default:
          return "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[48px]"
      }
    }

    const getStateClasses = () => {
      if (error) return "border-red-500 focus:ring-red-500 focus:border-red-500"
      if (success) return "border-green-500 focus:ring-green-500 focus:border-green-500"
      return ""
    }

    return (
      <input
        type={type}
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
Input.displayName = "Input"

export { Input }
