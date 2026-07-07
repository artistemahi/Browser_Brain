import React from "react";

interface DropdownBtnContentProps {
  onSelect: (topic: string) => void;
}

const topics = ["Event Loop", "Rendering Pipeline", "Async Lab"];

const DropdownBtnContent: React.FC<DropdownBtnContentProps> = ({
  onSelect,
}) => {
  return (
    <ul className="flex flex-col gap-1.5">
      {topics.map((topic) => (
        <li
          key={topic}
          onClick={() => onSelect(topic)}
          className="cursor-pointer rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-150 hover:pl-5 hover:bg-red-600/25 hover:text-red-100"
        >
          $ {topic}
        </li>
      ))}
    </ul>
  );
};

export default DropdownBtnContent;
