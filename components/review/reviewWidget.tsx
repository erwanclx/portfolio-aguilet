import { useState, useEffect, useRef } from "react";
import Star from "./star";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PrimaryLink, PrimaryButton } from "../button/button";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function ReviewWidget() {

    interface Review {
        rating: {
            id: number,
            content: string,
            rating: number,
            created_at: string,
            project: {
                title: string
            },
            rater: {
                name: string,
                url: string
            },
            url: string
        }
    }

    interface inReview {
            id: number,
            content: string,
            rating: number,
            created_at: string,
            project: {
                title: string
            },
            rater: {
                name: string,
                url: string
            },
            url: string
    }

    const reviewWrapper = useRef(null);
    const [count, setCount] = useState(0);
    // const [data, setData] = useState(null);
    const [data, setData] = useState<Review[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(data && count === data.length) {
            const lastCard = document.querySelector(".end-review-item");
            const nextBtn = document.querySelector(".next-review-btn");
            lastCard?.classList.remove("hidden");
            gsap.to(nextBtn, {opacity: 0, duration: 0.5})
        }
    }, [count, data])

    useEffect(() => {

        if(process.env.NODE_ENV === "development") {
            fetch("/evaluations.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data.ratings);
                setIsLoading(false);
                console.log('data.ratings :>> ', data.ratings);
            })
            .catch((error) => console.log(error))
            
        } else {
            fetch("https://codeur.api.arthur-guilet.fr/")
            // fetch("https://www.codeur.com/-aguilet/evaluations.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data.ratings);
                setIsLoading(false);
            })
            .catch((error) => console.log(error))
        }        

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
            setCount(count + 1);
        }})

    }

    function formatDate(date: string) {
        const inputDate = new Date(date);
        const day = inputDate.getDate().toString().padStart(2, "0");
        const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
        const year = inputDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    

    return (
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
                data?.map((raw_review, index) => {
                    const review: inReview = raw_review.rating;
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

<div className="flex flex-col items-center gap-2">
    <button  
            className="
            w-fit py-3 px-7 text-white font-bold relative
            transition duration-300 bg-black hover:bg-blue-500 transition duration-300
            next-review-btn
            "
            onClick={() => {nextCard()}} >
        Prochain avis
    </button>
    <p>
        {count} / {data && data.length} - Avis tirés de <a href="https://www.codeur.com/-aguilet" target="_blank" className="text-blue-500">Codeur.com</a>
    </p>
</div>


</>
    )
}