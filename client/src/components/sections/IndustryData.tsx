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
    value: "9",
    unit: "%",
    label:
      "of borrowers do four or more loans a year, and drive more than 40% of $90.5 billion in volume",
    source: "Urban Institute, April 2026",
  },
  {
    value: "83",
    unit: "%",
    label:
      "of private lenders made loans to fewer than 10 unique borrowers over four years",
    source:
      "Forecasa data, cited in The Evolution of Residential Transition Lending, Urban Institute, April 2026",
  },
  {
    value: "60",
    unit: "%",
    label: "of lenders never returned a phone call within 24 hours",
    source:
      "LeadQual, 350+ leads to 130+ lenders · National Mortgage Professional, January 2010",
  },
  {
    value: "306",
    unit: "bps",
    label: "DSCR spread over the 10-year, down from 424 a year earlier",
    source:
      "Lightning Docs platform data, official loan documents provider to the American Association of Private Lenders, April 2025",
  },
];

export function IndustryData() {
  return (
    <section className="relative border-y border-hairline bg-white py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[44rem]">
          <SectionLabel index="08">Don&rsquo;t take my word for it</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            The <span className="accent">industry data.</span>
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

        <div
          data-reveal
          className="mt-12 max-w-[54rem] space-y-5 border-t border-hairline pt-8"
        >
          <p className="text-[1.2rem] leading-[1.42] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.42rem]">
            The money in this market is concentrated. A small group of investors
            borrows again and again, and they drive{" "}
            <span className="accent">close to half the volume</span> in a $90 billion
            market. Nobody can tell which borrower is one of them until the third
            loan.
          </p>
          <p className="text-[1.02rem] leading-[1.6] text-muted-ink">
            So the only way to get them is to be in front of all of them. Almost no
            lender is. And the ones who do get the call mostly don&rsquo;t answer it.
          </p>
          <p className="text-[1.02rem] leading-[1.6] text-muted-ink">
            That was survivable when you could win on price. At today&rsquo;s spreads
            you can&rsquo;t.{" "}
            <span className="font-bold text-ink">
              Reach and speed are what&rsquo;s left
            </span>{" "}
            &mdash; and both of them can be bought.{" "}
            <span className="font-bold text-ink">
              That&rsquo;s the whole job of what we build.
            </span>
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
