import DomTree from "../engine/DomParser";

interface RenderingRightProps {
  html: string;
  css: string;
  showLayoutBorder: boolean;
}

const RenderingRight = ({ html, css, showLayoutBorder }: RenderingRightProps) => {
  // Combine the user's HTML + CSS into one document for the preview iframe.
  const previewDocument = `
    <html>
      <head><style>${css}</style></head>
      <body>${html}</body>
    </html>
  `;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-red-500/80">
          DOM Tree
        </p>
        {/* Kept white — this represents the actual rendered DOM structure */}
        <div className="min-h-55 w-full overflow-auto rounded-2xl bg-white p-4">
          <DomTree html={html} />
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-red-500/80">
          Live Preview
        </p>
        <div
          className={`rounded-2xl bg-white p-4 transition-all duration-300 ${
            showLayoutBorder ? "border-4 border-red-500" : ""
          }`}
        >
          <div className="h-80 w-full overflow-hidden rounded-lg sm:h-90 md:h-105">
            <iframe
              title="preview"
              srcDoc={previewDocument}
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderingRight;
