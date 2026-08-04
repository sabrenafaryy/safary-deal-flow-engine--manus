/**
 * SECTION 12 — CTA, formula position two. Navy conviction band.
 */
import { CtaButton, CtaMicro } from "@/components/brand/CtaButton";

export function CtaBand() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-18 sm:py-22">
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container relative">
        <div
          data-reveal
          className="flex flex-col items-start gap-9 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-[36rem]">
            {/* the offer restated as numerals — the page's conversion arithmetic */}
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 border-b border-white/12 pb-6">
              {[
                ["5+", "appointments a month"],
                ["5", "minute response"],
                ["$0", "markup on media"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="numeral text-[2.5rem] leading-[0.9] text-brand sm:text-[2.9rem]">
                    {n}
                  </p>
                  <p className="mono-label mt-2 text-on-dark-muted">{l}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-7 text-[1.6rem] leading-[1.14] font-extrabold tracking-[-0.028em] text-white sm:text-[2.15rem]">
              Let&rsquo;s see whether the math{" "}
              <span className="accent">works for you.</span>
            </h2>
            <CtaMicro onDark className="mt-4">
              Thirty minutes. Bring your close rate and your average deal size and
              we&rsquo;ll run it together.
            </CtaMicro>
          </div>
          <div className="shrink-0">
            <CtaButton position="mid_page" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
