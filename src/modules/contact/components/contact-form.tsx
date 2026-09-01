"use client";

import { useActionState } from "react";
import { useResources } from "@/components/providers/resources-provider";
import { Button, Card, Input, Textarea } from "@/components/ui";
import { cn } from "@/lib/cn";
import { submitContact, type ContactActionState } from "../actions/submit-contact";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

export function ContactForm({
  className,
  enabled = false,
}: {
  className?: string;
  enabled?: boolean;
}) {
  const { locale, t } = useResources();
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  const displayMessage = state.messageKey
    ? t.contact.form[state.messageKey]
    : state.message;

  if (!enabled) {
    return (
      <Card className={cn("p-6 md:p-8", className)}>
        <p className="text-sm leading-relaxed text-violet-200/70">
          {t.contact.form.disabled}
        </p>
      </Card>
    );
  }

  return (
    <Card className={cn("p-6 md:p-8", className)}>
      <form action={formAction} className="flex flex-col gap-5">
        <input type="hidden" name="locale" value={locale} />
        {/* Honeypot — oculto para usuarios, visible para bots */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label={t.contact.form.name}
            name="name"
            required
            error={state.errors?.name?.[0]}
            className="h-11"
          />
          <Input
            label={t.contact.form.email}
            name="email"
            type="email"
            required
            error={state.errors?.email?.[0]}
            className="h-11"
          />
        </div>
        <Textarea
          label={t.contact.form.message}
          name="message"
          required
          error={state.errors?.message?.[0]}
          className="min-h-40 md:min-h-48"
        />
        {displayMessage ? (
          <p
            className={
              state.success ? "text-sm text-emerald-400" : "text-sm text-red-400"
            }
          >
            {displayMessage}
          </p>
        ) : null}
        <Button type="submit" disabled={pending} className="w-full md:w-fit md:min-w-44">
          {pending ? t.contact.form.sending : t.contact.form.submit}
        </Button>
      </form>
    </Card>
  );
}
