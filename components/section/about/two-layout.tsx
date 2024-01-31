import Image from 'next/image'
import Section from '../section'
import Title from '../../text/title'
import { PrimaryLink } from '../../button/button'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function TwoLayout() {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {

      const caches = document.querySelectorAll('.element-cache')

      if (imageLoaded) {
        gsap.to(caches, {
          duration: 0.5,
          width: 0,
          stagger: 0.2,
          ease: 'power2.inOut',
        });
      }
    }, [imageLoaded]);

    return (
        <Section id="main" data-nopadding={true} className="
        flex 
        flex-col-reverse justify-evenly
        md:flex-row
        md:gap-10
        lg:gap-40">
    
            <div className='left flex flex-col md:h-full justify-center gap-2 md:gap-8 relative'>
                <p className='text-blue-500'>
                  Mon parcours
                </p>
                <Title type='h2' className=''>
                  De simple passionné à professionnel de l'IT.
                </Title>
                <PrimaryLink href='#parcours' >
                  En savoir plus
                </PrimaryLink>
                <div className='element-cache
              absolute top-0 left-0 w-full h-full bg-white
              '></div>
            </div>
          
          <div className='right h-1/2 md:h-auto relative '>
            <Image className='
            w-full h-full object-cover
            md:w-full md:h-full md:object-cover
            lg:w-full lg:h-full lg:object-cover
            ' alt='Evolution' src='/evolution.jpg' width={1584} height={2376} 
            onLoad={() => setImageLoaded(true)}
            />
            <div className='element-cache
            absolute top-0 left-0 w-full h-full bg-white
            '></div>
          </div>
          
          </Section>
    )
}