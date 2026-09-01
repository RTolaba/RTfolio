import Link from "next/link";
import { cn } from "@/lib/cn";

export type ArrowDirection = "up" | "down" | "left" | "right";

export type ArrowLinkProps = {
  href: string;
  direction?: ArrowDirection;
  label: string;
  className?: string;
  withCircle?: boolean;
};

const directionRotation: Record<ArrowDirection, string> = {
  up: "-rotate-90",
  down: "rotate-90",
  left: "rotate-180",
  right: "rotate-0",
};

const directionHover: Record<ArrowDirection, string> = {
  up: "group-hover:-translate-y-0.5",
  down: "group-hover:translate-y-0.5",
  left: "group-hover:-translate-x-0.5",
  right: "group-hover:translate-x-0.5",
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12h12m0 0l-5-5m5 5l-5 5"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLink({
  href,
  direction = "right",
  label,
  className,
  withCircle = true,
}: ArrowLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <span
      className={cn(
        "inline-flex items-center justify-center transition-all",
        withCircle
          ? "h-11 w-11 rounded-full border-2 border-violet-500/35 bg-violet-600/10"
          : "h-11 w-11",
        "text-violet-300 group-hover:border-violet-400/55 group-hover:bg-violet-600/20 group-hover:text-violet-100 group-hover:shadow-[0_0_18px_rgba(147,51,234,0.28)]",
      )}
    >
      <ArrowIcon
        className={cn(
          "h-6 w-6",
          directionRotation[direction],
          directionHover[direction],
          "transition-transform",
        )}
      />
    </span>
  );

  const classes = cn(
    "group shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={classes}>
      {content}
    </Link>
  );
}
