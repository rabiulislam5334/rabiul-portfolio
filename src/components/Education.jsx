import React, { useEffect, useRef } from "react";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // বাম দিকের (Education) অ্যানিমেশন
        gsap.from(leftColRef.current, {
          opacity: 0,
          x: -40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ডান দিকের (Certifications) অ্যানিমেশন
        gsap.from(rightColRef.current, {
          opacity: 0,
          x: 40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
            once: true,
          }
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-11/12 mx-auto py-32 grid grid-cols-1 lg:grid-cols-2 gap-16" 
      id="education"
    >
      {/* Education Section */}
      <div ref={leftColRef} style={{ opacity: 1 }}>
        <h2 className="text-4xl font-black mb-12 flex items-center gap-3 text-white uppercase tracking-tighter">
          <GraduationCap className="text-purple-500" size={32} /> Education
        </h2>
        <div className="space-y-10">
          {portfolioData.education
            .filter((e) => e.year)
            .map((edu, i) => (
              <div
                key={i}
                className="border-l-2 border-purple-500/30 pl-8 relative group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" />
                <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mt-2 text-lg">
                  {edu.school} <span className="text-purple-500/50 mx-2">|</span> {edu.year}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div ref={rightColRef} style={{ opacity: 1 }}>
        <h2 className="text-4xl font-black mb-12 flex items-center gap-3 text-white uppercase tracking-tighter">
          <Award className="text-blue-500" size={32} /> Certifications
        </h2>
        <div className="grid gap-6">
          {portfolioData.education
            .filter((e) => e.type)
            .map((cert, i) => (
              <div
                key={i}
                className="p-6 bg-zinc-900/40 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all duration-700 rounded-full" />
                
                <div className="flex justify-between items-start gap-4 relative z-10">
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {cert.degree}
                    </h4>
                    <p className="text-sm text-gray-400 mt-2 font-medium">{cert.school}</p>
                    {cert.details && (
                      <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-lg mt-4">
                        <p className="text-[11px] text-blue-400 font-mono uppercase tracking-wider">
                          {cert.details}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <CheckCircle2 size={20} className="text-blue-500" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;