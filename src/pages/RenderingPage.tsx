import Headers from "../components/Header";
import RenderingBody from "../components/RenderingBody";
const RenderingPage = () => {
  return (
    <div>
      <Headers></Headers>
      <div className="bg-[rgb(28,33,48)] min-h-dvh text-white">
        <RenderingBody />
      </div>
    </div>
  );
};

export default RenderingPage;
