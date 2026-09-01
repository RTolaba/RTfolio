import dbConnect from "@/lib/db";
import ProjectModel from "@/lib/models/project";
import { MOCK_PROJECTS, type Project } from "./types";

function mapDoc(doc: {
  _id: { toString(): string };
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured: boolean;
}): Project {
  return {
    id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
    stack: doc.stack,
    href: doc.href,
    featured: doc.featured,
  };
}

export async function getProjects(featuredOnly = false): Promise<Project[]> {
  if (!process.env.MONGODB_URI) {
    return featuredOnly
      ? MOCK_PROJECTS.filter((p) => p.featured)
      : MOCK_PROJECTS;
  }

  try {
    await dbConnect();
    const filter = featuredOnly ? { featured: true } : {};
    const docs = await ProjectModel.find(filter).sort({ order: 1, createdAt: -1 });
    if (docs.length === 0) {
      return featuredOnly
        ? MOCK_PROJECTS.filter((p) => p.featured)
        : MOCK_PROJECTS;
    }
    return docs.map(mapDoc);
  } catch {
    return featuredOnly
      ? MOCK_PROJECTS.filter((p) => p.featured)
      : MOCK_PROJECTS;
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.id === id) ?? null;
}
