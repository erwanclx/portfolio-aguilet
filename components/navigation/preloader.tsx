import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export default function Preloader() {
  const preloaderRef = useRef(null);
  const preloaderTextRef = useRef(null);

  useEffect(() => {

    const splitedPreloaderText = preloaderTextRef.current ? new SplitType(preloaderTextRef.current) : null;
    const LogoHeader = document.querySelector('#LogoHeader');
    const LogoheaderBoundingRect = LogoHeader ? LogoHeader.getBoundingClientRect() : null;
    console.log(LogoheaderBoundingRect);

    gsap.to('.char', {
      duration: 0.2,
      opacity: 1,
      stagger: 0.1,
      onComplete: () => {
        gsap.to('.char', {
          duration: 0.2,
          opacity: 0,
          stagger: 0.1,
          delay: 0.2,
          onComplete: () => {
            gsap.to(preloaderRef.current, {
              
              borderBottomLeftRadius: '50px',
              borderBottomRightRadius: '50px',
              onComplete: () => {
                gsap.to(preloaderRef.current, {
                  y: '-100%',
                  duration: 1,
                  onComplete: () => {
                    if (preloaderRef.current) {
                      (preloaderRef.current as HTMLElement).remove();
                    }
                  }
                });
              },
            })
          }
        })
      }
    })

  }, []);

  return (
    <div ref={preloaderRef} 
      className='fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-[9999]'
      >
        <div ref={preloaderTextRef} className='text-4xl text-gray-600'>Arthur Guilet.</div>
      </div>
  );
}
