/**
 * SAFARY — DEAL FLOW ENGINE landing page.
 * Style: "Safary Institutional Blue — Editorial Fintech" (see /ideas.md)
 *
 * Section order is fixed by LANDINGPAGEGUIDE.md and mapped to the prospect's awareness
 * stage. Do not reorder — the comparison must never precede the explanation.
 *
 *   1–2  Headline + subheading + guarantee ......... Hero
 *   3–4  VSL + CTA (position one) ................. Vsl
 *   5    Proof slot one ......................... intentionally ABSENT (no logos yet)
 *   6    Pain points ............................. PainPoints
 *   7    The solution ........................... Solution
 *   8    Process ................................ Process
 *   9    What's included ........................ Included
 *   9b   The investment (pricing) ............... Investment
 *   10   Why choose you ......................... Comparison
 *   11   Proof slot two — industry data ......... IndustryData
 *   12   CTA (position two) ..................... CtaBand
 *   13   Proof slot three — the honest section .. Honesty
 *   14   About us ............................... About
 *   15   FAQ .................................... Faq
 *   16   Calendar + 8-field form ................ Booking
 */
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Vsl } from "@/components/sections/Vsl";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solution } from "@/components/sections/Solution";
import { Process } from "@/components/sections/Process";
import { Included } from "@/components/sections/Included";
import { Investment } from "@/components/sections/Investment";
import { Comparison } from "@/components/sections/Comparison";
import { IndustryData } from "@/components/sections/IndustryData";
import { CtaBand } from "@/components/sections/CtaBand";
import { Honesty } from "@/components/sections/Honesty";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vsl />
        {/* Section 5 — proof slot one: left empty until there are real client logos.
            Per spec: "Do not substitute." */}
        <PainPoints />
        <Solution />
        <Process />
        <Included />
        <Investment />
        <Comparison />
        <IndustryData />
        <CtaBand />
        <Honesty />
        <About />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
