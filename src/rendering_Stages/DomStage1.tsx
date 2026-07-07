interface DomStage1Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
}

const DomStage1 = ({ html, setHtml }: DomStage1Props) => {
  return (
    <div className="rounded-2xl border border-red-600/20 bg-slate-900/80 p-4 text-start text-slate-200">
      <h2 className="mb-2 text-2xl font-bold text-red-400">DOM</h2>

      <p>
        The Document Object Model (DOM) is a programming interface for HTML and
        XML documents. It represents the structure of a webpage as a tree of
        objects that can be manipulated with JavaScript.
      </p>

      {/* This used to be a fake <button> — it's just an explanatory callout,
          not something you click, so it's a styled div instead. */}
      <div className="mt-4 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-100">
        Browser does not understand HTML as text. The browser converts HTML
        into a tree structure — that is the DOM.
      </div>

      <div className="mt-4 rounded-lg border border-white/10 bg-slate-950 p-4">
        <textarea
          className="w-full rounded-lg border border-white/10 bg-slate-900 p-3 font-mono text-sm text-slate-100 focus:border-red-600/60 focus:outline-none"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          rows={6}
        />
      </div>

      <p className="mt-4">
        At this stage: <b>the browser knows what elements exist, but it does
        not know how they should look yet.</b>
      </p>
    </div>
  );
};

export default DomStage1;
