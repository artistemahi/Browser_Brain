import React from "react";

interface DropdownBtnContentProps {
  onSelect: (topic: string) => void;
}

const DropdownBtnContent: React.FC<DropdownBtnContentProps> = ({ onSelect }) => {
  const topics = [
    "Event Loop",
    "Rendering Pipeline",
    "Performance",
  ];

  return (
    <ul className="flex flex-col gap-2">
      {topics.map((topic) => (
        <li
          key={topic}
          onClick={() => onSelect(topic)}
          className="cursor-pointer hover:bg-green-500 hover:text-black px-2 py-1 rounded"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
};

export default DropdownBtnContent;
