import Headers from "../components/Header";
import RenderingBody from "../components/RenderingBody";
const RenderingPage = () => {
  return (
    <div>
      <Headers isHomepage={true}></Headers>
      <div className="bg-[rgb(28,33,48)] min-h-dvh text-white">
        Rendering Page Content
        <RenderingBody />
      </div>
    </div>
  );
};

export default RenderingPage;
