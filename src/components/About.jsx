import React from "react";
import { User, Code2, Coffee, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      className="w-11/12 mx-auto py-32 border-t border-white/5"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image Container */}
        <div className="relative" data-aos="fade-right">
          <div className="relative z-10 p-3 bg-zinc-900/50 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-md group shadow-2xl">
            <img
              src="/MYXJ_20250922180709396_save (1).jpg"
              alt="MD RABIUL ISLAM"
              className="rounded-[2.5rem] w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-600/20 blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/20 blur-[100px] -z-10 animate-pulse"></div>
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="animate-spin-slow" /> Personal Bio
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 italic leading-tight text-white">
            I don't just build websites; I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Digital Experiences.
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="text-white font-semibold">MD RABIUL ISLAM</span>,
              a web artisan based in Bangladesh. I thrive at the intersection of
              design and development.
            </p>
            <p>
              With a focus on{" "}
              <span className="text-purple-400">
                Modern JavaScript frameworks
              </span>{" "}
              and <span className="text-blue-400">Fluid Animations</span>, I
              bring static designs to life. I believe in writing code that is as
              clean as the UI.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="p-3 bg-purple-600/10 rounded-2xl group-hover:bg-purple-600/20 transition-colors">
                <Code2 className="text-purple-500" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">20+ Projects</h4>
                <p className="text-xs text-gray-500 italic">
                  Crafted with precision
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all group">
              <div className="p-3 bg-orange-600/10 rounded-2xl group-hover:bg-orange-600/20 transition-colors">
                <Coffee className="text-orange-500" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Endless Coffee</h4>
                <p className="text-xs text-gray-500 italic">
                  Coding fuel & passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
