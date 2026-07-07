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

const Header: React.FC<HeaderProps> = ({ isHomepage = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
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

  return (
    <header className="border-b border-red-600/30 bg-black text-white shadow-inner shadow-red-900/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
        {isHomepage ? (
          <div className="flex items-center justify-center gap-4">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-24 w-24 shrink-0 rounded-full shadow-[0_0_30px_rgba(229,9,20,0.35)]"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Browser Brain
              </h1>
              <p className="text-xs text-white/60">
                A visual playground for browser internals.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link
              to="/home"
              className="text-2xl font-bold tracking-tight transition hover:text-red-500"
            >
              Browser Brain
            </Link>
            <nav className="flex flex-wrap items-center gap-2">
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
          </div>
        )}

        {!isHomepage && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <input
                type="text"
                placeholder="Search concepts…"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => searchTerm && setShowResults(true)}
                className="w-48 rounded-full border border-red-600/40 bg-slate-900 px-4 py-2 text-white placeholder-white/40 transition-all focus:border-red-600 focus:shadow-lg focus:shadow-red-600/20 focus:outline-none"
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
            <Link
              to="/docs"
              className="rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-sm text-white transition hover:border-red-600 hover:bg-red-600/20 hover:text-red-100 hover:shadow-lg hover:shadow-red-600/20"
            >
              Docs
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
