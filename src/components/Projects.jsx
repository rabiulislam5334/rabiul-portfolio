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

        if (gridRef.current) {
          gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, scale: 0.95, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
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
    <section ref={sectionRef} className="w-11/12 mx-auto py-16 lg:py-32 border-t border-white/5" id="projects">
      {/* Header Section - মোবাইলে গ্যাপ কমানো হয়েছে */}
      <div ref={headerRef} className="mb-10 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} /> My Portfolio
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Works</span>
        </h2>
      </div>

      {/* Projects Grid - মোবাইলে গ্যাপ ৮ থেকে ১২ এর মধ্যে অ্যাডজাস্ট */}
      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            style={{ opacity: 0 }}
            className="group bg-zinc-900/40 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col relative will-change-transform"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 blur-[100px] group-hover:bg-purple-600/10 transition-all duration-700 rounded-full pointer-events-none"></div>
            
            {/* Image Preview - মোবাইলে Aspect Ratio ঠিক করা হয়েছে */}
            <div className="aspect-[16/9] lg:aspect-video w-full relative overflow-hidden bg-zinc-800">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Section - মোবাইলে প্যাডিং p-6 করা হয়েছে */}
            <div className="p-6 md:p-10 flex-grow flex flex-col relative z-10">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-500 font-bold uppercase tracking-widest text-[9px] mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-gray-400 mb-6 text-xs lg:text-sm leading-relaxed flex-grow italic">
                "{project.desc}"
              </p>

              {/* Tech Stack - মোবাইলে ছোট করা হয়েছে */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-gray-500 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons - মোবাইলে বাটনগুলোর সাইজ অপ্টিমাইজড */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 lg:py-3 rounded-xl bg-white text-black font-bold text-[11px] lg:text-xs hover:bg-purple-600 hover:text-white transition-all active:scale-95 shadow-md"
                >
                  <ExternalLink size={14} /> Demo
                </a>
                
                {project.client && (
                  <a 
                    href={project.client} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 lg:py-3 rounded-xl bg-zinc-800 text-white font-bold text-[11px] lg:text-xs hover:bg-zinc-700 transition-all border border-white/5 active:scale-95"
                  >
                    <Github size={14} /> {project.server ? "Client" : "Github"}
                  </a>
                )}

                {project.server && (
                  <a 
                    href={project.server} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 py-2.5 lg:py-3 rounded-xl bg-zinc-800 text-white font-bold text-[11px] lg:text-xs hover:bg-zinc-700 transition-all border border-white/5 active:scale-95"
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