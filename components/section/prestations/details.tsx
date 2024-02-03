import { ServiceType } from "@/data/services";
import Section from "../section";
import Title from "@/components/text/title";
import Banner from "./banner";
import { PrimaryLink, SecondaryLink } from "@/components/button/button";
import { useEffect, useState } from "react";
import Card from "@/components/card/card";
import Image from "next/image";

import gsap from "gsap";

export default function Details(service: ServiceType) {
  useEffect(() => {
    const caches = document.querySelectorAll(".element-cache");

    // gsap.to(caches, {
    //   duration: 0.5,
    //   width: 0,
    //   stagger: 0.2,
    //   ease: "power2.inOut",
    // });
  }, []);

  return (
    <>
      <section
        className="
    flex flex-col justify-center items-center
    md:flex-row 
    lg:flex-row 
    px-4 md:px-24 lg:px-32
    pb-12
    h-auto
    my-12
    "
        id="more"
      >
        <div
          className="flex flex-col gap-12 w-full justify-around
        lg:gap-0 lg:flex-row
        "
        >
          {/* {service.service.texts.first.cards.map((card, index) => {
            return (
              <Card key={index}>
                <div className="flex flex-col justify-evenly items-center h-full px-10">
                  <Image
                    src={card.picto}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="element-cache"
                  />
                  <p className="text-center text-white">{card.title}</p>
                </div>
              </Card>
            );
          })} */}
          {service.service.texts.first.cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={service.service.texts.first.cards[index].title}
                description={
                  service.service.texts.first.cards[index].description
                }
                picto={service.service.texts.first.cards[index].picto}
              ></Card>
            );
          })}
        </div>
      </section>

      {/* <Banner /> */}

      <section
        className="
    flex flex-col justify-around items-center
    px-4 md:px-24 lg:px-32
    h-[80dvh]
    pt-12
    bg-gray-900
    md:mx-24 md:rounded-3xl
    lg:mx-32 lg:rounded-3xl
    mb-12
    "
        id="more-variant"
      >
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row z-10">
          <p
            className="text-justify md:w-1/2 reveal-type-by-opacity text-white
        "
          >
            {service.service.texts.second.content}
          </p>

          <Title
            type="h2"
            className="md:w-1/2 perspective-left text-end  text-white presta-titles"
          >
            {service.service.texts.second.title}
          </Title>
        </div>

        <SecondaryLink href="/contact" className=" self-center z-20">
          Contactez-moi
        </SecondaryLink>
      </section>
    </>
  );
}
