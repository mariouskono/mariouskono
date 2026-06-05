import React from 'react';
import { personalInfo } from '../../data/content';

const Footer = () => {
  return (
    <footer className="py-12 text-center text-sm font-mono text-slate-600 dark:text-slate-400 bg-cream-50 dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Social Icons - Diperbesar & Diperluas Area Sentuhnya */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {personalInfo.socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                // Penambahan p-2 untuk memperluas area sentuh di layar mobile
                className="p-2 text-slate-500 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 hover:-translate-y-1 transform"
                aria-label={social.name}
              >
                {/* Ukuran ikon diperbesar menjadi 28 */}
                <IconComponent size={28} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>

        {/* Credits */}
        <p className="mb-3 text-slate-700 dark:text-slate-300">
          Built with <span className="text-teal-600 dark:text-teal-400 font-semibold">React</span>, <span className="text-teal-600 dark:text-teal-400 font-semibold">Tailwind</span> & <span className="text-teal-600 dark:text-teal-400 font-semibold">GSAP</span>
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 tracking-wide">
          Designed & Engineered by <span className="text-slate-900 dark:text-slate-lighter font-bold">{personalInfo.name}</span>
        </p>
        
        {/* Copyright */}
        <p className="text-[11px] mt-8 opacity-50">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;