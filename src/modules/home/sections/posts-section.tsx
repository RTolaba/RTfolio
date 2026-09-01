import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { getPublishedPosts } from "@/modules/blog/data";

const PREVIEW_LIMIT = 3;

export async function PostsSection() {
  const posts = (await getPublishedPosts()).slice(0, PREVIEW_LIMIT);

  return (
    <SectionWrapper
      id="posts"
      title="Blog"
      description="Notas sobre desarrollo, arquitectura y proyectos."
      viewAllHref="/blog"
      viewAllLabel="Ver todos los posts"
    >
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
