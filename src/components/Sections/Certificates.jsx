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
    >
      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-all duration-300 transform group-hover:scale-150 group-hover:rotate-12">
        <Award size={120} strokeWidth={1} className="text-slate-900" />
      </div>
      
      <div>
        <div className="mb-6 p-4 bg-slate-900 rounded-none text-[#f4efe6] inline-block transition-colors duration-300">
          <Award size={28} strokeWidth={2} />
        </div>
        
        <h4 className="font-black font-display text-slate-900 text-lg md:text-2xl uppercase leading-tight mb-2 relative z-10">
          {cert.title}
        </h4>
        <p className="text-sm text-slate-800 font-bold font-mono relative z-10 uppercase">
          {cert.issuer}
        </p>
      </div>
      
      <p className="text-xs text-slate-900 font-mono mt-8 pt-4 border-t-4 border-slate-900 relative z-10 font-black tracking-widest uppercase">
        {cert.date}
      </p>
    </a>
  </div>
);

const Certificates = () => {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  // 1. Animasi saat pertama kali masuk (ScrollTrigger)
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

  // 2. Memberi tahu GSAP dan Lenis bahwa tinggi halaman berubah saat tombol "Show More" diklik
  useEffect(() => {
    // Memberikan sedikit waktu (delay) agar DOM selesai di-render oleh React
    // sebelum menyuruh ScrollTrigger mengukur ulang tinggi halaman.
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timeout);
  }, [showAll]);

  return (
    // Memastikan ID "certificates" ada agar tautan Navbar berfungsi
    <section id="certificates" ref={containerRef} className="relative z-10 py-24 md:py-32 bg-[#e8e2d7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Seksi */}
        <div className="cert-header flex items-center gap-4 mb-20">
          <span className="text-slate-900 font-mono text-xl font-bold">04.</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter uppercase">
            Certificates
          </h2>
          <div className="h-[4px] flex-grow bg-slate-900 ml-8 md:ml-12 max-w-[300px]"></div>
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

        {/* Tombol Show More / Less */}
        {certificates.length > 6 && (
          <div className="text-center mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-[#f4efe6] border-4 border-slate-900 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 hover-target"
            >
              <div className="absolute inset-0 bg-slate-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#f4efe6] transition-colors duration-500">
                <span className="block relative overflow-hidden h-5">
                  <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                    {showAll ? 'Show Less' : `Show More (${certificates.length - 6} more)`}
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0">
                    {showAll ? 'Show Less' : `Show More (${certificates.length - 6} more)`}
                  </span>
                </span>
                {showAll ? (
                  <ChevronUp size={20} strokeWidth={3} className="transition-transform duration-500 group-hover:-translate-y-1" />
                ) : (
                  <ChevronDown size={20} strokeWidth={3} className="transition-transform duration-500 group-hover:translate-y-1" />
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