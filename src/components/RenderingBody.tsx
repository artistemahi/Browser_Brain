import FooterPage from "../pages/FooterPage";
import RenderingContent from "./RenderingContent";
import { useState } from "react";
import {
  PlayIcon,
  StopIcon,
  BackwardStep,
  ForwardStep,
} from "../../utils/constants";

const RenderingBody = () => {
  const [showItems, setShowItems] = useState(false);

  const handleItemsClick = () => {
    setShowItems((prev) => !prev); // safer way
  };

  return (
    <div className="bg-gray-300 min-h-dvh flex flex-col">
      <div className="flex flex-1">
        {/* LEFT PANEL */}
        <aside className="flex flex-col space-y-8 text-white bg-gray-950 p-4 w-60">
          <section>
            <p className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold">
              🎨 Rendering
            </p>
            <button
              onClick={handleItemsClick}
              className="text-left px-2 py-1 rounded-2xl hover:bg-white hover:text-black hover:font-bold transition"
            >
              📘 About Rendering
            </button>
            <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
              {" "}
              🧩 Types{" "}
            </button>
            <button className="bg-gray-700 px-2 rounded-2xl my-2 font-semibold text-nowrap pr-0.5">
              {" "}
              Stages of Rendering{" "}
            </button>
            <div className="flex flex-col items-start ">
              <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🌿 Dom{" "}
              </button>
              <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🎭 Style{" "}
              </button>
              <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                📐 Layout{" "}
              </button>{" "}
              <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🖌 Pain{" "}
              </button>{" "}
              <button className="hover:cursor-pointer px-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold">
                {" "}
                🚀 Composite{" "}
              </button>
            </div>
          </section>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-fuchsia-50 px-10 py-6">
          <RenderingContent showItems={showItems} />
        </main>

        {/* RIGHT PANEL */}
        <aside className="bg-[rgb(28,33,48)] p-4 text-white w-48">
          <div className="flex flex-col space-y-6">
            <button className="flex items-center gap-2">
              <PlayIcon /> Run
            </button>
            <button className="flex items-center gap-2">
              <StopIcon /> Stop
            </button>
            <button className="flex items-center gap-2">
              <BackwardStep /> Back
            </button>
            <button className="flex items-center gap-2">
              <ForwardStep /> Next
            </button>
          </div>
        </aside>
      </div>

      <FooterPage />
    </div>
  );
};

export default RenderingBody;
