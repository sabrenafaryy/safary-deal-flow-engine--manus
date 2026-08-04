/**
 * SECTION 14 — About Us. First person, headshot alongside.
 * NOTE FOR THE CLIENT: the guide states Sabrena writes this copy herself ("it has to sound
 * like her"). The paragraphs below are structural placeholders following the guide's brief
 * (who I am / why lending / what I've built / what I'm betting) and MUST be replaced with
 * her own words before launch. The headshot is a placeholder frame, not a stock photo —
 * substituting a stock person would misrepresent the founder.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import { User } from "lucide-react";

export function About() {
  return (
    <section className="bubble-field relative bg-paper py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <div data-reveal className="shrink-0">
            <div className="flex aspect-square w-[150px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-hairline bg-white text-center lg:w-[220px]">
              <User className="size-7 text-muted-ink/50" strokeWidth={1.6} />
              <span className="mono-label px-4 text-[0.62rem] leading-[1.5] text-muted-ink normal-case">
                Headshot
                <br />
                to be added
              </span>
            </div>
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

            <p className="mono-label mt-7 rounded-lg border border-hairline bg-white px-4 py-3 text-[0.64rem] leading-[1.6] text-muted-ink normal-case">
              Placeholder copy following the brief &mdash; to be replaced with
              Sabrena&rsquo;s own words before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
