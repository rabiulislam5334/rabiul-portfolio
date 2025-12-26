import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-500 text-sm font-mono">
        © 2024 MD RABIUL ISLAM. ALL RIGHTS RESERVED.
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        Built with <Heart size={14} className="text-red-500 fill-red-500" />{" "}
        using React & GSAP
      </div>
      <div className="flex gap-6 text-xs font-bold tracking-widest text-gray-500 uppercase">
        <a href="#" className="hover:text-white transition">
          Twitter
        </a>
        <a href="#" className="hover:text-white transition">
          LinkedIn
        </a>
        <a href="#" className="hover:text-white transition">
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
