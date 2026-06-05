import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, personalInfo } from '../../data/content';
import { Github, ExternalLink, Folder, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Komponen Kartu Proyek Terpisah untuk state gambar dan hover yang lebih baik
const ProjectCard = ({ project, isActive, forceActive = false, onMouseEnter, onMouseLeave }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative bg-[#f4efe6] rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-[flex,transform] duration-700 ease-[0.16,1,0.3,1] border-4 border-slate-900 flex flex-col cursor-pointer hover-target ${(isActive || forceActive) ? 'md:flex-[3.5] flex-[auto]' : 'md:flex-1 flex-[auto]'}`}
      style={{ willChange: 'flex' }}
    >
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden pointer-events-none">
        {project.image && !imgError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-[transform,opacity,filter] duration-1000 ease-[0.16,1,0.3,1] ${(isActive || forceActive) ? 'scale-105 opacity-80 grayscale-0' : 'opacity-30 grayscale-[50%]'}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 transition-transform duration-1000 group-hover:scale-110">
            <Folder size={48} className="text-slate-500 opacity-20" />
          </div>
        )}
        
        {/* Gradient Overlay for Text Readability - Starts at 50% */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 from-0% via-slate-900/80 via-40% to-transparent to-50% pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col justify-end h-full p-4 md:p-8 overflow-hidden">
        
        {/* Title */}
        <div className="mb-2 md:mb-4 min-w-[150px] md:min-w-[250px]">
          <h3 className={`font-bold font-display text-white transition-all duration-700 ease-[0.16,1,0.3,1] leading-tight ${(isActive || forceActive) ? 'text-xl md:text-5xl' : 'text-lg md:text-3xl text-slate-300'}`}>
            {project.title}
          </h3>
        </div>

        {/* Expanded Content using Grid transition for silky smooth animation */}
        <div className={`grid transition-all duration-700 ease-[0.16,1,0.3,1] ${(isActive || forceActive) ? 'grid-rows-[1fr] opacity-100 translate-y-0 mt-2' : 'grid-rows-[0fr] opacity-0 translate-y-4 mt-0'}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6">
              <p className="text-[#f4efe6] text-xs md:text-base leading-relaxed max-w-2xl font-sans line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] md:text-xs font-mono font-bold text-slate-900 bg-[#f4efe6] border border-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-none uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 md:gap-4 pt-2">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="group/btn relative overflow-hidden flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-[#4ade80] border-2 border-slate-900 text-slate-900 rounded-none font-bold text-[10px] md:text-sm transition-all duration-300 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] uppercase">
                    <div className="absolute inset-0 bg-[#f4efe6] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                    <span className="relative z-10 flex items-center gap-1 md:gap-2 group-hover/btn:text-slate-900">
                      <span className="block relative overflow-hidden h-4 md:h-5">
                        <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:-translate-y-full">
                          Visit
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover/btn:translate-y-0">
                          Visit
                        </span>
                      </span>
                      <ExternalLink size={14} className="md:w-4 md:h-4" />
                    </span>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="group/btn relative overflow-hidden flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-slate-900 border-2 border-slate-900 text-[#f4efe6] rounded-none font-bold text-[10px] md:text-sm transition-all duration-300 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] uppercase">
                    <div className="absolute inset-0 bg-[#f4efe6] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                    <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-slate-900">
                      <span className="block relative overflow-hidden h-5">
                        <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:-translate-y-full">
                          Repo
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover/btn:translate-y-0">
                          Repo
                        </span>
                      </span>
                      <Github size={16} />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const githubUrl = personalInfo.socials.find(s => s.name === 'GitHub')?.url;
  
  // State untuk mengontrol jumlah proyek dan kartu yang di-hover
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  // Group projects into rows of 3 for desktop flex layout
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }


  useGSAP(() => {
    gsap.from('.project-header', {
      scrollTrigger: { trigger: '.project-header', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    gsap.from('.project-wrapper', {
      scrollTrigger: { trigger: '.project-container', start: 'top 80%' },
      y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });
  }, { scope: containerRef });

  // Efek untuk menyegarkan ukuran scroll saat jumlah kartu berubah
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timeout);
  }, [showAll]);

  return (
    <section id="projects" ref={containerRef} className="relative z-10 py-24 md:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="project-header flex items-center gap-4 mb-16">
          <span className="text-slate-900 font-mono text-xl font-bold">03.</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter uppercase">
            Projects
          </h2>
          <div className="h-[4px] flex-grow bg-slate-900 ml-8 md:ml-12 max-w-[300px]"></div>
        </div>


        <div className="project-container flex flex-col gap-4">
          
          {/* DESKTOP LAYOUT (Chunked Flex Accordion) */}
          <div className="hidden md:flex flex-col gap-4">
            {/* Always visible rows */}
            {chunkedProjects.slice(0, 2).map((row, rowIndex) => (
              <div key={`desktop-visible-${rowIndex}`} className="project-wrapper flex flex-row gap-4 h-[500px]">
                {row.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    isActive={hoveredId === project.id}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  />
                ))}
                {/* Spacer untuk baris yang tidak seimbang */}
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div key={`spacer-${i}`} className="flex-1 transition-[flex] duration-700 ease-[0.16,1,0.3,1]"></div>
                ))}
              </div>
            ))}

            {/* Expandable rows */}
            <div className={`grid transition-[grid-template-rows] duration-1000 ease-[0.16,1,0.3,1] ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden flex flex-col gap-4">
                {chunkedProjects.slice(2).map((row, rowIndex) => (
                  <div key={`desktop-hidden-${rowIndex}`} className="project-wrapper flex flex-row gap-4 h-[500px]">
                    {row.map((project) => (
                      <ProjectCard 
                        key={project.id}
                        project={project}
                        isActive={hoveredId === project.id}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      />
                    ))}
                    {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
                      <div key={`spacer-${i}`} className="flex-1 transition-[flex] duration-700 ease-[0.16,1,0.3,1]"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT (Flat Grid) */}
          <div className="md:hidden flex flex-col gap-3">
            <div className="project-wrapper grid grid-cols-2 gap-3">
              {projects.slice(0, 6).map((project) => (
                <ProjectCard 
                  key={`mobile-visible-${project.id}`} 
                  project={project} 
                  forceActive={true} 
                />
              ))}
            </div>

            <div className={`grid transition-[grid-template-rows] duration-1000 ease-[0.16,1,0.3,1] ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="project-wrapper grid grid-cols-2 gap-3 pt-3">
                  {projects.slice(6).map((project) => (
                    <ProjectCard 
                      key={`mobile-hidden-${project.id}`} 
                      project={project} 
                      forceActive={true} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons (Show More & GitHub) berdampingan */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
          {projects.length > 6 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-[#e8e2d7] border-4 border-slate-900 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 w-full sm:w-auto justify-center hover-target"
            >
              <div className="absolute inset-0 bg-slate-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                <span className="block relative overflow-hidden h-5">
                  <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                    {showAll ? 'Show Less' : `Show More (${projects.length - 6} more)`}
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0">
                    {showAll ? 'Show Less' : `Show More (${projects.length - 6} more)`}
                  </span>
                </span>
                {showAll ? (
                  <ChevronUp size={20} strokeWidth={2} className="transition-transform duration-500 group-hover:-translate-y-1" />
                ) : (
                  <ChevronDown size={20} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-y-1" />
                )}
              </span>
            </button>
          )}

          <a 
            href={githubUrl}
            target="_blank" 
            rel="noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-slate-900 border-4 border-slate-900 text-[#f4efe6] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 w-full sm:w-auto justify-center hover-target"
          >
            <div className="absolute inset-0 bg-[#e8e2d7] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            
            <span className="relative z-10 flex items-center gap-3 group-hover:text-slate-900 transition-colors duration-500">
              <div className="relative overflow-hidden w-5 h-5">
                <Github size={20} className="absolute inset-0 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full" />
                <Github size={20} className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0" />
              </div>
              <span className="block relative overflow-hidden h-5">
                <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
                  GitHub Archive
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0">
                  GitHub Archive
                </span>
              </span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;