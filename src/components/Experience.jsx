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
    // মোবাইলে py-16 এবং বড় স্ক্রিনে py-32
    <section ref={sectionRef} id="experience" className="w-11/12 mx-auto py-16 lg:py-32 border-t border-white/5">
      <div ref={headerRef} className="mb-10 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} /> My Professional Journey
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">History</span>
        </h2>
      </div>

      <div ref={cardsRef} className="space-y-6 lg:space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{ opacity: 0 }}
            // মোবাইলে p-6 এবং কার্ডের রাউন্ডেড কর্নার অ্যাডজাস্ট করা হয়েছে
            className="group p-6 md:p-10 bg-zinc-900/40 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-500 relative overflow-hidden will-change-transform"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 blur-[100px] group-hover:bg-purple-600/10 transition-all duration-700 rounded-full pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-600/10 rounded-lg text-purple-400 shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                    {exp.role}
                  </h3>
                </div>
                
                {/* মোবাইলে ml-0 রাখা হয়েছে গ্যাপ কমাতে */}
                <p className="text-lg lg:text-xl text-gray-400 font-medium lg:ml-11 mb-4">
                  {exp.company}
                </p>
                
                <p className="text-gray-400 text-sm lg:text-base max-w-3xl leading-relaxed lg:ml-11">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 lg:ml-11">
                  {exp.highlights.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-[10px] lg:text-xs text-gray-500 border border-white/5 group-hover:border-purple-500/20 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ডেট এবং লোকেশন সেকশন মোবাইলে আরও ক্লিন করা হয়েছে */}
              <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 text-[11px] lg:text-sm font-mono shrink-0 border-t lg:border-t-0 border-white/5 pt-4 lg:pt-0">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/10 text-gray-300">
                  <Calendar size={14} className="text-purple-500" /> {exp.duration}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 text-gray-500">
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