import React from "react";

const Terminal = () => {
  return (
    <div className="bg-black text-green-500 font-mono p-4 mt-8 rounded-lg w-96 h-48 flex ">
      <span className="text-red-500 text-2xl">&#9679;</span>
      <span className="text-yellow-500 text-2xl">&#9679;</span>
      <span className="text-green-500 text-2xl">&#9679; </span>
      <p className="mt-1.5 ml-4">Terminal Content</p>
    </div>
  );
};

export default Terminal;
