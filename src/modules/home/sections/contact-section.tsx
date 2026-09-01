import { SectionWrapper } from "@/components/layout/section-wrapper";
import { features } from "@/config/features";
import { socialLinks } from "@/config/site";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";
import { ContactForm } from "@/modules/contact/components/contact-form";

export async function ContactSection() {
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
      title={t.contact.title}
      viewAllHref="/contact"
      viewAllLabel={t.contact.title}
    >
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
