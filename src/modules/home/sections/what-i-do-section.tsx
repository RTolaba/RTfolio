import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";
import { CardGraphic } from "./card-graphic";

export async function WhatIDoSection() {
  const t = getResources(await getLocale());

  const blocks = [
    { ...t.whatIDo.mobile, graphic: "mobile" as const },
    { ...t.whatIDo.fullStack, graphic: "backend" as const },
    { ...t.whatIDo.productEngineering, graphic: "product" as const },
  ];

  return (
    <SectionWrapper
      id="skills"
      title={t.whatIDo.title}
      description={t.whatIDo.description}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map((item) => (
          <Card key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardGraphic type={item.graphic} />
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
