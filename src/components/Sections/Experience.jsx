import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../../data/content';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll hanya aktif di desktop (md+)
    if (window.innerWidth < 768) return;

    const track = document.querySelector('.horizontal-scroll-track');
    
    if (track) {
      let getToValue = () => -(track.scrollWidth - window.innerWidth + 100);
      
      gsap.fromTo(track, 
        { x: () => 0 },
        {
          x: () => getToValue(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="relative z-10 bg-[#f97316] overflow-hidden">
      
      {/* ====== DESKTOP: Horizontal Scroll Layout ====== */}
      <div className="hidden md:flex h-screen w-full flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
          
          <div className="exp-header flex items-center gap-4 mb-16 md:mb-24">
            <span className="text-slate-900 font-mono text-xl font-bold">01.</span>
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter uppercase">
              Experience
            </h2>
            <div className="hidden md:block h-[4px] flex-grow bg-slate-900 ml-8 max-w-[300px]"></div>
          </div>

          {/* Horizontal Scroll Wrapper (desktop only) */}
          <div className="horizontal-scroll-container overflow-hidden w-full relative">
            <div className="absolute top-12 left-0 w-[500%] h-[4px] bg-slate-900"></div>
            <div className="horizontal-scroll-track flex flex-nowrap gap-32 w-max items-start py-10 relative mt-4">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`exp-card-wrapper flex-shrink-0 relative group pt-16 ${
                    exp.company.toLowerCase().includes('coding camp') ? 'w-[750px]' : 'w-[600px]'
                  }`}
                >
                  <div className="hidden md:flex absolute top-[-14px] left-8 w-8 h-8 rounded-full bg-slate-900 items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                    <div className="w-3 h-3 rounded-full bg-[#f4efe6]"></div>
                  </div>
                  <div className="hidden md:block absolute top-[20px] left-[46px] w-[4px] h-[70px] bg-slate-900 z-0"></div>

                  <div className="bg-[#f4efe6] p-12 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group/card mt-2">
                    <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-2 tracking-tight uppercase">
                      {exp.period.split(' - ')[0]} <span className="text-slate-500 text-2xl">to {exp.period.split(' - ')[1]}</span>
                    </h3>
                    <div className="mb-8 border-b-2 border-slate-900 pb-4">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 leading-tight uppercase">{exp.role}</h4>
                      <p className="font-mono text-slate-600 font-bold tracking-wide text-sm uppercase">{exp.company}</p>
                    </div>
                    <ul className="text-slate-700 space-y-4 mb-10 relative z-10 font-sans font-medium">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm md:text-base leading-relaxed">
                          <span className="text-slate-900 mr-4 mt-1.5 text-lg leading-none font-bold">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-900 text-[#f4efe6] text-xs font-mono font-bold tracking-wide uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====== MOBILE: Vertical Stack Layout ====== */}
      <div className="md:hidden py-16 px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-slate-900 font-mono text-base font-bold">01.</span>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tighter uppercase">
            Experience
          </h2>
        </div>

        {/* Vertical Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-[#f4efe6] p-5 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              {/* Period */}
              <div className="mb-4">
                <span className="text-2xl font-display font-black text-slate-900 tracking-tight uppercase">
                  {exp.period.split(' - ')[0]}
                </span>
                <span className="text-slate-500 text-base font-bold ml-2">
                  – {exp.period.split(' - ')[1]}
                </span>
              </div>

              {/* Role & Company */}
              <div className="mb-4 pb-4 border-b-2 border-slate-900">
                <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight uppercase">{exp.role}</h4>
                <p className="font-mono text-slate-600 font-bold tracking-wide text-xs uppercase">{exp.company}</p>
              </div>

              {/* Description */}
              <ul className="text-slate-700 space-y-3 mb-5 font-sans font-medium">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm leading-relaxed">
                    <span className="text-slate-900 mr-3 mt-0.5 font-bold shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-900 text-[#f4efe6] text-[10px] font-mono font-bold tracking-wide uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;