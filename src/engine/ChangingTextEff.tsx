import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Word {
  text: string;
  color: string;
}

// All shades stay in the red family so the rotating word never clashes
// with the rest of the Netflix-style palette.
const words: Word[] = [
  { text: "System", color: "text-red-500" },
  { text: "Engine", color: "text-red-400" },
  { text: "Architecture", color: "text-red-600" },
  { text: "System Design", color: "text-rose-500" },
  { text: "Machine", color: "text-red-500" },
  { text: "Framework", color: "text-red-400" },
  { text: "Logic", color: "text-rose-400" },
  { text: "Infrastructure", color: "text-red-600" },
  { text: "Code", color: "text-red-500" },
  { text: "Blueprint", color: "text-rose-500" },
  { text: "Backbone", color: "text-red-400" },
];

const ROTATE_INTERVAL_MS = 2500;

const ChangingTextEff = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden font-bold text-red-500">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${words[currentWordIndex].color}`}
        >
          {words[currentWordIndex].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ChangingTextEff;
