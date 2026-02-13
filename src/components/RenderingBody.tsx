import FooterPage from "../pages/FooterPage";
import { Link } from "react-router-dom";
import {
  PlayIcon,
  StopIcon,
  BackwardStep,
  ForwardStep,
} from "../../utils/constants";
import RenderingContent from "./RenderingContent";

const RenderingBody = () => {
  return (
    <div>
      <div className="bg-gray-300 min-h-dvh ">
        {/* body section */}
        <div className="bg-green-400 flex justify-evenly min-h-dvh ">
          {/* left pannel */}
          <div className="flex flex-col space-y-8 text-white border-green-400 border bg-gray-950 p-4 w-48 ">
            <Link to="/rendering">
              {" "}
              <button> Rendering</button>
            </Link>
            <section className="py-2">
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black ">About Rendering</ul>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Types</ul>
            </section>
            <section>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Dom</ul>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Style</ul>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Layout</ul>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Pain</ul>
              <ul className="hover:cursor-pointer pl-2 rounded-2xl hover:bg-white hover:text-black">Composite</ul>
            </section>
          </div>
          {/* main body */}
          <div className="flex-1 bg-fuchsia-50 px-10 text-center">
            <RenderingContent />
          </div>
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
              <button className="ml-4">Why this?</button>
            </div>
          </div>
        </div>

        <div>
          <FooterPage />
        </div>
      </div>
    </div>
  );
};

export default RenderingBody;
