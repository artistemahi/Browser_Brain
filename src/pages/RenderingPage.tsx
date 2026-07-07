import Header from "../components/Header";
import RenderingBody from "../components/RenderingBody";

const RenderingPage = () => {
  return (
    <div className="bg-[rgb(12,16,26)] text-white">
      <Header />
      <div className="min-h-screen">
        <RenderingBody />
      </div>
    </div>
  );
};

export default RenderingPage;
