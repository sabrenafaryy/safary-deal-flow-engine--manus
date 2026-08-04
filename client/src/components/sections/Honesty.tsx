/**
 * SECTION 13 — Proof slot three: "What I can't show you yet".
 * This section IS the persuasion — it concedes what cannot be proven. Set on deep navy so it
 * reads as a deliberate, signed statement rather than a disclaimer.
 * Copy verbatim.
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div data-reveal>
            <SectionLabel index="09" onDark>
              Full disclosure
            </SectionLabel>
            <h2 className="h-section mt-5 text-white">
              What I <span className="accent">can&rsquo;t show you</span> yet
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1.04rem] leading-[1.6] text-on-dark">
              I don&rsquo;t have a lender case study. I could have written one
              &mdash; plenty of agencies do, and you&rsquo;d have no way to check
              it. Here&rsquo;s what I&rsquo;d rather hand you instead.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {OFFERS.map((o, i) => (
                <li key={o} className="flex items-start gap-5 py-4.5">
                  <span className="mono-label mt-1 shrink-0 text-brand-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1rem] leading-[1.55] text-white/92">{o}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand/40 bg-brand/10 p-6 sm:p-7">
              <span className="mono-label text-brand-light">
                Three founding clients
              </span>
              <p className="mt-3 text-[1rem] leading-[1.6] text-white/92">
                Three founding clients at a founding rate &mdash; well below what
                this costs once the results are published &mdash; in exchange for
                permission to publish them. You get the work at a price that
                won&rsquo;t exist again. I get the case study.{" "}
                <span className="font-bold text-white">
                  The trade is explicit: the discount is payment for the data.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
