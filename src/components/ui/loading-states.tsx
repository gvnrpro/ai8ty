import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "enhanced" | "text" | "avatar" | "card"
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "enhanced":
          return "skeleton-enhanced"
        case "text":
          return "h-4 w-full rounded skeleton-enhanced"
        case "avatar":
          return "h-12 w-12 rounded-full skeleton-enhanced"
        case "card":
          return "h-48 w-full rounded-lg skeleton-enhanced"
        default:
          return "animate-pulse rounded-md bg-muted"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(getVariantClasses(), className)}
        aria-label="Loading..."
        role="status"
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "enhanced"
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "h-4 w-4"
        case "lg":
          return "h-8 w-8"
        default:
          return "h-6 w-6"
      }
    }

    const getVariantClasses = () => {
      switch (variant) {
        case "enhanced":
          return "loading-spinner"
        default:
          return "animate-spin rounded-full border-2 border-muted border-t-foreground"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          getSizeClasses(),
          getVariantClasses(),
          className
        )}
        aria-label="Loading..."
        role="status"
        {...props}
      />
    )
  }
)
LoadingSpinner.displayName = "LoadingSpinner"

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingText?: string
  children: React.ReactNode
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ isLoading, loadingText, children, disabled, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          className
        )}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <LoadingSpinner size="sm" className="mr-2" />
        )}
        {isLoading && loadingText ? loadingText : children}
      </button>
    )
  }
)
LoadingButton.displayName = "LoadingButton"

export { Skeleton, LoadingSpinner, LoadingButton }