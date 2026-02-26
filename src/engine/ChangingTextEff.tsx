import {useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

const words:string[] = [
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
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-red-500 font-bold ">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
      
    </div>
  );
};
export default ChangingTextEff;
