import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element once as it enters the viewport.
 * Motion is gated by prefers-reduced-motion in CSS, so this is safe to always run.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const n of nodes) {
      n.classList.add("reveal");
      io.observe(n);
    }
    return () => io.disconnect();
  }, []);
}
