import React from "react";


import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 sm:px-6">

        <div className="flex items-center gap-2 sm:gap-3">
          <HiSparkles className="text-pink-500 text-3xl sm:text-4xl animate-pulse" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#22d3ee] tracking-wide">
            happy birthday{" "}
            <span className="relative text-pink-500 flicker-glow">BARSHA</span>
          </h1>
        </div>


        <p className="text-[0.75rem] sm:text-sm text-gray-400 italic mt-2 sm:mt-0 text-center w-full sm:w-auto">
          made with ❤️ by <span className="text-cyan-400 font-semibold">you know me</span>
        </p>
      </div>
    </motion.header>
  );
}
