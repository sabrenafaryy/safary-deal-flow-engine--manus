/**
 * SECTION 6 — Pain points. Five leaks, each an expandable card: the headline and the one-line
 * fix are always visible; opening the card reveals the guide's full problem-then-solution prose.
 * Native <details> so it stays accessible and zero-JS. Copy verbatim from the guide.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import {
  Clock,
  DoorOpen,
  Scale,
  CalendarClock,
  RefreshCw,
  Plus,
} from "lucide-react";

type Leak = {
  icon: React.ElementType;
  headline: string;
  hook: string;
  problem: string;
  solution: string;
  extra?: string;
};

const LEAKS: Leak[] = [
  {
    icon: DoorOpen,
    headline: "Your pipeline has one door — and you don't control it.",
    hook: "So we build you a second door.",
    problem:
      "Referrals built this business. But referrals arrive when they arrive. Lose one of your top three sources and the quarter changes shape. Meanwhile there are investors in your market tonight, contract signed, searching for money — and the lender they call is whoever paid to be there.",
    solution:
      "So we build you a second door. Ads running in your markets, on the products you write, in front of investors at the minute they start looking. Landing on funnel pages built to make you the obvious call — not a homepage that makes them work for it.",
    extra:
      "Every one of them is a borrower who does this for a living, not a one-off. Which is why a door that only opens when someone else decides to send you a name is the most expensive thing in your business.",
  },
  {
    icon: Scale,
    headline: "They don't know you yet — and they're comparing you to four other lenders.",
    hook: "So the funnel convinces them before the conversation.",
    problem:
      "A borrower shopping three lenders picks on price, because price is the only thing they can compare. That's a race you don't want to be in at today's spreads.",
    solution:
      "So the funnel does the convincing before the conversation. Your terms, your speed, your recent closings, your leverage — laid out so they arrive already believing you're the one who can actually fund it. They show up sold on you, not shopping you.",
  },
  {
    icon: Clock,
    headline: "The industry answers in about six hours. The deal is gone by Sunday.",
    hook: "So we answer in under five minutes, at any hour.",
    problem:
      "Saturday, 9am. A flipper with a property under contract fills out your form. The industry answers a web inquiry in about six hours. By Sunday they've signed somewhere else, and you never knew the deal existed.",
    solution:
      "So we answer in under five minutes, at any hour. By text, automatically, weekends included. The deal gets qualified while they're still sitting in their truck outside the property.",
  },
  {
    icon: CalendarClock,
    headline: "Not-ready borrowers quietly disappear.",
    hook: "So nobody falls out of the system.",
    problem:
      "“Not this one, but keep in touch.” They weren't ready in March. Nobody called in April. They fund with someone else in November — a deal you'd already earned and quietly gave away.",
    solution:
      "So nobody falls out of the system. Not-ready borrowers go into nurture and stay there, split by how experienced they are, until the month they're ready. Then they book.",
  },
  {
    icon: RefreshCw,
    headline: "Your own borrower refinances with someone else.",
    hook: "So we're there at seasoning with their number.",
    problem:
      "Your own borrower, twelve months on. The bridge loan seasons. They refinance into a rental loan with a lender who isn't you. That's a second closing on a property you underwrote, valued, and took the risk on first.",
    solution:
      "So we're there at seasoning with their number. Before anyone else is. Two closings on one property instead of handing the second one to a competitor.",
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
            and the deals you do get leak out five ways. Open any one for the whole
            story.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {LEAKS.map((l, i) => (
            <details
              key={l.headline}
              data-reveal
              style={{ "--reveal-delay": `${i * 45}ms` } as React.CSSProperties}
              className="group overflow-hidden rounded-2xl border border-hairline bg-white transition-shadow duration-200 open:shadow-[0_12px_30px_rgba(15,23,41,0.07)]"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <l.icon className="size-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.08rem] font-extrabold leading-[1.3] tracking-[-0.015em] text-ink sm:text-[1.15rem]">
                    {l.headline}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-[1.5] font-semibold text-brand">
                    {l.hook}
                  </p>
                </div>
                <Plus
                  className="mt-1 size-5 shrink-0 text-brand transition-transform duration-250 ease-out group-open:rotate-45"
                  strokeWidth={2.6}
                />
              </summary>

              <div className="space-y-3.5 border-t border-hairline px-6 py-6 sm:pl-[3.75rem]">
                <p className="max-w-[60ch] text-[0.98rem] leading-[1.62] text-muted-ink">
                  {l.problem}
                </p>
                <p className="max-w-[60ch] text-[0.98rem] leading-[1.62] text-ink">
                  <strong className="font-bold">{l.solution}</strong>
                </p>
                {l.extra && (
                  <p className="max-w-[60ch] text-[0.98rem] leading-[1.62] text-muted-ink">
                    {l.extra}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>

        <p
          data-reveal
          className="mt-12 max-w-[48rem] text-[1.22rem] leading-[1.35] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.5rem]"
        >
          You used to out-price all of this. Not at today&rsquo;s spreads. The
          lender who wins now is the one{" "}
          <span className="accent">whose pipeline doesn&rsquo;t leak.</span>
        </p>
      </div>
    </section>
  );
}
