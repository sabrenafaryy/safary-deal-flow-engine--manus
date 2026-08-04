/**
 * SECTION 9 — What's Included. Four pillars up top; the full 23-line build tucked behind a
 * "See everything" dropdown; then the guarantee and the math. Scannable by default, complete
 * on one click. RULE: never name the tech stack. Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import {
  Megaphone,
  MousePointerClick,
  Cog,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

type Group = {
  label: string;
  icon: React.ElementType;
  summary: string;
  items: [string, string][];
};

const GROUPS: Group[] = [
  {
    label: "The Ads",
    icon: Megaphone,
    summary: "Investor-intent search, social & map — running only where you lend.",
    items: [
      ["Market-Matched Search Campaigns", "Ads run only where you lend, split by loan product."],
      ["Investor-Intent Keyword Architecture", "We bid what investors search and block what homeowners search."],
      ["25 Conversion-Tested Ads", "Five hooks, five bodies, four angles that move investors."],
      ["Retargeting That Stays on the Deal", "We follow the 95% who don't convert on the first visit."],
      ["Google Business Profile Optimization", "Claimed, verified, fully built out: categories, services, markets, photos, Q&A and posts."],
      ["Local Results Placement", "Google shows three local businesses above the paid ads. Most lenders aren't one of them. We get you there and keep reviews coming in."],
    ],
  },
  {
    label: "The Funnels",
    icon: MousePointerClick,
    summary: "One page per loan product, built to make you the obvious call.",
    items: [
      ["Product-Specific Deal Pages", "One page per loan type. Not your homepage."],
      ["Short-Form Deal Capture", "A few questions, one at a time, done in under a minute."],
      ["Your Terms, Stated Plainly", "Leverage, minimums, timelines. Published, not hidden behind a call."],
      ["Recent Closings, Real Numbers", "Your own funded deals doing the convincing."],
      ["Instant Booking on the Thank-You Page", "A calendar the second they submit, not an email later."],
      ["Built for a Phone", "They're standing in the property when they find you."],
      ["VSL & Ad Scripts", "Written for your offer, not pulled from a template."],
    ],
  },
  {
    label: "The Engine Behind It",
    icon: Cog,
    summary: "5-minute response, qualification to your box, nurture & takeout.",
    items: [
      ["Five-Minute Response, Around the Clock", "Every inquiry, every hour, automatically."],
      ["Qualification Built to Your Box", "Your criteria, not a template. We screen, you underwrite."],
      ["Booking & No-Show Rescue", "Confirmed, reminded, and rebooked if they miss."],
      ["Database Reactivation", "Your old borrowers, worked. They fund every three to six months."],
      ["Seasoning & Takeout Campaigns", "We're there with their refi number before anyone else is."],
      ["Review Engine", "Requests fire automatically at funding. More reviews, higher local ranking, cheaper leads."],
    ],
  },
  {
    label: "The Reporting",
    icon: BarChart3,
    summary: "Cost per funded loan, every appointment logged, all in your CRM.",
    items: [
      ["Cost Per Funded Loan", "Spend traced to closing, by campaign and keyword."],
      ["Every Appointment, Every Outcome", "The full log, monthly. Audit the guarantee yourself."],
      ["Everything Lands In Your System", "Leads flow into your CRM as they come in. You're never waiting on us for your own data."],
      ["You Own All Of It", "Ad accounts in your name, funded by you. Full export any time, written into the agreement."],
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

        {/* four pillars */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, gi) => (
            <div
              key={g.label}
              data-reveal
              style={{ "--reveal-delay": `${gi * 50}ms` } as React.CSSProperties}
              className="rounded-2xl border border-hairline bg-paper p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <g.icon className="size-[1.35rem]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[1.08rem] font-extrabold tracking-[-0.015em] text-ink">
                {g.label}
              </h3>
              <p className="mt-2 text-[0.94rem] leading-[1.5] text-muted-ink">
                {g.summary}
              </p>
            </div>
          ))}
        </div>

        {/* the full build — tucked behind one dropdown */}
        <details
          data-reveal
          className="group mt-4 overflow-hidden rounded-2xl border border-hairline bg-white"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-[1rem] font-bold text-ink [&::-webkit-details-marker]:hidden">
            <span>The full build &mdash; 23 deliverables, all included</span>
            <span className="mono-label flex items-center gap-1.5 text-brand">
              See everything
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>
          <div className="space-y-10 border-t border-hairline px-6 py-8">
            {GROUPS.map((g) => (
              <div key={g.label}>
                <h4 className="mono-label mb-3.5 border-b border-hairline pb-2.5 text-brand">
                  {g.label}
                </h4>
                <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                  {g.items.map(([title, desc]) => (
                    <li
                      key={title}
                      className="text-[0.93rem] leading-[1.5] text-muted-ink"
                    >
                      <strong className="font-bold text-ink">{title}</strong>{" "}
                      &mdash; {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>

        {/* guarantee + math */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            data-reveal
            className="rounded-2xl border-2 border-brand/45 bg-brand/6 p-7"
          >
            <ShieldCheck className="size-5 text-brand" strokeWidth={2} />
            <h3 className="mt-4 text-[1.05rem] font-extrabold tracking-[-0.015em] text-ink">
              The Guarantee
            </h3>
            <div className="mt-4 flex items-end gap-6 border-y border-brand/25 py-4">
              <div>
                <p className="numeral text-[3.1rem] text-brand">6</p>
                <p className="mono-label mt-1 text-muted-ink">every month</p>
              </div>
              <span aria-hidden="true" className="mb-6 h-8 w-px bg-brand/25" />
              <div>
                <p className="numeral text-[3.1rem] text-ink">M2</p>
                <p className="mono-label mt-1 text-muted-ink">guarantee begins</p>
              </div>
            </div>
            <p className="mt-4 text-[0.96rem] leading-[1.58] text-muted-ink">
              Six pre-qualified appointments every month, starting month two.
              Month one is build and ramp.{" "}
              <strong className="font-bold text-ink">
                Miss a month after that and we work that month free.
              </strong>{" "}
              After month six it becomes a performance standard &mdash; miss six
              in a month and you can cancel with 30 days&rsquo; notice.
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.55] text-muted-ink">
              A qualifying appointment is defined in writing and signed off before
              we start &mdash; business purpose, non-owner-occupied, a specific
              property with price and ARV, a close date, stated experience, above
              your loan minimum, booked and confirmed. Every one appears in your
              monthly report with its outcome.
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.55] text-muted-ink">
              <strong className="font-bold text-ink">What suspends it:</strong> a
              bookable calendar with open slots, ad spend at the minimum,
              prior-month funding reporting, and appointments attended within 24
              hours. Two consecutive misses and either of us can walk &mdash;
              setup fee back, and you keep every lead, record and ad account.
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.55] text-muted-ink">
              We don&rsquo;t guarantee funded loans. We don&rsquo;t control your
              underwriting, your pricing or your capital. We guarantee the
              appointment and we report the funding.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            className="rounded-2xl border border-hairline bg-paper p-7"
          >
            <span className="mono-label text-brand">The Math</span>
            <p className="numeral mt-3 text-[2.6rem] text-ink">
              6<span className="text-[1rem] font-bold text-muted-ink"> a month</span>
            </p>
            <p className="mt-2 text-[0.96rem] leading-[1.58] text-muted-ink">
              qualified appointments. Close a third of them and that&rsquo;s about
              two funded loans.
            </p>
            <dl className="mt-4 space-y-3 border-t border-hairline pt-4">
              <div>
                <dt className="text-[0.94rem] font-bold text-ink">If you fund it</dt>
                <dd className="text-[0.94rem] leading-[1.5] text-muted-ink">
                  $12,000 to $20,000 per deal on a $400K bridge.
                </dd>
              </div>
              <div>
                <dt className="text-[0.94rem] font-bold text-ink">If you place it</dt>
                <dd className="text-[0.94rem] leading-[1.5] text-muted-ink">
                  One to two points at close &mdash; so it turns on your average
                  deal size.
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[0.94rem] leading-[1.5] font-semibold text-ink">
              One funded loan more than covers the whole engagement. On the call we
              run this with your real close rate and deal size, not an industry
              average.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
