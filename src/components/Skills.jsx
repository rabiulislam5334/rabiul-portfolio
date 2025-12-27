import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../../public/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // কার্ডগুলোর অ্যানিমেশন
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2, // একটির পর একটি কার্ড আসবে
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // সেকশনটি স্ক্রিনের ৮০% এ আসলে শুরু হবে
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Frontend",
      items: portfolioData.skills.frontend,
      color: "text-blue-400",
      border: "hover:border-blue-500/50",
    },
    {
      title: "Backend",
      items: portfolioData.skills.backend,
      color: "text-green-400",
      border: "hover:border-green-500/50",
    },

    {
      title: "Database",
      items: portfolioData.skills.database,
      color: "text-orange-400",
      border: "hover:border-orange-500/50",
    },
    {
      title: "CMS",
      items: portfolioData.skills.CMS,
      color: "text-green-400",
      border: "hover:border-green-500/50",
    },
  ];

  return (
    <section ref={sectionRef} className="w-11/12 mx-auto py-20 overflow-hidden">
      <div className="mb-16">
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white">
          My Technical <span className="text-purple-600">Expertise</span>
        </h2>
        <div className="h-1 w-20 bg-purple-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`skill-card p-8 bg-zinc-900/50 rounded-3xl border border-white/5 ${cat.border} transition-colors duration-500 group`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${cat.color} group-hover:scale-110 transition-transform origin-left`}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/5 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
