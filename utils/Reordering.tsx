"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { text: "UNDERSTAND THE EVENT LOOP", color: "#38bdf8" },
  { text: "VISUALIZE THE RENDERING PIPELINE", color: "#a78bfa" },
  { text: "DEBUG LAYOUT & REPAINTS", color: "#facc15" },
  { text: "MASTER BROWSER PERFORMANCE", color: "#34d399" },
  { text: "SEE WHAT HAPPENS UNDER THE HOOD", color: "#f472b6" }
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

export default function ScrambleText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0].text);

  const scramble = (targetText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, i) => {
            if (i < iteration) return targetText[i]; // Reveal real letter
            return CHARS[Math.floor(Math.random() * CHARS.length)]; // Random char
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3; // Controls the speed of the reveal
    }, 30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length;
      setIndex(nextIndex);
      scramble(phrases[nextIndex].text);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex items-center justify-center h-24  font-bold text-gray-900">
      <AnimatePresence mode="wait">
        <motion.h2
          key={phrases[index].text}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
          style={{
            color: phrases[index].color,
            fontSize: "2rem",
            fontWeight: "900",
            fontFamily: "monospace", // Monospace prevents "jittering"
            letterSpacing: "2px"
          }}
        >
          {displayText}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}