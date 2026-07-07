import { Link } from "react-router-dom";
import Header from "../components/Header";

const glossary = [
  { title: "DOM", text: "The browser tree built from HTML." },
  { title: "Reflow", text: "Layout calculation when sizes change." },
  { title: "Repaint", text: "Redrawing pixels for visual changes." },
  { title: "Microtask", text: "High-priority jobs like Promise callbacks." },
  { title: "Macrotask", text: "Larger tasks like setTimeout and I/O callbacks." },
  { title: "Composite", text: "Combines painted layers into the final screen." },
];

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <section className="rounded-4xl border border-red-600/20 bg-slate-900/90 p-10 shadow-[0_40px_120px_rgba(7,19,48,0.65)]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500/80">
              Docs
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-red-400 sm:text-5xl">
              Browser Brain Reference
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Learn how the browser turns HTML, CSS, and JavaScript into the
              page you see. This section explains the rendering pipeline, event
              loop behavior, and async scheduling rules in one place.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
            <h2 className="text-xl font-semibold text-red-400">
              Rendering Pipeline
            </h2>
            <p className="mt-3 text-slate-400">
              How the browser converts markup and styles into pixels using DOM,
              style, layout, paint, and composite stages.
            </p>
          </article>

          <article className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
            <h2 className="text-xl font-semibold text-red-400">Event Loop</h2>
            <p className="mt-3 text-slate-400">
              Why JavaScript runs in a single thread, how the call stack and
              task queues cooperate, and where microtasks fit into the cycle.
            </p>
          </article>

          <article className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
            <h2 className="text-xl font-semibold text-red-400">
              Async Scheduling
            </h2>
            <p className="mt-3 text-slate-400">
              The difference between macrotasks, microtasks, timers, and network
              callbacks. Learn when code executes and why order matters.
            </p>
          </article>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-red-400">
              What you'll find here
            </h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-2xl bg-white/5 p-4">
                <strong className="text-white">Rendering flow</strong> — DOM,
                style, layout, paint, and composite explained with real page
                examples.
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                <strong className="text-white">Event loop mechanics</strong> —
                call stack, task queue, microtask queue, and how async timing
                works.
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                <strong className="text-white">Practical cheat sheet</strong> —
                browser internals terms, definitions, and jump links.
              </li>
            </ul>
          </div>

          <aside className="rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
            <h3 className="text-xl font-semibold text-red-400">
              Jump to topic
            </h3>
            <div className="mt-6 space-y-3">
              <Link
                to="/rendering"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-red-600 hover:bg-red-600/10"
              >
                Rendering Studio
              </Link>
              <Link
                to="/event-loop"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-red-600 hover:bg-red-600/10"
              >
                Event Loop Explorer
              </Link>
              <Link
                to="/async-lab"
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-red-600 hover:bg-red-600/10"
              >
                Async Lab
              </Link>
            </div>
          </aside>
        </section>

        <section className="mt-12 rounded-3xl border border-red-600/20 bg-slate-950/80 p-8">
          <h2 className="text-2xl font-semibold text-red-400">Glossary</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <div key={item.title} className="rounded-3xl border border-red-600/20 bg-slate-900/90 p-5">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocsPage;
