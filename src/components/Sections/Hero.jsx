import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import profileImg from '../../assets/images/pp-noback.png';

const Hero = () => {
  const containerRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useGSAP(() => {
    // Animate the main title letters on load
    gsap.from('.hero-letter', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out',
      delay: 0.2
    });

    // Animate profile image
    gsap.from('.hero-profile', {
      y: -50,
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.7)',
      delay: 0.1
    });

    // Floating animations for background text — only on desktop
    if (window.innerWidth >= 768) {
      floatingElementsRef.current.filter(Boolean).forEach((el, index) => {
        gsap.to(el, {
          y: `random(-50, 50)`,
          x: `random(-50, 50)`,
          rotation: `random(-15, 15)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });
    }
  }, { scope: containerRef });

  const title = "BERTNARDO MARIO USKONO".split(' ');

  const floatingLabels = [
    { text: "DATA SCIENTIST", top: "15%", left: "10%" },
    { text: "MACHINE LEARNING ENGINEER", top: "20%", left: "65%" },
    { text: "AI ENGINEER", top: "70%", left: "10%" },
    { text: "CHILL GUY", top: "65%", left: "75%" },
    { text: "WEB DEV", top: "40%", left: "80%" },
    { text: "LIVERPOOL F.C FANS", top: "45%", left: "5%" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream-50 pt-16 md:pt-20">
      
      {/* Floating Background Elements — hidden on mobile to prevent overflow */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        {floatingLabels.map((label, i) => (
          <div 
            key={i}
            ref={el => floatingElementsRef.current[i] = el}
            className="floating-label absolute whitespace-nowrap text-3xl md:text-5xl font-display font-black text-slate-900/5 select-none"
            style={{ top: label.top, left: label.left }}
          >
            {label.text}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 md:px-6 flex flex-col items-center text-center -mt-8 md:-mt-16">
        
        {/* Profile Image — smaller on mobile */}
        <div className="hero-profile relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-900 mb-5 md:mb-12 bg-[#4ade80]">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Massive Title — clamp prevents overflow on 320px screens */}
        <h1
          className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-0 max-w-[100%] mx-auto font-display font-black leading-[0.9] tracking-tighter text-slate-900 uppercase overflow-hidden"
          style={{ fontSize: 'clamp(2rem, 10vw, 7vw)' }}
        >
          {title.map((word, wordIndex) => (
            <div key={wordIndex} className="overflow-hidden flex">
              {word.split('').map((letter, letterIndex) => (
                <span key={letterIndex} className="hero-letter inline-block">
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </h1>
      </div>

      {/* Explore Button — touch-friendly size */}
      <a 
        href="#about"
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 group overflow-hidden inline-flex items-center justify-center px-5 py-3 md:px-8 md:py-4 bg-slate-900 text-[#f4efe6] rounded-none font-mono text-xs md:text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform hover-target border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] z-40 whitespace-nowrap"
        style={{ minHeight: 44 }}
      >
        <div className="absolute inset-0 bg-[#38bdf8] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
        
        <span className="relative z-10 flex items-center">
          <span className="block relative overflow-hidden h-5">
            <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
              Explore Sections
            </span>
            <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0 text-slate-900">
              Explore Sections
            </span>
          </span>
        </span>
      </a>
    </section>
  );
};

export default Hero;