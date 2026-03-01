import DomTree from "../engine/DomParser";
interface prop{
    html:string
}
const RenderingRight = ({html}:prop) => {
  return (
    <div className="bg-white h-full p-4">
      <DomTree html={html} />
    </div>
  );
};
export default RenderingRight;
