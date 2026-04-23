import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, 
        { 
          y: -100, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          delay: 0.8, // হিরো সেকশনের সাথে সিঙ্ক করতে ডিলে কিছুটা বাড়ানো হলো
          ease: "power3.out" 
        }
      );
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(".mobile-link", 
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      // border-b border-white/5 ক্লাসটি সরিয়ে দেওয়া হয়েছে
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md py-4 shadow-2xl" 
          : "bg-transparent py-8"
      }`}
      style={{ opacity: 0 }} 
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="text-white">
            RABIUL<span className="text-purple-600">.</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[11px] font-bold hover:text-purple-500 transition-colors uppercase tracking-[0.2em] text-gray-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/rabiulislam5334"
            target="_blank"
            rel="noreferrer"
            className="text-white p-2 bg-white/5 rounded-full hover:bg-purple-600 transition-all"
          >
            <Github size={18} />
          </a>
        </div>

        <button className="md:hidden text-white outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] flex flex-col p-8 gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="mobile-link text-2xl font-black uppercase text-white hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;