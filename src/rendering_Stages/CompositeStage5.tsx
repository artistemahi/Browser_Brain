import { useState } from "react";

const CompositeStage5 = () => {
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

  const handleReset = () => {
    setAnimateWidth(false);
    setAnimateTransform(false);
    setMessage("");
  };

  return (
    <div className="rounded-2xl border border-red-600/20 bg-slate-900/80 p-6 text-slate-200">
      <h2 className="mb-4 text-2xl font-bold text-red-400">
        Composite Stage
      </h2>

      <p className="mb-4">
        After paint, the browser splits elements into layers and sends them to
        the GPU. The GPU then merges (composites) these layers to display the
        final frame.
      </p>

      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={handleWidthAnimation}
          className="rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
        >
          Animate Width (Expensive)
        </button>
        <button
          onClick={handleTransformAnimation}
          className="rounded-xl border border-red-600/50 bg-transparent px-4 py-2 text-red-300 transition hover:bg-red-600/20"
        >
          Animate Transform (GPU Friendly)
        </button>
      </div>

      {/* Demo area — kept as its own dark layer so the "GPU layer" reads
          distinctly from the surrounding card. */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-red-950/40" />
        <div
          className={`relative flex items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-700
          ${animateWidth ? "h-20 w-72" : "h-20 w-40"}
          ${animateTransform ? "translate-x-20" : "translate-x-0"}`}
        >
          Layer Element
        </div>
      </div>

      <button
        onClick={handleReset}
        className="mt-3 rounded-xl bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
      >
        Reset
      </button>

      {message && (
        <div className="mt-6 rounded-xl border border-red-600/30 bg-black p-4">
          <p>{message}</p>
          <p className="mt-2 text-sm text-slate-400">
            CPU handles Layout & Paint. GPU handles Composite.
          </p>
        </div>
      )}

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

export default CompositeStage5;
