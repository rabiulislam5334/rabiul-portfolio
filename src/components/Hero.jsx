import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import photo from "../assets/Web_rabiul.jpg";
import { Github, Linkedin, Download, Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // শুরুতে সব ইনভিজিবল করে রাখা
      gsap.set(".reveal-text", { opacity: 0, y: 40 });
      gsap.set(photoRef.current, { opacity: 0, scale: 0.9, x: 20 });

      // টেক্সট এনিমেশন (লোডার শেষ হওয়ার পর)
      gsap.to(".reveal-text", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1, 
      });

      gsap.to(photoRef.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        delay: 1.5,
        ease: "elastic.out(1, 0.8)",
      });


      gsap.to(".floating-photo", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-11/12 mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden py-24"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>

      {/* Left Content */}
      <div className="z-10 lg:w-3/5">
        <div className="overflow-hidden mb-6">
          <div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles size={14} /> SaaS & Enterprise Architect
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight uppercase tracking-tighter text-white">
            RABIUL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">ISLAM</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="reveal-text max-w-xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            Building high-performance <span className="text-white">Next.js SaaS</span> ecosystems and 
            <span className="text-white"> AI-integrated</span> enterprise solutions with <span className="text-white">TypeScript</span>.
          </p>
        </div>

        <div className="reveal-text flex flex-wrap gap-5 items-center">
          <a href="#contact" className="group px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-500 flex items-center gap-2">
            Let's Talk <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="/Rabiul_RESUME.pdf" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
            Download CV <Download size={18} />
          </a>

          <div className="flex gap-2 ml-4 items-center">
            <a href="https://github.com/rabiulislam5334" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all p-2 bg-white/5 rounded-xl hover:bg-white/10">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/developerrabiul" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-all p-2 bg-white/5 rounded-xl hover:bg-white/10">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Photo Section */}
      <div 
        ref={photoRef}
        className="lg:w-2/5 flex justify-center lg:justify-end mt-16 lg:mt-0 relative z-20"
      >
        <div className="relative group">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <img
            src={photo}
            alt="Md. Rabiul Islam"
            loading="eager" 
            className="floating-photo relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-cover 
                   drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                   transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
          
          {/* Shadow beneath photo */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-purple-600/20 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;