import { useState, useEffect, useRef } from "react";
import Star from "./star";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PrimaryLink, PrimaryButton } from "../button/button";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function ReviewWidget() {

    const reviewWrapper = useRef(null);
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(data && count === data.length) {
            const lastCard = document.querySelector(".end-review-item");
            const nextBtn = document.querySelector(".next-review-btn");
            lastCard.classList.remove("hidden");
            gsap.to(nextBtn, {opacity: 0, duration: 0.5})
        }
    }, [count, data])

    useEffect(() => {

        fetch("https://www.codeur.com/-aguilet/evaluations.json")
        .then((response) => response.json())
        .then((data) => {
            setData(data.ratings);
            setIsLoading(false);
        })
        .catch((error) => console.log(error))
        

        const cardsContainer = document.querySelector(".review-wrapper");
        const cards = document.querySelectorAll(".review-item");
        const lastText = document.querySelector(".end-text");
        const lastCard = cards[cards.length - 1];
        console.log(lastCard)

        const tl = gsap.timeline({defaults: {ease: "power3.inOut"}})

        tl.fromTo(cardsContainer, {opacity: 0}, {opacity: 1, duration: 1.5})

        cards.forEach((card, index) => {
            tl.fromTo(card, {opacity: 0}, {opacity: 1, duration: 2}, `-=${1.5 - index * 0.2}`)
        })

        tl.fromTo(lastText, {opacity: 0}, {opacity: 1, duration: 1})

        ScrollTrigger.create({
            trigger: cardsContainer,
            start: "top center",
            animation: tl,
            toggleActions: "play none none none"
        })

    
        

    }, [])

    function nextCard() {
        const cards = document.querySelectorAll(".review-item");
        const firstCard = cards[ cards.length - 1 ];

        gsap.to(firstCard, {x: "-=100%", opacity: 0, duration: 1,
        onComplete: () => {
            firstCard.remove();
            // for (let i = 0; i < cards.length; i++) {
            //     gsap.to(cards[i], {
            //         left: `-=20px`,
            //         top: `+=20px`,
            //         duration: 1
            //     })
            // }
            setCount(count + 1);
        }})

    }

    function formatDate(date: string) {
        console.log(date)
        const inputDate = new Date(date);
        console.log(inputDate)
        const day = inputDate.getDate().toString().padStart(2, "0");
        const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
        const year = inputDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    

    return (
        // <div className="
        // flex gap-8
        // " >
        <>
        <div className="
        review-wrapper
        "
        ref={reviewWrapper}
        >
            
        {
            isLoading ? (
                <p>Chargement...</p>
            ) : (
                data.map((review, index) => {
                    review = review.rating;
                    console.log(review)
                    return (
                        <div key={index} className="flex flex-col gap-4
                        rounded-2xl border-8 border-gray-200 p-6 card
                        review-item bg-white
                        ">
                            <div className="flex gap-4">
                                <div className="w-full flex justify-between" >
                                    <Link href={review.rater.url} target="_blank" className="flex flex-col gap-2">
                                        <p className="text-blue-500">{review.rater.name}</p>
                                        <p className="text-sm">Le {
                                            formatDate(review.created_at)
                                        } </p>
                                    </Link>
                                    <div className="flex flex-col justify-center" >

                                        <div className="flex">
                                            {[...Array(review.rating)].map((star, index) => ( 
                                                <Star key={index} fill='currentColor'/>
                                            ))}
                                            {[...Array(5 - review.rating)].map((star, index) => (
                                                <Star key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <p className="text-xl">{review.content}</p>
                        </div>
                    )
                })
            )
            
        }

{/* <div className="flex flex-col gap-4
            rounded-2xl border-8 border-gray-200 p-6 card
            review-item bg-white
            ">
                <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-full bg-blue-500"></div>
                    <div className="flex flex-col gap-2">
                        <p className="text-blue-500">John Doe 1</p>
                        <p className="text-sm">CEO de la société Lorem Ipsum</p>
                    </div>
                </div>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quia, voluptatem. Quisquam, voluptatibus. Quia, voluptatem.</p>
            </div> */}

            {/* <div className="flex flex-col mx-auto end-text -z-1 relative" >
                <p>Et pourquoi pas vous ?</p>
                <PrimaryLink href="https://www.codeur.com/-aguilet" target="_blank" className="mt-4">
                    Découvrir mon profil
                </PrimaryLink>
            </div> */}

            <div className="flex flex-col gap-4
            rounded-2xl border-8 border-gray-200 p-6 card
            bg-white end-review-item hidden
            ">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-blue-500">Et pourquoi pas vous ?</p>
                        <p className="text-sm">En savoir plus sur moi</p>
                    </div>
                </div>
            <div className="w-full h-full flex justify-center review-items-center">
                <PrimaryLink href="/about">
                    Découvrir qui je suis
                </PrimaryLink>
            </div>
            </div>

        </div>

<button  
        className="
        w-fit py-3 px-7 text-white font-bold relative
        transition duration-300 bg-black hover:bg-blue-500 transition duration-300
        next-review-btn
        "
        onClick={() => {nextCard()}} >
    Prochain avis
</button>
</>
    )
}