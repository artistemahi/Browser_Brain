import { useState, useEffect, useRef } from "react";
import { SaveIcon, ClearIcon, DownloadIcon } from "../../utils/constants";

const NotesEditor = () => {
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("Note_key") || "";
  });

  const saveRef = useRef<number | null>(null);

  // Autosave with debounce
  useEffect(() => {
    if (saveRef.current) window.clearTimeout(saveRef.current);
    saveRef.current = window.setTimeout(() => {
      localStorage.setItem("Note_key", notes);
    }, 700);
    return () => {
      if (saveRef.current) window.clearTimeout(saveRef.current);
    };
  }, [notes]);

  const handlerSave = () => {
    localStorage.setItem("Note_key", notes);
  };

  const handlerClear = () => {
    localStorage.removeItem("Note_key");
    setNotes("");
  };

  const handlerDownload = () => {
    const blob = new Blob([notes], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notes.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-800 rounded-lg p-4 mt-4 mx-0 sm:mx-4">
      <h2 className="text-lg font-semibold mb-2 text-cyan-200">📝 Notes</h2>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here... (autosaves)"
        className="w-full h-36 sm:h-48 p-3 bg-slate-900 text-slate-100 border border-white/10 rounded-lg resize-none"
      />

      <div className="flex items-center justify-between gap-3 mt-3">
        <div className="flex gap-2">
          <button
            onClick={handlerSave}
            className="flex items-center gap-2 bg-cyan-600 text-white px-3 py-2 rounded hover:bg-cyan-500 font-semibold"
          >
            <SaveIcon />
            Save
          </button>
          <button
            onClick={handlerClear}
            className="flex items-center gap-2 bg-rose-600 text-white px-3 py-2 rounded hover:bg-rose-500 font-semibold"
          >
            <ClearIcon />
            Clear
          </button>
          <button
            onClick={handlerDownload}
            className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-600 font-semibold"
          >
            <DownloadIcon />
            Download
          </button>
        </div>

        <div className="text-sm text-slate-400">{notes.length} chars</div>
      </div>
    </div>
  );
};
export default NotesEditor;
