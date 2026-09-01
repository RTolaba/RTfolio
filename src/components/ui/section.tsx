import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
}

export function Section({
  className,
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)} {...props}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {(title || description) && (
          <header className="mb-8 max-w-2xl">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-violet-50 md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-2 text-violet-200/60">{description}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
