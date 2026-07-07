import { useState } from "react";

interface StyleStageProps {
  css: string;
  html: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
}

const StyleStage2 = ({ css, setCss }: StyleStageProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-2xl border border-red-600/20 bg-slate-900/80 p-4 text-start text-slate-200 transition-all duration-300">
      <h2 className="mb-2 text-2xl font-bold text-red-400">Style</h2>

      <p>After the DOM is constructed, the browser now reads the CSS.</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-3 rounded-2xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
      >
        Do you know what the browser reads in the CSS file? ❓
      </button>

      {showDetails && (
        <div className="mt-3 rounded-2xl border border-red-600/20 bg-slate-950 p-4 text-sm text-slate-200">
          <p>• Reads selectors (h1, .box, #id)</p>
          <p>• Reads style rules (color, font-size, etc.)</p>
          <p>• Reads media queries (for responsive design)</p>
          <p>• Reads keyframes (for animations)</p>
        </div>
      )}

      <p className="mt-4">
        The browser then converts CSS into another structured tree. This is
        called the CSSOM (CSS Object Model).
      </p>

      <div className="mt-3 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-100">
        Style = Browser calculates computed CSS.
      </div>

      <div className="mt-4 rounded-lg border border-white/10 bg-slate-950 p-4">
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-white/10 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-red-600/60 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default StyleStage2;
