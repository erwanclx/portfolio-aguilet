import Image from 'next/image'
import Section from './section'
import Title from '../text/title'
import { PrimaryLink } from '../button/button'

export default function TwoLayout() {
    return (
        <Section id="main" className="
        flex 
        flex-col-reverse justify-evenly px-4
        md:flex-row
        md:gap-10 md:py-12 md:px-24
        lg:gap-40 lg:py-20 lg:px-32">
          
            <div className='left h-1/2 md:h-auto '>
              <Image className='
              w-full h-full object-cover
              md:w-full md:h-full md:object-cover
              lg:w-full lg:h-full lg:object-cover
              ' alt='Evolution' src='/evolution.jpg' width={1584} height={2376} />
            </div>
    
            <div className='right flex flex-col md:h-full justify-center gap-2 md:gap-8'>
                <p className='text-blue-500'>
                  Mon objectif
                </p>
                <Title type='h2' className=''>
                  Épauler les petites entreprises dans leurs évolutions numériques.
                </Title>
                <PrimaryLink href='/about' >
                  Qui-suis je ?
                </PrimaryLink>
            </div>
          </Section>
    )
}