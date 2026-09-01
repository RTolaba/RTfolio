import { SectionWrapper } from "@/components/layout/section-wrapper";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";

export async function AboutSection() {
  const t = getResources(await getLocale());

  return (
    <SectionWrapper
      id="about"
      title={t.about.title}
      description={t.about.description}
      viewAllHref="/about"
      viewAllLabel={t.about.title}
    >
      <div className="max-w-2xl space-y-4">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="leading-relaxed text-violet-200/70">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
