/**
 * SECTION 9 — What's Included: four labeled groups, then compliance, guarantee and math.
 * Hairline-separated rows, not cards — this is a spec sheet and should read like one.
 * RULE: never name the tech stack. No CRM or platform names appear here.
 * Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import {
  Check,
  Megaphone,
  MousePointerClick,
  Cog,
  BarChart3,
  ShieldCheck,
  Scale,
} from "lucide-react";

type Group = {
  label: string;
  icon: React.ElementType;
  items: [string, string][];
};

const GROUPS: Group[] = [
  {
    label: "The Ads",
    icon: Megaphone,
    items: [
      [
        "Market-Matched Search Campaigns",
        "Ads run only where you lend, split by loan product.",
      ],
      [
        "Investor-Intent Keyword Architecture",
        "We bid what investors search and block what homeowners search.",
      ],
      [
        "25 Conversion-Tested Ads",
        "Five hooks, five bodies, four angles that move investors.",
      ],
      [
        "Retargeting That Stays on the Deal",
        "We follow the 95% who don't convert on the first visit.",
      ],
      [
        "Google Business Profile Optimization",
        "Claimed, verified, fully built out: categories, services, markets, photos, Q&A and posts.",
      ],
      [
        "Map Pack Positioning",
        "The map sits above the paid results. Most lenders leave it empty. We fill it and feed it reviews.",
      ],
    ],
  },
  {
    label: "The Funnels",
    icon: MousePointerClick,
    items: [
      [
        "Product-Specific Deal Pages",
        "One page per loan type. Not your homepage.",
      ],
      [
        "Short-Form Deal Capture",
        "A few questions, one at a time, done in under a minute.",
      ],
      [
        "Your Terms, Stated Plainly",
        "Leverage, minimums, timelines. Published, not hidden behind a call.",
      ],
      [
        "Recent Closings, Real Numbers",
        "Your own funded deals doing the convincing.",
      ],
      [
        "Instant Booking on the Thank-You Page",
        "A calendar the second he submits, not an email later.",
      ],
      [
        "Built for a Phone",
        "He's standing in the property when he finds you.",
      ],
      [
        "VSL & Ad Scripts",
        "Written for your offer, not pulled from a template.",
      ],
    ],
  },
  {
    label: "The Engine Behind It",
    icon: Cog,
    items: [
      [
        "Five-Minute Response, Around the Clock",
        "Every inquiry, every hour, automatically.",
      ],
      [
        "Qualification Built to Your Box",
        "Your criteria, not a template. We screen, you underwrite.",
      ],
      [
        "Booking & No-Show Rescue",
        "Confirmed, reminded, and rebooked if he misses.",
      ],
      [
        "Database Reactivation",
        "Your old borrowers, worked. They fund every three to six months.",
      ],
      [
        "Seasoning & Takeout Campaigns",
        "We're there with his refi number before anyone else is.",
      ],
      [
        "Review Engine",
        "Requests fire at funding. Reviews feed the map. The map feeds the ads.",
      ],
    ],
  },
  {
    label: "The Reporting",
    icon: BarChart3,
    items: [
      [
        "Cost Per Funded Loan",
        "Spend traced to closing, by campaign and keyword.",
      ],
      [
        "Every Appointment, Every Outcome",
        "The full log, monthly. Audit the guarantee yourself.",
      ],
      [
        "Everything Lands In Your System",
        "Leads flow into your CRM as they come in. You're never waiting on us for your own data.",
      ],
      [
        "You Own All Of It",
        "Ad accounts in your name, funded by you. Full export any time, written into the agreement.",
      ],
    ],
  },
];

export function Included() {
  return (
    <section className="relative border-t border-hairline bg-white py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[44rem]">
          <SectionLabel index="06">The build</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            What we <span className="accent">actually build</span> for you
          </h2>
        </div>

        {/* four scope groups — read as a term sheet: category · deliverable · explanation */}
        <div className="mt-16 space-y-14">
          {GROUPS.map((g, gi) => (
            <section
              key={g.label}
              data-reveal
              style={{ "--reveal-delay": `${gi * 50}ms` } as React.CSSProperties}
              className="grid gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-x-14"
            >
              {/* category — a standing header column, term-sheet style */}
              <header className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-baseline gap-3 border-t-2 border-brand pt-4">
                  <span className="numeral text-[2.1rem] text-brand">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <g.icon
                    className="mb-1 size-[1.15rem] shrink-0 self-end text-brand/60"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-3 text-[1.22rem] leading-[1.15] font-extrabold tracking-[-0.025em] text-ink">
                  {g.label}
                </h3>
                <p className="mono-label mt-2 text-muted-ink">
                  {String(g.items.length).padStart(2, "0")} line items
                </p>
              </header>

              {/* deliverables — hairline rows, name and explanation on separate levels */}
              <ul className="divide-y divide-hairline border-t border-hairline">
                {g.items.map(([title, desc]) => (
                  <li
                    key={title}
                    className="group grid gap-x-8 gap-y-1.5 py-4 transition-colors duration-200 hover:bg-paper sm:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] sm:py-4.5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[0.3rem] flex size-[1.05rem] shrink-0 items-center justify-center rounded-full bg-brand/10 transition-colors duration-200 group-hover:bg-brand">
                        <Check
                          className="size-[0.6rem] text-brand transition-colors duration-200 group-hover:text-white"
                          strokeWidth={3.4}
                        />
                      </span>
                      <span className="text-[0.98rem] leading-[1.42] font-bold tracking-[-0.012em] text-ink">
                        {title}
                      </span>
                    </div>
                    <span className="pl-[2.05rem] text-[0.96rem] leading-[1.55] text-muted-ink sm:pl-0">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* compliance + guarantee + math */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div
            data-reveal
            className="rounded-2xl border border-hairline bg-paper p-7"
          >
            <Scale className="size-5 text-brand" strokeWidth={2} />
            <h3 className="mt-4 text-[1.05rem] font-extrabold tracking-[-0.015em] text-ink">
              Built for a Regulated Business
            </h3>
            <p className="mt-3 text-[0.96rem] leading-[1.58] text-muted-ink">
              Business purpose only. Geo-fenced to your licensed markets. NMLS
              where required. Consent on every form, registered messaging
              throughout. No invented reviews or results &mdash; ever.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            className="rounded-2xl border-2 border-brand/45 bg-brand/6 p-7"
          >
            <ShieldCheck className="size-5 text-brand" strokeWidth={2} />
            <h3 className="mt-4 text-[1.05rem] font-extrabold tracking-[-0.015em] text-ink">
              The Guarantee
            </h3>
            {/* numerals as editorial graphics */}
            <div className="mt-4 flex items-end gap-6 border-y border-brand/25 py-4">
              <div>
                <p className="numeral text-[3.1rem] text-brand">6</p>
                <p className="mono-label mt-1 text-muted-ink">appointments</p>
              </div>
              <span
                aria-hidden="true"
                className="mb-6 h-8 w-px bg-brand/25"
              />
              <div>
                <p className="numeral text-[3.1rem] text-ink">90</p>
                <p className="mono-label mt-1 text-muted-ink">days</p>
              </div>
            </div>
            <p className="mt-4 text-[0.96rem] leading-[1.58] text-muted-ink">
              Miss it and we work free until we hit it, and refund your setup fee.
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.55] text-muted-ink">
              A qualifying appointment: business purpose, non-owner-occupied, a
              specific property with price and ARV, a target close date, stated
              experience, above your loan minimum &mdash; plus any criteria of your
              own we agree to add. That definition is written down and signed off
              before we start, so there&rsquo;s never an argument about what
              counted.
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.55] text-muted-ink">
              We don&rsquo;t guarantee funded loans. We don&rsquo;t control your
              underwriting, your pricing or your capital. We guarantee what we
              control and we report the rest.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            className="rounded-2xl border border-hairline bg-paper p-7"
          >
            <span className="mono-label text-brand">The Math</span>
            <p className="numeral mt-3 text-[2.6rem] text-ink">
              $5,000<span className="text-[1rem] font-bold text-muted-ink">/mo</span>
            </p>
            <p className="mt-2 text-[0.96rem] leading-[1.58] text-muted-ink">
              in media produces roughly 6 to 12 appointments. At typical close
              rates, one to three of those fund.
            </p>
            <dl className="mt-4 space-y-3 border-t border-hairline pt-4">
              <div>
                <dt className="text-[0.94rem] font-bold text-ink">
                  If you fund it
                </dt>
                <dd className="text-[0.94rem] leading-[1.5] text-muted-ink">
                  $12K to $20K per deal on a $400K bridge. Break-even lands around
                  one deal a month.
                </dd>
              </div>
              <div>
                <dt className="text-[0.94rem] font-bold text-ink">
                  If you place it
                </dt>
                <dd className="text-[0.94rem] leading-[1.5] text-muted-ink">
                  $4K to $8K on the same deal. Break-even lands around two.
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[0.94rem] leading-[1.5] font-semibold text-ink">
              On the call we run this with your numbers instead of mine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
