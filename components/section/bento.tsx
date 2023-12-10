/* eslint-disable react/no-unescaped-entities */
import Section from "./section"
import Title from "../text/title"
import Image from "next/image"
import Link from "next/link"
import { PrimaryLink } from "../button/button"

export default function BentoSection() {
    
    const clients = [
        {name: 'Archive TV', link: 'https://archivetv.fr/', image: '/clients/logo.gif'},
        {name: 'Mondial Relay', link: 'https://www.mondialrelay.fr/', image: '/clients/mrlogoprincipal.png'},
        {name: 'Rocket School', link: 'https://rocket-school.com/', image: '/clients/logo-rocketschool.png'},
        {name: 'Dreaming Places', link: 'https://www.dreaming-places.fr/', image: '/clients/LogoDP.png'},
        {name: 'R et D Prod', link: 'https://retdprod.com/', image: '/clients/rd_prod_logo.jpeg'},
        {name: 'Umanao', link: 'https://umanao.com/', image: '/clients/logo_umanao.png'},
        {name: 'https://www.flowlinetechnologies.com/', link: '/prestations/developpement-logiciel', image: '/clients/FLTechnoSCC_logo.png'},
    ]

    return (
        <Section id="bento" className="flex justify-center gap-8 lg:justify-around flex-col bg-[#0f0f0f]">

        <div className='flex flex-col gap-2 lg:gap-8'>
                <p className='text-blue-500'>
                  Mes clients
                </p>
                <Title type='h2' className='text-white'>
                  Ils me font confiance.
                </Title>
            </div>
        
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-1 md:p-10 ${
                i === 3 || i === 6 ? "col-span-2" : ""
              }`}
            >
                <Link href={client.link} target="_blank">
                    <Image src={client.image} alt={client.name} width={6000} height={4000} className="w-full h-full object-contain" />
                </Link>
        
            </div>
          ))}
        </div>



        </Section>
        
    )
}