/**
 * SECTION 6 — Pain points.
 * Departure from reference (creative license): a numbered LEDGER of full-bleed rows rather
 * than a 2-up card grid. Each row pairs the problem (large ink type) with the response
 * (inset, behind a brand-blue rule). Reads like an audit of where the pipeline leaks.
 * Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

type Block = {
  lead: string;
  problem: string;
  responseLead: string;
  response: string;
};

const BLOCKS: Block[] = [
  {
    lead: "Your pipeline has one door, and you don't control it.",
    problem:
      "Referrals built this business. But referrals arrive when they arrive. Lose one of your top three sources and the quarter changes shape. Meanwhile there are investors in your market tonight, contract signed, searching for money — and the lender they call is whoever paid to be there.",
    responseLead: "So we build you a second door.",
    response:
      "Ads running in your markets, on the products you write, in front of investors at the minute they start looking. Landing on funnel pages built to make you the obvious call — not a homepage that makes them work for it.",
  },
  {
    lead: "They don't know you yet, and they're comparing you to four other lenders.",
    problem:
      "A borrower shopping three lenders picks on price, because price is the only thing he can compare. That's a race you don't want to be in at today's spreads.",
    responseLead: "So the funnel does the convincing before the conversation.",
    response:
      "Your terms, your speed, your recent closings, your leverage — laid out so he arrives already believing you're the one who can actually fund it. He shows up sold on you, not shopping you.",
  },
  {
    lead: "Saturday, 9am.",
    problem:
      "A flipper with a property under contract fills out your form. The industry answers a web inquiry in about six hours. By Sunday he's signed somewhere else, and you never knew the deal existed.",
    responseLead: "So we answer in under five minutes, at any hour.",
    response:
      "By text, automatically, weekends included. The deal gets qualified while he's still sitting in his truck outside the property.",
  },
  {
    lead: "\u201CNot this one, but keep in touch.\u201D",
    problem:
      "She wasn't ready in March. Nobody called in April. She funds with someone else in November — a deal you'd already earned and quietly gave away.",
    responseLead: "So nobody falls out of the system.",
    response:
      "Not-ready borrowers go into nurture and stay there, split by how experienced they are, until the month they're ready. Then they book.",
  },
  {
    lead: "Your own borrower, twelve months on.",
    problem:
      "The bridge loan seasons. He refinances into a rental loan with a lender who isn't you. That's a second closing on a property you underwrote, valued, and took the risk on first.",
    responseLead: "So we're there at seasoning with his number.",
    response:
      "Before anyone else is. Two closings on one property instead of handing the second one to a competitor.",
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
        </div>

        <div className="mt-14 space-y-0 border-t border-hairline">
          {BLOCKS.map((b, i) => (
            <article
              key={b.lead}
              data-reveal
              style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
              className="group grid gap-6 border-b border-hairline py-9 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:py-11"
            >
              {/* index */}
              <div className="mono-label pt-1 text-brand md:pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* the problem */}
              <div>
                <h3 className="text-[1.2rem] leading-[1.28] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.4rem]">
                  {b.lead}
                </h3>
                <p className="mt-3.5 text-[1.01rem] leading-[1.6] text-muted-ink">
                  {b.problem}
                </p>
              </div>

              {/* the response */}
              <div className="rule-blue border-l-brand/70 pl-5 transition-colors duration-300 group-hover:border-l-brand md:pl-6">
                <h4 className="text-[1.01rem] leading-[1.4] font-bold text-brand sm:text-[1.06rem]">
                  {b.responseLead}
                </h4>
                <p className="mt-2.5 text-[1.01rem] leading-[1.6] text-ink/85">
                  {b.response}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p
          data-reveal
          className="mt-12 max-w-[46rem] text-[1.22rem] leading-[1.35] font-extrabold tracking-[-0.02em] text-ink sm:text-[1.5rem]"
        >
          You used to be able to out-price all of this. Not at today&rsquo;s
          spreads. The lender who wins now is the one{" "}
          <span className="accent">whose pipeline doesn&rsquo;t leak.</span>
        </p>
      </div>
    </section>
  );
}

