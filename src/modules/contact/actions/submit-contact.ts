"use server";

import { headers } from "next/headers";
import dbConnect from "@/lib/db";
import ContactMessageModel from "@/lib/models/contact-message";
import { features } from "@/config/features";
import { isLocale } from "@/lib/locale";
import { getResources, type Locale } from "@/resources";
import { contactSchema } from "../schemas/contact-schema";

const RATE_LIMIT_MS = 24 * 60 * 60 * 1000; // 24 h por email

export type ContactActionState = {
  success: boolean;
  message: string;
  messageKey?:
    | "validationError"
    | "success"
    | "error"
    | "disabled"
    | "rateLimited";
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const localeRaw = String(formData.get("locale") ?? "");
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "es";
  const t = getResources(locale);

  if (!features.contactForm) {
    return {
      success: false,
      message: t.contact.form.disabled,
      messageKey: "disabled",
    };
  }

  // Honeypot — bots suelen completar campos ocultos
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { success: true, message: t.contact.form.success, messageKey: "success" };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: t.contact.form.validationError,
      messageKey: "validationError",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (!process.env.MONGODB_URI) {
    return {
      success: false,
      message: t.contact.form.error,
      messageKey: "error",
    };
  }

  try {
    await dbConnect();

    const since = new Date(Date.now() - RATE_LIMIT_MS);
    const recent = await ContactMessageModel.findOne({
      email: parsed.data.email.toLowerCase(),
      createdAt: { $gte: since },
    });

    if (recent) {
      return {
        success: false,
        message: t.contact.form.rateLimited,
        messageKey: "rateLimited",
      };
    }

    const headerStore = await headers();
    const ip =
      headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headerStore.get("x-real-ip") ??
      undefined;

    await ContactMessageModel.create({
      ...parsed.data,
      email: parsed.data.email.toLowerCase(),
      ip,
      read: false,
    });

    return {
      success: true,
      message: t.contact.form.success,
      messageKey: "success",
    };
  } catch {
    return {
      success: false,
      message: t.contact.form.error,
      messageKey: "error",
    };
  }
}
