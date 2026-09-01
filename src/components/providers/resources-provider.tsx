"use client";

import { createContext, useContext } from "react";
import type { Locale, Resources } from "@/resources";

type LocaleContextValue = {
  locale: Locale;
  t: Resources;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function ResourcesProvider({
  locale,
  resources,
  children,
}: {
  locale: Locale;
  resources: Resources;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: resources }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useResources() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useResources must be used within ResourcesProvider");
  }
  return context;
}
