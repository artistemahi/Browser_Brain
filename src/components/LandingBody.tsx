
import { Link } from "react-router-dom";
import Terminal from "../engine/Terminal";

const LandingBody = () => {

  return (
    <div className="bg-neutral-900 min-h-dvh flex items-center justify-center">
      <div className="flex-col items-center justify-center">
        <h1 className="text-white  font-bold text-6xl text-center">
          The Browser is not magic.
          <br></br>It's a System.
        </h1>
        <h2 className="text-white text-xl mt-4 ml-40 ">
          Explore how browsers work under the hood.
        </h2>
        <div className="flex gap-6 justify-center items-center">
          <Terminal />
          {/* <Terminal /> */}
         <Link to="/home"> <button  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg mt-8 h-12 self-center">
            Start Exploring
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
