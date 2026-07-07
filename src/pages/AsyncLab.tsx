import Header from "../components/Header";
import NotesEditor from "../engine/NotesEditor";
import { useState, useMemo } from "react";

const MAX_LOG_ENTRIES = 8;

const AsyncLab = () => {
  const [log, setLog] = useState<string[]>([
    "Ready for async experiments.",
    "Try the buttons to see where tasks land in the event loop.",
  ]);
  const [exampleNumber, setExampleNumber] = useState(1);
  const [search, setSearch] = useState("");

  const filteredLog = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return log;
    return log.filter((entry) => entry.toLowerCase().includes(query));
  }, [log, search]);

  const appendLog = (message: string) => {
    setLog((current) => [message, ...current].slice(0, MAX_LOG_ENTRIES));
  };

  const runPromiseExample = () => {
    appendLog(`Example ${exampleNumber}: sync start`);
    Promise.resolve().then(() =>
      appendLog(`Example ${exampleNumber}: microtask resolved`),
    );
    setTimeout(() => appendLog(`Example ${exampleNumber}: macrotask fired`), 0);
    appendLog(`Example ${exampleNumber}: sync end`);
    setExampleNumber((value) => value + 1);
  };

  const runFetchSimulation = () => {
    appendLog("Starting fetch simulation...");
    appendLog("Network request sent to browser APIs...");
    setTimeout(
      () => appendLog("Fetch response received and placed into callback queue"),
      800,
    );
    setTimeout(
      () => appendLog("Callback queue drains: render update happens"),
      1200,
    );
  };

  const clearLog = () => setLog(["Ready for async experiments."]);

  return (
    <div className="min-h-screen bg-slate-950 text-white" id="async-main">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-red-600/20 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(7,19,48,0.65)]">
          <h1 className="text-4xl font-bold tracking-tight text-red-400">
            Async Lab
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Experiment with the event loop by scheduling microtasks, macrotasks,
            and simulated network callbacks. The console below shows the real
            execution order.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-6" id="promises">
              <h2 className="text-xl font-semibold text-red-300">
                Promise order
              </h2>
              <p className="mt-3 text-slate-400">
                Microtasks always complete before the next macrotask, even if
                they were queued later.
              </p>
              <button
                onClick={runPromiseExample}
                className="mt-6 w-full rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Run Promise Example
              </button>
            </div>

            <div className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-6" id="async-await">
              <h2 className="text-xl font-semibold text-red-300">
                Timeout & network
              </h2>
              <p className="mt-3 text-slate-400">
                See how browser APIs delay callbacks and how the event loop
                drains tasks afterward.
              </p>
              <button
                onClick={runFetchSimulation}
                className="mt-6 w-full rounded-2xl border border-red-600/50 bg-transparent px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-600/20"
              >
                Simulate fetch
              </button>
            </div>

            <div className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-red-300">
                Realtime log
              </h2>
              <p className="mt-3 text-slate-400">
                Read the most recent steps first.
              </p>
              <button
                onClick={clearLog}
                className="mt-6 w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Clear log
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-red-600/20 bg-black/60 p-6 text-sm text-slate-200 shadow-[0_30px_80px_rgba(229,9,20,0.12)]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-red-400">
                  Event Loop Console
                </h2>
                <input
                  aria-label="Search log"
                  placeholder="Search log..."
                  className="rounded-md bg-white/5 px-3 py-1 text-sm text-slate-200 outline-none placeholder:text-slate-400"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <div className="mb-2 text-xs text-slate-400">
                  Most recent first — filtered view
                </div>
                <div className="max-h-96 space-y-2 overflow-y-auto pr-2">
                  {filteredLog.map((entry, index) => (
                    <p key={`${entry}-${index}`} className="rounded-2xl bg-white/5 px-3 py-2 text-slate-100">
                      {entry}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/5 bg-slate-900/60 p-4">
              <h3 className="text-lg font-semibold text-red-400">Notes</h3>
              <p className="mt-1 text-sm text-slate-400">
                Personal notes for experiments.
              </p>
              <NotesEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncLab;
