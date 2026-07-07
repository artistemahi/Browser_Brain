import { useState, useEffect, useRef } from "react";
import { SaveIcon, ClearIcon, DownloadIcon } from "../../utils/constants";

const NOTES_STORAGE_KEY = "Note_key";
const AUTOSAVE_DELAY_MS = 700;

const NotesEditor = () => {
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem(NOTES_STORAGE_KEY) || "";
  });

  const saveTimerRef = useRef<number | null>(null);

  // Autosave with debounce: waits until typing pauses before writing to storage.
  useEffect(() => {
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      localStorage.setItem(NOTES_STORAGE_KEY, notes);
    }, AUTOSAVE_DELAY_MS);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
  }, [notes]);

  const handleSave = () => {
    localStorage.setItem(NOTES_STORAGE_KEY, notes);
  };

  const handleClear = () => {
    localStorage.removeItem(NOTES_STORAGE_KEY);
    setNotes("");
  };

  const handleDownload = () => {
    const blob = new Blob([notes], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "notes.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-4 mx-0 rounded-2xl border border-red-600/20 bg-slate-900/90 p-4 sm:mx-4">
      <h2 className="mb-2 text-lg font-semibold text-red-400">📝 Notes</h2>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here... (autosaves)"
        className="h-36 w-full resize-none rounded-lg border border-white/10 bg-slate-950 p-3 text-slate-100 focus:border-red-600/60 focus:outline-none sm:h-48"
      />

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 font-semibold text-white transition hover:bg-red-500"
          >
            <SaveIcon />
            Save
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 rounded-lg border border-red-600/50 bg-transparent px-3 py-2 font-semibold text-red-300 transition hover:bg-red-600/20"
          >
            <ClearIcon />
            Clear
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 font-semibold text-white transition hover:bg-white/20"
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
