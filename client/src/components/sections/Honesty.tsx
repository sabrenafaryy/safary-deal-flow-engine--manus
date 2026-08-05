/**
 * SECTION 13 — Proof slot three: "What I can't show you yet".
 * This section IS the persuasion — it concedes what cannot be proven, then hands over
 * everything that CAN be audited instead. Set on deep navy so it reads as a deliberate,
 * signed statement rather than a disclaimer. Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

const OFFERS = [
  "Every number on this page is published data or yours. I'll send the sources.",
  "The guarantee is contractual, and defined before you sign.",
  "Every appointment and its outcome is in your report. Audit me instead of trusting me.",
  "The ad accounts are in your name and funded by you from day one.",
  "Every lead lands in your own system as it arrives. You never have to ask me for your data.",
];

export function Honesty() {
  return (
    <section className="grain relative overflow-hidden bg-ink-2 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0"
      />

      <div className="container relative">
        <div className="mx-auto max-w-[46rem]">
          <div data-reveal>
            <SectionLabel index="09" onDark>
              The honest part
            </SectionLabel>
            <h2 className="h-section mt-5 text-white">
              What I <span className="accent">can&rsquo;t show you</span> yet
            </h2>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-7 space-y-5 text-[1.05rem] leading-[1.68] text-on-dark"
          >
            <p>
              I don&rsquo;t have a lender case study. I could have written one
              &mdash; plenty of agencies do, and you&rsquo;d have no way to check
              it.
            </p>
            <p>
              But be precise about what&rsquo;s new here. I&rsquo;ve built this
              system before &mdash; the ads, the funnel pages, the five-minute
              response, the qualification, the booking, the attribution. For my own
              business and for clients in other industries. It produces booked
              appointments.{" "}
              <span className="font-semibold text-white">
                That part isn&rsquo;t a theory.
              </span>
            </p>
            <p>
              What&rsquo;s new is lending, and that&rsquo;s where the work went. The
              industry research read end to end. Real keyword data pulled rather
              than taken on a vendor&rsquo;s word. The funnels of the biggest
              lenders in this space taken apart line by line &mdash; which is how I
              know not one of them commits to a response time anywhere on the page.
              And the seven compliance layers mapped, because business-purpose
              lending isn&rsquo;t a category you learn on a client&rsquo;s budget.
            </p>
          </div>

          <p
            data-reveal
            className="mt-8 border-l-2 border-brand pl-5 text-[1.35rem] leading-[1.3] font-extrabold tracking-[-0.02em] text-white"
          >
            The machine isn&rsquo;t the experiment. This market is. What I&rsquo;m
            missing isn&rsquo;t experience &mdash;{" "}
            <span className="accent">it&rsquo;s your numbers.</span>
          </p>

          <p
            data-reveal
            className="mt-8 text-[1.05rem] leading-[1.6] text-on-dark"
          >
            Here&rsquo;s what I&rsquo;d rather hand you than a case study I
            don&rsquo;t have.
          </p>

          <ul
            data-reveal
            className="mt-5 divide-y divide-white/10 border-y border-white/10"
          >
            {OFFERS.map((o, i) => (
              <li key={o} className="flex items-start gap-5 py-4.5">
                <span className="mono-label mt-1 shrink-0 text-brand-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[1rem] leading-[1.55] text-white/92">{o}</p>
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="mt-8 rounded-2xl border border-brand/40 bg-brand/10 p-6 sm:p-7"
          >
            <span className="mono-label text-brand-light">The founding trade</span>
            <p className="mt-3 text-[1rem] leading-[1.62] text-white/92">
              Three founding clients at a founding rate &mdash; well below what this
              costs once the results are published &mdash; in exchange for
              permission to publish them. You get the work at a price that
              won&rsquo;t exist again.{" "}
              <span className="font-bold text-white">I get the case study.</span>{" "}
              The trade is explicit: the discount is payment for the data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
