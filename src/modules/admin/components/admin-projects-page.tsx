import dbConnect from "@/lib/db";
import ProjectModel from "@/lib/models/project";
import { getProjects } from "@/modules/projects/data";
import { Button, Card, Input, Textarea } from "@/components/ui";
import { createProject, deleteProject } from "../actions/project-actions";

async function AdminProjectsList() {
  let projects = await getProjects();

  if (process.env.MONGODB_URI) {
    try {
      await dbConnect();
      const docs = await ProjectModel.find().sort({ order: 1 });
      if (docs.length > 0) {
        projects = docs.map((doc) => ({
          id: doc._id.toString(),
          title: doc.title,
          description: doc.description,
          stack: doc.stack,
          href: doc.href,
          featured: doc.featured,
        }));
      }
    } catch {
      // fallback
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-lg font-semibold">Nuevo proyecto</h2>
        <form action={createProject} className="mt-4 grid gap-4">
          <Input label="Título" name="title" required />
          <Textarea label="Descripción" name="description" required />
          <Input
            label="Stack (separado por comas)"
            name="stack"
            placeholder="Next.js, TypeScript, MongoDB"
            required
          />
          <Input label="URL" name="href" placeholder="https://..." />
          <Input label="Orden" name="order" type="number" defaultValue={0} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" />
            Destacado
          </label>
          <Button type="submit">Crear proyecto</Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Proyectos existentes</h2>
        {projects.map((project) => (
          <Card key={project.id} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">{project.title}</p>
              <p className="text-sm text-zinc-500">{project.stack.join(", ")}</p>
            </div>
            <form
              action={async () => {
                "use server";
                await deleteProject(project.id);
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

export async function AdminProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Proyectos</h1>
      <AdminProjectsList />
    </div>
  );
}
