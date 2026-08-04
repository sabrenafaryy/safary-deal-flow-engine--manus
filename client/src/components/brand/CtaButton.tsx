/**
 * The ONLY call to action on the page. Label is always "Book a Call" (spec: same label
 * every time). Fires the cta_click conversion event and scrolls to the booking section.
 */
import { cn } from "@/lib/utils";
import { track } from "@/lib/track";
import { ArrowRight } from "lucide-react";

export function CtaButton({
  position,
  size = "lg",
  className,
  label = "Book a Call",
}: {
  /** which formula position fired it — used for conversion attribution */
  position: string;
  size?: "lg" | "md" | "sm";
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#book"
      onClick={() => track("cta_click", { position })}
      className={cn(
        "group relative inline-flex items-center gap-2.5 rounded-full bg-brand font-semibold text-white",
        "shadow-[0_8px_26px_rgba(13,129,211,0.34)] transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_34px_rgba(13,129,211,0.44)]",
        "active:translate-y-0 active:scale-[0.975]",
        "focus-visible:ring-4 focus-visible:ring-brand/30 focus-visible:outline-none",
        size === "lg" && "px-8 py-4 text-[1.03rem] tracking-[-0.01em]",
        size === "md" && "px-6 py-3 text-[0.95rem]",
        size === "sm" && "px-5 py-2.5 text-[0.875rem]",
        className,
      )}
    >
      {label}
      <ArrowRight
        className="size-[1.05em] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
        strokeWidth={2.4}
      />
    </a>
  );
}

export function CtaMicro({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.875rem] leading-relaxed",
        onDark ? "text-on-dark-muted" : "text-muted-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
