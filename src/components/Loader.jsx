import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Glowing Circle Loader */}
        <div className="relative h-24 w-24 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.5)]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-r-2 border-l-2 border-purple-400 opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 bg-purple-600 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Name with Purple Glow */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black tracking-[0.3em] text-white uppercase"
        >
          RABIUL
          <span className="text-purple-600 drop-shadow-[0_0_10px_#9333ea]">
            .
          </span>
        </motion.h2>

        <motion.p
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="text-[10px] text-purple-500/50 font-mono mt-2 tracking-widest overflow-hidden whitespace-nowrap"
        >
          LOADING EXPERIENCE...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
