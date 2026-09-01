import { AdminNav } from "@/modules/admin";

export default function AdminPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <AdminNav />
      <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
    </div>
  );
}
