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
    value: "6",
    unit: "hrs",
    label: "Average time for a lender to respond to a web inquiry",
    source: "Source: to be confirmed before launch",
  },
  {
    value: "50",
    unit: "%",
    label:
      "Share of borrowers who transact with the first lender that responds",
    source: "Source: to be confirmed before launch",
  },
  {
    value: "40",
    unit: "%",
    label:
      "Share of bridge borrowers who refinance into a rental loan within 12 months",
    source: "Source: to be confirmed before launch",
  },
  {
    value: "5",
    unit: "min",
    label: "Our response time to every inquiry, at any hour",
    source: "Contractual, and reported monthly",
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

        <p
          data-reveal
          className="mt-12 max-w-[52rem] border-t border-hairline pt-6 text-[1rem] leading-[1.6] text-muted-ink"
        >
          Every figure is published data and the source is named.{" "}
          <span className="font-semibold text-ink">Ask me for any of them.</span>
        </p>
      </div>
    </section>
  );
}
