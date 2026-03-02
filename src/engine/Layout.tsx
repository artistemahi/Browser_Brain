import {useState} from "react";
const Layout = () => {
  const [IsOpen,setIsOpen] = useState(false);
  const ClickHandler =()=>{
    setIsOpen(!IsOpen);
  }
  return (
    <div className=" bg-gray-200 rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Layout</h2>
      <p>
        After styles are calculated, the browser now determines the exact
        geometry of every element.
        <button onClick={ClickHandler} className="hover:bg-orange-400 hover:text-black bg-amber-500 p-2 rounded-2xl text-amber-50 hover:cursor-pointer ">Do you know what the browser calculates in this stage ❓</button>
        {IsOpen && <p className="bg-blue-950 text-white rounded-2xl p-3 mt-3 ">
          Width and height of elements <br></br>Position (x, y coordinates){" "}
          <br></br>Margins and padding <br></br> Flow of elements (block,
          inline, flex, grid)<br></br>Responsive adjustments based on viewport
          <br></br> and more...
        </p> }
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
