import { cn } from "@/lib/cn";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id ?? props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-violet-200"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-28 w-full rounded-lg border border-violet-500/30 bg-[#120a1f] px-3 py-2 text-sm text-violet-100 outline-none transition-colors placeholder:text-violet-400/40 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
