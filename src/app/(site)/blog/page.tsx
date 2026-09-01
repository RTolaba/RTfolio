import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { features } from "@/config/features";
import { BlogPage } from "@/modules/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas sobre desarrollo, arquitectura y proyectos.",
};

export default function Page() {
  if (!features.blog) {
    redirect("/");
  }

  return <BlogPage />;
}
