import { terminalItems } from "../../utils/TerminalContent";
import React, { useState, useEffect } from "react";
import DropdownBtnContent from "../../utils/DropdownBtnContent";

interface TerminalProps {
  onTopicSelect: (topic: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onTopicSelect }) => {
  const [itemIndex, setItemIndex] = useState(0); // which topic is currently typing
  const [lineIndex, setLineIndex] = useState(0); // which line within that topic
  const [charIndex, setCharIndex] = useState(0); // which character within that line
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Select 🔽");

  const currentItem = terminalItems[itemIndex];

  // Typing effect: reveals one character at a time, then pauses, then
  // moves to the next line, then loops to the next topic.
  useEffect(() => {
    const currentLine = currentItem.lines[lineIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (charIndex < currentLine.length) {
      timer = setTimeout(() => {
        setText(currentLine.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else {
      timer = setTimeout(() => {
        setCharIndex(0);
        setText("");

        if (lineIndex < currentItem.lines.length - 1) {
          setLineIndex(lineIndex + 1);
        } else {
          setLineIndex(0);
          setItemIndex((itemIndex + 1) % terminalItems.length);
        }
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, itemIndex, currentItem.lines]);

  return (
    <div className="flex h-80 w-full max-w-md flex-col rounded-xl border-2 border-red-600/60 bg-black p-5 font-mono text-red-500 shadow-2xl shadow-red-600/20">
      {/* Window controls */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-red-500 [animation-delay:0ms] animate-pulse">●</span>
        <span className="text-red-400/80 [animation-delay:200ms] animate-pulse">●</span>
        <span className="text-red-300/60 [animation-delay:400ms] animate-pulse">●</span>
        <p className="ml-4 text-sm font-semibold text-red-300">
          browser-brain — terminal
        </p>
      </div>

      <div className="mb-4 h-px bg-red-600/30" />

      {/* Typing content */}
      <div className="mb-4 flex-1 overflow-y-auto pr-2">
        <p className="mb-3 text-base font-semibold text-red-400">
          {currentItem.title}
        </p>
        <p className="text-sm leading-relaxed text-red-300">
          {text}
          <span className="animate-pulse">▋</span>
        </p>
      </div>

      <div className="mb-3 h-px bg-red-600/30" />

      <p className="mb-3 text-xs text-red-400/70">
        $ Select topic to continue
      </p>

      {/* Topic dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-red-600/30"
        >
          {selectedTopic}
        </button>

        {open && (
          <div className="absolute bottom-full left-0 z-50 mb-2 max-h-40 w-full overflow-y-auto rounded-lg border-2 border-red-600/60 bg-black p-3 font-mono text-red-500 shadow-2xl shadow-red-600/30">
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
