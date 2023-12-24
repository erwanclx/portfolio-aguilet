import Link from "next/link";
import gsap from "gsap";
import { ChevronRight } from "../navigation/header/chevron";
import { useEffect, useRef, useState } from "react";

function PrimaryButton(props: any) {

    const btnRef: any = useRef(null) 
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            gsap.to(btnRef.current, {
                backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #00C9FF 100%)',
                duration: 0.1,
                onComplete: () => {
                  
                  gsap.to(btnRef.current.children[0], {
                    right: -30,
                  })
                  
                }
            })
        } else {
            gsap.to(btnRef.current.children[0], {
              right: 0,
              onComplete: () => {
                gsap.to(btnRef.current, {
                  backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%)',
                  duration: 0.1
                })
              }
            })
        }
    }, [isHovered]);

  return (
    <>
      <button className="
        btn-primary
        w-fit py-3 px-7 text-white font-bold relative
        transition duration-300
        "
        style={{backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%)'}}
        ref={btnRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >{props.children}
        <span className=""><ChevronRight className="text-white w-[22px]"/></span>
      </button>
    </>
  ) 
}

function SecondaryButton(props: any) {
    return <button className="">{props.children}</button>;
}

function PrimaryLink(props: any) {

  const btnRef: any = useRef(null)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
      if (isHovered) {
          gsap.to(btnRef.current, {
              backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #00C9FF 100%)',
              duration: 0.3,
          })
      } else {
          gsap.to(btnRef.current, {
            backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%)',
            delay: 0.3,
          })
      }
  }, [isHovered]);

return (
  <>
    <Link href={props.href} 
      className={
        "btn-primary w-fit py-3 px-7 text-white font-bold relative transition duration-300 "
        + (props.className ? props.className : "")
      }
      style={{backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%)'}}
      ref={btnRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >{props.children}
      <span className=""><ChevronRight className="text-white w-[22px]"/></span>
    </Link>
  </>
) 
}

function SecondaryLink(props: any) {
  return <Link href={props.href} className="">{props.children}</Link>;
}

export { PrimaryButton, SecondaryButton, PrimaryLink, SecondaryLink };