import { terminalItems } from "../../utils/TerminalContent";
import React, { useState, useEffect } from "react";
import DropdownBtnContent from "../../utils/DropdownBtnContent";

interface TerminalProps {
  onTopicSelect: (topic: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onTopicSelect }) => {
  const [itemIndex, setItemIndex] = useState(0); // konsa topic
  const [lineIndex, setLineIndex] = useState(0); // konsa line
  const [charIndex, setCharIndex] = useState(0); // konsa character
  const [text, setText] = useState("");

  const currentItem = terminalItems[itemIndex];
  // console.log("Current Item:", currentItem);

  //select btn
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Select 🔽");

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
          setItemIndex((itemIndex + 1) % terminalItems.length); // loop back to first topic  (0+1)%3=1, (1+1)%3=2, (2+1)%3=0
        }
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, itemIndex, currentItem.lines]);

  return (
    <div className="bg-black text-green-500 font-mono p-5 rounded-xl w-96 h-80 flex flex-col border-2 border-green-500 shadow-2xl shadow-green-500/20">
      {/* Header */}
      <div className="flex gap-2 mb-4 items-center">
        <span className="text-red-500 animate-pulse [animation-delay:0ms]">
          ●
        </span>
        <span className="text-yellow-500 animate-pulse [animation-delay:200ms]">
          ●
        </span>
        <span className="text-green-500 animate-pulse [animation-delay:400ms]">
          ●
        </span>
        <p className="ml-4 text-sm text-green-300 font-semibold">
          browser-brain — terminal
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-green-500/30 mb-4"></div>

      {/* Content Container */}
      <div className="flex-1 overflow-y-auto mb-4 pr-2">
        {/* Static Title */}
        <p className="text-green-400 font-semibold mb-3 text-base">
          {currentItem.title}
        </p>

        {/* Typing Lines */}
        <p className="text-sm leading-relaxed text-green-300">
          {text}
          <span className="animate-pulse">▋</span>
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-green-500/30 mb-3"></div>

      {/* Footer hint */}
      <p className="text-xs text-green-400/70 mb-3">
        $ Select topic to continue
      </p>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-green-600/80 hover:bg-green-500 text-black font-bold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg hover:shadow-green-500/30"
        >
          {selectedTopic}
        </button>

        {open && (
          <div className="absolute left-0 bottom-full mb-2 z-50 bg-black text-green-500 font-mono p-3 rounded-lg w-96 border-2 border-green-500 shadow-2xl shadow-green-500/30 max-h-40 overflow-y-auto">
            <DropdownBtnContent
              onSelect={(topic: string) => {
                setSelectedTopic(topic + " ✓");
                setOpen(false);
                onTopicSelect(topic);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
