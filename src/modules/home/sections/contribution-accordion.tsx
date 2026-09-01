"use client";

import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { ExperienceContribution } from "@/resources/types";

export function ContributionAccordion({
  title,
  items,
}: {
  title: string;
  items: ExperienceContribution[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-6">
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-400">
        {title}
      </h4>
      <div className="space-y-2">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <Card key={item.id} className="overflow-hidden p-0">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-violet-600/5"
                aria-expanded={isOpen}
              >
                <div className="min-w-0">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  {item.technologies ? (
                    <p className="mt-1 text-xs text-violet-400/70">
                      {item.technologies}
                    </p>
                  ) : null}
                </div>
                <span
                  className={cn(
                    "mt-1 shrink-0 text-violet-400 transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {isOpen ? (
                <div className="border-t border-violet-500/15 px-4 pb-4 pt-3">
                  <CardDescription className="mt-0 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
