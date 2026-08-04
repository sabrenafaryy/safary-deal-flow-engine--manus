/**
 * SECTION 8 — Process, six stages.
 * Style: "Safary Institutional Blue — Editorial Fintech" (see /ideas.md)
 *
 * NOT a vertical SaaS timeline. This is a MECHANICAL DEAL-FLOW RAIL: each stage is a numbered
 * station on a spine whose brand-blue fill is bound to scroll progress, and each station
 * declares the state change it produces (stranger → prospect → qualified → booked → funded).
 * The stage state chips are the mechanism made visible.
 *
 * Copy verbatim from LANDINGPAGEGUIDE.md.
 */
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/brand/SectionLabel";
import { cn } from "@/lib/utils";

type Stage = {
  title: string;
  body: string;
  /** the state the borrower is in when this stage completes */
  state: string;
  /** the measurable that stage controls */
  metric: string;
};

const STAGES: Stage[] = [
  {
    title: "The ads put you in the room",
    body: "An investor starts looking for money and your ad is there — in your markets, on the product he needs, at the minute he needs it. Search, social and the local map, working together.",
    state: "Stranger",
    metric: "In-market impression",
  },
  {
    title: "The funnel page makes you the obvious call",
    body: "Not your homepage. A page built for one loan product, showing your leverage, your timelines and your recent closings with real numbers — so he stops comparing rates and starts believing you're the one who can actually fund it. This is where a stranger becomes someone who knows you and trusts you.",
    state: "Knows you",
    metric: "Inquiry submitted",
  },
  {
    title: "He asks, and we answer in five minutes",
    body: "A text, immediately, at any hour. The industry takes six hours. This is the step that decides who gets the deal.",
    state: "Engaged",
    metric: "Under 5 min response",
  },
  {
    title: "He gets qualified against your box, not a generic form",
    body: "We build the questions around your lending criteria — address, price, ARV, close date, experience, cash to close, and whatever else you need to make a call. Asked one at a time, by text, the way a person would ask. Everything you need to pre-qualify him is captured before he ever reaches your calendar.",
    state: "Pre-qualified",
    metric: "Deal sheet complete",
  },
  {
    title: "He lands on your calendar",
    body: "Booked, confirmed, reminded. The deal sheet arrives before he does. If he no-shows, we chase and rebook.",
    state: "Booked",
    metric: "Appointment held",
  },
  {
    title: "He comes back",
    body: "Not ready this month goes into nurture until he is. Funded this month gets a review request and, at seasoning, a cash-out offer. One borrower, two closings.",
    state: "Repeat",
    metric: "Second closing",
  },
];

export function Process() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      setActive(STAGES.length - 1);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = railRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = window.innerHeight * 0.56;
        setProgress(
          Math.min(100, Math.max(0, ((mid - rect.top) / rect.height) * 100)),
        );

        const nodes = Array.from(
          el.querySelectorAll<HTMLElement>("[data-stage]"),
        );
        let last = 0;
        nodes.forEach((n, i) => {
          if (n.getBoundingClientRect().top < mid) last = i;
        });
        setActive(last);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-hairline bg-white py-20 sm:py-28">
      {/* engineering-drawing grid, very faint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E3E2DE 1px, transparent 1px), linear-gradient(to bottom, #E3E2DE 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="container relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-reveal className="max-w-[42rem]">
            <SectionLabel index="05">The mechanism</SectionLabel>
            <h2 className="h-section mt-5 text-ink">
              How a stranger becomes{" "}
              <span className="accent">a funded loan</span>
            </h2>
          </div>

          {/* state ladder — the whole mechanism in one glance */}
          <div
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="hidden shrink-0 md:block"
          >
            <span className="mono-label text-muted-ink">State change</span>
            <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {STAGES.map((s, i) => (
                <span key={s.state} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "mono-label rounded-full border px-2.5 py-1.5 transition-all duration-400",
                      i <= active
                        ? "border-brand/40 bg-brand/10 text-brand"
                        : "border-hairline bg-paper text-muted-ink/70",
                    )}
                  >
                    {s.state}
                  </span>
                  {i < STAGES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-px w-2.5 transition-colors duration-400",
                        i < active ? "bg-brand" : "bg-hairline",
                      )}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- the rail ---------------- */}
        <div ref={railRef} className="relative mt-16 pl-[3.5rem] sm:pl-[6.5rem]">
          {/* spine */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-10 left-[1.4rem] w-[3px] overflow-hidden bg-hairline sm:left-[2.9rem]"
          >
            <div
              className="w-full bg-brand transition-[height] duration-150 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>
          {/* terminal marker at the bottom of the spine */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute bottom-6 left-[1.4rem] -ml-[7px] size-[17px] rotate-45 border-2 transition-all duration-500 sm:left-[2.9rem]",
              progress > 96
                ? "border-brand bg-brand"
                : "border-hairline bg-white",
            )}
          />

          <div className="space-y-2.5">
            {STAGES.map((s, i) => {
              const on = i <= active;
              return (
                <div key={s.title} data-stage className="relative">
                  {/* station node — square-cut, mechanical, not a soft dot */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-6 left-[-3.5rem] z-2 flex size-[2.8rem] items-center justify-center border-2 transition-all duration-400 sm:left-[-6.5rem] sm:size-[3.4rem]",
                      on
                        ? "border-brand bg-brand text-white shadow-[0_0_0_5px_rgba(13,129,211,0.13)]"
                        : "border-hairline bg-white text-muted-ink/70",
                    )}
                    style={{ borderRadius: 10 }}
                  >
                    <span className="mono-label text-[0.78rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>

                  {/* tick from node into the card */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-[2.85rem] left-[-0.75rem] h-[2px] w-3 transition-colors duration-400 sm:top-[3.15rem]",
                      on ? "bg-brand" : "bg-hairline",
                    )}
                  />

                  <article
                    className={cn(
                      "border bg-white px-6 py-6 transition-all duration-400 sm:px-8 sm:py-7",
                      on
                        ? "border-hairline shadow-[0_10px_30px_rgba(15,23,41,0.07)]"
                        : "border-hairline/60 shadow-none",
                    )}
                    style={{ borderRadius: 14 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
                      <h3
                        className={cn(
                          "max-w-[34rem] text-[1.12rem] leading-[1.24] font-extrabold tracking-[-0.022em] transition-colors duration-400 sm:text-[1.34rem]",
                          on ? "text-ink" : "text-ink/55",
                        )}
                      >
                        {s.title}
                      </h3>

                      {/* the measurable this stage controls */}
                      <span
                        className={cn(
                          "mono-label shrink-0 border-t-2 pt-2 transition-colors duration-400",
                          on
                            ? "border-brand text-brand"
                            : "border-hairline text-muted-ink/60",
                        )}
                      >
                        {s.metric}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "mt-3.5 max-w-[46rem] text-[1.01rem] leading-[1.6] transition-colors duration-400",
                        on ? "text-muted-ink" : "text-muted-ink/60",
                      )}
                    >
                      {s.body}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <p
          data-reveal
          className="mt-10 pl-[3.5rem] text-[1.06rem] leading-[1.45] font-bold tracking-[-0.015em] text-ink sm:pl-[6.5rem] sm:text-[1.2rem]"
        >
          Six stages, one mechanism.{" "}
          <span className="accent">Nothing leaves the system.</span>
        </p>
      </div>
    </section>
  );
}
