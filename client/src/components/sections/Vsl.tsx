/**
 * SECTION 3+4 — VSL and the first CTA (large, directly under the player).
 * Per spec: the three qualifying questions are rendered as real text, never a
 * "coming soon" box. A real player drops into the same frame when the video exists.
 */
import { CtaButton, CtaMicro } from "@/components/brand/CtaButton";
import { SectionLabel } from "@/components/brand/SectionLabel";

const QUESTIONS = [
  "Are you funding fewer deals than your pipeline should be producing?",
  "Do inquiries come in and go quiet before anyone calls them back?",
  "Would you take six pre-qualified investor appointments a month, guaranteed?",
];

export function Vsl() {
  return (
    <section className="bubble-field relative bg-paper py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-[52rem]">
          <div data-reveal className="flex flex-col items-center text-center">
            <SectionLabel index="02">The two-minute version</SectionLabel>
            <h2 className="h-section mt-5 text-ink">
              Two minutes on <span className="accent">exactly how this works</span>
            </h2>
          </div>

          {/* the three questions, set as the page's most emphatic reading moment */}
          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_2px_4px_rgba(15,23,41,0.04)]"
          >
            <ol className="divide-y divide-hairline">
              {QUESTIONS.map((q, i) => (
                <li
                  key={q}
                  className="group flex items-start gap-5 px-6 py-6 transition-colors duration-200 hover:bg-paper sm:px-9 sm:py-7"
                >
                  <span className="numeral mono-label mt-1.5 shrink-0 text-brand">
                    0{i + 1}
                  </span>
                  <p
                    className={`text-[1.1rem] leading-[1.42] font-bold tracking-[-0.015em] sm:text-[1.28rem] ${
                      i === QUESTIONS.length - 1 ? "text-brand" : "text-ink"
                    }`}
                  >
                    {q}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA — formula position one */}
          <div
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-11 flex flex-col items-center text-center"
          >
            <CtaButton position="post_vsl" size="lg" />
            <CtaMicro className="mt-4 max-w-[30rem]">
              30 minutes. If the math doesn&rsquo;t work for you, I&rsquo;ll say so
              on the call.
            </CtaMicro>
          </div>
        </div>
      </div>
    </section>
  );
}
