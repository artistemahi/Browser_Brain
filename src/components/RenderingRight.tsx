import DomTree from "../engine/DomParser";
interface prop {
  html: string;
}
const RenderingRight = ({ html }: prop) => {
  return (
    <div className=" bg-white rounded-2xl h-full p-4 overflow-hidden flex justify-center items-start">
      <div className="scale-90 origin-top">
        <DomTree html={html} />
      </div>
    </div>
  );
};
export default RenderingRight;
