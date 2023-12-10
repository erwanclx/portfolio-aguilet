import Image from "next/image"
import Link from "next/link"
import { ChevronBottom } from "../navigation/header/chevron"
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
            <div className="w-full h-full pt-12 md:pt-24 relative" >
                <h1 className="text-white text-4xl md:text-7xl font-extrabold absolute left-0 top-2/3 md:max-w-[60%] ml-4 md:ml-10">
                    VOS PROJETS CONCRÉTISÉS EN TOUTE SÉRÉNITÉ.
                </h1>
                <Link className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 hero_cta" href="#main">
                    <ChevronBottom className='text-white text-4xl w-8 h-8 md:w-16 md:h-16' />
                </Link>
            </div>
        </section>
    )
}