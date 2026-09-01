import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardDescription } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";

export async function AiSection() {
  const t = getResources(await getLocale());

  return (
    <SectionWrapper id="ai" title={t.ai.title}>
      <Card>
        <CardDescription className="mt-0 leading-relaxed">
          {t.ai.description}
        </CardDescription>
      </Card>
    </SectionWrapper>
  );
}
