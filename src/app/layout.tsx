import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ResourcesProvider } from "@/components/providers/resources-provider";
import { getLocale } from "@/lib/locale";
import { getResources } from "@/resources";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = getResources(await getLocale());
  return {
    title: {
      default: "RTfolio",
      template: "%s | RTfolio",
    },
    description: t.meta.description,
    themeColor: "#0c0715",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const resources = getResources(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0c0715] text-violet-50">
        <ResourcesProvider locale={locale} resources={resources}>
          {children}
        </ResourcesProvider>
        <Analytics />
      </body>
    </html>
  );
}
