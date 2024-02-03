import Image from "next/image";
import Section from "../section";
import Title from "../../text/title";
import { PrimaryLink } from "../../button/button";

export default function TwoLayout() {
  return (
    <Section
      id="main"
      className="
        flex 
        flex-col-reverse justify-evenly
        md:flex-row
        md:gap-10
        lg:gap-40"
    >
      <div className="left h-1/2 md:h-auto ">
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
        />
      </div>

      <div className="right flex flex-col md:h-full justify-center gap-2 md:gap-8">
        <p className="text-blue-500">Mon objectif</p>
        <Title type="h2" className="reveal-type-by-opacity w-full">
          Épauler les petites entreprises dans leurs évolutions numériques.
        </Title>
        <PrimaryLink href="/about">Qui-suis je ?</PrimaryLink>
      </div>
    </Section>
  );
}
