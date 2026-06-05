import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../data/content';
import { Mail, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.contact-elem', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-32 md:py-48 bg-cream-50 dark:bg-navy-900 transition-colors duration-500 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <p className="contact-elem text-teal-500 dark:text-teal-400 font-mono mb-6 text-sm md:text-base tracking-wide">
          05. What's Next?
        </p>
        
        <h2 className="contact-elem text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-slate-lighter mb-8 tracking-tighter">
          Get In Touch
        </h2>
        
        <p className="contact-elem text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
          I am currently open to new opportunities as a <strong className="text-slate-900 dark:text-slate-lighter font-semibold">Machine Learning Engineer</strong> or <strong className="text-slate-900 dark:text-slate-lighter font-semibold">Data Scientist</strong>. 
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
        </p>

        {/* Tombol Email Utama */}
        <div className="contact-elem mb-16">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-transparent text-white dark:text-teal-400 border-2 border-slate-900 dark:border-teal-400 rounded font-mono text-base font-semibold hover:bg-slate-800 dark:hover:bg-teal-400/10 transition-colors duration-300 group"
          >
            <Mail size={22} />
            Say Hello
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
        
        {/* Baris Sosial Media Premium */}
        <div className="contact-elem flex flex-wrap justify-center gap-4 md:gap-6">
          {personalInfo.socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-slate-300 dark:border-navy-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-all duration-300 hover:-translate-y-1"
              >
                <IconComponent size={20} strokeWidth={1.5} />
                <span className="font-mono text-sm font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>

        <div className="contact-elem mt-24">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
               Let's connect and build the future together.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;