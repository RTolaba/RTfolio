import { LandingShell } from "@/components/layout/landing-shell";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LandingShell>{children}</LandingShell>;
}
