import StickyHeadTable from "./../../utils/renderingTable";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Composite from "../rendering_Stages/CompositeStage5";
import Paint from "../rendering_Stages/PaintStage4";
import DomStage1 from "../rendering_Stages/DomStage1";
import Style from "../rendering_Stages/StyleStage2";
import Layout from "../rendering_Stages/LayoutStage3";

interface RenderingContentProps {
  css: string;
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  setCss: React.Dispatch<React.SetStateAction<string>>;
  setShowLayoutBorder: React.Dispatch<React.SetStateAction<boolean>>;
  domRef: React.RefObject<HTMLDivElement | null>;
  styleRef: React.RefObject<HTMLDivElement | null>;
  layoutRef: React.RefObject<HTMLDivElement | null>;
  paintRef: React.RefObject<HTMLDivElement | null>;
  compositeRef: React.RefObject<HTMLDivElement | null>;
}

const RenderingContent = ({
  html,
  setHtml,
  css,
  setCss,
  setShowLayoutBorder,
  domRef,
  styleRef,
  layoutRef,
  paintRef,
  compositeRef,
}: RenderingContentProps) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="space-y-6 text-start text-black">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-red-400">
          What is Rendering?
        </h1>

        <p className="text-lg text-slate-300">
          Rendering is the process of generating visual output from
          instructions. In web development, rendering refers to how a browser
          displays HTML, CSS, and JavaScript.
        </p>

        <h2 className="text-2xl font-semibold text-red-400">
          Types of Rendering
        </h2>

        <ul className="list-disc space-y-2 py-2 pl-6 text-white">
          <li><strong>SSR:</strong> Server sends ready HTML.</li>
          <li><strong>CSR:</strong> Browser builds UI using JS.</li>
          <li><strong>SSG:</strong> HTML generated at build time.</li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowTable((prev) => !prev)}
          className="rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-500"
        >
          {showTable
            ? "Now you are a good developer!"
            : "Become a good developer – Learn in Depth"}
        </motion.button>

        <AnimatePresence>
          {showTable && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StickyHeadTable />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="text-center" ref={domRef} id="dom-stage">
        <DomStage1 html={html} setHtml={setHtml} />
      </div>
      <div ref={styleRef} id="style-stage">
        <Style html={html} css={css} setCss={setCss} />
      </div>
      <div ref={layoutRef} id="layout-stage">
        <Layout setshowLayout={setShowLayoutBorder} />
      </div>
      <div ref={paintRef} id="paint-stage">
        <Paint />
      </div>
      <div ref={compositeRef} id="composite-stage">
        <Composite />
      </div>
    </div>
  );
};

export default RenderingContent;
