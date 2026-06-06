import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/content';
import profileImg from '../../assets/images/profile.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const letters = gsap.utils.toArray('.about-letter');
    
    // Pin the section and scrub reveal the letters
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=150%', // Pin for 1.5x screen height
      pin: true,
      animation: gsap.to(letters, {
        color: '#111827', // Dark slate 900
        stagger: 0.1,
        ease: 'none',
      }),
      scrub: 0.5,
    });

    // Animate the info card floating up
    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=50%',
        scrub: 1,
      },
      y: 200,
      opacity: 0,
    });

  }, { scope: containerRef });

  const title = "ABOUT ME";

  return (
    <section id="about" ref={containerRef} className="relative h-screen w-full bg-[#f4efe6] overflow-hidden flex items-center justify-center">
      
      {/* Massive Background Text — scale down on mobile */}
      <div 
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center w-full font-display font-black leading-[0.8] tracking-tighter uppercase select-none z-0"
        style={{ fontSize: 'clamp(3rem, 18vw, 18vw)' }}
      >
        <div className="flex">
          {title.split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="flex mr-[4vw]">
              {word.split('').map((char, charIndex) => (
                <span 
                  key={charIndex} 
                  className="about-letter text-[#e8e2d7] transition-colors duration-300"
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Info Card — responsive padding & positioning */}
      <div className="about-card relative z-10 bg-[#f4efe6] p-5 sm:p-8 md:p-14 rounded-none shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] md:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] border-4 border-slate-900 w-[calc(100%-2rem)] max-w-2xl mx-4 md:mx-auto flex flex-col gap-5 md:gap-8">
        {/* Profile Row */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-none overflow-hidden border-4 border-slate-900 shrink-0">
            <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-black text-lg sm:text-2xl md:text-3xl text-slate-900 leading-none uppercase truncate">
              {personalInfo.name}
            </h3>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#f97316] uppercase mt-1 md:mt-2">Data Enthusiast</p>
          </div>
        </div>
        
        <div className="h-[3px] md:h-[4px] w-full bg-slate-900"></div>
        
        <p className="text-slate-800 font-sans font-medium leading-relaxed text-sm md:text-base">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {['Python', 'React', 'SQL', 'Machine Learning'].map((skill) => (
            <span key={skill} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-900 text-[#f4efe6] rounded-none text-[10px] md:text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#4ade80]">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;