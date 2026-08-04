# Deal Flow Engine — Landing Page Design Brief

## Scope of fidelity — what is locked vs. free

The user supplied `https://sabrenafaryy.github.io/safary-deal-flow-lp/` as the **brand**
reference and `LANDINGPAGEGUIDE.md` as the final copy + section order.

**LOCKED (must match the reference exactly):**
- Color palette — every hex below.
- Typefaces — Inter, Instrument Serif (italic accent), DM Mono.
- Logo / wordmark — `Safary` ink + `Marketing` brand blue lockup.
- Copy — final, used verbatim from the guide.

**FREE (explicit creative license granted by the user):**
- Layout, composition, grid, section structure and pacing.
- Motion, interaction, depth, texture.
- Which signature visual devices to invent, as long as they are built from the locked palette
  and type.

The goal is to be **more visually striking and higher-converting than the reference**, not to
reproduce it. The approach is **"Safary Institutional Blue — Editorial Fintech"**.

## Where this departs from the reference (deliberately)

1. **Editorial split hero** instead of a centered stack: oversized headline on a left column
   against a right-hand "deal sheet" artifact — a live-looking appointment record showing
   address / purchase price / ARV / close date. It shows the product instead of describing it.
2. **Numbered ledger rows** for Pain Points instead of a 2-up card grid: full-bleed rows,
   problem in large ink type, response inset behind a brand-blue rule. Reads like an audit.
3. **Horizontal stepped process rail** on desktop with a scroll-driven progress spine, rather
   than the reference's symmetric center timeline.
4. **Comparison table with an elevated, extended Safary column** that visually breaks the table
   grid — the column overhangs top and bottom so it reads as the answer, not a third option.
5. **Oversized numeral typography** for stats — numerals set at display scale as graphic
   elements with mono sources beneath.

---

## Design Movement

Editorial fintech / institutional B2B. The lineage is Stripe-era SaaS structure crossed with
financial-press typography (Instrument Serif italics as a pull-quote accent) and a mono
"technical label" layer borrowed from engineering documentation. Serious, audited, numerical —
the page should read like a term sheet that happens to be beautifully set.

## Core Principles

1. **Numbers are the hero.** Every claim carries a numeral. Numerals get typographic weight
   (800, tight tracking, large scale) so the eye lands on `6–12`, `5 minutes`, `90 days`.
2. **Navy / paper cadence.** The page alternates deep-navy conviction bands with light paper
   reading sections. Dark = claim. Light = explanation. This rhythm paces a long-form page.
3. **Restraint signals credibility.** The audience is skeptical and burned by vendors. No hype
   gradients, no glow, no fake scarcity. Persuasion comes from specificity and structure.
4. **One accent color, used sparingly.** Brand blue marks the thing you should look at next —
   nothing else competes for it.

## Color Philosophy

Extracted verbatim from the reference:

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0F1729` | Navy conviction bands, primary text |
| `--ink-2` | `#071E36` | Deeper navy for cards/bands on dark |
| `--brand` | `#0D81D3` | **Signature brand color.** Accents, buttons, numerals |
| `--brand-dark` | `#0B6FB8` | Button hover |
| `--paper` | `#F6F9FC` | Page background |
| `--muted` | `#52657A` | Secondary text |
| `--line` | `#E3E2DE` | Hairline borders |
| `--bubble` | `#E4EFFB` | Background circle motif |
| footer | `#08131F` | Footer |

Intent: navy is capital and underwriting; `#0D81D3` is the single point of energy — the
*deal* moving. Paper keeps a 4,000-word page readable.

## Layout Paradigm

Not a centered stack. The page is a **left-anchored editorial column** (1080px max) that
deliberately breaks its own rhythm:

- Hero: asymmetric — copy left-aligned to a 19ch measure, guarantee callout inset, never centered.
- Pain Points: **paired problem → response** blocks. The problem sits in navy-weight text, the
  response is offset and marked with the brand rule. This is the page's signature structure.
- Process: **alternating center-line timeline** with a scroll-tracked blue fill and numbered
  nodes; collapses to a single left rail on mobile.
- What's Included: four labeled column groups with hairline-separated rows, not cards.
- Comparison: 3-column table with the Safary column tinted and elevated. On mobile it becomes
  stacked per-row cards — **never horizontal scroll** (hard requirement from the guide).

## Signature Elements

1. **Bubble motif** — soft `#E4EFFB` circles fixed behind paper sections (the Safary house mark
   from safarymarketing.io).
