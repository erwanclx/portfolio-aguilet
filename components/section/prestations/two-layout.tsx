import Image from "next/image";
import Section from "../section";
import Title from "../../text/title";
import { PrimaryLink, SecondaryLink } from "../../button/button";
import { ServiceType } from "@/data/services";
import Link from "next/link";
import { networks } from "@/data/networks";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function TwoLayout(service: ServiceType) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const caches = document.querySelectorAll(".element-cache");

    if (imageLoaded) {
      gsap.to(caches, {
        duration: 0.5,
        width: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [imageLoaded]);

  return (
    <Section
      id="main"
      className="
        flex 
        flex-col-reverse justify-evenly
        items-center
        md:flex-row
        md:gap-10
        lg:gap-40
        min-h-[110dvh]
        pb-10 pt-20
        md:py-20 md:pb-10
        lg:py-40 lg:pb-10
        "
    >
      <div className="left h-1/2 md:h-full w-full">
        <Image
          className="
              w-full h-full object-cover
              md:w-full md:h-full md:object-cover
              lg:w-full lg:h-full lg:object-cover
              "
          alt="Evolution"
          src="/evolution.jpg"
          width={1584}
          height={2376}
          onLoad={() => setImageLoaded(true)}
        />
        <div
          className="element-cache
            absolute top-0 left-0 w-full h-full bg-white z-10
            "
        ></div>
      </div>

      <div className="right flex flex-col md:h-full justify-center gap-2 md:gap-8">
        <p className="text-blue-500">Mes services</p>
        <Title type="h2">{service.service.name}</Title>
        <p className="text-justify">{service.service.shortDescription}</p>
        <PrimaryLink href="#more">En savoir plus</PrimaryLink>
        <ul className="bg-white w-full flex items-center gap-4 justify-end py-6">
          {networks
            .filter(
              (network) =>
                network.name === "Codeur" ||
                network.name === "Malt" ||
                network.name === "Mail" ||
                network.name === "Téléphone"
            )
            .map((network, index) => (
              <li key={index}>
                <Link href={network.link} target="_blank">
                  <Image
                    alt={network.name}
                    width={50}
                    height={50}
                    className="w-6 md:w-8 lg:w-8"
                    src={network.icon}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
}
