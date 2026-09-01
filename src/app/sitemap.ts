import type { MetadataRoute } from "next";
import { features } from "@/config/features";
import { getPublishedPosts } from "@/modules/blog/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  if (!features.blog) {
    return staticRoutes;
  }

  const posts = await getPublishedPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...staticRoutes,
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...postRoutes,
  ];
}
