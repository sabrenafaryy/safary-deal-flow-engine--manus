/**
 * Conversion tracking — the four events required by the landing page spec:
 * cta_click · form_start · form_submit · booking_complete
 *
 * Sends to umami if present, and always mirrors to dataLayer so the client can wire
 * GTM/GA later without touching this code. Never throws.
 */

type TrackEvent =
  | "cta_click"
  | "form_start"
  | "form_submit"
  | "booking_complete";

declare global {
  interface Window {
    umami?: { track: (name: string, data?: Record<string, unknown>) => void };
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: TrackEvent, data: Record<string, unknown> = {}) {
  try {
    const payload = { ...data, ...readUtm() };
    window.umami?.track(event, payload);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
  } catch {
    /* tracking must never break the page */
  }
}

/** One utm_campaign / utm_source / utm_medium / utm_term per URL, per spec. */
export function readUtm(): Record<string, string> {
  try {
    const p = new URLSearchParams(window.location.search);
    const out: Record<string, string> = {};
    for (const k of [
      "utm_campaign",
      "utm_source",
      "utm_medium",
      "utm_term",
    ] as const) {
      const v = p.get(k);
      if (v) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}
