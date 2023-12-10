import Section from "./section";
import Title from "../text/title";
import { PrimaryLink } from "../button/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Carousel() { 

    const [position, setPosition] = useState(0);
        const links = [
        {name: 'Administation Système', link: '/prestations/administration-systeme', image: '/systeme.jpg'},
        {name: 'Administation Réseau', link: '/prestations/developpement-logiciel', image: '/systeme.jpg'},
        {name: 'Développement Web', link: '/prestations/developpement-web', image: '/systeme.jpg'}
    ]

    const carousel: React.ReactElement[] = [];

    links.forEach((link, index) => {
        carousel.push(<div key={index} className={`rounded-2xl h-4 w-4 border-[1px] ${position === index ? 'bg-blue-500' : 'border-black '}`}></div>)
    })
    
    return (
        <Section id="carousel" className="flex
        flex-col
        gap-8 lg:gap-16 justify-center items-center
        ">    
            <div className='flex flex-col gap-2 lg:gap-8'>
                <p className='text-blue-500'>
                  Mes prestations
                </p>
                <Title type='h2' className=''>
                  Un éventail de prestations pour vous accompagner dans tous vos projets.
                </Title>
            </div>

            
            <div className="w-full h-fit
            hidden
            lg:flex lg:justify-around lg:items-center lg:gap-8
            " >
                {links.map((link, index) => {
                    return (
                        <Link href={link.link} key={index} className="w-full h-full flex flex-col">
                            <Image src={link.image} alt={link.name} width={6000} height={4000} className="w-full min-w-[300px] h-80 object-cover" />
                            <Title type='h4' className='mt-4'>
                                {link.name}
                            </Title>
                            <p className="text-xl">
                                    Découvrir
                            </p>
                        </Link>
                    )
                })}
            </div>

            <div className="mobile_presta_wrap w-full h-fit 
            flex overflow-x-scroll relative gap-8
            lg:hidden
            " 
            style={{scrollSnapType: 'x mandatory'}}
            onScroll={(e) => {setPosition(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}}
            >
                {links.map((link, index) => {
                    return ( 
                        <Link href={link.link} key={index} className="w-auto h-full flex flex-col snap-start">
                            <Image src={link.image} alt={link.name} width={6000} height={4000} className="w-carousel-item max-w-none h-80 object-cover
                            " />
                            <Title type='h4' className='mt-4'>
                                {link.name}
                            </Title>
                            <p className="text-lg">
                                    Découvrir
                            </p>
                        </Link>
                    )
                })}

            </div>

            <ul className="flex gap-2 lg:hidden">
                {carousel}
            </ul>
            
        </Section>
    )
}