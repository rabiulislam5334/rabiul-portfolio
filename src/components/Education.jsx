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
    const ctx = gsap.context(() => {
      // বাম দিকের সেকশন এনিমেশন
      gsap.fromTo(leftColRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 90%", // আরও দ্রুত দেখানোর জন্য 90% করা হলো
            once: true,
          }
        }
      );

      // ডান দিকের সেকশন এনিমেশন
      gsap.fromTo(rightColRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 90%",
            once: true,
          }
        }
      );
    }, sectionRef);

    // রিফ্রেশ যাতে লেনিস বা অন্য স্ক্রল লাইব্রেরির সাথে কাজ করে
    ScrollTrigger.refresh();

    return () => ctx.revert(); // ক্লিনআপ
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-11/12 mx-auto py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 border-t border-white/5" 
      id="education"
    >
      {/* Education Column */}
      <div ref={leftColRef} className="opacity-0"> {/* ডিফল্ট অপাসিটি ০ কিন্তু GSAP ১ করে দিবে */}
        <h2 className="text-3xl lg:text-4xl font-black mb-8 lg:mb-12 flex items-center gap-3 text-white uppercase tracking-tighter">
          <GraduationCap className="text-purple-500" size={32} /> Education
        </h2>
        <div className="space-y-8 lg:space-y-10">
          {portfolioData.education?.map((edu, i) => (
            // যদি year থাকে তবেই এটি এডুকেশন হিসেবে দেখাবে
            edu.year && (
              <div key={i} className="border-l-2 border-purple-500/30 pl-6 lg:pl-8 relative group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" />
                <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mt-2 text-base lg:text-lg">
                  {edu.school} <span className="text-purple-500/50 mx-1 lg:mx-2">|</span> {edu.year}
                </p>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Certifications Column */}
      <div ref={rightColRef} className="opacity-0 mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-4xl font-black mb-8 lg:mb-12 flex items-center gap-3 text-white uppercase tracking-tighter">
          <Award className="text-blue-500" size={32} /> Certifications
        </h2>
        <div className="grid gap-4 lg:gap-6">
          {portfolioData.education?.map((cert, i) => (
            // যদি type (যেমন: certification) থাকে তবেই এটি এখানে দেখাবে
            cert.type && (
              <div key={i} className="p-5 lg:p-6 bg-zinc-900/40 rounded-[1.5rem] lg:rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all duration-700 rounded-full" />
                <div className="flex justify-between items-start gap-4 relative z-10">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg lg:text-xl text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {cert.degree}
                    </h4>
                    <p className="text-xs lg:text-sm text-gray-400 mt-2 font-medium">{cert.school}</p>
                    {cert.details && (
                      <div className="inline-block px-2.5 py-1 bg-blue-500/10 rounded-lg mt-3 lg:mt-4">
                        <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">{cert.details}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-2 bg-blue-500/10 rounded-xl shrink-0">
                    <CheckCircle2 size={18} className="text-blue-500" />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;