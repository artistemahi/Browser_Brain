import { useState } from "react";
import DomTree from "../engine/DOM";
const DomStage1 = () => {
     const [html, setHtml] = useState(
    `<h1>hello</h1>\n<h2>hello</h2>`
  );
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">What is the DOM?</h2>
      <p>
        The Document Object Model (DOM) is a programming interface for HTML and
        XML documents. It represents the structure of a webpage as a tree of
        objects that can be manipulated with JavaScript.
        <button>
          Browser does not understand HTML as text. Browser convert HTML into
          tree structure that is DOM{" "}
        </button>
        <div className="bg-amber-300 flex justify-evenly ">
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            style={{
              width: "50%",
              padding: "12px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}
          />
          <div style={{ width: "50%", padding: "20px" }}>
            <DomTree html={html} />
          </div>
        </div>
      </p>
    </div>
  );
};

export default DomStage1;
