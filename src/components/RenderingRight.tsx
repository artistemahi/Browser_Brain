import DomTree from "../engine/DomParser";
interface prop {
  html: string;
  css: string;
  showLayoutBorder: boolean;
}
const RenderingRight = ({ html, css,showLayoutBorder }: prop) => {
  const finalDoc = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}  
      </body>
    </html>
  `; // here sytling is appling on the html

  return (
    <div className="flex-col">
      <div className=" bg-white rounded-2xl h-full p-4 overflow-hidden flex justify-center items-start">
        <div className="scale-90 origin-top">
          <DomTree html={html} />
        </div>
      </div>
      <div
        className={`bg-white rounded-2xl h-full p-4 mt-4 overflow-hidden transition-all duration-300 ${
          showLayoutBorder ? "border-4 border-red-500" : ""
        }`}
      >
        <iframe
          title="preview"
          srcDoc={finalDoc}
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};
export default RenderingRight;
