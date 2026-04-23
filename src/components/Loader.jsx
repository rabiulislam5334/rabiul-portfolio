import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  useEffect(() => {
    // লোডার চলাকালীন স্ক্রল লক
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center">
        {/* Glowing Circle Loader */}
        <div className="relative h-24 w-24 mb-10">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
          />
          
          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border-r-2 border-l-2 border-blue-500 opacity-40"
          />
          
          {/* Center Point */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse shadow-[0_0_15px_#fff]"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-black tracking-[0.4em] text-white uppercase mb-2">
              RABIUL
              <span className="text-purple-600 drop-shadow-[0_0_12px_#9333ea]">.</span>
            </h2>
          </motion.div>

          <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden mx-auto">
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[9px] text-gray-500 font-mono mt-4 tracking-[0.2em] uppercase"
          >
            Synergy in Code & Design
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;