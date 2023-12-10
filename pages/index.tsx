import Image from 'next/image'
import Header from '@/components/navigation/header/header'
import Hero from '@/components/hero/hero'
import TwoLayout from '@/components/section/two-layout'
import Carousel from '@/components/section/carousel'
import Bento from '@/components/section/bento'
import Title from '@/components/text/title'
import { PrimaryButton, PrimaryLink } from '@/components/button/button'

import gsap from 'gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import { useRef , useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  // useEffect(() => {

  // console.log('window.innerHeight', window.innerHeight)
  // gsap.to('#main', {
  //   scrollTrigger: {
  //     trigger: '#main',
  //     scrub: 1,
  //     pin: true,
  //     pinSpacing: false,
  //   },
  //   y: -window.innerHeight,
  //   ease: 'none'
  // })

  // }
  // , [])
  
  
  return (
    <>
      <Header />
      <Hero />
      <TwoLayout />
      <Carousel />
      <Bento />
    </>
  )
}
