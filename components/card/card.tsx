import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  picto: string;
}

export default function Card(props: CardProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--rotation", "0deg");

    gsap.to(document.documentElement, {
      "--rotation": 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    return () => {
      document.documentElement.style.setProperty("--rotation", "0deg");
    };
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    card?.addEventListener("mouseenter", () => {
      const shortDesc = card?.querySelector(".short-desc");
      gsap.to(shortDesc, { opacity: 1, duration: 0.7 });
    });

    card?.addEventListener("mouseleave", () => {
      const shortDesc = card?.querySelector(".short-desc");
      gsap.to(shortDesc, { opacity: 0, duration: 0.7 });
    });
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="flex flex-col h-full px-10 py-6 relative">
        {/* <Image
                    src="/icons/touch.png"
                    alt="touch"
                    width={100}
                    height={100}
                    className="absolute z-10 touchme filter-white"
                  /> */}
        <div className="card-content">
          <p className="text-white z-10 relative">{props.title}</p>
          <h5 className="text-white opacity-0 relative z-10 short-desc">
            {props.description}
          </h5>
        </div>
        <Image
          src={props.picto}
          alt={props.title}
          width={50}
          height={50}
          className="absolute bottom-10 fill-white z-10 filter-white"
        />
      </div>
    </div>
  );
}
