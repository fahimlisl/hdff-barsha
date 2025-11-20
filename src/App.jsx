import React from "react"

import { useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Header from "./components/Header";
import BirthdayMessage from "./components/BirthdayMessage";
import AboutDeveloper from "./components/AboutDeveloper";
import musicFile from "./assets/music.mp3"; 

function App() {
  useEffect(() => {
    const audio = new Audio(musicFile);
    audio.loop = true;
    audio.volume = 0.5;


    audio.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction...");
    });


    const playAudio = () => {
      audio.play().catch(err => console.log("Playback failed:", err));
    };
    window.addEventListener("click", playAudio, { once: true });


    return () => {
      window.removeEventListener("click", playAudio);
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col overflow-hidden">

      <div className="fixed inset-0 pointer-events-none z-0">
        <Confetti numberOfPieces={100} recycle={true} />
      </div>


      <Header />


      <main className="flex flex-col items-center justify-center flex-grow px-6 py-10 sm:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <BirthdayMessage />
        </motion.div>
      </main>


      <AboutDeveloper />
    </div>
  );
}

export default App;
