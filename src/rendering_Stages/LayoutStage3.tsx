import { useState } from "react";

interface LayoutStageProps {
  setshowLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutStage3 = ({ setshowLayout }: LayoutStageProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-2xl border border-red-600/20 bg-slate-900/80 p-4 text-start text-slate-200">
      <h2 className="mb-2 text-2xl font-bold text-red-400">Layout</h2>

      <p>
        After styles are calculated, the browser now determines the exact
        geometry of every element.
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-3 rounded-2xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
      >
        Do you know what the browser calculates in this stage? ❓
      </button>

      {showDetails && (
        <div className="mt-3 space-y-2 rounded-2xl border border-red-600/20 bg-slate-950 p-4 text-sm text-slate-200">
          <p>• Width and height of elements</p>
          <p>• Position (x, y coordinates)</p>
          <p>• Margins and padding</p>
          <p>• Flow (block, inline, flex, grid)</p>
          <p>• Responsive adjustments</p>
        </div>
      )}

      <p className="mt-4">This step is also called Reflow.</p>

      <div className="mt-3 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-100">
        The browser combines DOM + CSSOM → Render Tree, then calculates the
        layout of that render tree.
      </div>

      <div className="mt-3 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-100">
        Layout is expensive — avoid unnecessary reflows.
      </div>

      <button
        onClick={() => setshowLayout(true)}
        className="mt-4 rounded-2xl bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-500"
      >
        Let's See It In Action
      </button>
    </div>
  );
};

export default LayoutStage3;
