import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/modules/projects/components/project-card";
import { getProjects } from "@/modules/projects/data";

const PREVIEW_LIMIT = 3;

export async function ProjectsSection() {
  const projects = (await getProjects()).slice(0, PREVIEW_LIMIT);

  return (
    <SectionWrapper
      id="projects"
      title="Proyectos"
      description="Trabajos seleccionados y side projects."
      viewAllHref="/projects"
      viewAllLabel="Ver todos los proyectos"
    >
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
