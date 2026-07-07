import BrowserEvolutionLive from "./BrowserEvolutionHero";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

const SectionCard = ({ title, children }: SectionCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="rounded-xl border border-red-600/20 bg-white/5 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-red-600/20"
  >
    <h2 className="mb-3 text-2xl font-bold text-red-400">{title}</h2>
    <div className="text-sm leading-relaxed text-white/80">{children}</div>
  </motion.div>
);

const Step = ({ text }: { text: string }) => (
  <div className="group flex items-center gap-3">
    <div className="h-3 w-3 rounded-full bg-red-600 transition group-hover:scale-125" />
    <p className="transition group-hover:text-red-300">{text}</p>
  </div>
);

const MainContent = () => {
  return (
    <div className="space-y-10 px-6 py-8 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold"
      >
        🌐 What is a Browser?
      </motion.h1>

      <SectionCard title="💡 Definition">
        <p>
          A <b>browser</b> is a software application that lets you access and
          interact with the internet.
        </p>
        <p className="mt-2">
          It acts like a <span className="text-red-400">translator</span> —
          converting HTML, CSS, and JavaScript into what you actually see.
        </p>
      </SectionCard>

      <SectionCard title="⚙️ How Browser Works">
        <div className="space-y-3">
          <Step text="🔍 Finds server using DNS" />
          <Step text="📡 Sends request via HTTP/HTTPS" />
          <Step text="📦 Receives HTML, CSS, JS" />
          <Step text="🎨 Renders into visual UI" />
          <Step text="⚡ Displays instantly" />
        </div>
      </SectionCard>

      <SectionCard title="🧠 Inside the Browser">
        <ul className="space-y-2">
          <li>🧱 <b>Rendering Engine</b> → Converts code to UI</li>
          <li>⚡ <b>JavaScript Engine</b> → Executes JS</li>
          <li>🌐 <b>Networking</b> → Handles requests</li>
          <li>🎛️ <b>UI</b> → Buttons, tabs, controls</li>
        </ul>
      </SectionCard>

      <SectionCard title="🚀 Evolution of Browsers">
        <BrowserEvolutionLive />
      </SectionCard>
    </div>
  );
};

export default MainContent;
