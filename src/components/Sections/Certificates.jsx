import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificates } from '../../data/content';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CertCard = ({ cert }) => (
  <div className="cert-wrapper h-full">
    <a 
      href={cert.link} 
      target="_blank" 
      rel="noreferrer"
      className="h-full group bg-[#f4efe6] p-4 md:p-8 rounded-none border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] md:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] hover:bg-[#4ade80] transition-all duration-300 flex flex-col justify-between hover-target relative overflow-hidden"
      style={{ display: 'flex' }}
    >
      {/* Decorative background icon */}
      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-all duration-300 transform group-hover:scale-150 group-hover:rotate-12">
        <Award size={80} strokeWidth={1} className="text-slate-900 md:hidden" />
        <Award size={120} strokeWidth={1} className="text-slate-900 hidden md:block" />
      </div>
      
      <div>
        {/* Icon badge */}
        <div className="mb-3 md:mb-6 p-2 md:p-4 bg-slate-900 rounded-none text-[#f4efe6] inline-block transition-colors duration-300">
          <Award size={18} strokeWidth={2} className="md:hidden" />
          <Award size={28} strokeWidth={2} className="hidden md:block" />
        </div>
        
        <h4 className="font-black font-display text-slate-900 text-sm md:text-2xl uppercase leading-tight mb-1 md:mb-2 relative z-10">
          {cert.title}
        </h4>
        <p className="text-xs text-slate-800 font-bold font-mono relative z-10 uppercase">
          {cert.issuer}
        </p>
      </div>
      
      <p className="text-[10px] md:text-xs text-slate-900 font-mono mt-4 md:mt-8 pt-2 md:pt-4 border-t-4 border-slate-900 relative z-10 font-black tracking-widest uppercase">
        {cert.date}
      </p>
    </a>
  </div>
);

const Certificates = () => {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useGSAP(() => {
    gsap.from('.cert-header', {
      scrollTrigger: {
        trigger: '.cert-header',
        start: 'top 85%',
      },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    gsap.from('.cert-wrapper', {
      scrollTrigger: {
        trigger: '.cert-grid',
        start: 'top 80%',
      },
      y: 40, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.1, 
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timeout);
  }, [showAll]);

  return (
    <section id="certificates" ref={containerRef} className="relative z-10 py-16 md:py-32 bg-[#e8e2d7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="cert-header flex items-center gap-3 md:gap-4 mb-10 md:mb-20">
          <span className="text-slate-900 font-mono text-base md:text-xl font-bold">04.</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter uppercase">
            Certificates
          </h2>
          <div className="h-[4px] flex-grow bg-slate-900 ml-4 md:ml-12 max-w-[120px] md:max-w-[300px]"></div>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col gap-3 md:gap-6 mb-10">
          
          {/* Always Visible Certificates */}
          <div className="cert-grid grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {certificates.slice(0, 6).map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>

          {/* Expandable Certificates */}
          <div className={`grid transition-[grid-template-rows] duration-1000 ease-[0.16,1,0.3,1] ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="cert-grid grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pt-1">
                {certificates.slice(6).map((cert) => (
                  <CertCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Show More Button */}
        {certificates.length > 6 && (
          <div className="text-center mt-8 md:mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#f4efe6] border-4 border-slate-900 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 hover-target w-full sm:w-auto justify-center"
              style={{ minHeight: 48 }}
            >
              <div className="absolute inset-0 bg-slate-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#f4efe6] transition-colors duration-500">
                {showAll ? 'Show Less' : `Show More (${certificates.length - 6} more)`}
                {showAll ? (
                  <ChevronUp size={18} strokeWidth={3} />
                ) : (
                  <ChevronDown size={18} strokeWidth={3} />
                )}
              </span>
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Certificates;