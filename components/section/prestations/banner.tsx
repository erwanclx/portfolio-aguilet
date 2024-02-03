import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  // useEffect(() => {
  //   const text = new SplitType(".reveal-type", {
  //     types: "chars",
  //     charClass: "char-text",
  //   });
  //   // gsap.from(text.chars, {
  //   //   scrollTrigger: {
  //   //     trigger: ".reveal-type",
  //   //     start: "top 120%",
  //   //     end: "top 20%",
  //   //     scrub: true,
  //   //   },
  //   //   scaleY: 0,
  //   //   y: -20,
  //   //   transformOrigin: "top",
  //   //   stagger: 0.1,
  //   // });

  //   // gsap.from(text.chars, {
  //   //   scrollTrigger: {
  //   //     trigger: ".reveal-type",
  //   //     start: "top 120%",
  //   //     end: "top 20%",
  //   //     scrub: true,
  //   //   },
  //   //   opacity: 0.2,
  //   //   stagger: 0.1,
  //   //   // // y: 60,
  //   //   // scaleY: 0,
  //   //   // y: -20,
  //   //   // transformOrigin: "top",
  //   //   // // opacity: 0,
  //   //   // stagger: 0.1,
  //   // });

  //   gsap.from(text.chars, {
  //     scrollTrigger: {
  //       trigger: ".reveal-type",
  //       start: "top 120%",
  //       end: "top 20%",
  //       scrub: true,
  //     },
  //     y: 60,
  //     stagger: 0.1,
  //     opacity: 0,
  //   });
  // }, []);

  return (
    <>
      <div className="mt-12 h-24 w-full bg-black"></div>
    </>
  );
}
