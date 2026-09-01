import type { Metadata } from "next";
import { AboutPage } from "@/modules/about";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre mí, stack y enfoque de trabajo.",
};

export default function Page() {
  return <AboutPage />;
}
