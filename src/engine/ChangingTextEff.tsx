import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Word {
  text: string;
  color: string;
}
const words: Word[] = [
  {text:"System", color: "text-red-500"},
  {text:"Engine", color: "text-yellow-500"},
  {text:"Architecture", color: "text-blue-500"},
  {text:"System Design", color: "text-orange-500"},
  {text:"Machine", color: "text-purple-500"},
  {text:"Framework", color: "text-green-500"},
  {text:"Logic", color: "text-indigo-500"},
  {text:"Infrastructure", color: "text-teal-500"},
  {text:"Code", color: "text-pink-500"},
  {text:"Blueprint", color: "text-cyan-500"},
  {text:"Backbone", color: "text-gray-500"},
];

const ChangingTextEff = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % words.length
      );
    }, 2500);

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
          className={`inline-block ${words[currentWordIndex].color}`}
        >
          {words[currentWordIndex].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ChangingTextEff;