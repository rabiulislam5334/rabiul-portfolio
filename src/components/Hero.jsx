import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import photo from "../assets/Web_rabiul.jpg";
import { Github, Linkedin, Download, Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([".reveal-text", photoRef.current], { 
        opacity: 0, 
        y: 30,
        visibility: "visible" 
      });
      
      // মোবাইলে ফটোর পজিশন x:0 রাখা ভালো যাতে লেআউট না কাঁপে
      gsap.set(photoRef.current, { scale: 0.95 });

      gsap.to(".reveal-text", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.to(photoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 1.3,
        ease: "power2.out",
      });

      gsap.to(".floating-photo", {
        y: -15,
        duration: 2.5,
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
      // মোবাইলে py-16 এবং items-center এর বদলে টেক্সট সেন্টার করার জন্য flex-col রাখা হয়েছে
      className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between relative overflow-hidden px-6 lg:px-12 py-16 lg:py-24"
    >
      {/* Background Glows - মোবাইলে এগুলো ছোট করা হয়েছে */}
      <div className="absolute top-1/4 -right-10 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-blue-600/10 blur-[100px] lg:blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-10 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-purple-600/10 blur-[80px] lg:blur-[120px] rounded-full -z-10"></div>

      {/* Left Content */}
      <div className="z-10 w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="overflow-hidden mb-6">
          <div className="reveal-text invisible inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] lg:text-xs font-bold tracking-widest uppercase">
            <Sparkles size={14} /> SaaS & Enterprise Architect
          </div>
        </div>

        <div className="overflow-hidden w-full">
          {/* মোবাইলে টেক্সট text-4xl বা 5xl এ রাখা হয়েছে (আগে 8xl ছিল যা ভেঙে যাচ্ছিল) */}
          <h1 className="reveal-text invisible text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] lg:leading-tight uppercase tracking-tighter text-white">
            RABIUL <br className="lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">ISLAM</span>
          </h1>
        </div>

        <div className="overflow-hidden w-full">
          {/* মোবাইলে text-base এবং ম্যাক্স উইডথ সেট করা হয়েছে */}
          <p className="reveal-text invisible max-w-lg lg:max-w-xl text-gray-400 text-base lg:text-xl mb-10 leading-relaxed font-medium mx-auto lg:mx-0">
            Building high-performance <span className="text-white">Next.js SaaS</span> ecosystems and 
            <span className="text-white"> AI-integrated</span> enterprise solutions.
          </p>
        </div>

        <div className="reveal-text invisible flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-5 items-center justify-center lg:justify-start w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto group px-8 lg:px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
            Let's Talk <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="/Rabiul_RESUME.pdf" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
            Download CV <Download size={18} />
          </a>

          <div className="flex gap-4 items-center mt-2 lg:mt-0">
            <a href="https://github.com/rabiulislam5334" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all p-3 bg-white/5 rounded-xl">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/developerrabiul" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-all p-3 bg-white/5 rounded-xl">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Photo Section */}
      <div 
        ref={photoRef}
        className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-20 invisible"
      >
        <div className="relative group w-3/4 sm:w-full max-w-[300px] lg:max-w-[500px]">
          <div className="absolute -inset-4 bg-black/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <img
            src={photo}
            alt="Md. Rabiul Islam"
            className="floating-photo relative z-10 w-full h-auto object-cover 
                   drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] 
                   transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/60 blur-3xl -z-10 rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;