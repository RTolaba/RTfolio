import { SectionWrapper } from "@/components/layout/section-wrapper";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";

export async function TechStackSection() {
  const t = getResources(await getLocale());

  return (
    <SectionWrapper id="tech-stack" title={t.techStack.title}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.techStack.categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400">
              {category.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-500/30 bg-violet-600/10 px-3 py-1 text-sm text-violet-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
