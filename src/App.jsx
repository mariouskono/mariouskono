import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Layout/Navbar';
import SmoothScroll from './components/Layout/SmoothScroll'; 
import CustomCursor from './components/UI/CustomCursor';

import Hero from './components/Sections/Hero';
import Marquee from './components/UI/Marquee';
import Preloader from './components/UI/Preloader';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Certificates from './components/Sections/Certificates';
import ContactFooter from './components/Sections/ContactFooter';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useGSAP(() => {
    // Array of sections and their respective background colors (light/dark handled by CSS variables or specific hexes, 
    // but here we can just toggle classes on the main container)
    const sections = document.querySelectorAll('section');
    
    const updateTheme = (index) => {
      // Create a subtle background shift effect based on the section index
      // We will animate an overlay or just let the body background transition.
      // Since Tailwind classes handle dark mode natively, we will use GSAP to shift a global CSS variable for a subtle gradient orb.
    };

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => updateTheme(index),
        onEnterBack: () => updateTheme(index),
      });
    });

  }, { scope: containerRef });

  return (
    <SmoothScroll>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div ref={containerRef} className={`min-h-screen bg-cream-50 text-slate-900 transition-colors duration-500 dark:bg-navy-900 dark:text-slate-lighter font-sans selection:bg-teal-400 selection:text-navy-900 overflow-hidden cursor-none relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
        {/* Dynamic ambient background orb */}
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none transition-all duration-1000 bg-gradient-radial from-teal-400/20 to-transparent blur-3xl scale-150 translate-x-1/4 translate-y-1/4"></div>
        
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <Marquee text1="ABOUT ME" text2="WHO AM I" className="bg-[#f4efe6] text-slate-900 border-t-4 border-slate-900" />
          <About />
          <Marquee text1="MY JOURNEY" text2="WORK EXPERIENCE" className="bg-[#f97316] text-slate-900 border-t-4 border-slate-900" />
          <Experience />
          <Marquee text1="TECHNICAL SKILLS" text2="MY ARSENAL" className="bg-slate-900 text-[#f4efe6] border-t-4 border-slate-900" />
          <Skills />
          <Marquee text1="SELECTED WORKS" text2="MY PORTFOLIO" className="bg-cream-50 text-slate-900 border-t-4 border-slate-900" />
          <Projects />

          <Certificates />
          <ContactFooter />
        </main>

      </div>
    </SmoothScroll>
  );
}

export default App;