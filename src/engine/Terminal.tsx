import { terminalItems } from "../../utils/TerminalContent";
import { useState, useEffect } from "react";
import DropdownBtnContent from "../../utils/DropdownBtnContent";
const Terminal = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  const currentItem = terminalItems[itemIndex];

  //select btn
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const currentLine = currentItem.lines[lineIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (charIndex < currentLine.length) {
      // Typing characters
      timer = setTimeout(() => {
        setText(currentLine.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else {
      // Line completed
      timer = setTimeout(() => {
        setCharIndex(0);
        setText("");

        if (lineIndex < currentItem.lines.length - 1) {
          setLineIndex(lineIndex + 1);
        } else {
          // Move to next topic
          setLineIndex(0);
          setItemIndex((itemIndex + 1) % terminalItems.length);
        }
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, itemIndex]);

  return (
    <div className="bg-black text-green-500 font-mono p-4 mt-8 rounded-lg w-96 h-56 overflow-hidden">
      {/* Header */}
      <div className="flex gap-2 mb-2 items-center">
        <span className="text-red-500  animate-pulse [animation-delay:0ms]">
          ●
        </span>
        <span className="text-yellow-500  animate-pulse [animation-delay:200ms]">
          ●
        </span>
        <span className="text-green-500  animate-pulse [animation-delay:400ms]">
          ●
        </span>
        <p className="ml-4 text-sm text-green-300">browser-brain — terminal</p>
      </div>

      {/* Static Title */}
      <p className="text-green-300 font-semibold mb-2">{currentItem.title}</p>

      {/* Typing Lines */}
      <p>
        {text}
        <span className="animate-pulse">▋</span>
      </p>

      {/* Footer hint */}
      <p className="mt-6 text-xs text-green-400/60">
        Please select the topic for study
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-2 rounded-lg  self-center"
      >
        Select Topic 🔽
      </button>
      {open && (
        <div className="absolute mt-2 bg-black text-green-500 font-mono p-4 rounded-lg w-48 border border-green-500 left-48 top-100">
          <DropdownBtnContent />
        </div>
      )}
    </div>
  );
};

export default Terminal;
