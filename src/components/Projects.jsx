import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code2, Server, Layout } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-11/12 mx-auto py-32" id="projects">
      {/* Header Section */}
      <div className="mb-20">
        <h4 className="text-purple-500 font-mono tracking-widest mb-2 uppercase text-sm">
          Portfolio
        </h4>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
          Featured <span className="text-purple-600">Works</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-600 mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col"
          >
            {/* Project Image/Preview Section */}
            <div className="h-72 bg-zinc-800/50 relative overflow-hidden border-b border-white/5">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-20">
                  <Code2
                    size={80}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex-grow flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-500 font-mono font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-sm flex-grow">
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                      t === "Stripe" || t === "JWT" || t === "MongoDB"
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        : "bg-zinc-800 text-gray-500 border-white/5"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                className={`grid gap-4 ${
                  project.server ? "grid-cols-3" : "grid-cols-2"
                }`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-white text-black hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5"
                >
                  <ExternalLink size={20} />
                  <span className="text-[9px] font-black uppercase tracking-wider">
                    Live Demo
                  </span>
                </a>

                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-zinc-800 text-white hover:bg-zinc-700 transition-all transform active:scale-95"
                >
                  <Layout size={20} />
                  <span className="text-[9px] font-black uppercase tracking-wider">
                    Client
                  </span>
                </a>

                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-zinc-800 text-white hover:bg-zinc-700 transition-all transform active:scale-95"
                  >
                    <Server size={20} />
                    <span className="text-[9px] font-black uppercase tracking-wider">
                      Server
                    </span>
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
