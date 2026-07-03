import React from "react";

interface DropdownBtnContentProps {
  onSelect: (topic: string) => void;
}

const DropdownBtnContent: React.FC<DropdownBtnContentProps> = ({
  onSelect,
}) => {
  const topics = ["Event Loop", "Rendering Pipeline", "Async Lab"];

  return (
    <ul className="flex flex-col gap-1.5">
      {topics.map((topic) => (
        <li
          key={topic}
          onClick={() => onSelect(topic)}
          className="cursor-pointer hover:bg-green-500/30 hover:text-green-100 px-4 py-2.5 rounded-md transition-all duration-150 text-sm font-medium hover:pl-5"
        >
          $ {topic}
        </li>
      ))}
    </ul>
  );
};

export default DropdownBtnContent;
