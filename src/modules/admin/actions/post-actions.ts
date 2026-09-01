"use server";

import dbConnect from "@/lib/db";
import PostModel from "@/lib/models/post";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  status: z.enum(["draft", "published"]),
});

async function requireAuth() {
  const session = await auth();
  if (!session) {
    throw new Error("No autorizado");
  }
}

export async function createPost(formData: FormData): Promise<void> {
  await requireAuth();

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    return;
  }

  await dbConnect();
  await PostModel.create({
    ...parsed.data,
    publishedAt: parsed.data.status === "published" ? new Date() : undefined,
  });

  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}

export async function deletePost(id: string): Promise<void> {
  await requireAuth();
  if (!process.env.MONGODB_URI) return;
  await dbConnect();
  await PostModel.findByIdAndDelete(id);
  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}

export async function updatePost(id: string, formData: FormData): Promise<void> {
  await requireAuth();

  const parsed = postSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    return;
  }

  await dbConnect();
  await PostModel.findByIdAndUpdate(id, {
    ...parsed.data,
    publishedAt: parsed.data.status === "published" ? new Date() : undefined,
  });

  revalidatePath("/blog");
  revalidatePath("/admin/posts");
}
