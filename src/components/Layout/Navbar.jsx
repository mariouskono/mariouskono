import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import profileImg from '../../assets/images/profile.png';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Experiences', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 400); 
  };



  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f4efe6] border-b-4 border-slate-900 py-4 shadow-[0px_4px_0px_0px_rgba(15,23,42,1)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-display font-black tracking-tighter text-slate-900 z-50 relative hover-target uppercase">
            Uno<span className="text-[#f97316]">.</span>
          </a>

          <div className="flex items-center z-50 relative group/nav">


            <button
              className="p-2 text-slate-900 flex items-center transition-all duration-300 relative hover-target ml-4 border-2 border-slate-900 bg-[#4ade80] shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]"
              aria-label="Toggle Menu"
            >
              <span className="font-mono text-xs md:text-sm font-black uppercase tracking-widest overflow-hidden transition-all duration-500 flex items-center max-w-0 opacity-0 group-hover/nav:max-w-[100px] group-hover/nav:opacity-100 group-hover/nav:mr-3 whitespace-nowrap">
                Navigation
              </span>
              
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-4 relative flex flex-col justify-between">
                  <span className="w-full h-[2px] bg-current transform transition-all duration-300 origin-center group-hover/nav:w-3/4 group-hover/nav:ml-auto"></span>
                  <span className="w-full h-[2px] bg-current transition-all duration-300 opacity-100"></span>
                  <span className="w-full h-[2px] bg-current transform transition-all duration-300 origin-center group-hover/nav:w-1/2 group-hover/nav:ml-auto"></span>
                </div>
              </div>
            </button>

            {/* DROPDOWN MENU (Otomatis muncul saat hover container group/nav) */}
            <div 
              className="absolute top-full right-0 mt-4 w-72 md:w-80 bg-[#f4efe6] border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-4 transition-all duration-300 origin-top-right scale-95 opacity-0 invisible group-hover/nav:scale-100 group-hover/nav:opacity-100 group-hover/nav:visible"
            >
              <ul className="flex flex-col gap-2 group/list">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group/item block px-4 py-3 text-lg font-display font-black uppercase text-slate-900 hover:bg-[#38bdf8] border-2 border-transparent hover:border-slate-900 transition-all duration-200 hover-target overflow-hidden"
                    >
                      <span className="block relative overflow-hidden h-7">
                        <span className="block transition-transform duration-300 group-hover/item:-translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover/item:translate-y-0 text-slate-900">
                          {link.name}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;