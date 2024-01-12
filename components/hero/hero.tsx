import Image from "next/image"
import Link from "next/link"
import { ChevronBottom } from "../navigation/header/chevron"
import { PrimaryButton, SecondaryButton } from "../button/button"
import { useEffect } from "react"
import gsap from "gsap"

export default function Hero() {

    useEffect(() => {
        gsap.to('.hero_cta', {
            duration: 0.7,
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <section id="hero" className='w-full bg-cover -z-10' style={{height: '100dvh', backgroundImage: 'url(/hero.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
            <div className="ToAnimateClass w-full h-full pt-12 md:pt-24 relative" >
                <div className="w-full flex flex-col gap-8 absolute left-0 top-2/3 top-[60%] md:max-w-[60%] pl-4 md:pl-10">
                    <h1 className="text-white text-4xl md:text-7xl font-extrabold">
                        VOS PROJETS CONCRÉTISÉS EN TOUTE SÉRÉNITÉ.
                    </h1>
                    <div className="flex gap-8">
                        <PrimaryButton className="mr-4">
                            <Link href="#contact">Contactez-moi</Link>
                        </PrimaryButton>
                        <SecondaryButton className="">
                            <Link href="#main">En savoir plus</Link>
                        </SecondaryButton>
                    </div>
                </div>
                <Link className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 hero_cta" href="#main">
                    <ChevronBottom className='text-white text-4xl w-8 h-8 md:w-16 md:h-16' />
                </Link>
            </div>
        </section>
    )
}