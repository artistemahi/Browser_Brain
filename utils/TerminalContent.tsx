// terminalModel.ts
export type TerminalItem = {
  id: string;
  title: string;
  lines: string[];
};

export const terminalItems: TerminalItem[] = [
  {
    id: "event-loop",
    title: " Event Loop",
    lines: [
      "$ JavaScript runs on a single call stack.",
      "$ Async work is delegated to Web APIs.",
      "$ Microtasks are executed before macrotasks.",
    ],
  },
  {
    id: "rendering",
    title: "Rendering Pipeline",
    lines: [
      "$ DOM mutations trigger style calculation.",
      "$ Layout computes element positions.",
      "$ Paint rasterizes pixels.",
      "$ Composite combines layers on GPU.",
    ],
  },
  {
    id: "performance",
    title: " Performance",
    lines: [
      "$ Long tasks block the main thread.",
      "$ Layout thrashing causes reflows.",
      "$ Batch DOM updates to stay fast.",
    ],
  },
];
