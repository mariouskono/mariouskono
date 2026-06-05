import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ text1, text2, className = "" }) => {
  const containerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useGSAP(() => {
    // Infinite loop animation for Track 1 (Left to Right)
    gsap.to(track1Ref.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });

    // Infinite loop animation for Track 2 (Right to Left)
    gsap.to(track2Ref.current, {
      xPercent: 50,
      ease: "none",
      duration: 25,
      repeat: -1
    });

    // Connect to scroll direction for extra velocity (Scrub effect)
    let scrollTimeout;
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        // Slightly skew the text based on scroll velocity
        gsap.to([track1Ref.current, track2Ref.current], {
          skewX: gsap.utils.clamp(-5, 5, velocity / 100),
          duration: 0.2
        });
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          gsap.to([track1Ref.current, track2Ref.current], { skewX: 0, duration: 0.5 });
        }, 100);
      }
    });

  }, { scope: containerRef });

  const renderTrack = (text) => (
    <div className="flex whitespace-nowrap min-w-max pr-8 gap-8">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="block">{text}</span>
      ))}
    </div>
  );

  return (
    <section ref={containerRef} className={`relative py-12 md:py-24 overflow-hidden flex flex-col gap-2 md:gap-4 ${className}`}>
      {/* Track 1 */}
      <div 
        ref={track1Ref}
        className="flex w-max font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-inherit uppercase"
      >
        {renderTrack(text1)}
      </div>

      {/* Track 2 */}
      <div 
        ref={track2Ref}
        className="flex w-max font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-inherit opacity-[0.05] uppercase"
        style={{ transform: 'translateX(-50%)' }}
      >
        {renderTrack(text2)}
      </div>
    </section>
  );
};

export default Marquee;
