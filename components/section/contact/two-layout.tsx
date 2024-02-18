import Image from "next/image";
import Section from "../section";
import Title from "../../text/title";
import { PrimaryLink } from "../../button/button";
import Form from "@/components/contact/forms";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { networks } from "@/data/networks";

export default function TwoLayout() {
  useEffect(() => {
    const caches = document.querySelectorAll(".element-cache");

    gsap.to(caches, {
      duration: 0.5,
      width: 0,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      className="
        w-full
        min-h-[110dvh]
        h-full
        bg-[url('/contact-bg.jpg')]
        backdrop-blur-xl
        bg-cover
        bg-center
        bg-no-repeat
        md:flex
        justify-center
        items-center
        md:px-20
    "
    >
      <Section
        id="main"
        data-nopadding={true}
        className="
        w-full
        min-h-[110dvh]
        md:min-h-full
        h-full
        flex 
        flex-col justify-evenly
        md:items-center
        md:flex-row
        md:gap-10
        lg:gap-40
        bg-white
        bg-opacity-40
        md:rounded-3xl
        shadow-2xl
        backdrop-blur-md
        "
      >
        <div
          className="left flex flex-col md:h-full justify-center gap-2 md:gap-8 relative
      mt-12 md:mt-0"
        >
          <p className="text-blue-500">Me contacter</p>
          <Title type="h2" className="">
            Un projet ? Une question ? <br /> Parlons-en !
          </Title>
          {/* <PrimaryLink href="#plateformes">Mes plateformes</PrimaryLink> */}
          <div className="flex gap-4">
            {networks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image
                  src={network.icon}
                  alt={network.name}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
          <div
            className="element-cache
              absolute top-0 left-0 w-full h-full bg-white
              "
          ></div>
        </div>

        <div className="right flex flex-col md:h-full md:w-1/2 justify-center">
          <Form />
          <div
            className="element-cache
            absolute top-0 left-0 w-full h-full bg-white
            "
          ></div>
        </div>
      </Section>
    </div>
  );
}
