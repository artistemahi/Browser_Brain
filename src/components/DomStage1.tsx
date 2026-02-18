import { useState } from "react";
import DomTree from "../engine/DOM";
const DomStage1 = () => {
  const [html, setHtml] = useState(`<h1>hello World</h1>\n<h2>type here</h2>`);
  return (
    <div className="p-4 bg-gray-200 rounded-lg text-start">
      <h2 className="text-xl font-semibold mb-2">DOM</h2>
      <p>
        The Document Object Model (DOM) is a programming interface for HTML and
        XML documents. It represents the structure of a webpage as a tree of
        objects that can be manipulated with JavaScript.
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          Browser does not understand HTML as text. Browser convert HTML into
          tree structure that is DOM{" "}
        </button>
        <div className="bg-amber-300 flex justify-evenly  border-b-black border-2 rounded-lg p-4 mt-4">
          <textarea
            className="w-[50%] p-3 font-mono font-size-14 bg-gray-100 border border-gray-300 rounded-lg"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <div className="w-[50%] p-5 text-center">
            <DomTree html={html} />
          </div>
        </div>
          <div>
            At this stage:<br></br> The browser knows what elements exist, But it
            does not know how they should look yet
          </div>
      </p>
    </div>
  );
};

export default DomStage1;
