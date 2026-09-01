import type { Metadata } from "next";
import { ContactPage } from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribime para proyectos o consultas.",
};

export default function Page() {
  return <ContactPage />;
}
