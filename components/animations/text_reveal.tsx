import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType, { TargetElement } from "split-type";
import { use, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal() {
  useEffect(() => {
    // const text_top_to_bottom = new SplitType(".reveal-type-top-to-bottom", {
    //   types: "chars",
    //   charClass: "char-text",
    // });

    // gsap.from(text_top_to_bottom.chars, {
    //   scrollTrigger: {
    //     trigger: ".reveal-type-top-to-bottom",
    //     start: "top 120%",
    //     end: "top 20%",
    //     scrub: true,
    //   },
    //   scaleY: 0,
    //   y: -20,
    //   transformOrigin: "top",
    //   stagger: 0.1,
    // });

    const texts_top_to_bottom = document.querySelectorAll(
      ".reveal-type-top-to-bottom"
    );
    texts_top_to_bottom.forEach((text, i) => {
      const text_top_to_bottom = new SplitType(text as TargetElement, {
        types: "chars",
        charClass: `char-text-${i}`,
      });
      gsap.from(text_top_to_bottom.chars, {
        scrollTrigger: {
          trigger: text,
          start: "top 120%",
          end: "top 20%",
          scrub: true,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: "top",
        stagger: 0.1,
      });
    });

    // ========================================================================

    const text_by_opacity = new SplitType(".reveal-type-by-opacity", {
      types: "chars",
      charClass: "char-text",
    });
    gsap.from(text_by_opacity.chars, {
      scrollTrigger: {
        trigger: ".reveal-type-by-opacity",
        start: "top 90%",
        end: "top 0%",
        scrub: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    // ========================================================================

    const text_from_bottom = new SplitType(".reveal-type-from-bottom", {
      types: "chars",
      charClass: "char-text",
    });
    gsap.from(text_from_bottom.chars, {
      scrollTrigger: {
        trigger: ".reveal-type-from-bottom",
        start: "top 120%",
        end: "top 20%",
        scrub: true,
      },
      y: 60,
      stagger: 0.1,
      opacity: 0,
    });
  }, []);
}
