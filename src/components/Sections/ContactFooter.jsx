import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/content';
import { Mail, ArrowRight } from 'lucide-react';
import HeroBackground from '../UI/HeroBackground';

gsap.registerPlugin(ScrollTrigger);

const ContactFooter = () => {
  const containerRef = useRef(null);
  const textParallaxRef = useRef(null); 

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom', 
        end: 'top center', 
        scrub: 1, 
      },
      opacity: 0,
      ease: 'power1.out' 
    });
  }, { scope: containerRef });

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="relative z-0 w-full h-auto py-8 md:py-12 bg-cream-50 text-slate-900 flex flex-col overflow-x-hidden"
    >
      
      {/* BACKGROUND GRAPHIC (Stark Brutalist Pattern) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* LAPISAN 2: KONTEN TEKS */}
      <div ref={textParallaxRef} className="relative z-10 w-full flex-grow flex flex-col will-change-transform justify-center items-center">
        
        <div className="w-full px-6 flex flex-col justify-center items-center gap-6">
          
          {/* HUGE TYPOGRAPHY */}
          <div className="w-full text-center group cursor-pointer hover-target flex justify-center py-2">
            <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[1.1] font-display font-black text-slate-900 tracking-tighter whitespace-nowrap flex flex-col items-center uppercase">
              <span className="block hover:-translate-y-4 transition-transform duration-500">Let's</span>
              <span className="block text-[#4ade80] hover:scale-105 transition-transform duration-500" style={{ textShadow: '4px 4px 0px #0f172a' }}>Work</span>
              <span className="block hover:translate-y-4 transition-transform duration-500">Together</span>
            </h2>
          </div>
          
          <p className="text-base md:text-xl text-slate-700 max-w-2xl text-center font-sans font-bold uppercase mt-4">
            Ready to bring your ideas to life? I'm currently open for new opportunities and freelance projects. Let's create something extraordinary.
          </p>

          <div className="mb-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group relative overflow-hidden inline-flex items-center gap-4 px-10 py-5 bg-[#38bdf8] text-slate-900 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-xl font-black uppercase transition-all duration-500 hover:scale-105 hover-target"
            >
              <div className="absolute inset-0 bg-[#e8e2d7] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              
              <span className="relative z-10 flex items-center gap-3">
                <span className="block relative overflow-hidden h-7">
                  <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                    Say Hello
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0 text-slate-900">
                    Say Hello
                  </span>
                </span>
                <div className="relative overflow-hidden w-6 h-6">
                  <ArrowRight size={24} strokeWidth={3} className="absolute inset-0 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-full" />
                  <ArrowRight size={24} strokeWidth={3} className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0 text-slate-900" />
                </div>
              </span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {personalInfo.socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <div key={social.name} className="relative group/social flex flex-col items-center">
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center justify-center w-16 h-16 bg-[#e8e2d7] border-4 border-slate-900 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover-target overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover/social:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                    
                    <div className="relative z-10 w-6 h-6 overflow-hidden">
                      <IconComponent size={24} strokeWidth={2.5} className="absolute inset-0 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/social:-translate-y-full" />
                      <IconComponent size={24} strokeWidth={2.5} className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/social:translate-y-0 text-[#f4efe6]" />
                    </div>
                  </a>
                  
                  {/* Tooltip Effect */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-2 transition-all duration-300 ease-out font-mono text-xs font-bold uppercase whitespace-nowrap bg-slate-900 text-[#f4efe6] px-3 py-1 pointer-events-none z-20">
                    {social.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactFooter;