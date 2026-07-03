import { useNavigate } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { motion } from "framer-motion";
import Terminal from "../engine/Terminal";
import ChangingTextEff from "../engine/ChangingTextEff";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}
interface NetNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  label: string;
}

const COLORS = [
  "#00E5FF",
  "#8B5CF6",
  "#00FFA3",
  "#F472B6",
  "#FBBF24",
  "#60A5FA",
  "#34D399",
];
const NET_LABELS = [
  "DOM",
  "CSSOM",
  "Layout",
  "Paint",
  "Composite",
  "V8",
  "Reflow",
  "GPU",
  "HTTP/2",
  "TCP/IP",
  "Render Tree",
  "JS Heap",
  "Event Loop",
  "rAF",
  "WebGL",
  "Shadow DOM",
  "CSS Grid",
  "Flexbox",
  "Workers",
  "WASM",
];

// ─── HERO CANVAS ─────────────────────────────────────────────────────────────
function HeroCanvas({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    mouse.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: 320 }, () => ({
      x: Math.random() * 1600 - 800,
      y: Math.random() * 900 - 450,
      z: Math.random() * 1000,
      pz: 0,
    }));
    const nodes: NetNode[] = NET_LABELS.map((label) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      radius: 3 + Math.random() * 3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.016 + Math.random() * 0.02,
      label,
    }));

    const CH = 13;
    const MAT = "DOMCSSOMV8GPUJSHTMLRENDER01";
    const drops = Array.from(
      { length: Math.floor(canvas.width / CH) },
      () => Math.random() * -100,
    );

    const drawHex = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const hx = cx + r * Math.cos(a),
          hy = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
    };

    const draw = () => {
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#03050D";
      ctx.fillRect(0, 0, W, H);
      const mx = mouse.current.x,
        my = mouse.current.y;
      const ox = (mx - 0.5) * 28,
        oy = (my - 0.5) * 28;
      const scx = W / 2,
        scy = H / 2;
      const spd = 4 + Math.abs(mx - 0.5) * 8;

      // Draw stars
      for (const s of stars) {
        s.pz = s.z;
        s.z -= spd;
        if (s.z <= 0) {
          s.x = Math.random() * 1600 - 800;
          s.y = Math.random() * 900 - 450;
          s.z = 1000;
          s.pz = 1000;
        }
        const sx = (s.x / s.z) * W + scx,
          sy = (s.y / s.z) * H + scy;
        const px2 = (s.x / s.pz) * W + scx,
          py2 = (s.y / s.pz) * H + scy;
        const sz = Math.max(0.5, (1 - s.z / 1000) * 2.5);
        ctx.beginPath();
        ctx.moveTo(px2, py2);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(200,220,255,${(1 - s.z / 1000) * 0.6})`;
        ctx.lineWidth = sz * 0.8;
        ctx.stroke();
      }

      // Draw hex grid
      ctx.strokeStyle = "rgba(0,229,255,0.018)";
      ctx.lineWidth = 1;
      const HS = 72;
      for (let row = -1; row < H / (HS * 1.5) + 2; row++)
        for (let col = -1; col < W / (HS * 1.732) + 2; col++)
          drawHex(
            col * HS * 1.732 + (row % 2 === 0 ? 0 : HS * 0.866) + ox * 0.25,
            row * HS * 1.5 + oy * 0.25,
            HS * 0.5,
          );

      // Draw matrix characters
      ctx.font = `${CH}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = `rgba(0,229,255,${0.03 + Math.random() * 0.05})`;
        ctx.fillText(
          MAT[Math.floor(Math.random() * MAT.length)],
          i * CH,
          drops[i],
        );
        drops[i] += 0.35;
        if (drops[i] > H && Math.random() > 0.977) drops[i] = 0;
      }

      // Draw node connections
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x + ox, nodes[i].y + oy);
            ctx.lineTo(nodes[j].x + ox, nodes[j].y + oy);
            ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 200) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

      // Draw nodes
      for (const nd of nodes) {
        nd.pulse += nd.pulseSpeed;
        const ring2 = Math.sin(nd.pulse) * 6;
        const nx = nd.x + ox,
          ny = nd.y + oy;
        for (let r = 0; r < 3; r++) {
          ctx.beginPath();
          ctx.arc(nx, ny, nd.radius + ring2 + 6 + r * 6, 0, Math.PI * 2);
          ctx.strokeStyle = nd.color + ["22", "14", "09"][r];
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(nx, ny, nd.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = nd.color + "30";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(nx, ny, nd.radius, 0, Math.PI * 2);
        ctx.fillStyle = nd.color;
        ctx.shadowBlur = 26;
        ctx.shadowColor = nd.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.font = "9.5px monospace";
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.textAlign = "center";
        ctx.fillText(nd.label, nx, ny + nd.radius + 14);
        ctx.textAlign = "left";
        nd.x += nd.vx;
        nd.y += nd.vy;
        if (nd.x < -80) nd.x = W + 80;
        if (nd.x > W + 80) nd.x = -80;
        if (nd.y < -80) nd.y = H + 80;
        if (nd.y > H + 80) nd.y = -80;
      }

      // Vignette and spotlight
      const spot = ctx.createRadialGradient(
        mx * W,
        my * H,
        0,
        mx * W,
        my * H,
        W * 0.35,
      );
      spot.addColorStop(0, "rgba(0,229,255,0.04)");
      spot.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = spot;
      ctx.fillRect(0, 0, W, H);

      const vig = ctx.createRadialGradient(
        scx,
        scy,
        H * 0.08,
        scx,
        scy,
        H * 1.1,
      );
      vig.addColorStop(0, "rgba(3,5,13,0)");
      vig.addColorStop(0.5, "rgba(3,5,13,0.15)");
      vig.addColorStop(1, "rgba(3,5,13,0.97)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full block cursor-crosshair"
    />
  );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({
  num,
  label,
  delay = 0,
}: {
  num: string;
  label: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.85 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "backOut",
        delay,
      }}
      whileHover={{ scale: 1.08, y: -6 }}
      whileInView={{
        y: [-8, 8, -8],
        transition: {
          duration: 3 + Math.random() * 2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: Math.random() * 2,
        },
      }}
      className="relative flex-1 min-w-20 sm:min-w-24 px-3 sm:px-5 py-4 sm:py-5 text-center cursor-default group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 rounded-lg border border-red-500/20 group-hover:border-red-500/60 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(20px)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      />
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at center, #E50914 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      <div
        className="relative font-black leading-none tracking-tighter"
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
          color: "#E50914",
          textShadow: `0 0 40px rgba(229,9,20,0.6), 0 4px 20px rgba(0,0,0,0.8)`,
        }}
      >
        {num}
      </div>
      <div className="relative text-[0.6rem] sm:text-[0.65rem] text-white/50 uppercase tracking-widest mt-2 sm:mt-2.5 font-semibold group-hover:text-white/80 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
}

// ─── LANDING BODY ─────────────────────────────────────────────────────────────
const LandingBody = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [selectedTopic, setSelectedTopic] = useState("Select 🔽");
  const navigate = useNavigate();

  const handleMouse = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  }, []);

  const getTopicRoute = (topic: string) => {
    if (topic.startsWith("Event Loop")) return "/event-loop";
    if (topic.startsWith("Rendering Pipeline")) return "/rendering";
    if (topic.startsWith("Async Lab")) return "/async-lab";
    return "/home";
  };

  const handleStart = () => {
    navigate(getTopicRoute(selectedTopic));
  };

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouse}
    >
      {/* Canvas background */}
      <HeroCanvas mouseX={mouse.x} mouseY={mouse.y} />

      {/* Content - Split Layout */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-12 lg:py-0">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0 relative"
        >
          {/* Netflix red glow effect */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, #E50914, transparent)",
            }}
          />

          <div className="relative z-10">
            {/* Headline */}
            <h1
              className="text-white font-black leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4.2rem)",
                textShadow:
                  "0 8px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(229,9,20,0.3)",
              }}
            >
              The Browser
              <br />
              <span className="text-red-600" style={{ color: "#E50914" }}>
                is not magic.
              </span>
              <br />
              <div className="flex items-center mt-4 flex-wrap gap-3">
                <span className="text-white/90 text-lg sm:text-xl font-semibold">
                  It's a
                </span>
                <span
                  style={{ filter: "drop-shadow(0 0 32px rgba(229,9,20,0.5))" }}
                >
                  <ChangingTextEff />
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <h2 className="text-white/70 text-base sm:text-lg md:text-xl mt-6 max-w-lg leading-relaxed font-medium">
              Explore how browsers work under the hood. Master the rendering
              pipeline, event loop, and async patterns that power modern web
              development.
            </h2>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 mt-12 w-full"
              style={{ perspective: "800px" }}
            >
              {[
                { num: "5", label: "Pipeline Stages", delay: 1.9 },
                { num: "3", label: "Render Modes", delay: 2.0 },
                { num: "9+", label: "Core Concepts", delay: 2.1 },
                { num: "∞", label: "Things to Learn", delay: 2.2 },
              ].map((s) => (
                <StatCard key={s.label} {...s} color="#E50914" />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SECTION - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 lg:pl-8 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <div
              className="rounded-xl overflow-hidden group"
              style={{
                boxShadow:
                  "0 0 0 2px rgba(229,9,20,0.3), 0 0 60px rgba(229,9,20,0.25), 0 20px 80px rgba(0,0,0,0.6)",
              }}
            >
              <Terminal onTopicSelect={setSelectedTopic} />
            </div>

            {/* Start Button */}
            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-8 font-bold py-4 px-8 rounded-lg transition-all duration-300 group overflow-hidden relative"
              style={{
                background: "#E50914",
                boxShadow:
                  "0 8px 32px rgba(229,9,20,0.4), 0 0 60px rgba(229,9,20,0.2)",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                letterSpacing: "0.05em",
              }}
            >
              <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white font-black flex items-center justify-center gap-2">
                Start Exploring
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingBody;
