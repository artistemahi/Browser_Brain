import { useState } from "react";
interface prop {
  css: string;
  html: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
}

const Style = ({ css, setCss }: prop) => {
  const [IsOpen, setIsOpen] = useState(false);
  const ClickHandler = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <div className=" bg-gray-200 rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Style</h2>
      <p>
        After the DOM is constructed, now the browser reads the CSS.
        <button
          onClick={ClickHandler}
          className="hover:bg-green-500 rounded-2xl text-white bg-green-600 hover:cursor-pointer p-2"
        >
          Do you think what does browser reads in the CSS file ❓{" "}
        </button>
        {IsOpen && (
          <div className="p-2 bg-cyan-300 rounded-3xl m-3">
            <div className="p-4">
            <p>• Reads selectors (h1, .box, #id)</p>
            <p>• Reads style rules (color, font-size, etc.)</p>
            <p>• Reads media queries (for responsive design)</p>
            <p>• Reads selectors (h1, .box, #id)</p>
            <p>• Reads keyframes (for animations)</p>
          </div>
          </div>
        )}
        <p>
          Then Browser Converts CSS into another structured tree. This is called
          the CSSOM (CSS Object Model).
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          Style = Browser calculates computed CSS
        </button>
        <div className="bg-amber-300 flex justify-evenly  border-b-black border-2 rounded-lg p-4 mt-4">
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full p-3 font-mono font-size-14 bg-gray-100 border border-gray-300 rounded-lg"
          />
        </div>
      </p>
    </div>
  );
};
export default Style;
