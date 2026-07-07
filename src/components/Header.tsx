import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logoVideo from "../assets/logo/Juliana.mp4";
import {
  searchConcepts,
  scrollToSection,
  type SearchItem,
} from "../utils/SearchData";

interface HeaderProps {
  isHomepage?: boolean;
}

const navItems = [
  { label: "Home", to: "/home" },
  { label: "Rendering", to: "/rendering" },
  { label: "Event Loop", to: "/event-loop" },
  { label: "Async Lab", to: "/async-lab" },
];

// Single source of truth for the accordion breakpoint. Change this one
// number (and nothing else) if you ever want the switch-over point to move.
const NAV_BREAKPOINT_PX = 948;

const Header: React.FC<HeaderProps> = ({ isHomepage = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim()) {
      setResults(searchConcepts(query));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (item: SearchItem) => {
    navigate(item.page);
    setShowResults(false);
    setSearchTerm("");
    setMobileMenuOpen(false);

    if (item.section) {
      // Wait for navigation to finish rendering before scrolling.
      setTimeout(() => scrollToSection(item.section), 100);
    }
  };

  // Close the search dropdown when clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Collapse the mobile accordion whenever the screen grows back past the breakpoint.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= NAV_BREAKPOINT_PX) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchBox = (
    <div className="relative w-full min-[948px]:w-auto" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search concepts…"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => searchTerm && setShowResults(true)}
        className="w-full rounded-full border border-red-600/40 bg-slate-900 px-4 py-2 text-white placeholder-white/40 transition-all focus:border-red-600 focus:shadow-lg focus:shadow-red-600/20 focus:outline-none min-[948px]:w-48"
      />

      {showResults && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-lg border border-red-600/40 bg-slate-900 shadow-lg shadow-red-600/20">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="w-full border-b border-white/10 px-4 py-3 text-left transition last:border-b-0 hover:bg-red-600/20"
            >
              <div className="text-sm font-semibold text-white">
                {result.title}
              </div>
              <div className="mt-1 text-xs text-white/60">
                {result.description}
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && results.length === 0 && searchTerm.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-lg border border-red-600/40 bg-slate-900 px-4 py-3 text-sm text-white/60">
          No concepts found for "{searchTerm}"
        </div>
      )}
    </div>
  );

  // Same size/shadow treatment as the homepage logo — no more shrinking it
  // down to a small badge on other pages.
  const logo = (
    <video
      src={logoVideo}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="h-16 w-16 shrink-0 rounded-full shadow-[0_0_30px_rgba(229,9,20,0.35)] min-[948px]:h-24 min-[948px]:w-24"
      style={{ aspectRatio: "1 / 1" }}
    />
  );

  return (
    <header className="border-b border-red-600/30 bg-black text-white shadow-inner shadow-red-900/20">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {isHomepage ? (
            <div className="flex items-center gap-4">
              {logo}
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white min-[948px]:text-2xl">
                  Browser Brain
                </h1>
                <p className="text-xs text-white/60">
                  A visual playground for browser internals.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex  w-full items-center justify-between gap-6">
              {/*left*/}
                {/* Brand — full-size logo + name, same on every page now */}
                <Link
                  to="/home"
                  className="flex items-center gap-3 transition hover:text-red-500"
                >
                  {logo}
                  <span className="text-xl font-bold tracking-tight min-[948px]:text-2xl">
                    Browser Brain
                  </span>
                </Link>
             {/*right*/}
              <div className="ml-auto flex items-center gap-8">
                {/* Desktop nav — hidden below 948px, shown as a row from 948px up */}
                <nav className="hidden flex-wrap items-center gap-2 min-[948px]:flex">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `rounded-full px-4 py-2 text-sm transition ${
                          isActive
                            ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                            : "border border-transparent bg-white/5 hover:border-red-600/50 hover:bg-red-600/20"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div>
                  {/* Desktop search + docs — hidden below 948px */}
                  <div className="hidden items-center gap-3 min-[948px]:flex">
                    {searchBox}
                    <Link
                      to="/docs"
                      className="rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-sm text-white transition hover:border-red-600 hover:bg-red-600/20 hover:text-red-100 hover:shadow-lg hover:shadow-red-600/20"
                    >
                      Docs
                    </Link>
                  </div>
                  {/* Hamburger — only visible below 948px */}
                  <button
                    onClick={() => setMobileMenuOpen((open) => !open)}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle navigation menu"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600/40 bg-red-600/10 text-white transition hover:bg-red-600/20 min-[948px]:hidden"
                  >
                    <span className="sr-only">Menu</span>
                    {mobileMenuOpen ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile accordion panel — nav links, search, and Docs stacked vertically */}
        {!isHomepage && (
          <div
            className={`grid overflow-hidden transition-all duration-300 min-[948px]:hidden ${
              mobileMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="flex min-h-0 flex-col gap-3">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                          : "border border-transparent bg-white/5 hover:border-red-600/50 hover:bg-red-600/20"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {searchBox}

              <Link
                to="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl border border-red-600/40 bg-red-600/10 px-5 py-3 text-center text-sm text-white transition hover:border-red-600 hover:bg-red-600/20 hover:text-red-100"
              >
                Docs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
