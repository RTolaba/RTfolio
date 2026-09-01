import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-violet-500/25 bg-[#1a1028]/60 p-6 shadow-[0_0_30px_rgba(147,51,234,0.08)] backdrop-blur-sm transition-all hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-violet-50", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-1 text-sm text-violet-200/60", className)}
      {...props}
    />
  );
}
