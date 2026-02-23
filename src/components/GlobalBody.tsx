import { PlayIcon, BackwardStep, ForwardStep,StopIcon } from "../../utils/constants";
import FooterPage from "../pages/FooterPage";
// import Reordering from "./../../utils/Reordering";
import {Link} from "react-router-dom";
const GlobalBody = () => {
  return (
    <div className="bg-gray-300 min-h-dvh ">
      {/* heading section */}
      <h1 className="bg-amber-300 py-4 text-2xl font-bold text-gray-900 text-center">
        Animation here :
      </h1>
        {/* <Reordering /> */}
      {/* body section */}
      <div className="bg-green-400 flex justify-evenly min-h-dvh ">
        {/* left pannel */}
        <div className="flex flex-col space-y-8 text-white border-green-400 border bg-gray-950 p-4 w-48 ">
          <Link to="/rendering"> <button> Rendering</button></Link>
         <Link to="/event-loop"> <button> Event Loop</button></Link>
          <Link to="/async-lab"> <button> Async Lab</button></Link>
        
        </div>
        {/* main body */}
        <div className="flex-1 bg-fuchsia-50 px-10 text-center">main content</div>
        {/* right pannel */}
        <div className="bg-[rgb(28,33,48)] border-green-400 border p-4 text-white  ">
         <div className="flex flex-col space-y-8  ">
          <button>
            <PlayIcon />
            <span> Run</span>
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
          </button>
          <button className="ml-4">
              Why this?
          </button>
          </div>
        </div>
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default GlobalBody;
