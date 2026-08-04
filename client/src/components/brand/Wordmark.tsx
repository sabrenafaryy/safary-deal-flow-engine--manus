/**
 * LOCKED BRAND ASSET — colors, typefaces and the two-tone lockup must not change.
 * `Safary` in ink + `Marketing` in brand blue, Inter 800, tight tracking, one lockup.
 *
 * The mark sits inside a navy tile so the identity registers as a brand asset rather than
 * navigation text (per style decision in ideas.md). On dark backgrounds the tile inverts to a
 * hairline-bordered blue-tinted plate.
 */
import { cn } from "@/lib/utils";

const MARK_SRC = "/manus-storage/safary-mark_4d986ce9.png";

export function Wordmark({
  onDark = false,
  size = "md",
  className,
}: {
  onDark?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const tile = size === "lg" ? "size-12" : "size-10";
  const glyph = size === "lg" ? "size-7" : "size-6";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* mark tile */}
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-[11px] transition-colors duration-300",
          tile,
          onDark
            ? "border border-white/12 bg-white/8"
            : "bg-ink shadow-[0_3px_10px_rgba(15,23,41,0.18)]",
        )}
      >
        <img
          src={MARK_SRC}
          alt=""
          aria-hidden="true"
          className={cn(glyph, "object-contain")}
        />
      </span>

      <span className="flex flex-col">
        <span
          className={cn(
            "font-extrabold tracking-[-0.032em]",
            size === "lg" ? "text-[1.3rem]" : "text-[1.12rem]",
          )}
          style={{ lineHeight: 1.05 }}
        >
          <span className={onDark ? "text-white" : "text-ink"}>Safary</span>
          <span className="text-brand"> Marketing</span>
        </span>
        <span
          className={cn(
            "mono-label mt-[3px] text-[0.58rem] tracking-[0.2em]",
            onDark ? "text-on-dark-muted" : "text-muted-ink",
          )}
        >
          Deal Flow Engine
        </span>
      </span>
    </span>
  );
}

