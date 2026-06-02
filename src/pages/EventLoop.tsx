import Header from "../components/Header";
import { useState } from "react";

type TaskType = "Microtask" | "Macrotask";

type Task = {
  id: number;
  type: TaskType;
  label: string;
};

const EventLoop = () => {
  const [taskCounter, setTaskCounter] = useState(1);
  const [microTasks, setMicroTasks] = useState<Task[]>([]);
  const [macroTasks, setMacroTasks] = useState<Task[]>([]);
  const [activityLog, setActivityLog] = useState<string[]>([
    "Event loop is ready. Add tasks to see ordering in action.",
  ]);

  const appendLog = (entry: string) => {
    setActivityLog((current) => [entry, ...current].slice(0, 8));
  };

  const enqueueTask = (type: TaskType) => {
    const task: Task = {
      id: taskCounter,
      type,
      label: `${type} ${taskCounter}`,
    };
    setTaskCounter((idx) => idx + 1);

    if (type === "Microtask") {
      setMicroTasks((current) => [...current, task]);
      appendLog(`Queued ${task.label} as a microtask`);
    } else {
      setMacroTasks((current) => [...current, task]);
      appendLog(`Queued ${task.label} as a macrotask`);
    }
  };

  const stepEventLoop = () => {
    if (microTasks.length > 0) {
      const [next, ...rest] = microTasks;
      setMicroTasks(rest);
      appendLog(`Processed ${next.label} from microtask queue`);
      return;
    }
    if (macroTasks.length > 0) {
      const [next, ...rest] = macroTasks;
      setMacroTasks(rest);
      appendLog(`Processed ${next.label} from macrotask queue`);
      return;
    }
    appendLog("Event loop is idle — no tasks queued.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(7,19,48,0.65)]">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <section>
              <h1 className="text-4xl font-bold text-cyan-200">
                Event Loop Explorer
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                This interactive demo shows how JavaScript processes microtasks
                before macrotasks, even when both are added during the same
                turn.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <button
                  onClick={() => enqueueTask("Microtask")}
                  className="rounded-3xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Add microtask
                </button>
                <button
                  onClick={() => enqueueTask("Macrotask")}
                  className="rounded-3xl bg-emerald-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Add macrotask
                </button>
                <button
                  onClick={stepEventLoop}
                  className="rounded-3xl bg-white/10 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Process next task
                </button>
              </div>
            </section>

            <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <h2 className="text-xl font-semibold text-cyan-100">
                How it works
              </h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• JavaScript runs on a single thread.</li>
                <li>• Microtasks are processed before macrotasks.</li>
                <li>• The event loop checks microtasks first on every turn.</li>
                <li>
                  • Macrotasks include timers, network callbacks, and DOM
                  events.
                </li>
              </ul>
            </aside>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">
                Microtask Queue
              </h3>
              <div className="mt-4 space-y-2 min-h-[10rem] rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">
                {microTasks.length === 0 ? (
                  <p className="text-slate-500">No microtasks waiting.</p>
                ) : (
                  microTasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-2xl bg-white/5 px-3 py-2"
                    >
                      {task.label}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">
                Macrotask Queue
              </h3>
              <div className="mt-4 space-y-2 min-h-[10rem] rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-200">
                {macroTasks.length === 0 ? (
                  <p className="text-slate-500">No macrotasks waiting.</p>
                ) : (
                  macroTasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-2xl bg-white/5 px-3 py-2"
                    >
                      {task.label}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.8rem] border border-cyan-500/20 bg-black/60 p-6 text-sm text-slate-200 shadow-[0_30px_80px_rgba(0,229,255,0.12)]">
            <h2 className="text-lg font-semibold text-cyan-100">
              Activity Log
            </h2>
            <div className="mt-4 space-y-2 max-h-80 overflow-y-auto pr-2">
              {activityLog.map((line, index) => (
                <p
                  key={`${line}-${index}`}
                  className="rounded-2xl bg-white/5 px-3 py-2"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLoop;
