import MainContent from "./MainContent";
import { useState } from "react";
import FooterPage from "../pages/FooterPage";
import { Link } from "react-router-dom";
import NotesEditor from "../engine/NotesEditor";

const GlobalBody = () => {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-red-600/20 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-500/80">
                Browser Brain Dashboard
              </p>
              <h1 className="mt-3 text-4xl font-bold">
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
                className="w-full rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500 sm:w-auto"
              >
                Rendering Lab
              </Link>
              <Link
                to="/event-loop"
                className="w-full rounded-full border border-red-600/40 px-4 py-2 text-sm transition hover:bg-red-600/20 sm:w-auto"
              >
                Event Loop
              </Link>
              <Link
                to="/async-lab"
                className="w-full rounded-full border border-red-600/40 px-4 py-2 text-sm transition hover:bg-red-600/20 sm:w-auto"
              >
                Async Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-start">
        <aside className="order-2 w-full rounded-3xl border border-red-600/20 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:order-1 lg:w-72">
          <p className="text-sm uppercase tracking-[0.3em] text-red-500/80">
            Quick Actions
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/rendering"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-red-600/20"
            >
              Explore rendering pipeline
            </Link>
            <Link
              to="/event-loop"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-red-600/20"
            >
              Visualize event loop
            </Link>
            <Link
              to="/async-lab"
              className="rounded-2xl bg-white/5 px-4 py-3 text-left transition hover:bg-red-600/20"
            >
              Try async code
            </Link>
          </div>

          <div className="mt-8 rounded-3xl border border-red-600/20 bg-red-600/10 p-4">
            <h2 className="text-lg font-semibold text-red-300">Notes</h2>
            <p className="mt-2 text-sm text-slate-300">
              Toggle the side notebook to keep learning notes while you explore.
            </p>
            <button
              onClick={() => setShowNote(!showNote)}
              className="mt-4 w-full rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
            >
              {showNote ? "Hide Notes" : "Show Notes"}
            </button>
          </div>
        </aside>

        <main className="order-1 min-w-0 flex-1 rounded-4xl border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(7,19,48,0.55)] lg:order-2">
          <MainContent />
        </main>

        {showNote && (
          <aside className="order-3 w-full rounded-4xl border border-white/10 bg-slate-900/90 p-5 shadow-[0_40px_120px_rgba(7,19,48,0.55)] lg:w-80">
            <NotesEditor />
          </aside>
        )}
      </div>

      <FooterPage />
    </div>
  );
};

export default GlobalBody;
