/**
 * SECTION 15 — FAQ. Native <details> for accessibility and zero-JS correctness.
 * Copy verbatim. RULE: no tech stack named in any answer.
 */
import { SectionLabel } from "@/components/brand/SectionLabel";
import { Plus } from "lucide-react";

const QA: [string, string][] = [
  [
    "How is this different from a lead vendor?",
    "They sell you a contact record, often the same one they sold three other lenders. We generate the borrower, qualify him, and book him — with the property, the price, the ARV and the close date already captured.",
  ],
  [
    "What happens to my pipeline if I stop?",
    "Nothing changes, because it was never held anywhere you couldn't reach. Every lead lands in your own system as it arrives, the ad accounts are in your name from day one, and full export is written into the contract. You don't have to ask for your data — you already have it.",
  ],
  [
    "How fast will I see funded loans?",
    "Appointments start in month one, mostly from reactivating your existing list — that's why the guarantee starts month two rather than day one. First fundings from cold traffic land in month two to three, because underwriting and closing runs 30 to 60 days even for a borrower who's ready today. Month six looks materially better than month three.",
  ],
  [
    "What if an appointment isn't qualified?",
    "The definition is agreed in writing before we start, and every appointment shows up in your report with its outcome. If it doesn't meet the definition, it doesn't count toward the guarantee — and it doesn't count toward our volume tiers either.",
  ],
  [
    "Do you work with brokers or only lenders who fund?",
    "Both, and hybrids. The guarantee is on appointments, and an appointment doesn't care whether you fund the deal or place it. The economics differ though — a broker earns points at close, so this turns on average deal size rather than volume. We ask for that number on the call and tell you honestly whether it clears.",
  ],
  [
    "Who pays for the ads?",
    "You do, directly, from an account in your name. Media never runs through my account and it's never marked up. There's also no per-funded-loan fee — charging you on closings would give you a reason to under-report them, on the exact number this engagement is measured by.",
  ],
  [
    "Do you work with my competitors?",
    "Not in your market, for your product. Territory is agreed before signing.",
  ],
  [
    "How do you handle compliance?",
    "Business purpose only, geo-fenced to your licensed markets, NMLS displayed where required, consent captured on every form, registered messaging throughout. And no invented reviews or results, ever.",
  ],
];

export function Faq() {
  return (
    <section className="relative border-t border-hairline bg-white py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="11">Questions</SectionLabel>
            <h2 className="h-section mt-5 text-ink">
              The things lenders <span className="accent">always ask</span>
            </h2>
          </div>

          <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {QA.map(([q, a]) => (
              <details
                key={q}
                className="group border-b border-hairline py-5 first:border-t first:border-hairline"
              >
                <summary className="flex items-start justify-between gap-6 text-[1.04rem] leading-[1.4] font-bold tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-brand sm:text-[1.1rem]">
                  {q}
                  <Plus
                    className="mt-0.5 size-5 shrink-0 text-brand transition-transform duration-250 ease-out group-open:rotate-45"
                    strokeWidth={2.6}
                  />
                </summary>
                <p className="mt-3.5 max-w-[46rem] pr-10 text-[1rem] leading-[1.62] text-muted-ink">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

