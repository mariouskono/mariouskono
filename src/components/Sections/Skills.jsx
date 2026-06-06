import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/content';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.skill-header', {
      scrollTrigger: {
        trigger: '.skill-header',
        start: 'top 85%',
      },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    gsap.from('.skill-wrapper', {
      scrollTrigger: {
        trigger: '.skill-grid',
        start: 'top 80%',
      },
      y: 40, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.1,
      ease: 'back.out(1.2)'
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="relative z-10 py-16 md:py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="skill-header flex items-center gap-3 md:gap-4 mb-10 md:mb-20">
          <span className="text-[#f4efe6] font-mono text-base md:text-xl font-bold">02.</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-[#f4efe6] tracking-tighter uppercase">
            Technical Skills
          </h2>
          <div className="h-[4px] flex-grow bg-[#f4efe6] ml-4 md:ml-12 max-w-[200px] md:max-w-[300px]"></div>
        </div>

        {/* Grid — 2 cols on mobile, 3 on desktop */}
        <div className="skill-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 justify-items-center">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="skill-wrapper flex justify-center w-full">
                <div className="group bg-[#f4efe6] p-4 md:p-6 border-4 border-[#f4efe6] shadow-[4px_4px_0px_0px_rgba(244,239,230,0.2)] hover:-translate-y-2 hover:border-[#4ade80] transition-all duration-300 hover-target w-full flex flex-col items-center justify-center gap-2 md:gap-4">
                  
                  {/* Icon — smaller on mobile */}
                  <div className="text-slate-900 transition-transform duration-500 z-10 group-hover:scale-110 transform">
                    <IconComponent size={32} strokeWidth={2} className="md:hidden" />
                    <IconComponent size={48} strokeWidth={2} className="hidden md:block" />
                  </div>
                  
                  {/* Text */}
                  <div className="text-center z-10">
                    <h3 className="text-sm md:text-lg font-display font-black text-slate-900 mb-0.5 uppercase leading-tight">
                      {skill.name}
                    </h3>
                    <p className="text-[9px] md:text-xs font-mono font-bold text-slate-700 tracking-wide uppercase">
                      {skill.category}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;