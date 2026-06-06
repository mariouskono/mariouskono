import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, personalInfo } from '../../data/content';
import { Github, ExternalLink, Folder, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Komponen Kartu Proyek Terpisah
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 from-0% via-slate-900/80 via-40% to-transparent to-50% pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col justify-end h-full p-4 md:p-8 overflow-hidden">
        
        {/* Title */}
        <div className="mb-2 md:mb-4">
          <h3 className={`font-bold font-display text-white transition-all duration-700 ease-[0.16,1,0.3,1] leading-tight ${(isActive || forceActive) ? 'text-base md:text-5xl' : 'text-sm md:text-3xl text-slate-300'}`}>
            {project.title}
          </h3>
        </div>

        {/* Expanded Content */}
        <div className={`grid transition-all duration-700 ease-[0.16,1,0.3,1] ${(isActive || forceActive) ? 'grid-rows-[1fr] opacity-100 translate-y-0 mt-2' : 'grid-rows-[0fr] opacity-0 translate-y-4 mt-0'}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 md:gap-6">
              <p className="text-[#f4efe6] text-xs leading-relaxed max-w-2xl font-sans line-clamp-2 md:line-clamp-none md:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] md:text-xs font-mono font-bold text-slate-900 bg-[#f4efe6] border border-slate-900 px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-none uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 md:gap-4 pt-1 md:pt-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative overflow-hidden flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-[#4ade80] border-2 border-slate-900 text-slate-900 rounded-none font-bold text-[10px] md:text-sm transition-all duration-300 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] uppercase"
                    style={{ minHeight: 36 }}
                  >
                    <div className="absolute inset-0 bg-[#f4efe6] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                    <span className="relative z-10 flex items-center gap-1 group-hover/btn:text-slate-900">
                      Visit <ExternalLink size={12} className="md:w-4 md:h-4" />
                    </span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative overflow-hidden flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-slate-900 border-2 border-slate-900 text-[#f4efe6] rounded-none font-bold text-[10px] md:text-sm transition-all duration-300 hover:scale-105 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] uppercase"
                    style={{ minHeight: 36 }}
                  >
                    <div className="absolute inset-0 bg-[#f4efe6] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                    <span className="relative z-10 flex items-center gap-1 group-hover/btn:text-slate-900">
                      Repo <Github size={12} className="md:w-4 md:h-4" />
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timeout);
  }, [showAll]);

  return (
    <section id="projects" ref={containerRef} className="relative z-10 py-16 md:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="project-header flex items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <span className="text-slate-900 font-mono text-base md:text-xl font-bold">03.</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter uppercase">
            Projects
          </h2>
          <div className="h-[4px] flex-grow bg-slate-900 ml-4 md:ml-12 max-w-[120px] md:max-w-[300px]"></div>
        </div>

        <div className="project-container flex flex-col gap-4">
          
          {/* DESKTOP LAYOUT (Chunked Flex Accordion) */}
          <div className="hidden md:flex flex-col gap-4">
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
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div key={`spacer-${i}`} className="flex-1 transition-[flex] duration-700 ease-[0.16,1,0.3,1]"></div>
                ))}
              </div>
            ))}

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

          {/* MOBILE LAYOUT — 1 kolom penuh, lebih rapi & mudah dibaca */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Visible projects */}
            <div className="project-wrapper flex flex-col gap-3">
              {projects.slice(0, 6).map((project) => (
                <div
                  key={`mobile-visible-${project.id}`}
                  className="relative h-[180px] bg-slate-900 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-hidden"
                >
                  {/* Background image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
                    <h3 className="font-display font-black text-white text-lg leading-tight mb-1">{project.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[9px] font-mono font-bold text-slate-900 bg-[#f4efe6] px-1.5 py-0.5 uppercase">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-mono font-bold text-slate-400">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-[#4ade80] border-2 border-slate-900 text-slate-900 font-bold text-[10px] uppercase shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]" style={{ minHeight: 32 }}>
                          Visit <ExternalLink size={10} />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-[#f4efe6] border-2 border-slate-900 text-slate-900 font-bold text-[10px] uppercase shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]" style={{ minHeight: 32 }}>
                          Repo <Github size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable mobile projects */}
            <div className={`grid transition-[grid-template-rows] duration-1000 ease-[0.16,1,0.3,1] ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="project-wrapper flex flex-col gap-3 pt-3">
                  {projects.slice(6).map((project) => (
                    <div
                      key={`mobile-hidden-${project.id}`}
                      className="relative h-[180px] bg-slate-900 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-hidden"
                    >
                      {project.image && (
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
                        <h3 className="font-display font-black text-white text-lg leading-tight mb-1">{project.title}</h3>
                        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[9px] font-mono font-bold text-slate-900 bg-[#f4efe6] px-1.5 py-0.5 uppercase">{t}</span>
                          ))}
                          {project.tech.length > 3 && <span className="text-[9px] font-mono font-bold text-slate-400">+{project.tech.length - 3}</span>}
                        </div>
                        <div className="flex gap-2">
                          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-[#4ade80] border-2 border-slate-900 text-slate-900 font-bold text-[10px] uppercase shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">Visit <ExternalLink size={10} /></a>}
                          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-[#f4efe6] border-2 border-slate-900 text-slate-900 font-bold text-[10px] uppercase shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">Repo <Github size={10} /></a>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-10 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          {projects.length > 6 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#e8e2d7] border-4 border-slate-900 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 w-full sm:w-auto justify-center hover-target"
              style={{ minHeight: 48 }}
            >
              <div className="absolute inset-0 bg-slate-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                {showAll ? 'Show Less' : `Show More (${projects.length - 6} more)`}
                {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
          )}

          <a 
            href={githubUrl}
            target="_blank" 
            rel="noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-900 border-4 border-slate-900 text-[#f4efe6] shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-none font-mono text-sm font-black uppercase transition-all duration-500 w-full sm:w-auto justify-center hover-target"
            style={{ minHeight: 48 }}
          >
            <div className="absolute inset-0 bg-[#e8e2d7] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-900 transition-colors duration-500">
              <Github size={18} />
              GitHub Archive
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;