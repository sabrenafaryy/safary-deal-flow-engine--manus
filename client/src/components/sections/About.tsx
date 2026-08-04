/**
 * SECTION 14 — About Us. First person, headshot alongside. Copy is Sabrena's own.
 * The headshot frame is a placeholder until the real photo is dropped in.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

export function About() {
  return (
    <section className="bubble-field relative bg-paper py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <div data-reveal className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}founder.jpg`}
              alt="Sabrena Fary, founder of Safary Marketing"
              className="aspect-square w-[150px] rounded-2xl border border-hairline object-cover shadow-[0_10px_30px_rgba(15,23,41,0.12)] lg:w-[220px]"
            />
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="max-w-[46rem]"
          >
            <SectionLabel index="10">The operator</SectionLabel>
            <h2 className="h-section mt-5 text-ink">
              Who you&rsquo;d be <span className="accent">working with</span>
            </h2>

            <div className="mt-7 space-y-5 text-[1.04rem] leading-[1.65] text-muted-ink">
              <p>
                I&rsquo;m Sabrena. I build borrower acquisition systems for private
                money lenders &mdash; and I only build them for lenders, because
                the buying behaviour of a real estate investor with a property
                under contract looks nothing like a consumer shopping a mortgage.
              </p>
              <p>
                Before this I spent eight years building technology products at
                large companies. Then I went into investment real estate myself
                &mdash; got my license, did the deals, and joined the board of the
                OKC Real Estate Investors Association, where I work with lenders,
                investors and contractors every week. I&rsquo;ve run my own
                marketing company for the last three years, so this is far from my
                first campaign. That combination is the point: I&rsquo;m in the
                room with your borrowers, I have the marketing to reach them, and
                the technical background to build the system that delivers it.
              </p>
              <p>
                I came to lending because it is one of the few industries where the
                marketing can be held to a number that actually matters. Not
                impressions. Not clicks. Appointments with borrowers who have an
                address, a price and a close date &mdash; and eventually, cost per
                funded loan.
              </p>
              <p>
                What I&rsquo;m betting on is accountability. Most agencies sell you
                activity and let you work out whether it paid. I&rsquo;d rather put
                a number in the contract, report every appointment and its outcome,
                and let you audit me instead of trust me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
