import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";
import { ContributionAccordion } from "./contribution-accordion";

export async function ExperienceSection() {
  const t = getResources(await getLocale());

  return (
    <SectionWrapper
      id="experience"
      title={t.experience.title}
      description={t.experience.description}
    >
      <div className="space-y-6">
        {t.experience.items.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <CardTitle>{item.title}</CardTitle>
              {item.period ? (
                <span className="text-sm text-violet-400/70">{item.period}</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm font-medium text-violet-300">
              {item.role}
            </p>
            {item.company ? (
              <p className="mt-1 text-sm text-violet-400/70">{item.company}</p>
            ) : null}
            {item.technologies ? (
              <p className="mt-3 text-xs text-violet-400/60">{item.technologies}</p>
            ) : null}
            <CardDescription className="mt-4 leading-relaxed">
              {item.description}
            </CardDescription>

            {item.contributions?.length ? (
              <ContributionAccordion
                title={t.experience.contributionsTitle}
                items={item.contributions}
              />
            ) : null}

            {item.features?.length ? (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-violet-200/70"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            ) : null}

            {item.extraDescription ? (
              <CardDescription className="mt-4 leading-relaxed">
                {item.extraDescription}
              </CardDescription>
            ) : null}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
