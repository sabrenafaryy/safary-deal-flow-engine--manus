/**
 * SECTION 11 — Proof slot two. Industry data with NAMED SOURCES until there are client
 * results. Departure from reference (creative license): numerals set at display scale as
 * graphic elements, sources in mono directly beneath.
 * RULE: no fabricated client results. Every figure here is published third-party data and
 * carries its source. Sabrena to confirm each source before launch.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

type Stat = {
  value: string;
  unit?: string;
  label: string;
  source: string;
};

const STATS: Stat[] = [
  {
    value: "83",
    unit: "%",
    label: "of private lenders made loans to fewer than 10 borrowers in four years",
    source: "Forecasa, via Urban Institute · Apr 2026",
  },
  {
    value: "26",
    unit: "%",
    label:
      "of casual borrowers — 91% of the market — were still active a year later",
    source: "Urban Institute · Apr 2026",
  },
  {
    value: "60",
    unit: "%",
    label: "of lenders never returned a phone call within 24 hours",
    source: "130-lender speed-to-lead study, NMP",
  },
  {
    value: "306",
    unit: "bps",
    label: "DSCR spread over the 10-year — down from 424 a year earlier",
    source: "Lightning Docs / AAPL · Apr 2025",
  },
];

export function IndustryData() {
  return (
    <section className="relative border-y border-hairline bg-white py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[44rem]">
          <SectionLabel index="08">The numbers</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            Don&rsquo;t take <span className="accent">my word for it</span>
          </h2>
        </div>

        {/* numerals as editorial graphics: display scale, tabular, mono source beneath */}
        <div className="mt-16 grid divide-y divide-hairline border-t border-hairline sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className={`group py-8 sm:px-7 lg:py-10 ${
                i === 0 ? "sm:pl-0" : "sm:border-l sm:border-hairline"
              } ${i === 2 ? "lg:border-l lg:border-hairline" : ""}`}
            >
              <p className="numeral flex items-baseline text-ink">
                <span className="text-[4.4rem] leading-[0.85] transition-colors duration-300 group-hover:text-brand sm:text-[5.2rem]">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="ml-1 text-[1.35rem] font-extrabold text-brand">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="mt-5 max-w-[17rem] text-[0.98rem] leading-[1.42] font-bold tracking-[-0.012em] text-ink">
                {s.label}
              </p>
              <p className="mono-label mt-3 border-t border-hairline pt-3 text-[0.63rem] leading-[1.5] text-muted-ink normal-case">
                {s.source}
              </p>
            </div>
          ))}
        </div>

        {/* keystone figure — the one that makes the other four mean something */}
        <div
          data-reveal
          className="mt-12 grid gap-6 rounded-2xl border-2 border-brand/35 bg-brand/6 p-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-10 sm:p-10"
        >
          <p className="numeral flex items-baseline text-brand">
            <span className="text-[4.4rem] leading-[0.85] sm:text-[5.6rem]">9</span>
            <span className="ml-1 text-[1.5rem] font-extrabold">%</span>
          </p>
          <div>
            <p className="text-[1.08rem] leading-[1.5] font-bold text-ink sm:text-[1.15rem]">
              of borrowers do four or more loans a year &mdash; and drive more than
              40% of the $90.5 billion in volume.
            </p>
            <p className="mono-label mt-3 text-muted-ink normal-case">
              Urban Institute &middot; Apr 2026
            </p>
          </div>
        </div>

        <div
          data-reveal
          className="mt-10 max-w-[54rem] space-y-5 border-t border-hairline pt-8"
        >
          <p className="text-[1.22rem] leading-[1.4] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.48rem]">
            Read the first two together: fewer than ten borrowers in four years
            &mdash; in a market where a single active investor can do four or more
            deals a year on their own. The size of your book was never the number of
            loans you wrote.{" "}
            <span className="accent">
              It&rsquo;s the number of investors who know your name.
            </span>{" "}
            That&rsquo;s the number ads move.
          </p>
          <p className="text-[1.02rem] leading-[1.6] text-muted-ink">
            And the last two say why you can&rsquo;t get there the old way: at
            today&rsquo;s spreads you can&rsquo;t buy your way in on price, and the
            lender who answers first takes the deal.{" "}
            <span className="font-bold text-ink">So you win on reach and speed.</span>{" "}
            That&rsquo;s the whole job of what we build.
          </p>
        </div>

        <p
          data-reveal
          className="mt-6 max-w-[52rem] text-[0.95rem] leading-[1.6] text-muted-ink"
        >
          Every figure is published research and the source is named.{" "}
          <span className="font-semibold text-ink">
            Ask me and I&rsquo;ll send you the studies.
          </span>
        </p>
      </div>
    </section>
  );
}
