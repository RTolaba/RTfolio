import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

const variants = {
  primary:
    "bg-violet-600 text-white shadow-[0_0_28px_rgba(147,51,234,0.45)] hover:bg-violet-500 hover:shadow-[0_0_36px_rgba(147,51,234,0.55)]",
  secondary:
    "border border-violet-500/50 bg-transparent text-violet-200 hover:border-violet-400 hover:bg-violet-600/10 hover:text-violet-100",
  ghost: "bg-transparent text-violet-200 hover:bg-violet-600/10 hover:text-violet-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
} as const;

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
