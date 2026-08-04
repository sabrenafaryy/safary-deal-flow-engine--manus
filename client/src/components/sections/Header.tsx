/**
 * Sticky header. Transparent over the navy hero, then resolves to frosted paper once the
 * hero has passed — guarantees text contrast at every scroll position.
 */
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { CtaButton } from "@/components/brand/CtaButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        solid
          ? "border-b border-hairline bg-paper/88 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-[76px] items-center justify-between gap-4">
        <a
          href="#top"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="Safary Marketing — top of page"
        >
          <Wordmark onDark={!solid} />
        </a>

        <div className="flex items-center gap-5">
          <span
            className={cn(
              "mono-label hidden transition-colors lg:inline",
              solid ? "text-muted-ink" : "text-[#8FA3B4]",
            )}
          >
            For lenders placing 3+ loans a month
          </span>
          <CtaButton position="header" size="sm" />
        </div>
      </div>
    </header>
  );
}
