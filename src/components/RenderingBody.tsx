import FooterPage from "../pages/FooterPage";
import RenderingContent from "./RenderingContent";
import RenderingRight from "./RenderingRight";
import {useRef, useState } from "react";

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

  // this is hook for linking to section
  const domRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<HTMLDivElement>(null);
  const compositeRef = useRef<HTMLDivElement>(null);

   // scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <div className="bg-gray-300 min-h-dvh flex flex-col">
      <div className="flex flex-1">
        {/* LEFT PANEL */}
        <aside className="flex flex-col space-y-8 text-white bg-gray-950 p-4 w-60">
          <section>
            <p className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold">
              🎨 Rendering
            </p>
            <button
             
              className="text-left px-2 py-1 rounded-2xl hover:bg-white hover:text-black hover:font-bold transition"
            >
              📘 About Rendering
            </button>
            <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
              {" "}
              🧩 Types{" "}
            </button>
            <button className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold text-nowrap pr-0.5">
              {" "}
              Stages of Rendering{" "}
            </button>
            <div  className="flex flex-col items-start ">
              <button onClick={() => scrollToSection(domRef)} className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🌿 Dom{" "}
              </button>
              <button onClick={() => scrollToSection(styleRef)} className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🎭 Style{" "}
              </button>
              <button onClick={() => scrollToSection(layoutRef)} className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                📐 Layout{" "}
              </button>{" "}
              <button onClick={() => scrollToSection(paintRef)} className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🖌 Paint{" "}
              </button>{" "}
              <button onClick={() => scrollToSection(compositeRef)} className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🚀 Composite{" "}
              </button>
            </div>
          </section>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-fuchsia-50 px-10 py-6">
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

        {/* RIGHT PANEL */}
        <aside className="bg-[rgb(28,33,48)] p-4 text-white w-80">
          <div className="flex flex-col space-y-6 sticky top-0 h-screen p-4 overflow-auto">
            <p>
              <RenderingRight
                html={html}
                css={css}
                showLayoutBorder={showLayoutBorder}
              />
            </p>
          </div>
        </aside>
      </div>

      <FooterPage />
    </div>
  );
};

export default RenderingBody;
