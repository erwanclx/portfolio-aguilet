import { useState, useEffect, useRef } from "react";
import Star from "./star";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PrimaryLink, PrimaryButton } from "../button/button";
import ReviewSkeleton from "./reviewSkeleton";
import ReviewCard from "./reviewCard";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function ReviewWidget() {
  interface Review {
    rating: {
      id: number;
      content: string;
      rating: number;
      created_at: string;
      project: {
        title: string;
      };
      rater: {
        name: string;
        url: string;
      };
      url: string;
    };
  }

  interface inReview {
    id: number;
    content: string;
    rating: number;
    created_at: string;
    project: {
      title: string;
    };
    rater: {
      name: string;
      url: string;
    };
    url: string;
  }

  const reviewWrapper = useRef(null);
  const [count, setCount] = useState(3);
  // const [data, setData] = useState(null);
  const [data, setData] = useState<Review[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [reviewsIndexes, setReviewsIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    if (data && count === data.length) {
      const lastCard = document.querySelector(".end-review-item");
      const nextBtn = document.querySelector(".next-review-btn");
      lastCard?.classList.remove("hidden");
      gsap.to(nextBtn, { opacity: 0, duration: 0.5 });
      nextBtn?.remove();
    }
  }, [count, data]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      fetch("/evaluations.json")
        .then((response) => response.json())
        .then((data) => {
          setData(data.ratings);
          setIsLoading(false);
          console.log("data.ratings :>> ", data.ratings);
        })
        .catch((error) => console.log(error));
    } else {
      fetch("https://codeur.api.arthur-guilet.fr/")
        .then((response) => response.json())
        .then((data) => {
          setData(data.ratings);

          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }

    const cardsContainer = document.querySelector(".review-wrapper");
    const cards = document.querySelectorAll(".review-item");
    const lastText = document.querySelector(".end-text");
    const lastCard = cards[cards.length - 1];

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(cardsContainer, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    cards.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        `-=${1.5 - index * 0.2}`
      );
    });

    tl.fromTo(lastText, { opacity: 0 }, { opacity: 1, duration: 1 });

    ScrollTrigger.create({
      trigger: cardsContainer,
      start: "top bottom",
      animation: tl,
      toggleActions: "play none none none",
    });
  }, []);

  function nextCard() {
    // const cards = document.querySelectorAll(".review-item");
    // const firstCard = cards[ cards.length - 1 ];

    // gsap.to(firstCard, {x: "-=100%", opacity: 0, duration: 1,
    // onComplete: () => {
    //     firstCard.remove();
    //     setCount(count + 3);
    // }})

    gsap.to(reviewWrapper.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setReviewsIndexes([
          reviewsIndexes[0] + 3,
          reviewsIndexes[1] + 3,
          reviewsIndexes[2] + 3,
        ]);

        if (data && count + 3 > data.length) {
          setCount(data.length);
        } else {
          setCount(count + 3);
        }

        gsap.to(reviewWrapper.current, { opacity: 1, duration: 0.5 });
      },
    });
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
      <div
        className="
        review-wrapper
        "
        ref={reviewWrapper}
      >
        {isLoading ? (
          <>
            <ReviewSkeleton />

            <ReviewSkeleton />

            <ReviewSkeleton />
          </>
        ) : (
          <>
            {/* {
                    data && reviewsIndexes[0] >= data.length ? (
                        <ReviewSkeleton/>
                    ) : (
                        <ReviewCard
                        name={data[reviewsIndexes[0]].rating.rater.name}
                        date={'Le ' + formatDate(data[reviewsIndexes[0]].rating.created_at)}
                        content={data[reviewsIndexes[0]].rating.content}
                        />
                    )
                }

                {
                    data && reviewsIndexes[1] >= data.length ? (
                        <ReviewSkeleton/>
                    ) : (
                        <ReviewCard
                        name={data[reviewsIndexes[1]].rating.rater.name}
                        date={'Le ' + formatDate(data[reviewsIndexes[1]].rating.created_at)}
                        content={data[reviewsIndexes[1]].rating.content}
                        />
                    )
                }

                {
                    data && reviewsIndexes[2] >= data.length ? (
                        <ReviewSkeleton/>
                    ) : (
                        <ReviewCard
                        name={data[reviewsIndexes[2]].rating.rater.name}
                        date={'Le ' + formatDate(data[reviewsIndexes[2]].rating.created_at)}
                        content={data[reviewsIndexes[2]].rating.content}
                        />
                    )
                } */}

            {[...Array(3)].map((star, index) => {
              const dataIndex = reviewsIndexes[index];

              if (data && dataIndex >= 0 && dataIndex < data.length) {
                const reviewData = data[dataIndex].rating;

                return (
                  <ReviewCard
                    key={index}
                    name={reviewData.rater.name}
                    date={"Le " + formatDate(reviewData.created_at)}
                    content={reviewData.content}
                    title={reviewData.project.title}
                  />
                );
              } else {
                return null;
              }
            })}
          </>
        )}

        <div
          className="flex flex-col gap-4
            rounded-3xl p-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
            bg-white end-review-item w-full hidden
            "
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-blue-500">Et pourquoi pas vous ?</p>
              <p className="text-sm">En savoir plus sur moi</p>
            </div>
          </div>
          <PrimaryLink href="/about">Découvrir qui je suis</PrimaryLink>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          className="
            w-fit py-3 px-7 text-white font-bold relative
            transition duration-300 bg-black hover:bg-blue-500 transition duration-300
            next-review-btn
            "
          onClick={() => {
            nextCard();
          }}
        >
          Prochains avis
        </button>
        <p>
          {count} / {data && data.length} - Avis tirés de{" "}
          <a
            href="https://www.codeur.com/-aguilet"
            target="_blank"
            className="text-blue-500"
          >
            Codeur.com
          </a>
        </p>
      </div>
    </>
  );
}
