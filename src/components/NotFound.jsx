import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Home, Rocket } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
      {/* Background Purple Blurs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-[120px] md:text-[200px] font-black leading-none bg-gradient-to-b from-purple-500 to-purple-900 bg-clip-text text-transparent opacity-40">
            404
          </h1>
        </motion.div>

        <h2 className="text-2xl md:text-4xl font-bold text-white mt-[-20px] md:mt-[-40px] uppercase tracking-tighter">
          Looks like you're <span className="text-purple-500">Lost</span>
        </h2>

        <p className="text-gray-500 mt-4 mb-10 max-w-sm mx-auto text-sm">
          The galaxy you are looking for is far, far away. Let's get you back to
          safety.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-10 py-4 bg-purple-600 text-white font-black rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-all mx-auto"
          >
            <Home
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            BACK TO HOME
          </motion.button>
        </Link>
      </div>

      {/* Floating Icon for Fun */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[15%] text-purple-800 opacity-20 hidden md:block"
      >
        <Rocket size={100} />
      </motion.div>
    </div>
  );
};

export default NotFound;
