/**
 * SECTION 9b — The Investment. Transparent pricing, sits between What's Included
 * and the comparison. RULE: no markup on media; no per-funded-loan fee. Copy verbatim.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";

const CELLS: [string, string][] = [
  ["$2,500", "One-time setup"],
  ["$5,000/mo", "Management"],
  ["$5,000/mo", "Minimum media — paid by you, from accounts in your name"],
];

export function Investment() {
  return (
    <section className="bubble-field relative bg-paper py-20 sm:py-28">
      <div className="container">
        <div data-reveal className="max-w-[44rem]">
          <SectionLabel index="—">The investment</SectionLabel>
          <h2 className="h-section mt-5 text-ink">
            One price. <span className="accent">No markup on media.</span>
          </h2>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {CELLS.map(([n, l]) => (
            <div
              key={l}
              className="rounded-2xl border border-hairline bg-white p-7 text-center shadow-[0_1px_3px_rgba(15,23,41,0.05)]"
            >
              <p className="numeral text-[2.4rem] leading-none text-ink">{n}</p>
              <p className="mt-3 text-[0.92rem] leading-[1.45] text-muted-ink">
                {l}
              </p>
            </div>
          ))}
        </div>

        <p
          data-reveal
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          className="mt-8 max-w-[60rem] text-[1.02rem] leading-[1.62] text-muted-ink"
        >
          Media is never marked up and never runs through our account &mdash; it
          stays in an account you own. And there&rsquo;s{" "}
          <strong className="font-bold text-ink">no per-funded-loan fee</strong>:
          one flat price, whether you close two deals in a month or ten.
        </p>
      </div>
    </section>
  );
}
