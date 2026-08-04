/**
 * SECTION 7 — The Solution. Navy conviction band (dark = claim).
 * Four lines, no comparison yet. Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

export function Solution() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
          <div data-reveal>
            <SectionLabel index="04" onDark>
              What the thing is
            </SectionLabel>
            <h2 className="h-section mt-5 text-white">
              A borrower acquisition system,{" "}
              <span className="accent">built and run for you.</span>
            </h2>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="max-w-[38rem] space-y-6"
          >
            <p className="text-[1.12rem] leading-[1.58] text-on-dark sm:text-[1.2rem]">
              We run the ads that find investors in your markets. We build the
              funnel pages that make you the obvious call instead of one of four
              quotes. And we run the follow-up that turns an inquiry into a booked
              appointment while the deal is still live.
            </p>

            <p className="border-l-2 border-brand pl-5 text-[1.12rem] leading-[1.5] font-bold text-white sm:text-[1.24rem]">
              You get pre-qualified borrowers on your calendar with the deal
              already on the sheet.
            </p>

            <p className="text-[1.02rem] leading-[1.6] text-on-dark-muted">
              Most agencies stop at the click and call it a campaign. We
              don&rsquo;t stop until it&rsquo;s an appointment &mdash; which is why
              we can put a number on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
