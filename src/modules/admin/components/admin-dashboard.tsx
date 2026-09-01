import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui";

export function AdminDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          title: "Posts",
          description: "Crear y editar entradas del blog.",
          href: "/admin/posts",
        },
        {
          title: "Proyectos",
          description: "Gestionar el portfolio visible.",
          href: "/admin/projects",
        },
        {
          title: "Inbox",
          description: "Mensajes del formulario de contacto.",
          href: "/admin/inbox",
        },
      ].map((item) => (
        <Link key={item.href} href={item.href}>
          <Card className="h-full transition-colors hover:border-zinc-400">
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
}
