import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // ১. ইনিশিয়াল এন্ট্রেন্স এনিমেশন (লোডার এর পর আসবে)
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 1.2, // লোডার বিদায় নেওয়ার পর আসার জন্য
      });
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  // মোবাইল মেনু ওপেন/ক্লোজ এনিমেশন
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(".mobile-link", 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
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
      // Lenis থাকলে এটি স্মুথলি কাজ করবে
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter">
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="text-white">
            RABIUL<span className="text-purple-600">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative text-[11px] font-bold hover:text-purple-500 transition-colors uppercase tracking-[0.2em] text-gray-300 group"
            >
              {link.name}
              {/* Hover Underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://github.com/rabiulislam5334"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-white/5 rounded-full text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Using GSAP for stagger inside simple conditional) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 flex flex-col p-8 gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="mobile-link text-3xl font-black uppercase tracking-tighter text-white hover:text-purple-600 transition-colors"
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