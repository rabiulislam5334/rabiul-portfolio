import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import photo from "../assets/Web_rabiul.jpg";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import { portfolioData } from "../../public/portfolioData";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // টেক্সট অ্যানিমেশন
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // ছবির ফ্লোটিং অ্যানিমেশন
      gsap.to(".floating-photo", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-11/12 mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden py-20"
    >
      {/* Background Effect */}
      <div className="bg-circle absolute top-1/4 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10"></div>

      {/* Left Content */}
      <div className="z-10 lg:w-3/5">
        <div className="overflow-hidden">
          <h4 className="reveal-text text-purple-500 font-mono text-lg mb-4 tracking-[0.3em]">
            FULL-STACK DEVELOPER
          </h4>
        </div>

        <div className="overflow-hidden">
          <h1 className="reveal-text text-5xl md:text-8xl font-black mb-4 leading-none uppercase">
            RABIUL <span className="text-outline text-transparent">ISLAM</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="reveal-text max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
            I build high-performance web applications using the MERN stack and
            enterprise-grade Oracle systems. Based in Bangladesh.
          </p>
        </div>

        {/* Buttons and Social Links */}
        <div className="reveal-text flex flex-wrap gap-6 items-center">
          {/* Let's Talk Button */}
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
            <a href="#contact"> Let's Talk</a>
          </button>

          {/* Download CV Button */}
          <a
            href="/Rabiul_RESUME.pdf"
            download="Md_Rab
            iul_Islam_Resume.pdf"
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            Download CV <Download size={18} />
          </a>

          {/* Social Links - Fixed according to your portfolioData */}
          <div className="flex gap-4 ml-2 items-center text-gray-400">
            <a
              href="https://github.com/rabiulislam5334" // Github লিঙ্ক
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all p-2"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.linkedin} // আপনার ডাটা থেকে লিঙ্কডইন লিঙ্ক
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] hover:scale-110 transition-all p-2"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rabiulislam5334@gmail.com"
              className="hover:text-red-400 hover:scale-110 transition-all p-2 flex items-center justify-center"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Photo Section */}
      <div className="hero-photo lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
        <div className="relative group">
          <img
            src={photo}
            alt="Rabiul Islam"
            className="floating-photo photo-mask relative z-10 w-full max-w-[450px] lg:max-w-[550px] h-auto object-cover 
                 drop-shadow-[0_10px_30px_rgba(255,255,255,0.05)] 
                 filter brightness-110 transition-all duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
