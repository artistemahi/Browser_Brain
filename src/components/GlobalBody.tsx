// import {
//   PlayIcon,
//   BackwardStep,
//   ForwardStep,
//   StopIcon,
// } from "../../utils/constants";
import MainContent from "./MainContent";
import { useState } from "react";
import FooterPage from "../pages/FooterPage";
import { Link } from "react-router-dom";
import NotesEditor from "../engine/NotesEditor";

const GlobalBody = () => {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <section className="border-b border-white/10 py-8 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Browser Brain Dashboard
              </p>
              <h1 className="text-4xl font-bold mt-3">
                Build your browser intuition.
              </h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Jump between rendering, event loop mechanics, and the async lab
                with a polished interface designed for learning and discovery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/rendering"
                className="w-full sm:w-auto rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Rendering Lab
              </Link>
              <Link
                to="/event-loop"
                className="w-full sm:w-auto rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                Event Loop
              </Link>
              <Link
                to="/async-lab"
                className="w-full sm:w-auto rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                Async Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-start">
        <aside className="order-2 lg:order-1 w-full lg:w-72 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">
            Quick Actions
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/rendering"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-cyan-500/20"
            >
              Explore rendering pipeline
            </Link>
            <Link
              to="/event-loop"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-cyan-500/20"
            >
              Visualize event loop
            </Link>
            <Link
              to="/async-lab"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-cyan-500/20"
            >
              Try async code
            </Link>
          </div>

          <div className="mt-8 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-4">
            <h2 className="text-lg font-semibold text-cyan-100">Notes</h2>
            <p className="mt-2 text-sm text-slate-300">
              Toggle the side notebook to keep learning notes while you explore.
            </p>
            <button
              onClick={() => setShowNote(!showNote)}
              className="mt-4 w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {showNote ? "Hide Notes" : "Show Notes"}
            </button>
          </div>
        </aside>

        <main className="order-1 lg:order-2 flex-1 min-w-0 rounded-4xl border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(7,19,48,0.55)]">
          <MainContent />
        </main>

        {showNote && (
          <aside className="order-3 w-full lg:w-80 rounded-4xl border border-white/10 bg-slate-900/90 p-5 shadow-[0_40px_120px_rgba(7,19,48,0.55)]">
            <NotesEditor />
          </aside>
        )}
      </div>

      <FooterPage />
    </div>
  );
};

export default GlobalBody;
