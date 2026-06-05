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
      
      {/* Massive Background Text */}
      <div 
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center w-full font-display font-black text-[18vw] leading-[0.8] tracking-tighter uppercase select-none z-0"
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

      {/* Floating Info Card */}
      <div className="about-card relative z-10 bg-[#f4efe6] p-8 md:p-14 rounded-none shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] border-4 border-slate-900 w-full max-w-2xl mx-6 md:mx-auto mt-48 md:mt-0 flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-none overflow-hidden border-4 border-slate-900 shrink-0">
            <img src={profileImg} alt={personalInfo.name} className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 leading-none uppercase">
              {personalInfo.name}
            </h3>
            <p className="font-mono text-sm font-bold text-[#f97316] uppercase mt-2">Data Enthusiast</p>
          </div>
        </div>
        
        <div className="h-[4px] w-full bg-slate-900"></div>
        
        <p className="text-slate-800 font-sans font-medium leading-relaxed text-sm md:text-base">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {['Python', 'React', 'SQL', 'Machine Learning'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-slate-900 text-[#f4efe6] rounded-none text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#4ade80]">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;