import Image from "next/image";
import Section from "../section";
import Title from "../../text/title";
import { PrimaryLink } from "../../button/button";
import CalendlyWidget from "../../contact/calendlyWidget";

export default function TwoLayoutEqual() {
  return (
    <Section
      id="contact"
      className="
        flex 
        flex-col-reverse justify-evenly
        items-center
        2xl:flex-row
        md:gap-10
        lg:gap-10
        h-auto
        min-h-[100dvh]
        "
    >
      <div className="left h-1/2 2xl:w-2/3 md:h-auto ">
        <CalendlyWidget />
      </div>

      <div className="right flex flex-col md:h-full justify-center gap-2 md:gap-8 2xl:w-1/3">
        <p className="text-blue-500">Une idée ? Un projet ?</p>
        <Title type="h2" className="">
          Prenons dès maintenant un premier contact afin d'en discuter.
        </Title>

        {/* <PrimaryLink href='mailto:contact@arthur-guilet.fr?subject=Prise%20de%20contact%20pour%20un%20projet&body=Bonjour%20Arthur%2C%0A%0AJ%27ai%20un%20projet%20dont%20je%20souhaiterais%20discuter%20avec%20toi%20%3A%0A%0A%0A%0A%0A%0A%0A%0A%0A
                ' className=''>
                  M'envoyer un courriel
                </PrimaryLink> */}
        <PrimaryLink href="/contact" className="">
          Me contacter
        </PrimaryLink>
      </div>
    </Section>
  );
}
