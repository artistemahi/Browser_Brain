import StickyHeadTable from "./../../utils/renderingTable";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DomStage1 from "./DomStage1";
import Style from "../engine/Style";
import Layout from "../engine/Layout"
interface RenderingContentProps {
  showItems: boolean;
}

const RenderingContent = ({ showItems }: RenderingContentProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-black text-start space-y-6">

      <AnimatePresence>
        {showItems && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl font-bold">
              What is Rendering?
            </h1>

            <p>
              Rendering is the process of generating visual output from
              instructions. In web development, rendering refers to how a
              browser displays HTML, CSS, and JavaScript.
            </p>

            <h2 className="text-2xl font-semibold">Types of Rendering</h2>

            <ul className="list-disc pl-6 space-y-2 py-2">
              <li><strong>SSR:</strong> Server sends ready HTML.</li>
              <li><strong>CSR:</strong> Browser builds UI using JS.</li>
              <li><strong>SSG:</strong> HTML generated at build time.</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShow((prev) => !prev)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {show
                ? "Now you are a good developer!"
                : "Become a good developer – Learn in Depth"}
            </motion.button>

            <AnimatePresence>
              {show && (
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
        )}
      </AnimatePresence>

      <div className="text-center">
        <DomStage1 />
      </div>
      <div><Style /></div>
      <Layout></Layout>
      
    </div>
  );
};

export default RenderingContent;
