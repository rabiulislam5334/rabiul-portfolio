import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const experiences = [
    {
      role: "Software Developer (Oracle APEX)",
      company: "Metro Solution Ltd.",
      duration: "Jan 2023 - Oct 2023",
      location: "Dhaka, Bangladesh",
      desc: "Worked on BASCO automation. Developed enterprise solutions focused on Oracle data management and efficient business workflows.",
      highlights: ["Oracle SQL", "PL/SQL", "ERP Automation"]
    },
    {
      role: "Software Support Executive",
      company: "CNS Ltd.",
      duration: "Oct 2019 - Dec 2022",
      location: "Dhaka, Bangladesh",
      desc: "Supported national-scale projects like DEEDS (Land Registration) and PWC (Food). Specialized in database troubleshooting and technical assistance.",
      highlights: ["Database Support", "System Troubleshooting", "Government Projects"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Header Animation
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          }
        });

        // Cards Animation
        if (cardsRef.current) {
          gsap.fromTo(
            cardsRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 85%",
                once: true
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
    <section ref={sectionRef} id="experience" className="w-11/12 mx-auto py-32">
      <div ref={headerRef} className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} /> My Professional Journey
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">History</span>
        </h2>
      </div>

      <div ref={cardsRef} className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{ opacity: 0 }} // Initial state for preventing flash
            className="group p-8 md:p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 relative overflow-hidden will-change-transform"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 blur-[100px] group-hover:bg-purple-600/10 transition-all duration-700 rounded-full pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-600/10 rounded-lg text-purple-400">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-xl text-gray-400 font-medium ml-0 md:ml-11 mb-4">
                  {exp.company}
                </p>
                
                <p className="text-gray-400 max-w-3xl leading-relaxed ml-0 md:ml-11">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 ml-0 md:ml-11">
                  {exp.highlights.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/5 group-hover:border-purple-500/20 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:items-end gap-3 text-sm font-mono shrink-0">
                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-gray-300">
                  <Calendar size={14} className="text-purple-500" /> {exp.duration}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 text-gray-500">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;