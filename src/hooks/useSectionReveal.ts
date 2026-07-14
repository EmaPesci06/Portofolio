import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/**
 * Revela con fade-up cada elemento marcado con [data-reveal] dentro de la
 * sección cuando entra al viewport. Respeta prefers-reduced-motion.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        section.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    },
    { scope: ref }
  );

  return ref;
}
