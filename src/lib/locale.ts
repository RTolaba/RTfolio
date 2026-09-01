import { cookies, headers } from "next/headers";
import { defaultLocale, locales, type Locale } from "@/resources";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";
  if (primary.startsWith("en")) return "en";
  return "es";
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get("locale")?.value;
  if (stored && isLocale(stored)) return stored;

  const headerStore = await headers();
  return detectLocaleFromAcceptLanguage(headerStore.get("accept-language"));
}
