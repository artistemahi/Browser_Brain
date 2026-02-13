import FooterPage from "../pages/FooterPage";
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
            <section className="py-2">
              <p className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold text-nowrap pr-0.5" >🎨 Rendering</p>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black  hover:font-bold text-nowrap">📘 About Rendering</ul>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">🧩 Types</ul>
            </section>
            <section>
              <p className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold text-nowrap pr-0.5" >Stages of Rendering</p>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">🌿 Dom</ul>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">🎭 Style</ul>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">📐 Layout</ul>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">🖌 Pain</ul>
              <ul className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">🚀 Composite</ul>
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
