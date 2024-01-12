import Image from 'next/image'
import Header from '@/components/navigation/header/header'
import Hero from '@/components/hero/hero'
import TwoLayout from '@/components/section/two-layout'
import Carousel from '@/components/section/carousel'
import Bento from '@/components/section/bento'
import Review from '@/components/section/review'
import Footer from '@/components/navigation/footer/footer'
import Title from '@/components/text/title'
import { PrimaryButton, PrimaryLink } from '@/components/button/button'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import { useRef , useEffect } from 'react'
import TwoLayoutEqual from '@/components/section/two-layout-equal'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {


  useEffect(() => {

    const sections = document.querySelectorAll('.ToAnimateClass'); // assuming you have a common class 'section' for all sections

    const timelines = Array.from(sections).map((section) => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1.5 });

      ScrollTrigger.create({
        trigger: section,
        animation: tl,
        toggleActions: "play none none none"
      });

      return tl;

    });

  }
  , [])
  
  
  return (
    <>
      <Header />
      <Hero />
      <TwoLayout />
      <Carousel />
      <Bento />
      <Review />
      <TwoLayoutEqual />
      <Footer />
    </>
  )
}
