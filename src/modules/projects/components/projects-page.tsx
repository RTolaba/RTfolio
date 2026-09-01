import { ArrowLink } from "@/components/ui";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "./project-card";
import { getProjects } from "../data";

export async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <SectionWrapper
      id="projects"
      className="pt-20 md:pt-24"
      title="Proyectos"
      description="Trabajos seleccionados y side projects."
    >
      <ArrowLink
        href="/#projects"
        direction="left"
        label="Volver a la landing"
        className="mb-6"
      />
      {projects.length === 0 ? (
        <p className="text-violet-200/60">Todavía no hay proyectos publicados.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
