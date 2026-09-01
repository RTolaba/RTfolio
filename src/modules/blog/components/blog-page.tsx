import { ArrowLink, Card, CardDescription, CardTitle } from "@/components/ui";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import Link from "next/link";
import { getPublishedPosts } from "../data";

export async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <SectionWrapper
      id="posts"
      className="pt-20 md:pt-24"
      title="Blog"
      description="Notas sobre desarrollo, arquitectura y proyectos."
    >
      <ArrowLink
        href="/#posts"
        direction="left"
        label="Volver a la landing"
        className="mb-6"
      />
      {posts.length === 0 ? (
        <p className="text-violet-200/60">No hay posts publicados todavía.</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="transition-colors hover:border-violet-400/50">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
                <p className="mt-3 text-xs text-violet-400/60">
                  {new Date(post.publishedAt).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
