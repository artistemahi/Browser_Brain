import FooterPage from "../pages/FooterPage";
import RenderingContent from "./RenderingContent";
import RenderingRight from "./RenderingRight";
import { useRef, useState } from "react";

const RenderingBody = () => {
  const [html, setHtml] = useState(`
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <h2>Type here</h2>
  </body>`);
  const [css, setCss] = useState(`h1 { color: red; }`);
  const [showLayoutBorder, setShowLayoutBorder] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<HTMLDivElement>(null);
  const compositeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 text-white">
        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(7,19,48,0.6)]">
          <h1 className="text-4xl font-bold text-cyan-200">
            Rendering Pipeline Studio
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Experiment with HTML and CSS while you step through browser
            rendering stages. Each section is designed to teach you how DOM,
            style, layout, paint and composite build the final pixel-perfect
            result.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(7,19,48,0.55)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">
              Navigation
            </p>
            <div className="mt-6 space-y-3">
              <button
                className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-cyan-500/20"
                onClick={() => scrollToSection(domRef)}
              >
                🌿 DOM Stage
              </button>
              <button
                className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-cyan-500/20"
                onClick={() => scrollToSection(styleRef)}
              >
                🎭 Style Stage
              </button>
              <button
                className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-cyan-500/20"
                onClick={() => scrollToSection(layoutRef)}
              >
                📐 Layout Stage
              </button>
              <button
                className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-cyan-500/20"
                onClick={() => scrollToSection(paintRef)}
              >
                🖌 Paint Stage
              </button>
              <button
                className="w-full rounded-2xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-cyan-500/20"
                onClick={() => scrollToSection(compositeRef)}
              >
                🚀 Composite Stage
              </button>
            </div>
          </aside>

          <main className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 text-slate-100 shadow-[0_40px_120px_rgba(7,19,48,0.55)]">
            <RenderingContent
              html={html}
              setHtml={setHtml}
              css={css}
              setCss={setCss}
              setShowLayoutBorder={setShowLayoutBorder}
              domRef={domRef}
              styleRef={styleRef}
              layoutRef={layoutRef}
              paintRef={paintRef}
              compositeRef={compositeRef}
            />
          </main>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_40px_120px_rgba(7,19,48,0.55)]">
            <div className="space-y-6 sticky top-6">
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <h2 className="text-lg font-semibold text-cyan-200">
                  Preview & DOM Map
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  See the live page preview and tree structure side-by-side
                  while you learn how rendering works.
                </p>
              </div>
              <RenderingRight
                html={html}
                css={css}
                showLayoutBorder={showLayoutBorder}
              />
            </div>
          </aside>
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default RenderingBody;
