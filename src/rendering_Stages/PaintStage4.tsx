import { useState } from "react";

const PaintStage4 = () => {
  const [isPainted, setIsPainted] = useState(false);
  const [demoColor, setDemoColor] = useState("bg-red-600");

  const startPaint = () => setIsPainted(true);

  // Toggling between two colors on click simulates a "repaint" —
  // the colors themselves are just illustrative, not part of the theme.
  const triggerRepaint = () => {
    setDemoColor((prev) => (prev === "bg-red-600" ? "bg-blue-500" : "bg-red-600"));
  };

  return (
    <div className="rounded-2xl border border-red-600/20 bg-slate-900/80 p-6 text-slate-200">
      <h2 className="mb-4 text-2xl font-bold text-red-400">Paint Stage</h2>

      <p className="mb-4">
        After layout calculates positions, the browser now paints pixels on
        the screen.
      </p>

      <button
        onClick={startPaint}
        className="rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
      >
        Start Paint Stage
      </button>

      <div className="mt-6 flex justify-center">
        <div
          className={`flex h-40 w-64 items-center justify-center rounded-lg border-2 border-red-600/30 transition-all duration-700 ${
            isPainted ? demoColor : "bg-transparent"
          }`}
        >
          {isPainted && (
            <p className="text-lg font-bold text-white transition-opacity duration-700">
              Painted Content
            </p>
          )}
        </div>
      </div>

      {isPainted && (
        <button
          onClick={triggerRepaint}
          className="mt-6 rounded-xl border border-red-600/50 bg-transparent px-4 py-2 text-red-300 transition hover:bg-red-600/20"
        >
          Change Color
        </button>
      )}

      <p className="mt-6 font-semibold text-red-400">
        Changing color triggers Repaint (no layout recalculation).
      </p>
    </div>
  );
};

export default PaintStage4;
