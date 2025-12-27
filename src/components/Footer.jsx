import React from "react";
import { Heart, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  // ডাইনামিক বছর বের করার জন্য
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-11/12 mx-auto py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Dynamic Year & Copyright */}
      <div className="text-gray-500 text-[10px] md:text-sm font-mono tracking-tighter">
        © {currentYear} MD RABIUL ISLAM. ALL RIGHTS RESERVED.
      </div>

      {/* Built with Heart */}
      {/* <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
        Built with{" "}
        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />{" "}
        using React & GSAP
      </div> */}

      {/* Social Links with Real Icons */}
      <div className="flex items-center gap-6">
        {/* Twitter / X */}
        <a
          href="https://x.com/Rakib2361992"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-white transition-all hover:-translate-y-1"
          title="Follow on X"
        >
          <Twitter size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rabiulislam5334/" // আপনার LinkedIn URL চেক করে নিন
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-all hover:-translate-y-1"
          title="Connect on LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rabiulislam5334"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-white transition-all hover:-translate-y-1"
          title="Check Github"
        >
          <Github size={18} />
        </a>

        {/* Discord */}
        <a
          href={`https://discordapp.com/users/1070262806009614367`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-indigo-500 transition-all hover:-translate-y-1"
          title="Chat on Discord"
        >
          <MessageSquare size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
