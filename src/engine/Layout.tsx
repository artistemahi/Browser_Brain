const Layout = () => {
  return (
    <div className=" bg-gray-200 rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Layout</h2>
      <p>
        After styles are calculated, the browser now determines the exact
        geometry of every element.
        <button>Do you know what the browser calculates in this stage?</button>
        <p>
          Width and height of elements <br></br>Position (x, y coordinates){" "}
          <br></br>Margins and padding <br></br> Flow of elements (block,
          inline, flex, grid)<br></br>Responsive adjustments based on viewport
          <br></br> and more...
        </p>
        <p>This step is also called Reflow.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          The browser combine DOM + CSSOM → Render Tree and Then it calculates
          the layout of that render tree.
        </button>
        <p>Layout is expensive — avoid unnecessary reflows.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          Layout is expensive — avoid unnecessary reflows.
        </button>
      </p>
    </div>
  );
};
export default Layout;
