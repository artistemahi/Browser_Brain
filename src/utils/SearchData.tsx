// Global search database with searchable concepts and pages
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  page: string;
  section?: string; // For scrolling to specific section
  keywords: string[];
}

export const searchDatabase: SearchItem[] = [
  // Rendering Pipeline
  {
    id: "rendering-main",
    title: "Rendering Pipeline",
    description: "How browsers render web pages step by step",
    page: "/rendering",
    keywords: ["rendering", "paint", "layout", "style", "dom", "cssom"],
  },
  {
    id: "dom-stage",
    title: "DOM Tree",
    description: "Document Object Model creation stage",
    page: "/rendering",
    section: "dom-stage",
    keywords: ["dom", "tree", "parsing", "html"],
  },
  {
    id: "style-stage",
    title: "Style Computation",
    description: "CSS styles applied to DOM nodes",
    page: "/rendering",
    section: "style-stage",
    keywords: ["style", "css", "cascade", "computed", "cssom"],
  },
  {
    id: "layout-stage",
    title: "Layout (Reflow)",
    description: "Calculate position and size of elements",
    page: "/rendering",
    section: "layout-stage",
    keywords: ["layout", "reflow", "geometry", "box model"],
  },
  {
    id: "paint-stage",
    title: "Paint (Rasterization)",
    description: "Convert visual info to pixels on screen",
    page: "/rendering",
    section: "paint-stage",
    keywords: ["paint", "raster", "pixels", "visual"],
  },
  {
    id: "composite-stage",
    title: "Compositing",
    description: "Layer composition and rendering",
    page: "/rendering",
    section: "composite-stage",
    keywords: ["composite", "layers", "gpu", "rendering"],
  },

  // Event Loop
  {
    id: "event-loop-main",
    title: "Event Loop",
    description: "JavaScript execution model and async handling",
    page: "/event-loop",
    keywords: ["event loop", "javascript", "async", "call stack", "task queue"],
  },
  {
    id: "call-stack",
    title: "Call Stack",
    description: "Function execution context stack",
    page: "/event-loop",
    section: "call-stack",
    keywords: ["call stack", "function", "execution", "stack"],
  },
  {
    id: "task-queue",
    title: "Task Queue",
    description: "Callback queue for async operations",
    page: "/event-loop",
    section: "task-queue",
    keywords: ["task queue", "callback", "async", "settimeout"],
  },
  {
    id: "microtask-queue",
    title: "Microtask Queue",
    description: "High priority async operations (Promises, MutationObserver)",
    page: "/event-loop",
    section: "microtask-queue",
    keywords: ["microtask", "promise", "async await", "mutationobserver"],
  },

  // Async Lab
  {
    id: "async-main",
    title: "Async Lab",
    description: "Experiment with asynchronous JavaScript patterns",
    page: "/async-lab",
    keywords: ["async", "await", "promise", "callback", "setTimeout"],
  },
  {
    id: "promises",
    title: "Promises",
    description: "Promise-based async pattern",
    page: "/async-lab",
    section: "promises",
    keywords: ["promise", "then", "catch", "async pattern"],
  },
  {
    id: "async-await",
    title: "Async/Await",
    description: "Modern async syntax with async functions",
    page: "/async-lab",
    section: "async-await",
    keywords: ["async", "await", "syntactic sugar", "modern"],
  },

  // Global
  {
    id: "home",
    title: "Home",
    description: "Landing page and browser concepts intro",
    page: "/home",
    keywords: ["home", "landing", "browser", "concepts", "intro"],
  },
];

/**
 * Search for items matching the query
 */
export function searchConcepts(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  return searchDatabase.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const descMatch = item.description.toLowerCase().includes(lowerQuery);
    const keywordMatch = item.keywords.some((kw) =>
      kw.toLowerCase().includes(lowerQuery),
    );

    return titleMatch || descMatch || keywordMatch;
  });
}

/**
 * Scroll to specific section on page
 */
export function scrollToSection(sectionId?: string) {
  if (!sectionId) return;

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    // Optional: Add highlight effect
    element.classList.add("highlight-section");
    setTimeout(() => {
      element.classList.remove("highlight-section");
    }, 3000);
  }
}
