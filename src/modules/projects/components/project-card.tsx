import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <CardTitle>{project.title}</CardTitle>
      <CardDescription className="flex-1">{project.description}</CardDescription>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-violet-600/15 px-2 py-0.5 text-xs font-medium text-violet-200"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.href && (
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm font-medium text-violet-300 underline-offset-4 hover:text-violet-100 hover:underline"
        >
          Ver proyecto →
        </Link>
      )}
    </Card>
  );
}
