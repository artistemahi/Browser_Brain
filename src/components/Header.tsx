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

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim()) {
      const searchResults = searchConcepts(query);
      setResults(searchResults);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  // Handle result click - navigate and scroll
  const handleResultClick = (item: SearchItem) => {
    navigate(item.page);
    setShowResults(false);
    setSearchTerm("");

    // Scroll to section after navigation
    if (item.section) {
      setTimeout(() => {
        scrollToSection(item.section);
      }, 100);
    }
  };

  // Close dropdown on outside click
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
    <header className="bg-black text-white border-b border-white/10 shadow-inner shadow-cyan-800/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {isHomepage ? (
          <div className="flex items-center justify-center gap-4">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-24 rounded-full shadow-[0_0_30px_rgba(0,229,255,0.35)]"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
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
              className="text-2xl font-bold tracking-tight hover:text-cyan-300 transition"
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
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-white/5 hover:bg-white/15"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

        {!isHomepage ? (
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <div className="relative" ref={dropdownRef}>
              <input
                type="text"
                placeholder="Search concepts…"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => searchTerm && setShowResults(true)}
                className="bg-slate-900 text-white placeholder-white/40 px-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-cyan-500 w-48"
              />

              {/* Search Results Dropdown */}
              {showResults && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/20 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left px-4 py-3 hover:bg-cyan-500/20 border-b border-white/10 last:border-b-0 transition"
                    >
                      <div className="font-semibold text-white text-sm">
                        {result.title}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {result.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* No results message */}
              {showResults && results.length === 0 && searchTerm.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/20 rounded-lg px-4 py-3 text-sm text-white/60 z-50">
                  No concepts found for "{searchTerm}"
                </div>
              )}
            </div>
            <Link
              to="/docs"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100"
            >
              Docs
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
