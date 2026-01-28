import React from 'react'

const Header = () => {
  return (
    <header className="bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <h1
          style={{ fontFamily: "Beaststreet" }}
          className="text-2xl tracking-wide text-textMain select-none"
        >
          Browser<span className="text-accent">Brain</span>
        </h1>

        {/* Right section */}
        <div className="flex items-center gap-4">
          
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search concepts…"
              className="
                bg-bgMain
                text-sm
                text-textMain
                placeholder-white/40
                px-4 py-1.5
                rounded-full
                border border-white/10
                focus:outline-none
                focus:border-accent
                w-48
              "
            />
          </div>

          {/* Docs Button */}
          <button
            className="
              text-sm
              text-textMain
              px-4 py-1.5
              rounded-full
              border border-white/10
              hover:border-accent
              hover:text-accent
              transition
            "
          >
            Docs
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
