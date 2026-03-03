// import {
//   PlayIcon,
//   BackwardStep,
//   ForwardStep,
//   StopIcon,
// } from "../../utils/constants";
import MainContent from "./MainContent";
import {useState} from "react";
import FooterPage from "../pages/FooterPage";
import Reordering from "./../../utils/Reordering";
import Heroanimation from "../../utils/Heroanimation";
import { Link } from "react-router-dom";
import {bookmarkIcon} from "../../utils/ConstantsLinks";
import NotesEditor from "../engine/NotesEditor";

const GlobalBody = () => {
  const [ShowNote, setShowNote]= useState(false);

  return (
    <div className="bg-gray-300 min-h-dvh ">
      {/* heading section */}
      <h1 className="bg-black flex justify-center">
        <Heroanimation />
        <Reordering />
      </h1>

      {/* body section */}
      <div className= "flex justify-evenly min-h-dvh ">
        {/* left pannel */}
        <div className="flex flex-col space-y-8 text-white border-green-400 border bg-neutral-950 p-4 w-48 ">
          <Link to="/rendering">
            {" "}
            <button className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"> Rendering</button>
          </Link>
          <Link to="/event-loop">
            {" "}
            <button className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"> Event Loop</button>
          </Link>
          <Link to="/async-lab">
            {" "}
            <button className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"> Async Lab</button>
          </Link>
          
          <button onClick={()=>setShowNote(!ShowNote)} className="bg-blue-500 hover:bg-blue-600 h-18 w-18 rounded-full hover:animate-bounce hover:cursor-pointer "><img src={bookmarkIcon} alt="Notes Icon" className="w-100% h-100% rounded-full  mx-auto my-auto"/></button>
        </div>
        {/* main body */}
        <div className="flex-1 bg-neutral-800 px-10 text-center text-white ">
          <MainContent />
        </div>
        {/* right pannel */}
        {ShowNote &&  <div className="bg-white text-black  sticky  ">
            <NotesEditor />
            {/* <button>
              <PlayIcon />
              <span className="hover:bg-red-600 rounded-2xl text-white bg-red-500 hover:text-shadow-black px-2"> Run</span>
            </button>
            <button>
              <StopIcon />
              <span> Stop</span>
            </button>
            <button>
              <BackwardStep /> Back
            </button>
            <button>
              <ForwardStep /> Next
            </button> */}
        </div> }
       
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default GlobalBody;
