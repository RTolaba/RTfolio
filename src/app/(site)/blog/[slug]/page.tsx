import { notFound, redirect } from "next/navigation";
import { features } from "@/config/features";
import { BlogPostPage, getPostBySlug } from "@/modules/blog";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  if (!features.blog) {
    return { title: "Not found" };
  }

  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({ params }: PageProps) {
  if (!features.blog) {
    redirect("/");
  }

  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return <BlogPostPage slug={slug} />;
}
