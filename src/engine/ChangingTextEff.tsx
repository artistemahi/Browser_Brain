import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words: string[] = [
  "System",
  "Engine",
  "Architecture",
  "System Design",
  "Machine",
  "Framework",
  "Logic",
  "Infrastructure",
  "Code",
  "Blueprint",
  "Backbone",
];

const ChangingTextEff = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % words.length
      );
    }, 2500); // slightly smoother timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-red-500 font-bold overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ChangingTextEff;