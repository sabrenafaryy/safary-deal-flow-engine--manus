/**
 * SECTION 16 — Booking. Exactly EIGHT fields, nothing more (hard spec requirement).
 * Button label: "Book My Call".
 *
 * Tracking: form_start fires on first interaction, form_submit on submit,
 * booking_complete once the calendar confirms.
 *
 * CALENDAR: the flow is step-one qualify (the 8 fields), then hand off to the live
 * GoHighLevel calendar. Set the two values below (or their env vars) to go live:
 *
 *   GHL_CALENDAR_URL  — your GHL calendar embed link. In GHL: Calendars → the calendar →
 *                       Share → copy the booking widget URL. It looks like
 *                       https://api.leadconnectorhq.com/widget/booking/XXXXXXXX
 *                       (or a link.<yourdomain> equivalent). Name/email/phone are passed
 *                       through as prefill so those aren't asked twice.
 *
 *   GHL_WEBHOOK_URL   — (optional but recommended) a GHL Inbound Webhook trigger URL. On
 *                       submit we POST all 8 answers to it so the full qualification lands
 *                       in GHL as a contact, not just the three fields the calendar prefills.
 *                       In GHL: Automation → Workflows → Add trigger → "Inbound Webhook".
 */
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";
import { SectionLabel } from "@/components/brand/SectionLabel";
import { ArrowRight, CalendarCheck, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const GHL_CALENDAR_URL: string =
  (import.meta.env.VITE_GHL_CALENDAR_URL as string | undefined) ?? "";

const GHL_WEBHOOK_URL: string =
  (import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined) ?? "";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  loans: string;
  markets: string;
  model: string;
  spend: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  loans: "",
  markets: "",
  model: "",
  spend: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const started = useRef(false);

  const set = (k: keyof FormState) => (v: string) => {
    if (!started.current) {
      started.current = true;
      track("form_start");
    }
    setForm((f) => ({ ...f, [k]: v }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track("form_submit", {
      loans_per_month: form.loans,
      funding_model: form.model,
      marketing_spend: form.spend,
    });

    // Send the full qualification to GHL so nothing is lost on the handoff.
    // Fire-and-forget — the calendar shows immediately either way.
    if (GHL_WEBHOOK_URL) {
      const [first, ...rest] = form.name.trim().split(/\s+/);
      void fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: first ?? "",
          last_name: rest.join(" "),
          full_name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          loans_per_month: form.loans,
          lending_markets: form.markets,
          funding_model: form.model,
          monthly_marketing_spend: form.spend,
          source: "Deal Flow Engine — landing page",
        }),
      }).catch(() => {
        /* never block the calendar on a webhook hiccup */
      });
    }

    setSubmitted(true);
  };

  return (
    <section
      id="book"
      className="grain relative scroll-mt-20 overflow-hidden bg-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 size-[32rem] rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-18">
          {/* ---------- left: the pitch for the call ---------- */}
          <div data-reveal>
            <SectionLabel index="12" onDark>
              Book the call
            </SectionLabel>
            <h2 className="h-section mt-5 text-white">
              Let&rsquo;s see whether{" "}
              <span className="accent">the math works</span>
            </h2>
            <p className="mt-6 max-w-[32rem] text-[1.06rem] leading-[1.6] text-on-dark">
              Thirty minutes. Bring your average deal size and your close rate and
              we&rsquo;ll run it together. If it doesn&rsquo;t work for you,
              I&rsquo;ll tell you on the call.
            </p>

            <ul className="mt-9 space-y-4 border-t border-white/10 pt-8">
              {[
                ["30", "minutes, once. No sequence of discovery calls."],
                ["8", "questions before the call so we don't waste it."],
                ["0", "obligation. If the numbers don't work, I'll say so."],
              ].map(([n, t]) => (
                <li key={n} className="flex items-baseline gap-4">
                  <span className="numeral w-[2.6rem] shrink-0 text-[1.9rem] text-brand">
                    {n}
                  </span>
                  <span className="text-[0.98rem] leading-[1.5] text-on-dark">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- right: form, then calendar ---------- */}
          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            {submitted ? (
              <Calendar form={form} />
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-on-dark-line bg-ink-2/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={set("name")}
                    required
                    autoComplete="name"
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={set("company")}
                    required
                    autoComplete="organization"
                  />
                  <Field
                    label="Work email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    required
                    autoComplete="email"
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    required
                    autoComplete="tel"
                  />
                  <SelectField
                    label="Loans per month"
                    value={form.loans}
                    onChange={set("loans")}
                    options={["1–3", "4–10", "11–25", "25+"]}
                  />
                  <SelectField
                    label="Current monthly marketing spend"
                    value={form.spend}
                    onChange={set("spend")}
                    options={["None", "Under $2K", "$2–5K", "$5K+"]}
                  />
                  <Field
                    label="Where do you lend?"
                    value={form.markets}
                    onChange={set("markets")}
                    required
                    className="sm:col-span-2"
                    placeholder="States, metros or counties"
                  />
                  <SelectField
                    label="Do you fund your own, place with wholesale sources, or both?"
                    value={form.model}
                    onChange={set("model")}
                    options={[
                      "I fund my own",
                      "I place with wholesale sources",
                      "Both",
                    ]}
                    className="sm:col-span-2"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[1.03rem] font-semibold text-white shadow-[0_8px_26px_rgba(13,129,211,0.34)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_34px_rgba(13,129,211,0.44)] active:translate-y-0 active:scale-[0.985] focus-visible:ring-4 focus-visible:ring-brand/35 focus-visible:outline-none"
                >
                  Book My Call
                  <ArrowRight
                    className="size-[1.05em] transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                    strokeWidth={2.4}
                  />
                </button>

                <p className="mt-4 flex items-start gap-2 text-[0.8rem] leading-[1.5] text-on-dark-muted">
                  <Lock className="mt-0.5 size-3.5 shrink-0" strokeWidth={2} />
                  Eight questions. By submitting you agree to be contacted about
                  your enquiry. Business purpose lending only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ calendar ------------------------------ */

function Calendar({ form }: { form: FormState }) {
  useEffect(() => {
    if (!GHL_CALENDAR_URL) return;
    // GHL's embed script auto-sizes the iframe to the calendar's content.
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);

    // Best-effort completion tracking (GHL posts a message on booking).
    const onMessage = (e: MessageEvent) => {
      const data = e.data;
      const evt =
        typeof data === "string" ? data : (data?.type ?? data?.event ?? "");
      if (typeof evt === "string" && /appointment|booking/i.test(evt)) {
        track("booking_complete");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const [first, ...rest] = form.name.trim().split(/\s+/);
  const params = new URLSearchParams({
    first_name: first ?? "",
    last_name: rest.join(" "),
    email: form.email,
    phone: form.phone,
  });
  const src = GHL_CALENDAR_URL
    ? `${GHL_CALENDAR_URL}${GHL_CALENDAR_URL.includes("?") ? "&" : "?"}${params}`
    : "";

  return (
    <div className="rounded-2xl border border-on-dark-line bg-ink-2/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur sm:p-8">
      <div className="flex items-start gap-3.5 border-b border-white/10 pb-5">
        <CalendarCheck className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={2} />
        <div>
          <p className="text-[1.1rem] font-extrabold tracking-[-0.02em] text-white">
            Pick your time, {form.name.split(" ")[0] || "there"}.
          </p>
          <p className="mt-1 text-[0.92rem] leading-[1.5] text-on-dark-muted">
            Your answers are attached. We won&rsquo;t ask them again.
          </p>
        </div>
      </div>

      {GHL_CALENDAR_URL ? (
        <iframe
          title="Book your call"
          src={src}
          className="mt-5 w-full overflow-hidden rounded-xl bg-white"
          style={{ minWidth: 280, height: 700, border: "none" }}
          scrolling="no"
        />
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-on-dark-line bg-white/3 px-6 py-12 text-center">
          <p className="mono-label text-brand-light">Calendar not yet connected</p>
          <p className="mx-auto mt-3 max-w-[26rem] text-[0.92rem] leading-[1.6] text-on-dark-muted">
            Add your GHL calendar link as <code>VITE_GHL_CALENDAR_URL</code> and the
            embedded calendar replaces this panel. Until then, these eight answers
            are captured on submit.
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ fields ------------------------------ */

const FIELD_CLASS =
  "w-full rounded-lg border border-white/14 bg-white/6 px-3.5 py-3 text-[0.98rem] text-white placeholder:text-on-dark-muted/70 transition-colors duration-200 focus:border-brand focus:bg-ink-3 focus:ring-2 focus:ring-brand/30 focus:outline-none";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono-label mb-2 block text-on-dark-muted">{children}</span>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  className,
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={FIELD_CLASS}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <Label>{label}</Label>
      <select
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className={cn(FIELD_CLASS, value === "" && "text-on-dark-muted/70")}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-3 text-white">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
