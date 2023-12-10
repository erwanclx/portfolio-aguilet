import Image from "next/image"

export default function Hero() {
    return (
        <section className='w-full bg-cover' style={{height: '100dvh', backgroundImage: 'url(/hero.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
        </section>
    )
}