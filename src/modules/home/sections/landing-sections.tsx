import { AboutSection } from "./about-section";
import { AiSection } from "./ai-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { TechStackSection } from "./tech-stack-section";
import { WhatIDoSection } from "./what-i-do-section";

export const landingSectionIds = [
  "home",
  "skills",
  "experience",
  "about",
  "ai",
  "tech-stack",
  "contact",
] as const;

export type LandingSectionId = (typeof landingSectionIds)[number];

export async function LandingSections() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <ExperienceSection />
      <AboutSection />
      <AiSection />
      {/* <TechStackSection /> */}  
      <ContactSection />
    </>
  );
}

export {
  AboutSection,
  AiSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  TechStackSection,
  WhatIDoSection,
};
