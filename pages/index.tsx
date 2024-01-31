import Image from 'next/image'
import Header from '@/components/navigation/header/header'
import Hero from '@/components/hero/hero'
import TwoLayout from '@/components/section/home/two-layout'
import Carousel from '@/components/section/home/carousel'
import Bento from '@/components/section/home/bento'
import Review from '@/components/section/home/review'
import Footer from '@/components/navigation/footer/footer'
import Title from '@/components/text/title'
import ScrollToTop from '@/components/navigation/scrollToTop'
import Preloader from '@/components/navigation/preloader'

import gsap from 'gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import { useRef , useEffect } from 'react'
import TwoLayoutEqual from '@/components/section/home/two-layout-equal'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {


  useEffect(() => {

    // Appears on scroll

    const sections = document.querySelectorAll('.ToAnimateClass');

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

    // Scroll to top

    const main = document.querySelector('#main')
    const scrollToTop = document.querySelector('#scrollToTop')
    const tlScrollToTop = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tlScrollToTop.fromTo(scrollToTop, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    ScrollTrigger.create({
      trigger: main,
      animation: tlScrollToTop,
      toggleActions: "play none none none",
      onEnterBack: () => tlScrollToTop.reverse(),
    });


  }
  , [])
  
  
  return (
    <>
    
      <Preloader />
      <div id='scrollToTop' className='fixed bottom-0 right-0 z-50'>
        <ScrollToTop />
      </div>
      <Hero />
      <TwoLayout />
      <Carousel />
      <Bento />
      <Review />
      <TwoLayoutEqual />
    </>
  )
}
