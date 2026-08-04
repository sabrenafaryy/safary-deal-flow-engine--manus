/**
 * Signature device: mono uppercase pill, .14em tracking, leading brand dot with glow ring.
 */
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2",
        onDark
          ? "border-white/14 bg-white/6 text-[#CFE3F5]"
          : "border-hairline bg-white text-brand shadow-[0_1px_2px_rgba(15,23,41,0.05)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_0_3px_rgba(13,129,211,0.18)]"
      />
      {children}
    </span>
  );
}
