import React from "react";
import { Github, Twitter, Linkedin, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-11/12 mx-auto py-8 lg:py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8">
        
        {/* Dynamic Year & Copyright */}
        <div className="text-gray-500 text-[10px] md:text-xs lg:text-sm font-mono tracking-widest text-center md:text-left uppercase">
          © {currentYear} MD RABIUL ISLAM. <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
        </div>

        {/* Optional: Built with Heart (আমি এটি আবার অ্যাড করলাম, এটি প্রফেশনাল পোর্টফোলিওতে বেশ ভালো লাগে)
        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 font-medium">
          
          <Heart size={12} className="text-purple-500 fill-purple-500 animate-pulse" />
          
        </div> */}

        {/* Social Links */}
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
            href="https://www.linkedin.com/in/rabiulislam5334/"
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
            href="https://discordapp.com/users/1070262806009614367"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-indigo-500 transition-all hover:-translate-y-1"
            title="Chat on Discord"
          >
            <MessageSquare size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;