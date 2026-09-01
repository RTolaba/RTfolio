import { auth } from "@/auth";
import { AdminNav } from "@/modules/admin";
import { redirect } from "next/navigation";

export default async function AdminPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <AdminNav />
      <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
    </div>
  );
}
