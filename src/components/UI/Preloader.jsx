import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress > 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // When 100% is reached, animate out
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.5,
          onComplete: onComplete
        });
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#f4efe6] flex flex-col justify-center items-center overflow-hidden border-b-8 border-slate-900"
    >
      <div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter uppercase mb-4">
          UNO<span className="text-[#f97316]">.</span>
        </h1>
        
        {/* Loading Bar */}
        <div className="w-56 max-w-[85vw] h-4 border-4 border-slate-900 bg-white relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <div 
            className="absolute top-0 left-0 h-full bg-[#4ade80] transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="font-mono text-slate-900 font-bold mt-4 text-xl">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
