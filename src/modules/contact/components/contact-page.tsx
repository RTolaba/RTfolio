import { ArrowLink } from "@/components/ui";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { features } from "@/config/features";
import { socialLinks } from "@/config/site";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";
import { ContactForm } from "./contact-form";

export async function ContactPage() {
  const t = getResources(await getLocale());

  const links = [
    { label: t.contact.emailLabel, href: `mailto:${socialLinks.email}`, text: socialLinks.email },
    {
      label: t.contact.linkedinLabel,
      href: socialLinks.linkedin,
      text: "linkedin.com/in/rubentolaba",
      external: true,
    },
    { label: t.contact.githubLabel, href: socialLinks.github, text: "RTolaba", external: true },
  ] as const;

  return (
    <SectionWrapper
      id="contact"
      className="pt-20 md:pt-24"
      title={t.contact.title}
      description={t.contact.description}
    >
      <ArrowLink
        href="/#contact"
        direction="left"
        label={t.nav.home}
        className="mb-6"
      />
      <div className="max-w-4xl space-y-6">
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {links.map((link) => (
            <div key={link.label}>
              <p className="font-medium text-violet-300">{link.label}</p>
              <a
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                className="text-violet-200/80 transition-colors hover:text-violet-100"
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
        <ContactForm className="w-full" enabled={features.contactForm} />
      </div>
    </SectionWrapper>
  );
}
