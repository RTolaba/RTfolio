import { en } from "./en";
import { es } from "./es";
import type { Locale, Resources } from "./types";

export type { Locale, Resources } from "./types";
export { es, en };

const resources: Record<Locale, Resources> = { es, en };

export function getResources(locale: Locale): Resources {
  return resources[locale];
}

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];
