/**
 * SECTION 3+4 — VSL and the first CTA (large, directly under the player).
 * A real 16:9 video placeholder (poster + play button) sits where the walkthrough goes;
 * the three qualifying questions stay as supporting text. Swap the placeholder for the
 * embed when the video exists.
 */
import { CtaButton, CtaMicro } from "@/components/brand/CtaButton";
import { SectionLabel } from "@/components/brand/SectionLabel";
import { Play } from "lucide-react";

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

          {/* VSL placeholder — replace with the real embed (Wistia / YouTube / Vimeo) when ready */}
          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="relative mt-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-on-dark-line bg-ink shadow-[0_24px_60px_rgba(15,23,41,0.22)]"
          >
            <div
              aria-hidden="true"
              className="grid-field pointer-events-none absolute inset-0 opacity-50"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-ink opacity-80"
            />
            <span className="relative flex size-20 items-center justify-center rounded-full bg-brand shadow-[0_10px_34px_rgba(13,129,211,0.5)]">
              <Play className="ml-1 size-8 fill-white text-white" />
            </span>
            <span className="mono-label absolute bottom-4 left-5 text-on-dark-muted">
              2-minute walkthrough
            </span>
          </div>

          {/* CTA — formula position one */}
          <div
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-9 flex flex-col items-center text-center"
          >
            <CtaButton position="post_vsl" size="lg" />
            <CtaMicro className="mt-4 max-w-[30rem]">
              30 minutes. If the math doesn&rsquo;t work for you, I&rsquo;ll say so
              on the call.
            </CtaMicro>
          </div>

          {/* supporting questions */}
          <ul
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            className="mx-auto mt-11 flex max-w-[40rem] flex-col gap-3"
          >
            {QUESTIONS.map((q, i) => (
              <li
                key={q}
                className={`relative pl-6 text-[0.98rem] leading-[1.45] ${
                  i === QUESTIONS.length - 1
                    ? "font-semibold text-brand"
                    : "text-muted-ink"
                }`}
              >
                <span className="absolute top-[0.55rem] left-0 size-2 rounded-full bg-brand" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
