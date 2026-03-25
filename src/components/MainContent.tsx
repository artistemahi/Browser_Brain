import BrowserEvolutionLive from "./BrowserEvolutionHero";
import { motion } from "framer-motion";


const SectionCard = ({ title, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-3 text-cyan-400">{title}</h2>
      <div className="text-white/80 text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

const Step = ({ text }) => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition"></div>
      <p className="group-hover:text-cyan-300 transition">{text}</p>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="text-white px-6 py-8 space-y-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center"
      >
        🌐 What is a Browser?
      </motion.h1>

      {/* Intro */}
      <SectionCard title="💡 Definition">
        <p>
          A <b>browser</b> is a software application that lets you access and
          interact with the internet.
        </p>
        <p className="mt-2">
          It acts like a <span className="text-cyan-400">translator</span> —
          converting HTML, CSS, and JavaScript into what you actually see.
        </p>
      </SectionCard>

      {/* Working Flow */}
      <SectionCard title="⚙️ How Browser Works">
        <div className="space-y-3">
          <Step text="🔍 Finds server using DNS" />
          <Step text="📡 Sends request via HTTP/HTTPS" />
          <Step text="📦 Receives HTML, CSS, JS" />
          <Step text="🎨 Renders into visual UI" />
          <Step text="⚡ Displays instantly" />
        </div>
      </SectionCard>

      {/* Engines */}
      <SectionCard title="🧠 Inside the Browser">
        <ul className="space-y-2">
          <li>🧱 <b>Rendering Engine</b> → Converts code to UI</li>
          <li>⚡ <b>JavaScript Engine</b> → Executes JS</li>
          <li>🌐 <b>Networking</b> → Handles requests</li>
          <li>🎛️ <b>UI</b> → Buttons, tabs, controls</li>
        </ul>
      </SectionCard>

      {/* Evolution */}
      <SectionCard title="🚀 Evolution of Browsers">
        <BrowserEvolutionLive />
      </SectionCard>

    </div>
  );
};

export default MainContent;