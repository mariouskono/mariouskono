import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Meregistrasi plugin ScrollTrigger ke dalam core GSAP
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // 1. Inisialisasi Lenis (Mesin Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2, // Durasi momentum scroll. Angka 1.2 memberikan keseimbangan antara responsivitas dan kehalusan.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Persamaan matematika untuk perlambatan (easing) natural.
      smoothWheel: true,
      wheelMultiplier: 1, // Kecepatan scroll roda mouse
      touchMultiplier: 2, // Kecepatan scroll saat disentuh (mobile)
    });

    // 2. Sinkronisasi Lenis dengan GSAP ScrollTrigger
    // Ini memastikan animasi GSAP terpicu secara presisi saat halaman di-scroll oleh Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Mengintegrasikan Lenis ke dalam detak (ticker) GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Menonaktifkan lag smoothing bawaan GSAP agar tidak bentrok dengan Lenis
    gsap.ticker.lagSmoothing(0);

    // 4. Cleanup function (Mencegah memory leak saat komponen di-unmount)
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;