import React from "react";
import StickyHeadTable from "./../../utils/renderingTable";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DomStage1 from "./DomStage1";
const RenderingContent = () => {
  // State to manage button click
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">what is Rendering?</h1>
      <p>
        Rendering is the process of generating visual output from a set of
        instructions or data. In web development, rendering refers to how a
        browser displays(visible UI) HTML, CSS, and JavaScript content.
      </p>
      <h2>Types of Rendering</h2>
      <ul>
        <li>
          <strong>Server-Side Rendering (SSR):</strong> The server generates the
          complete HTML for a page and sends it to the client. This can improve
          initial load times and SEO.
        </li>
        <li>
          <strong>Client-Side Rendering (CSR):</strong> The browser receives a
          minimal HTML page and uses JavaScript to dynamically generate the
          content. This can lead to faster interactions after the initial load.
        </li>
        <li>
          <strong>Static Site Generation (SSG):</strong> The HTML is generated
          at build time, resulting in fast load times and improved SEO.
        </li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {show
          ? "Now you are a good developer!"
          : "Become a good developer learn in DEEP"}
      </motion.button>
      <AnimatePresence>
        {show && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-green-500"
          >
            <StickyHeadTable />
          </motion.p>
        )}
      </AnimatePresence>

      <DomStage1></DomStage1>
    </div>
  );
};

export default RenderingContent;
