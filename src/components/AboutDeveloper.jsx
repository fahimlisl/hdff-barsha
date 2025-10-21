import React from "react"


import { motion } from "framer-motion";

export default function AboutDeveloper() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="w-full bg-black/30 border-t border-cyan-500/30 text-center py-5 px-3"
    >
      <p className="text-sm sm:text-base text-gray-400 leading-tight">
        developed <span className="text-pink-500"></span> and designed by{" "}
        <span className="text-cyan-400 font-semibold">~fb</span>
      </p>
      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        &copy; {new Date().getFullYear()} anonymous 
      </p>
    </motion.footer>
  );
}
