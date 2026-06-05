import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../../context/ThemeProvider'; 

// PERBAIKAN 1: Menambahkan properti 'id' dengan nilai default 'tsparticles-base'
const HeroBackground = ({ id = "tsparticles-base" }) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme(); 

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60, 
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.6, color: "#14b8a6" },
        },
      },
    },
    particles: {
      color: { value: "#14b8a6" },
      links: {
        color: "#2dd4bf", 
        distance: 130, 
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 1.5, 
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80, 
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true, 
  };

  if (!init) {
    return <div className="absolute inset-0 bg-cream-50 dark:bg-slate-950 transition-colors duration-500 z-0"></div>;
  }

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
      <div className="absolute inset-0 bg-cream-50 dark:bg-slate-950 transition-colors duration-500"></div>
      
      {/* PERBAIKAN 2: Menggunakan prop 'id' yang dilempar dari komponen induk */}
      <Particles
        id={id}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-50 dark:to-slate-950 pointer-events-none z-10"></div>
    </div>
  );
};

export default HeroBackground;