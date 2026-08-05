/**
 * SECTION 10 — Why Choose You. Three ways to buy deal flow.
 * Departure from reference (creative license): the Safary column is elevated and extended so
 * it overhangs the table grid — it reads as the answer, not a third option.
 * HARD REQUIREMENT: no horizontal scrolling on mobile. Below lg the table becomes a set of
 * stacked per-criterion cards. Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import { Check, X } from "lucide-react";

type Row = {
  criterion: string;
  vendors: string;
  agencies: string;
  safary: string;
};

const ROWS: Row[] = [
  {
    criterion: "What you get",
    vendors: "A contact record, often sold to three other lenders",
    agencies: "Campaigns, creative, a monthly report",
    safary: "A pre-qualified borrower, booked, with the deal on the sheet",
  },
  {
    criterion: "Who chases it",
    vendors: "You do",
    agencies: "You do",
    safary: "We do — in under five minutes, day or night",
  },
  {
    criterion: "Who owns the pipeline",
    vendors: "They do",
    agencies: "Often their CRM",
    safary: "You do. Every lead lands in your own system as it comes in.",
  },
  {
    criterion: "What gets measured",
    vendors: "Leads delivered",
    agencies: "Impressions and clicks",
    safary: "Cost per funded loan",
  },
  {
    criterion: "Your past borrowers",
    vendors: "Ignored",
    agencies: "Ignored",
    safary: "Worked. Reactivated now, refinanced at seasoning.",
  },
  {
    criterion: "Cost to start",
    vendors: "Per lead, up front",
    agencies: "An up-front build fee",
    safary: "Nothing up front.",
  },
  {
    criterion: "If the number misses",
    vendors: "Your problem",
    agencies: "Your problem",
    safary: "You don't pay our fee that month. Miss twice and you can walk.",
  },
];

export function Comparison() {
  return (
    <section className="bubble-field relative bg-paper py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[46rem]">
          <SectionLabel index="07">The comparison</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            Three ways to buy deal flow.{" "}
            <span className="accent">Only one of them is accountable.</span>
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.6] text-muted-ink">
            Lead vendors sell you form fills. Agencies sell you campaigns.
            Software sells you a tool you run yourself. And appointment setters
            &mdash; the one thing that would actually solve this &mdash;
            don&rsquo;t exist in private lending. So we built it.
          </p>
        </div>

        {/* ---------- desktop: elevated-column table ---------- */}
        <div
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          className="mt-16 hidden lg:block"
        >
          <div className="relative grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
            {/* the elevated Safary column plate, overhanging the grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-7 -bottom-7 right-0 col-start-4 w-full rounded-2xl border-2 border-brand/40 bg-white shadow-[0_20px_50px_rgba(13,129,211,0.16)]"
              style={{ gridColumn: 4 }}
            />

            {/* header row */}
            <div className="mono-label border-b-2 border-hairline pb-4 text-muted-ink" />
            <div className="mono-label border-b-2 border-hairline px-5 pb-4 text-muted-ink">
              Lead vendors
            </div>
            <div className="mono-label border-b-2 border-hairline px-5 pb-4 text-muted-ink">
              Ad agencies
            </div>
            <div className="relative z-1 border-b-2 border-brand px-6 pb-4">
              <span className="mono-label text-brand">Safary</span>
            </div>

            {/* body rows */}
            {ROWS.map((r, i) => (
              <div key={r.criterion} className="contents">
                <div
                  className={`py-5 pr-5 text-[0.95rem] font-bold text-ink ${
                    i < ROWS.length - 1 ? "border-b border-hairline" : ""
                  }`}
                >
                  {r.criterion}
                </div>
                <div
                  className={`flex items-start gap-2.5 px-5 py-5 text-[0.93rem] leading-[1.5] text-muted-ink ${
                    i < ROWS.length - 1 ? "border-b border-hairline" : ""
                  }`}
                >
                  <X
                    className="mt-1 size-3.5 shrink-0 text-muted-ink/45"
                    strokeWidth={2.6}
                  />
                  {r.vendors}
                </div>
                <div
                  className={`flex items-start gap-2.5 px-5 py-5 text-[0.93rem] leading-[1.5] text-muted-ink ${
                    i < ROWS.length - 1 ? "border-b border-hairline" : ""
                  }`}
                >
                  <X
                    className="mt-1 size-3.5 shrink-0 text-muted-ink/45"
                    strokeWidth={2.6}
                  />
                  {r.agencies}
                </div>
                <div
                  className={`relative z-1 flex items-start gap-2.5 px-6 py-5 text-[0.95rem] leading-[1.5] font-semibold text-ink ${
                    i < ROWS.length - 1 ? "border-b border-brand/18" : ""
                  }`}
                >
                  <Check
                    className="mt-1 size-3.5 shrink-0 text-brand"
                    strokeWidth={3.2}
                  />
                  {r.safary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- mobile / tablet: stacked cards, never a scroller ---------- */}
        <div className="mt-12 space-y-4 lg:hidden">
          {ROWS.map((r, i) => (
            <article
              key={r.criterion}
              data-reveal
              style={{ "--reveal-delay": `${i * 45}ms` } as React.CSSProperties}
              className="overflow-hidden rounded-xl border border-hairline bg-white"
            >
              <h3 className="border-b border-hairline bg-paper px-5 py-3.5 text-[0.98rem] font-extrabold tracking-[-0.015em] text-ink">
                {r.criterion}
              </h3>
              <dl className="divide-y divide-hairline">
                <Cell label="Lead vendors" value={r.vendors} />
                <Cell label="Ad agencies" value={r.agencies} />
                <Cell label="Safary" value={r.safary} highlight />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cell({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? "bg-brand/6 px-5 py-4" : "px-5 py-4"}>
      <dt
        className={`mono-label flex items-center gap-2 ${
          highlight ? "text-brand" : "text-muted-ink"
        }`}
      >
        {highlight ? (
          <Check className="size-3.5 shrink-0" strokeWidth={3.2} />
        ) : (
          <X className="size-3.5 shrink-0 text-muted-ink/45" strokeWidth={2.6} />
        )}
        {label}
      </dt>
      <dd
        className={`mt-1.5 pl-[1.4rem] text-[0.95rem] leading-[1.5] ${
          highlight ? "font-semibold text-ink" : "text-muted-ink"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
