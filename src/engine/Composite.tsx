import { useState } from "react";

const Composite = () => {
  const [animateWidth, setAnimateWidth] = useState(false);
  const [animateTransform, setAnimateTransform] = useState(false);
  const [message, setMessage] = useState("");

  const handleWidthAnimation = () => {
    setAnimateWidth(true);
    setAnimateTransform(false);
    setMessage("Layout + Paint + Composite triggered ⚠️");
  };

  const handleTransformAnimation = () => {
    setAnimateTransform(true);
    setAnimateWidth(false);
    setMessage("Only Composite triggered 🚀 (GPU accelerated)");
  };
  const ResetClickHandler =()=>{
    setAnimateWidth(false);
    setAnimateTransform(false);
  }
  return (
    <div className="bg-gray-100 rounded-lg p-6 mt-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Composite Stage</h2>

      <p className="mb-4">
        After paint, the browser splits elements into layers and sends them to
        the GPU. The GPU then merges (composites) these layers to display the
        final frame.
      </p>

      {/* Demo Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleWidthAnimation}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Animate Width (Expensive)
        </button>

        <button
          onClick={handleTransformAnimation}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Animate Transform (GPU Friendly)
        </button>
      </div>

      {/* visual demo area */}
      <div className="relative h-48 flex items-center justify-center bg-white rounded-xl border overflow-hidden">
        {/* Bg Layer */}
        <div className="absolute inset-0 bg-blue-200 opacity-70"></div>

        {/* animated box */}
        <div
          className={`relative bg-purple-600 text-white flex items-center justify-center 
          rounded-xl transition-all duration-700
          ${animateWidth ? "w-72 h-20" : "w-40 h-20"}
          ${animateTransform ? "translate-x-20" : "translate-x-0"}
          `}
        >
          Layer Element
        </div>
      </div>
      {/* reset button */}
      <button onClick={ResetClickHandler} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 mt-3 rounded-xl">
        Reset
      </button>

      {/* info panel */}
      {message && (
        <div className="mt-6 bg-black text-white p-4 rounded-xl">
          <p>{message}</p>
          <p className="mt-2 text-sm text-gray-300">
            CPU handles Layout & Paint. GPU handles Composite.
          </p>
        </div>
      )}

      {/*explaination*/}
      <div className="mt-6 space-y-2 text-sm">
        <p>
          🔴 Changing <strong>width</strong> triggers layout recalculation,
          repaint, and then composite.
        </p>
        <p>
          🟢 Changing <strong>transform</strong> skips layout & paint and goes
          directly to composite (faster).
        </p>
      </div>
    </div>
  );
};

export default Composite;
