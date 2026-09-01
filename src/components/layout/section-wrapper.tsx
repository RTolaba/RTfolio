import { cn } from "@/lib/cn";
import { ArrowDirection, ArrowLink } from "@/components/ui/arrow-link";

export type SectionWrapperProps = {
  id: string;
  title?: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  viewAllDirection?: ArrowDirection;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
};

export function SectionWrapper({
  id,
  title,
  description,
  viewAllHref,
  viewAllLabel = "Ver todo",
  viewAllDirection = "right",
  children,
  className,
  variant = "default",
}: SectionWrapperProps) {
  const isHero = variant === "hero";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-8 py-8 md:py-10",
        isHero && "pb-4 pt-20 md:pt-24",
        className,
      )}
    >
      {!isHero && (
        <div className="mx-auto mb-6 max-w-5xl px-6 pr-20 md:mb-8 md:pr-28">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/35 to-transparent" />
        </div>
      )}
      <div className="mx-auto w-full max-w-5xl px-6">
        {(title || description) && (
          <header
            className={cn(
              "mb-5 flex items-start justify-between gap-4 pr-20 md:pr-28",
              isHero && "mb-0",
            )}
          >
            <div className="min-w-0 max-w-2xl">
              {title && (
                <h2
                  className={cn(
                    "text-2xl font-semibold tracking-tight text-violet-50 md:text-3xl",
                    isHero && "sr-only",
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-2 text-violet-200/60">{description}</p>
              )}
            </div>
            {viewAllHref && (
              <ArrowLink
                href={viewAllHref}
                direction={viewAllDirection}
                label={viewAllLabel}
                className="mt-0.5"
              />
            )}
          </header>
        )}
        <div className="pr-20 md:pr-28">{children}</div>
      </div>
    </section>
  );
}
