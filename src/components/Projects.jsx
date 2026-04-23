import React, { useEffect, useRef } from "react";
import { ExternalLink, Server, Github, Sparkles } from "lucide-react";
import { portfolioData } from "../portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Header Animation
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          }
        });

        // Projects Cards Animation
        if (gridRef.current) {
          gsap.fromTo(
            gridRef.current.children,
            { 
              opacity: 0, 
              scale: 0.95,
              y: 20 
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2, // একটির পর একটি কার্ড আসবে
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                once: true,
              }
            }
          );
        }
      }, sectionRef);

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-11/12 mx-auto py-32" id="projects">
      {/* Header Section */}
      <div ref={headerRef} className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} /> My Portfolio
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Works</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            style={{ opacity: 0 }} // Initial state to avoid flash
            className="group bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col relative will-change-transform"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 blur-[100px] group-hover:bg-purple-600/10 transition-all duration-700 rounded-full pointer-events-none"></div>
            
            {/* Image Preview */}
            <div className="aspect-video w-full relative overflow-hidden bg-zinc-800">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex-grow flex flex-col relative z-10">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-500 font-bold uppercase tracking-widest text-[10px] mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow italic">
                "{project.desc}"
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-purple-600 hover:text-white transition-all shadow-lg active:scale-95"
                >
                  <ExternalLink size={14} /> Demo
                </a>
                
                {project.client && (
                  <a 
                    href={project.client} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-white font-bold text-xs hover:bg-zinc-700 transition-all border border-white/5 active:scale-95"
                  >
                    <Github size={14} /> {project.server ? "Client" : "Github"}
                  </a>
                )}

                {project.server && (
                  <a 
                    href={project.server} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-white font-bold text-xs hover:bg-zinc-700 transition-all border border-white/5 active:scale-95"
                  >
                    <Server size={14} /> Server Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;