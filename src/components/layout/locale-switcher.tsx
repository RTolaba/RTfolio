"use client";

import { setLocale } from "@/lib/actions/set-locale";
import { useResources } from "@/components/providers/resources-provider";
import { cn } from "@/lib/cn";
import type { Locale } from "@/resources";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, t } = useResources();

  async function handleSwitch(next: Locale) {
    if (next === locale) return;
    await setLocale(next);
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-violet-500/25 bg-[#1a1028]/80 p-1 text-xs font-medium",
        className,
      )}
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSwitch(code)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === code
              ? "bg-violet-600/30 text-violet-100"
              : "text-violet-300/70 hover:text-violet-100",
          )}
          aria-label={code === "es" ? t.locale.switchToEs : t.locale.switchToEn}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
