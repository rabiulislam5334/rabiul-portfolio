import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // নেভবার লিঙ্কগুলো আপনার App.jsx এর ID এর সাথে মিল রেখে
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // স্মুথ স্ক্রলিং ফাংশন (Lenis এর সাথে ভালো কাজ করবে)
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // মোবাইল মেনু বন্ধ করার জন্য
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#0a0a0a]/60 backdrop-blur-xl py-4 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      {/* Bottom Border Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } bg-gradient-to-r from-transparent via-white/10 to-transparent`}
      />

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")}>
            RABIUL<span className="text-purple-600">.</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
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
            className="p-2.5 bg-white/5 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 flex flex-col p-8 gap-6 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-2xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
