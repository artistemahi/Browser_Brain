import { useState } from "react";

const Paint = () => {
  const [isPainted, setIsPainted] = useState(false);
  const [color, setColor] = useState("bg-gray-300");

  const handlePaint = () => {
    setIsPainted(true);
  };

  const triggerRepaint = () => {
    setColor(prev =>
      prev === "bg-blue-500" ? "bg-green-500" : "bg-blue-500"
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 mt-6 shadow-md">

      <h2 className="text-2xl font-bold mb-4">Paint Stage</h2>

      <p className="mb-4">
        After layout calculates positions, the browser now paints pixels on the screen.
      </p>

      {/* Paint Button */}
      <button
        onClick={handlePaint}
        className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl transition"
      >
        Start Paint Stage
      </button>

      {/* Render Box */}
      <div className="mt-6 flex justify-center">
        <div
          className={`w-64 h-40 border-2 border-black flex items-center justify-center transition-all duration-700
          ${isPainted ? color : "bg-transparent"}`}
        >
          {isPainted && (
            <p className="text-white font-bold text-lg transition-opacity duration-700">
              Painted Content
            </p>
          )}
        </div>
      </div>

      {/* Repaint Button */}
      {isPainted && (
        <button
          onClick={triggerRepaint}
          className="mt-6 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Change Color
        </button>
      )}

      <p className="mt-6 text-red-600 font-semibold">
        Changing color triggers Repaint (no layout recalculation).
      </p>

    </div>
  );
};

export default Paint;