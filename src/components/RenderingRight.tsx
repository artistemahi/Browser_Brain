import DomTree from "../engine/DomParser";
interface prop {
  html: string;
  css: string;
  showLayoutBorder: boolean;
}
const RenderingRight = ({ html, css, showLayoutBorder }: prop) => {
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
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-4 overflow-hidden">
        <div className="min-h-55 w-full overflow-auto">
          <DomTree html={html} />
        </div>
      </div>

      <div
        className={`bg-white rounded-2xl p-4 transition-all duration-300 ${
          showLayoutBorder ? "border-4 border-red-500" : ""
        }`}
      >
        <div className="w-full h-80 sm:h-90 md:h-105 rounded-lg overflow-hidden">
          <iframe
            title="preview"
            srcDoc={finalDoc}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default RenderingRight;
