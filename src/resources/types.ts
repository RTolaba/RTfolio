export type Locale = "es" | "en";

export type WhatIDoBlock = {
  title: string;
  description: string;
};

export type ExperienceContribution = {
  id: string;
  title: string;
  technologies: string;
  description: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  role: string;
  company?: string;
  period?: string;
  description: string;
  contributions?: ExperienceContribution[];
  technologies?: string;
  features?: string[];
  extraDescription?: string;
};

export type TechStackCategory = {
  id: string;
  title: string;
  items: string[];
};

export type Resources = {
  meta: {
    description: string;
  };
  nav: {
    home: string;
    experience: string;
    about: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    techLine: string;
    ctaExperience: string;
    ctaContact: string;
  };
  whatIDo: {
    title: string;
    description: string;
    mobile: WhatIDoBlock;
    fullStack: WhatIDoBlock;
    productEngineering: WhatIDoBlock;
  };
  experience: {
    title: string;
    description: string;
    contributionsTitle: string;
    items: ExperienceItem[];
  };
  about: {
    title: string;
    description: string;
    paragraphs: string[];
  };
  ai: {
    title: string;
    description: string;
  };
  techStack: {
    title: string;
    categories: TechStackCategory[];
  };
  contact: {
    title: string;
    description: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      validationError: string;
      disabled: string;
      rateLimited: string;
    };
  };
  locale: {
    switchToEn: string;
    switchToEs: string;
  };
};
