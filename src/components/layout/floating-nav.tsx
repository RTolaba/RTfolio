"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useResources } from "@/components/providers/resources-provider";
import { navLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/cn";
import { CopyEmailButton } from "./copy-email-button";
import { IconGitHub, IconLinkedIn, navIcons } from "./icons";

const socialButtonClass =
  "flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/25 bg-[#1a1028]/80 text-violet-200/80 transition-all hover:border-violet-400/50 hover:bg-violet-600/15 hover:text-violet-100 hover:shadow-[0_0_18px_rgba(147,51,234,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60";

const navLabelKeys = {
  home: "home",
  experience: "experience",
  about: "about",
  contact: "contact",
} as const;

function NavIconButton({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: keyof typeof navIcons;
  active?: boolean;
}) {
  const Icon = navIcons[icon];

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
        active
          ? "border-violet-400/70 bg-violet-600/25 text-violet-100 shadow-[0_0_24px_rgba(147,51,234,0.45)]"
          : "border-violet-500/25 bg-[#1a1028]/80 text-violet-200/80 hover:border-violet-400/50 hover:bg-violet-600/15 hover:text-violet-100 hover:shadow-[0_0_18px_rgba(147,51,234,0.3)]",
      )}
      aria-label={label}
      aria-current={active ? "true" : undefined}
    >
      <Icon />
      <span className="sr-only">{label}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute right-full mr-3 hidden rounded-lg border border-violet-500/30 bg-[#1a1028]/95 px-2.5 py-1 text-xs font-medium text-violet-100 opacity-0 transition-opacity group-hover:opacity-100 md:block"
      >
        {label}
      </span>
    </Link>
  );
}

export function FloatingNav() {
  const { t } = useResources();
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  function isActive(sectionId: string) {
    if (pathname !== "/") return false;
    const current = hash.replace("#", "") || "home";
    return current === sectionId;
  }

  return (
    <>
      <nav
        aria-label="Redes sociales"
        className="fixed right-6 top-6 z-50 flex flex-row gap-2.5"
      >
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={socialButtonClass}
        >
          <IconLinkedIn />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={socialButtonClass}
        >
          <IconGitHub />
        </a>
        <CopyEmailButton />
      </nav>

      <nav
        aria-label="Navegación principal"
        className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3"
      >
        {navLinks.map((link) => (
          <NavIconButton
            key={link.href}
            href={link.href}
            label={t.nav[navLabelKeys[link.sectionId]]}
            icon={link.icon}
            active={isActive(link.sectionId)}
          />
        ))}
      </nav>
    </>
  );
}
