import Link from "next/link";
import { signOut } from "@/auth";
import { Button } from "@/components/ui";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/projects", label: "Proyectos" },
  { href: "/admin/inbox", label: "Inbox" },
];

export function AdminNav() {
  return (
    <header className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="font-semibold">
            RTfolio Admin
          </Link>
          <nav className="hidden gap-2 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button type="submit" variant="secondary" size="sm">
            Salir
          </Button>
        </form>
      </div>
    </header>
  );
}
