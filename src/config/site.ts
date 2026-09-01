export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rubentolaba/",
  github: "https://github.com/RTolaba",
  email: "rubentolaba@hotmail.com",
} as const;

export const navLinks = [
  { href: "/#home", icon: "home" as const, sectionId: "home" },
  { href: "/#experience", icon: "experience" as const, sectionId: "experience" },
  { href: "/#about", icon: "about" as const, sectionId: "about" },
  { href: "/#contact", icon: "contact" as const, sectionId: "contact" },
] as const;
