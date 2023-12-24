import Section from "./section"
import Title from "../text/title"
import ReviewWidget from "../review/reviewWidget"
import gsap from "gsap"
import { useEffect } from "react"

export default function Review() {

    return (
        <>
            <Section id="review" className="flex
            flex-col
            gap-8 lg:gap-32 justify-center items-center
            ">

            <div className='flex flex-col gap-2 lg:gap-8'>
                <p className='text-blue-500'>
                  Leurs avis
                </p>
                <Title type='h2' className=''>
                    Car ils sont les mieux placés pour en parler.
                </Title>
            </div>

            <ReviewWidget />

            </Section>
        </>
    )
}