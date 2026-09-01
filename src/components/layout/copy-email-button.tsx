"use client";

import { useState } from "react";
import { socialLinks } from "@/config/site";
import { cn } from "@/lib/cn";

const buttonClass =
  "flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/25 bg-[#1a1028]/80 text-violet-200/80 transition-all hover:border-violet-400/50 hover:bg-violet-600/15 hover:text-violet-100 hover:shadow-[0_0_18px_rgba(147,51,234,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60";

export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silencioso
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copiado" : "Copiar email"}
      title={copied ? "¡Copiado!" : socialLinks.email}
      className={cn(buttonClass, className)}
    >
      <span className="text-sm font-bold leading-none">{copied ? "✓" : "@"}</span>
    </button>
  );
}
