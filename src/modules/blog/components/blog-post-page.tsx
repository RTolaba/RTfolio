import { notFound } from "next/navigation";
import { Section } from "@/components/ui";
import { getPostBySlug } from "../data";

export async function BlogPostPage({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <Section className="pt-16 md:pt-24">
      <article className="max-w-2xl">
        <p className="text-sm text-zinc-500">
          {new Date(post.publishedAt).toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          {post.title}
        </h1>
        <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
          {post.content.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Section>
  );
}
