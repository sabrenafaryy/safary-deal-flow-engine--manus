/**
 * Section index marker — mono numeral + hairline rule. Gives the long page an audited,
 * documentary spine and helps the reader track position.
 */
import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  children,
  onDark = false,
  className,
}: {
  index: string;
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mono-label flex items-center gap-3.5",
        onDark ? "text-brand-light" : "text-brand",
        className,
      )}
    >
      <span>{index}</span>
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8",
          onDark ? "bg-white/25" : "bg-brand/35",
        )}
      />
      <span className={onDark ? "text-on-dark-muted" : "text-muted-ink"}>
        {children}
      </span>
    </div>
  );
}