2. **Mono eyebrow pill** — DM Mono uppercase, `.12em` tracking, leading brand dot with a glow
   ring, hairline border.
3. **Blue rule accents** — 3px left borders on stats, 2px top borders on layer lists, the
   timeline fill. A consistent "this is measured" vocabulary.

## Interaction Philosophy

Interactions should feel *mechanical and precise*, like a well-machined instrument — this is an
engine, after all. Nothing bouncy or playful. Cards lift 3px on hover. The CTA arrow slides
3px right. The timeline fill tracks scroll position exactly. Every motion is a confirmation,
never a decoration.

## Animation

- Section reveal: `opacity 0 → 1`, `translateY(14px) → 0`, 520ms, `cubic-bezier(0.23,1,0.32,1)`,
  triggered by IntersectionObserver, staggered 60ms within a group.
- Timeline: node + card activate as they cross the viewport midpoint; the center line's blue
  fill height is bound to scroll progress through the section.
- Buttons: `translateY(-2px)` + deepened shadow on hover, `scale(0.97)` on active, 160ms.
- FAQ: native `<details>` with a `+` → `–` marker swap.
- All gated behind `prefers-reduced-motion: no-preference`.

## Typography System

- **Inter** (400–800) — body and headings. Display sizes use weight 800 with `-0.02em` tracking.
- **Instrument Serif italic** — editorial accent on key headline phrases, set in brand blue.
  This is the single most brand-identifying typographic move on the page.
- **DM Mono** (400/500) — eyebrows, step numbers, stat sources, table headers. The
  "technical label" layer.
- Scale: h1 `clamp(32px, 5.2vw, 58px)/1.08`; h2 `clamp(25px, 3.4vw, 38px)/1.15`; body 17px/1.55;
  lede 20px/1.5.

## Brand Essence

Safary Marketing builds borrower-acquisition systems for private money lenders who are tired of
buying leads and chasing them — accountable to appointments, not impressions.

**Personality:** accountable, precise, unhyped.

## Brand Voice

Declarative. Short sentences. One idea per line. Numerals, never spelled-out numbers. First
person singular where Sabrena speaks. It concedes what it cannot prove — that concession *is*
the persuasion.

Example lines (from final copy):
> "You're not short on deals. You're short on the ones that reach you."
> "Audit me instead of trusting me."

Banned: "Welcome to", "Get started today", "Unlock", "Revolutionize", any exclamation mark.

## Wordmark & Logo

Wordmark: `Safary` in Inter 800 ink + `Marketing` in Inter 800 brand blue, tight `-0.02em`
tracking, set as one lockup. Mark: a rounded-square navy tile carrying a blue geometric glyph
suggesting a funnel narrowing to a point — acquisition converging into a booked deal. Used in
the header and as the favicon.

## Conversion Requirements (hard, from the guide)

- Single CTA label everywhere: **Book a Call**. Final form button: **Book My Call**.
- CTAs at the three formula positions plus the final calendar.
- Form is exactly 8 fields. Nothing more.
- Proof slot one stays **empty** — no substituted logos, ever.
- Never name the tech stack. No CRM or platform names on the page.
- No fabricated testimonials, logos, results, countdown timers, fake scarcity, or interactive
  calculator.
- Comparison table must not require horizontal scrolling on mobile.
- Track: CTA click, form start, form submit, booking complete.
- Footer must carry: "Investment property lending only. Not for owner-occupied consumer
  mortgages."

## Style Decisions

- Navy bands carry claims; paper sections carry explanation. Never two adjacent navy sections
  without a paper section between them.
- Brand blue is reserved for: buttons, numerals, mono labels, rule accents, and serif accent
  phrases. It is never used as a large fill or a gradient.
- Every statistic must display its source in DM Mono italic directly beneath it.
- Process sections must never look like a generic vertical SaaS timeline on desktop. They read
  as a mechanical deal-flow rail: numbered nodes, visible stage progression, and a precise
  "engine" feel that shows each stage advancing a borrower toward a funded loan.
- The Safary Marketing wordmark/mark must be visually assertive enough in the header and footer
  to register as a brand asset, not merely navigation text.
- Key numerals are editorial graphics first and data second: large, tight, Inter 800, with
  DM Mono source/context set directly beneath.
- "What's Included" is a term sheet, not a feature list: sharp three-level hierarchy between
  category, deliverable and explanation.
