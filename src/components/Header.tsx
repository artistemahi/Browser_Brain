import { Link, NavLink } from "react-router-dom";
import logoVideo from "../assets/logo/Juliana.mp4";

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
            <div className="relative">
              <input
                type="text"
                placeholder="Search concepts…"
                className="bg-slate-900 text-white placeholder-white/40 px-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-cyan-500 w-48"
              />
            </div>
            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100">
              Docs
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
