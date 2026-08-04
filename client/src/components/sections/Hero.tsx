/**
 * SECTION 1+2 — Headline, subheading, guarantee line.
 * Departure from reference (creative license): editorial split. Oversized headline on the
 * left; on the right a "deal sheet" artifact showing what actually lands on the calendar
 * (address / purchase price / ARV / close date). Shows the product instead of describing it.
 * Copy is verbatim from the guide.
 */
import { Eyebrow } from "@/components/brand/Eyebrow";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ink pt-[104px] pb-16 sm:pt-[128px] sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16">
          {/* ---------------- left: the claim ---------------- */}
          <div className="max-w-[46rem]">
            <div data-reveal>
              <Eyebrow onDark>
                For private money &amp; investor lenders and brokers placing 3+ loans a month
              </Eyebrow>
            </div>

            <h1
              data-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
              className="h-display mt-7 text-[clamp(2.1rem,5.4vw,3.75rem)] text-white"
            >
              6+ pre-qualified investor appointments a month, booked with the deal details attached.{" "}
              <span className="accent">Or we work that month free.</span>
            </h1>

            <p
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              className="mt-7 max-w-[38rem] text-[1.06rem] leading-[1.62] text-on-dark sm:text-[1.15rem]"
            >
              Paid acquisition, funnel pages, five-minute response and booked
              appointments &mdash; for private money and investor lenders, and the
              brokers who place their loans.
            </p>

            {/* guarantee callout */}
            <div
              data-reveal
              style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
              className="mt-8 flex max-w-[36rem] items-start gap-3 rounded-xl border border-brand/35 bg-brand/12 px-4.5 py-3.5"
            >
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-brand"
                strokeWidth={2}
              />
              <p className="text-[0.95rem] leading-[1.5] font-medium text-[#DCEBFA]">
                Six qualified appointments every month, starting month two.{" "}
                <strong className="font-extrabold text-brand">
                  Miss a month, we work that month free.
                </strong>
              </p>
            </div>
          </div>

          {/* ---------------- right: the deal sheet artifact ---------------- */}
          <div
            data-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            className="relative lg:pl-4"
          >
            <DealSheet />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const SHEET_ROWS: [string, string][] = [
  ["Property", "3418 Kessler Blvd, Indianapolis IN"],
  ["Purchase price", "$182,000"],
  ["ARV", "$305,000"],
  ["Rehab budget", "$61,500"],
  ["Target close", "14 days"],
  ["Experience", "9 completed flips"],
  ["Cash to close", "Verified"],
];

/**
 * An illustrative deal sheet — the artifact the lender receives before the call.
 * Explicitly labelled as an example so it is never mistaken for a client result.
 */
function DealSheet() {
  return (
    <div className="relative">
      {/* stacked paper edges behind, suggesting a queue of appointments */}
      <div
        aria-hidden="true"
        className="absolute -top-3 left-4 right-4 h-full rounded-2xl border border-white/8 bg-white/4"
      />
      <div
        aria-hidden="true"
        className="absolute -top-1.5 left-2 right-2 h-full rounded-2xl border border-white/10 bg-white/6"
      />

      <div className="relative rounded-2xl border border-on-dark-line bg-ink-2/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.42)] backdrop-blur sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-on-dark-line pb-4">
          <div>
            <span className="mono-label text-brand-light">
              Deal sheet &mdash; example
            </span>
            <p className="mt-2 text-[1.15rem] font-extrabold tracking-[-0.02em] text-white">
              Appointment confirmed
            </p>
          </div>
          <span className="mono-label flex shrink-0 items-center gap-2 rounded-full border border-brand/35 bg-brand/12 px-2.5 py-1.5 text-brand-light">
            <span className="size-1.5 rounded-full bg-brand" />
            Pre-qualified
          </span>
        </div>

        <dl className="mt-1 divide-y divide-white/8">
          {SHEET_ROWS.map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-6 py-3"
            >
              <dt className="mono-label shrink-0 text-on-dark-muted">{k}</dt>
              <dd className="text-right text-[0.95rem] font-semibold text-white">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/8 bg-white/4 px-4 py-3">
          <span className="numeral text-[1.5rem] text-brand">4:41</span>
          <span className="text-[0.85rem] leading-tight text-on-dark-muted">
            minutes from inquiry to qualified.
            <br />
            The industry average is about 6 hours.
          </span>
        </div>
      </div>
    </div>
  );
}
