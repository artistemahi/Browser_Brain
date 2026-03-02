import {useState} from "react";
interface prop {
  setshowLayout:React.Dispatch<React.SetStateAction<boolean>>;
}
const Layout = ({setshowLayout}:prop) => {
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
        {IsOpen &&  <div className="bg-blue-950 text-white rounded-xl p-4 mt-4 space-y-2">
          <p>• Width and height of elements</p>
          <p>• Position (x, y coordinates)</p>
          <p>• Margins and padding</p>
          <p>• Flow (block, inline, flex, grid)</p>
          <p>• Responsive adjustments</p>
        </div> }
        <p>This step is also called Reflow.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          The browser combine DOM + CSSOM → Render Tree and Then it calculates
          the layout of that render tree.
        </button>
        <p>Layout is expensive — avoid unnecessary reflows.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-start">
          Layout is expensive — avoid unnecessary reflows.
        </button>
        <button onClick={()=>setshowLayout(true)}
         className="bg-red-600 hover:bg-red-500 text-white p-4 font-bold rounded-2xl py-2 m-3 hover:cursor-pointer hover:  ">
          Lets See In Action
        </button>
      </p>
    </div>
  );
};
export default Layout;
