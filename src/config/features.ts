/**
 * Feature flags para pre-deploy y producción.
 * Por defecto todo OFF — activar en Vercel cuando corresponda.
 */
function isEnabled(name: string): boolean {
  const value = process.env[name]?.toLowerCase();
  return value === "true" || value === "1";
}

export const features = {
  /** Blog público (/blog). Admin sigue disponible. */
  blog: isEnabled("FEATURE_BLOG_ENABLED"),
  /** Formulario de contacto que persiste en MongoDB. */
  contactForm: isEnabled("FEATURE_CONTACT_FORM_ENABLED"),
} as const;
