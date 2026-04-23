import React, { useEffect, useRef } from "react";
import { Database, Cpu, Ship, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP প্লাগইন রেজিস্টার করা
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // বাম দিকের ইমেজের জন্য অ্যানিমেশন
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%", // স্ক্রিনের ৮৫% এ আসলে শুরু হবে
            toggleActions: "play none none reverse",
          },
        }
      );

      // ডান দিকের কন্টেন্ট এবং টাইটেলের জন্য অ্যানিমেশন
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15, // একটির পর একটি আসবে
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // ক্লিনআপ
  }, []);

  const stats = [
    { icon: <Layers size={24} />, title: "SaaS Ready", desc: "Multi-tenant Architecture", color: "text-indigo-500", border: "hover:border-indigo-500/50" },
    { icon: <Database size={24} />, title: "Advanced SQL", desc: "Oracle & PostgreSQL", color: "text-blue-500", border: "hover:border-blue-500/50" },
    { icon: <Cpu size={24} />, title: "AI Integrated", desc: "Google GenAI Expert", color: "text-green-500", border: "hover:border-green-500/50" },
    { icon: <Ship size={24} />, title: "DevOps", desc: "Docker & CI/CD", color: "text-orange-500", border: "hover:border-orange-500/50" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-11/12 mx-auto py-32 border-t border-white/5" 
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* বাম দিক: ইমেজ কন্টেইনার */}
        <div ref={imageRef} className="relative">
          <div className="relative z-10 p-3 bg-zinc-900/50 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-md group shadow-2xl">
            <img
              src="/MYXJ_20250922180709396_save (1).jpg"
              alt="MD RABIUL ISLAM"
              className="rounded-[2.5rem] w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-600/10 blur-[100px] -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/10 blur-[100px] -z-10"></div>
        </div>

        {/* ডান দিক: কন্টেন্ট সেকশন */}
        <div ref={contentRef} className="flex flex-col">
          <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} /> SaaS & Enterprise Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 italic leading-tight text-white">
            Architecting Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
              SaaS Ecosystems.
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
            <p>
              I am <span className="text-white font-semibold text-xl">MD RABIUL ISLAM</span>, 
              a Team Lead specializing in high-performance <span className="text-blue-400">Next.js</span> and 
              <span className="text-blue-400"> TypeScript</span> applications.
            </p>
            <p>
              With expertise in <span className="text-purple-400 font-medium">Oracle (OCP), PostgreSQL</span>, 
              I design robust database architectures and leverage <span className="text-purple-400">Docker </span> 
              for seamless deployment.
            </p>
          </div>

          {/* স্ট্যাটস গ্রিড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 ${stat.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{stat.title}</h4>
                  <p className="text-[10px] text-gray-500 italic uppercase tracking-wider">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;