import Link from "next/link";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";

export async function HeroSection() {
  const t = getResources(await getLocale());

  return (
    <SectionWrapper id="home" variant="hero">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-violet-400 md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-3 text-lg font-medium text-violet-100 md:text-xl">
          {t.hero.subtitle}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-violet-200/70">
          {t.hero.description}
        </p>
        <p className="mt-4 text-sm font-medium text-violet-400/80">
          {t.hero.techLine}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#experience">
            <Button>{t.hero.ctaExperience}</Button>
          </Link>
          <Link href="#contact">
            <Button variant="secondary">{t.hero.ctaContact}</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
