"use server";

import dbConnect from "@/lib/db";
import ProjectModel from "@/lib/models/project";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  stack: z.string().min(1),
  href: z.string().optional(),
  featured: z.coerce.boolean(),
  order: z.coerce.number().default(0),
});

async function requireAuth() {
  const session = await auth();
  if (!session) {
    throw new Error("No autorizado");
  }
}

export async function createProject(formData: FormData): Promise<void> {
  await requireAuth();

  const parsed = projectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    stack: formData.get("stack"),
    href: formData.get("href") || undefined,
    featured: formData.get("featured") === "on",
    order: formData.get("order") || 0,
  });

  if (!parsed.success) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    return;
  }

  await dbConnect();
  await ProjectModel.create({
    ...parsed.data,
    stack: parsed.data.stack.split(",").map((s) => s.trim()).filter(Boolean),
  });

  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function deleteProject(id: string): Promise<void> {
  await requireAuth();
  if (!process.env.MONGODB_URI) return;
  await dbConnect();
  await ProjectModel.findByIdAndDelete(id);
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}
