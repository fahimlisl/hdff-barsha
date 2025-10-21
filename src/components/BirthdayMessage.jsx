import React from "react"
// import { motion } from "framer-motion";
// export default function BirthdayMessage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       className="text-center"
//     >
//       <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_20px_#22d3ee] mb-6">
//         Happy Birthday, Barsha 🎉
//       </h2>
//       <p className="max-w-xl text-gray-300 text-lg leading-relaxed">
//         You light up my world brighter than all the neon lights, baby.  
//         Every heartbeat, every smile, every little thing about you is magic.  
//         On your special day, I just want you to know — you’re my favorite reason to smile. 💖  
//       </p>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";

export default function BirthdayMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x drop-shadow-[0_0_20px_#22d3ee]">
        wish you a happy birthday, BARSHA 🎉
      </h2>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4">
        you are my heartbeat and my favorite madness, my calm in every storm, the glow that lights up even my darkest nights, and the most beautiful story i wish to live every day. happy birthday, BARSHA — may your smile keep shining brighter than the neon lights, may your laughter fill every street we’ve ever wandered, and may today remind you how endlessly loved and cherished you are. 💖✨💖
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 flex justify-center"
      >
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_#22d3ee]">
          💫 click here and enjoy your day
        </button>
      </motion.div>
    </motion.div>
  );
}
