/**
 * SECTION 6 — Pain points, as a scannable leak grid.
 * Icon card per leak: the problem (bold) + the one-line fix (brand). A dark accent tile
 * carries the spreads line. Reads in seconds; the detail lives in Process.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import {
  Clock,
  Search,
  CalendarClock,
  RefreshCw,
  BarChart3,
} from "lucide-react";

type Leak = {
  icon: React.ElementType;
  problem: string;
  setup: string;
  fix: string;
};

const LEAKS: Leak[] = [
  {
    icon: Clock,
    problem: "You answer in ~6 hours.",
    setup: "They sign with someone else by Sunday.",
    fix: "We reply in under 5 minutes, 24/7, by text.",
  },
  {
    icon: Search,
    problem: "New borrowers can't find you.",
    setup: "Your pipeline has one door.",
    fix: "Ads put you in front of investors searching your markets now.",
  },
  {
    icon: CalendarClock,
    problem: "“Not yet” borrowers vanish.",
    setup: "Ready in November, funded elsewhere.",
    fix: "Nurtured by tier until the month they book.",
  },
  {
    icon: RefreshCw,
    problem: "Your borrower refis elsewhere.",
    setup: "A second closing you underwrote first.",
    fix: "We're there at seasoning with their number.",
  },
  {
    icon: BarChart3,
    problem: "You can't see what a loan cost.",
    setup: "Clicks, contacts, closings — three systems.",
    fix: "One number: cost per funded loan.",
  },
];

export function PainPoints() {
  return (
    <section className="relative border-t border-hairline bg-white py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[44rem]">
          <SectionLabel index="03">Where the pipeline leaks</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            You&rsquo;re not short on deals. You&rsquo;re short on{" "}
            <span className="accent">the ones that reach you.</span>
          </h2>
          <p className="mt-6 max-w-[54rem] text-[1.05rem] leading-[1.6] text-muted-ink">
            Referrals built your book &mdash; but you don&rsquo;t control them,
            and the deals you do get leak out five ways.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEAKS.map((l, i) => (
            <article
              key={l.problem}
              data-reveal
              style={{ "--reveal-delay": `${i * 45}ms` } as React.CSSProperties}
              className="group rounded-2xl border border-hairline bg-white p-6 shadow-[0_1px_2px_rgba(15,23,41,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,41,0.08)]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <l.icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[1.08rem] font-extrabold tracking-[-0.015em] text-ink">
                {l.problem}
              </h3>
              <p className="mt-2 text-[0.96rem] leading-[1.55] text-muted-ink">
                {l.setup}{" "}
                <strong className="font-bold text-brand">{l.fix}</strong>
              </p>
            </article>
          ))}

          {/* dark accent tile — the spreads line */}
          <article
            data-reveal
            style={{ "--reveal-delay": "225ms" } as React.CSSProperties}
            className="flex items-center rounded-2xl bg-ink p-6"
          >
            <p className="text-[1.12rem] leading-[1.35] font-extrabold tracking-[-0.02em] text-white">
              You used to out-price all of this.{" "}
              <span className="accent text-brand-light">
                Not at today&rsquo;s spreads.
              </span>
            </p>
          </article>
        </div>

        <p
          data-reveal
          className="mt-12 max-w-[46rem] text-[1.22rem] leading-[1.35] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.5rem]"
        >
          The lender who wins now is the one{" "}
          <span className="accent">whose pipeline doesn&rsquo;t leak.</span>
        </p>
      </div>
    </section>
  );
}
