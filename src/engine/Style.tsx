const Style = () => {
  return (
    <div className=" bg-gray-200 rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Style</h2>
      <p>
        After the DOM is constructed, now the browser reads the CSS.
        <button>Do you think what does browser reads in the CSS file </button>
        <p>
          Reads selectors (h1, .box, #id) <br></br> Reads style rules (color,
          font-size, etc.) <br></br> Reads media queries (for responsive design){" "}
          <br></br> Reads keyframes (for animations)<br></br> and more...
        </p>
        <p>Then Browser Converts CSS into another structured tree. This is called the CSSOM (CSS Object Model).</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          Style = Browser calculates computed CSS
        </button>
        <div className="bg-amber-300 flex justify-evenly  border-b-black border-2 rounded-lg p-4 mt-4">
          <textarea className="w-[50%] p-3 font-mono font-size-14 bg-gray-100 border border-gray-300 rounded-lg" />
        </div>
      </p>
    </div>
  );
};
export default Style;
