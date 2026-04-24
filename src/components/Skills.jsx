import React, { useEffect, useRef } from "react";
import { Sparkles, Layout, Box, Database, Cpu, Users, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" size={24} />,
      items: ["Next.js (App Router)","JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS",  "GSAP"], 
      color: "text-blue-400",
      glow: "group-hover:shadow-blue-500/10"
    },
    {
      title: "Backend & SaaS",
      icon: <Box className="text-purple-400" size={24} />,
      items: ["Node.js", "Express.js","NextAuth", "Redis", "Socket.io", "REST APIs", "BullMQ","Clerk","Firebase"], 
      color: "text-purple-400",
      glow: "group-hover:shadow-purple-500/10"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-400" size={24} />,
      items: ["Oracle SQL (OCP)", "PostgreSQL", "MongoDB", "MySQL", "Prisma"], 
      color: "text-orange-400",
      glow: "group-hover:shadow-orange-500/10"
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="text-green-400" size={24} />,
      items: ["Docker", "Jira (Agile)", "Git/GitHub", "CI/CD Pipelines", "Google GenAI", "Vercel"], 
      color: "text-green-400",
      glow: "group-hover:shadow-green-400/10"
    },
    {
      title: "CMS Expertise",
      icon: <Globe className="text-yellow-400" size={24} />,
      items: ["WordPress", "Elementor", "CrocoBlock", "Divi", "WooCommerce"],
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-500/10"
    },
    {
      title: "Interpersonal",
      icon: <Users className="text-pink-400" size={24} />,
      items: ["Teamwork", "Communication", "Time Management", "Problem Solving", "Agile Management"], 
      color: "text-pink-400",
      glow: "group-hover:shadow-pink-500/10"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (gridRef.current) {
          gsap.fromTo(
            gridRef.current.children,
            { 
              opacity: 0, 
              y: 20, 
              scale: 0.95 
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 90%",
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
    // মোবাইলে py-16 এবং বড় স্ক্রিনে py-32
    <section ref={sectionRef} className="w-11/12 mx-auto py-16 lg:py-32 border-t border-white/5" id="skills">
      {/* টাইটেল এবং গ্রিডের গ্যাপ mb-10 করা হয়েছে */}
      <div className="mb-10 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} /> My Technical Stack
        </div>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-tight">
          Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">& Skills</span>
        </h2>
      </div>

      <div 
        ref={gridRef} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8"
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{ opacity: 0 }} 
            // মোবাইলে p-6 এবং বড় স্ক্রিনে p-8
            className={`group p-6 lg:p-8 bg-zinc-900/40 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden ${cat.glow} hover:shadow-2xl will-change-transform`}
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 blur-3xl group-hover:bg-white/10 transition-all duration-700 rounded-full"></div>

            {/* আইকন এবং টাইটেলের মাঝে গ্যাপ mb-6 করা হয়েছে */}
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="p-3 lg:p-4 bg-zinc-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                {cat.icon}
              </div>
              <h3 className={`text-xl lg:text-2xl font-bold ${cat.color}`}>{cat.title}</h3>
            </div>

            {/* স্কিল ট্যাগের গ্যাপ gap-2 করা হয়েছে */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white/5 rounded-xl text-xs lg:text-sm font-medium text-gray-300 border border-white/5 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 cursor-default"
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