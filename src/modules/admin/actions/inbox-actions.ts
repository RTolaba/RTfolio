"use server";

import dbConnect from "@/lib/db";
import ContactMessageModel from "@/lib/models/contact-message";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await auth();
  if (!session) {
    throw new Error("No autorizado");
  }
}

export async function getContactMessages() {
  await requireAuth();

  if (!process.env.MONGODB_URI) {
    return [];
  }

  await dbConnect();
  return ContactMessageModel.find().sort({ createdAt: -1 }).lean();
}

export async function markMessageRead(id: string) {
  await requireAuth();

  if (!process.env.MONGODB_URI) {
    return { success: false };
  }

  await dbConnect();
  await ContactMessageModel.findByIdAndUpdate(id, { read: true });
  revalidatePath("/admin/inbox");
  return { success: true };
}
