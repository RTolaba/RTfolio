import Link from "next/link";
import { FloatingNav } from "./floating-nav";
import { LocaleSwitcher } from "./locale-switcher";

export function LandingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#0c0715]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl"
      />

      <div className="fixed left-6 top-6 z-50 flex items-center gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-violet-300 transition-colors hover:text-violet-100"
        >
          RTfolio
        </Link>
        <LocaleSwitcher />
      </div>

      <FloatingNav />
      <main className="flex-1">{children}</main>
    </div>
  );
}
