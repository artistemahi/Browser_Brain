import React from "react";
import Headers from "../components/Header";
const RenderingPage = () => {
  return (
    <div>
      <Headers isHomepage={true}></Headers>
      <div className="bg-[rgb(28,33,48)] min-h-dvh text-white">Rendering Page Content</div>
    </div>
  );
};

export default RenderingPage;
