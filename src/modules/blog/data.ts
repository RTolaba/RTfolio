import dbConnect from "@/lib/db";
import PostModel from "@/lib/models/post";
import type { BlogPost } from "./types";

function mapDoc(doc: {
  _id: { toString(): string };
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  publishedAt?: Date;
  createdAt: Date;
}): BlogPost {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content,
    status: doc.status,
    publishedAt: (doc.publishedAt ?? doc.createdAt).toISOString(),
  };
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!process.env.MONGODB_URI) {
    return [];
  }

  try {
    await dbConnect();
    const docs = await PostModel.find({ status: "published" }).sort({
      publishedAt: -1,
    });
    return docs.map(mapDoc);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!process.env.MONGODB_URI) {
    return [];
  }

  try {
    await dbConnect();
    const docs = await PostModel.find().sort({ createdAt: -1 });
    return docs.map(mapDoc);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!process.env.MONGODB_URI) {
    return null;
  }

  try {
    await dbConnect();
    const doc = await PostModel.findOne({ slug });
    if (!doc) return null;
    return mapDoc(doc);
  } catch {
    return null;
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.id === id) ?? null;
}
