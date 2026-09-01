import dbConnect from "@/lib/db";
import PostModel from "@/lib/models/post";
import { getAllPosts } from "@/modules/blog/data";
import { Button, Card, Input, Textarea } from "@/components/ui";
import { createPost, deletePost } from "../actions/post-actions";

async function AdminPostsList() {
  let posts = await getAllPosts();

  if (process.env.MONGODB_URI) {
    try {
      await dbConnect();
      const docs = await PostModel.find().sort({ createdAt: -1 });
      if (docs.length > 0) {
        posts = docs.map((doc) => ({
          id: doc._id.toString(),
          title: doc.title,
          slug: doc.slug,
          excerpt: doc.excerpt,
          content: doc.content,
          status: doc.status,
          publishedAt: (doc.publishedAt ?? doc.createdAt).toISOString(),
        }));
      }
    } catch {
      // fallback to getAllPosts mock data
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-lg font-semibold">Nuevo post</h2>
        <form action={createPost} className="mt-4 grid gap-4">
          <Input label="Título" name="title" required />
          <Input label="Slug" name="slug" required placeholder="mi-post" />
          <Input label="Extracto" name="excerpt" required />
          <Textarea label="Contenido" name="content" required />
          <div>
            <label className="text-sm font-medium">Estado</label>
            <select
              name="status"
              className="mt-1 block h-10 w-full rounded-lg border border-zinc-300 px-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
              defaultValue="draft"
            >
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
            </select>
          </div>
          <Button type="submit">Crear post</Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Posts existentes</h2>
        {posts.map((post) => (
          <Card key={post.id} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-sm text-zinc-500">
                /blog/{post.slug} · {post.status}
              </p>
            </div>
            <form
              action={async () => {
                "use server";
                await deletePost(post.id);
              }}
            >
              <Button type="submit" variant="danger" size="sm">
                Eliminar
              </Button>
            </form>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function AdminPostsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Posts</h1>
      <AdminPostsList />
    </div>
  );
}
