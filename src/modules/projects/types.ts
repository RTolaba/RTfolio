export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "RTfolio",
    description:
      "Portfolio personal con Next.js, módulos por feature y panel admin.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    href: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "KioskAD",
    description: "Aplicación de quiosco con interfaz táctil optimizada.",
    stack: ["React", "Node.js"],
    featured: true,
  },
  {
    id: "3",
    title: "Ventas",
    description: "Sistema de gestión de ventas con reportes básicos.",
    stack: ["TypeScript", "PostgreSQL"],
    featured: false,
  },
];
