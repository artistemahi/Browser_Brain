import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Terminal from "../engine/Terminal";
import ChangingTextEff from "../engine/ChangingTextEff";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Star { x: number; y: number; z: number; pz: number; }
interface Ring { angle: number; radius: number; color: string; speed: number; nodeIdx: number; }
interface NetNode { x: number; y: number; vx: number; vy: number; color: string; radius: number; pulse: number; pulseSpeed: number; label: string; }
interface Pulse { from: number; to: number; t: number; speed: number; color: string; }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; }

const COLORS = ["#00E5FF","#8B5CF6","#00FFA3","#F472B6","#FBBF24","#60A5FA","#34D399"];
const NET_LABELS = [
  "DOM","CSSOM","Layout","Paint","Composite","V8","Reflow","GPU",
  "HTTP/2","TCP/IP","Render Tree","JS Heap","Event Loop","rAF",
  "WebGL","Shadow DOM","CSS Grid","Flexbox","Workers","WASM",
];

// ─── HERO CANVAS ─────────────────────────────────────────────────────────────
function HeroCanvas({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const particles = useRef<Particle[]>([]);

  useEffect(() => { mouse.current = { x: mouseX, y: mouseY }; }, [mouseX, mouseY]);

  const burst = useCallback((e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = e.clientX - r.left, cy = e.clientY - r.top;
    for (let i = 0; i < 24; i++) {
      const a = (Math.PI * 2 * i) / 24, sp = 3 + Math.random() * 5;
      particles.current.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, color: COLORS[i % COLORS.length], size: 2 + Math.random() * 4 });
    }
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("click", burst);

    const stars: Star[] = Array.from({ length: 320 }, () => ({ x: Math.random() * 1600 - 800, y: Math.random() * 900 - 450, z: Math.random() * 1000, pz: 0 }));
    const nodes: NetNode[] = NET_LABELS.map((label) => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, color: COLORS[Math.floor(Math.random() * COLORS.length)], radius: 3 + Math.random() * 3, pulse: Math.random() * Math.PI * 2, pulseSpeed: 0.016 + Math.random() * 0.02, label }));
    const rings: Ring[] = Array.from({ length: 5 }, (_, i) => ({ angle: (Math.PI * 2 * i) / 5, radius: 120 + i * 40, color: COLORS[i % COLORS.length], speed: 0.003 + i * 0.002, nodeIdx: i % nodes.length }));
    const pulses: Pulse[] = [];
    const spawnPulse = () => {
      const f = Math.floor(Math.random() * nodes.length);
      let t = f; while (t === f) t = Math.floor(Math.random() * nodes.length);
      pulses.push({ from: f, to: t, t: 0, speed: 0.003 + Math.random() * 0.006, color: nodes[f].color });
    };

    const CH = 13;
    const MAT = "DOMCSSOMV8GPUJSHTMLRENDER01";
    let drops = Array.from({ length: Math.floor(canvas.width / CH) }, () => Math.random() * -100);
    window.addEventListener("resize", () => { drops = Array.from({ length: Math.floor(canvas.width / CH) }, () => Math.random() * -100); });

    const drawHex = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) { const a = (Math.PI / 3) * i - Math.PI / 6; const hx = cx + r * Math.cos(a), hy = cy + r * Math.sin(a); i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy); }
      ctx.closePath(); ctx.stroke();
    };

    let frame = 0;
    const draw = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#03050D"; ctx.fillRect(0, 0, W, H);
      const mx = mouse.current.x, my = mouse.current.y;
      const ox = (mx - 0.5) * 28, oy = (my - 0.5) * 28;
      const scx = W / 2, scy = H / 2;
      const spd = 4 + Math.abs(mx - 0.5) * 8;
      for (const s of stars) {
        s.pz = s.z; s.z -= spd;
        if (s.z <= 0) { s.x = Math.random() * 1600 - 800; s.y = Math.random() * 900 - 450; s.z = 1000; s.pz = 1000; }
        const sx = (s.x / s.z) * W + scx, sy = (s.y / s.z) * H + scy;
        const px2 = (s.x / s.pz) * W + scx, py2 = (s.y / s.pz) * H + scy;
        const sz = Math.max(0.5, (1 - s.z / 1000) * 2.5);
        ctx.beginPath(); ctx.moveTo(px2, py2); ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(200,220,255,${(1 - s.z / 1000) * 0.6})`; ctx.lineWidth = sz * 0.8; ctx.stroke();
      }
      ctx.strokeStyle = "rgba(0,229,255,0.018)"; ctx.lineWidth = 1;
      const HS = 72;
      for (let row = -1; row < H / (HS * 1.5) + 2; row++)
        for (let col = -1; col < W / (HS * 1.732) + 2; col++)
          drawHex(col * HS * 1.732 + (row % 2 === 0 ? 0 : HS * 0.866) + ox * 0.25, row * HS * 1.5 + oy * 0.25, HS * 0.5);
      ctx.font = `${CH}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = `rgba(0,229,255,${0.03 + Math.random() * 0.05})`;
        ctx.fillText(MAT[Math.floor(Math.random() * MAT.length)], i * CH, drops[i]);
        drops[i] += 0.35;
        if (drops[i] > H && Math.random() > 0.977) drops[i] = 0;
      }
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) { ctx.beginPath(); ctx.moveTo(nodes[i].x + ox, nodes[i].y + oy); ctx.lineTo(nodes[j].x + ox, nodes[j].y + oy); ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 200) * 0.18})`; ctx.lineWidth = 0.7; ctx.stroke(); }
        }
      const orbitCX = W * 0.78, orbitCY = H * 0.38;
      for (const ring of rings) {
        ring.angle += ring.speed;
        const rx = orbitCX + Math.cos(ring.angle) * ring.radius;
        const ry = orbitCY + Math.sin(ring.angle) * ring.radius;
        ctx.beginPath(); ctx.arc(orbitCX, orbitCY, ring.radius, 0, Math.PI * 2); ctx.strokeStyle = ring.color + "12"; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.arc(rx, ry, 5, 0, Math.PI * 2); ctx.fillStyle = ring.color; ctx.shadowBlur = 20; ctx.shadowColor = ring.color; ctx.fill(); ctx.shadowBlur = 0;
        ctx.font = "9px monospace"; ctx.fillStyle = ring.color + "99"; ctx.textAlign = "center"; ctx.fillText(NET_LABELS[ring.nodeIdx], rx, ry + 16); ctx.textAlign = "left";
      }
      if (frame % 28 === 0 && pulses.length < 18) spawnPulse();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const fn = nodes[p.from], tn = nodes[p.to];
        for (let k = 7; k >= 0; k--) {
          const t2 = Math.max(0, p.t - k * 0.009);
          const tx = fn.x + (tn.x - fn.x) * t2 + ox, ty = fn.y + (tn.y - fn.y) * t2 + oy;
          ctx.beginPath(); ctx.arc(tx, ty, k === 0 ? 4.5 : 2.5 - k * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = k === 0 ? p.color : p.color + Math.floor((1 - k / 7) * 95).toString(16).padStart(2, "0");
          if (k === 0) { ctx.shadowBlur = 26; ctx.shadowColor = p.color; }
          ctx.fill(); ctx.shadowBlur = 0;
        }
      }
      for (const nd of nodes) {
        nd.pulse += nd.pulseSpeed;
        const ring2 = Math.sin(nd.pulse) * 6;
        const nx = nd.x + ox, ny = nd.y + oy;
        for (let r = 0; r < 3; r++) { ctx.beginPath(); ctx.arc(nx, ny, nd.radius + ring2 + 6 + r * 6, 0, Math.PI * 2); ctx.strokeStyle = nd.color + ["22", "14", "09"][r]; ctx.lineWidth = 1; ctx.stroke(); }
        ctx.beginPath(); ctx.arc(nx, ny, nd.radius + 3, 0, Math.PI * 2); ctx.fillStyle = nd.color + "30"; ctx.fill();
        ctx.beginPath(); ctx.arc(nx, ny, nd.radius, 0, Math.PI * 2); ctx.fillStyle = nd.color; ctx.shadowBlur = 26; ctx.shadowColor = nd.color; ctx.fill(); ctx.shadowBlur = 0;
        ctx.font = "9.5px monospace"; ctx.fillStyle = "rgba(255,255,255,0.35)"; ctx.textAlign = "center"; ctx.fillText(nd.label, nx, ny + nd.radius + 14); ctx.textAlign = "left";
        nd.x += nd.vx; nd.y += nd.vy;
        if (nd.x < -80) nd.x = W + 80; if (nd.x > W + 80) nd.x = -80;
        if (nd.y < -80) nd.y = H + 80; if (nd.y > H + 80) nd.y = -80;
      }
      const pts = particles.current;
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i]; p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life -= 0.022;
        if (p.life <= 0) { pts.splice(i, 1); continue; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.globalAlpha = p.life; ctx.fillStyle = p.color; ctx.shadowBlur = 14; ctx.shadowColor = p.color; ctx.fill();
        ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      }
      const spot = ctx.createRadialGradient(mx * W, my * H, 0, mx * W, my * H, W * 0.35);
      spot.addColorStop(0, "rgba(0,229,255,0.04)"); spot.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = spot; ctx.fillRect(0, 0, W, H);
      const vig = ctx.createRadialGradient(scx, scy, H * 0.08, scx, scy, H * 1.1);
      vig.addColorStop(0, "rgba(3,5,13,0)"); vig.addColorStop(0.5, "rgba(3,5,13,0.15)"); vig.addColorStop(1, "rgba(3,5,13,0.97)");
      ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); canvas.removeEventListener("click", burst); };
  }, [burst]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full block cursor-crosshair" />;
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({ num, label, color, delay }: { num: string; label: string; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(ref.current, { y: 40, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(2)", delay });
    gsap.to(ref.current, { y: -8, duration: 2 + Math.random(), ease: "sine.inOut", yoyo: true, repeat: -1, delay: Math.random() * 2 });
  }, { scope: ref });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.06, rotateY: 8, rotateX: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex-1 min-w-20 sm:min-w-22 px-3 sm:px-5 py-3 sm:py-4 text-center cursor-default group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-lg border border-white/[0.07] group-hover:border-white/20 transition-colors duration-300"
        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)" }} />
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(ellipse at center, ${color}18 0%, transparent 70%)` }} />
      <div className="relative font-black leading-none"
        style={{ fontSize: "clamp(1.2rem, 4vw, 2.1rem)", color, textShadow: `0 0 28px ${color}` }}>
        {num}
      </div>
      <div className="relative text-[0.58rem] sm:text-[0.62rem] text-white/30 uppercase tracking-[0.08em] sm:tracking-widset mt-1 sm:mt-1.5">{label}</div>
    </motion.div>
  );
}

// ─── LANDING BODY ─────────────────────────────────────────────────────────────
const LandingBody = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }, []);

  return (
    <div
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouse}
    >
      {/* Canvas background */}
      <HeroCanvas mouseX={mouse.x} mouseY={mouse.y} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 py-12 max-w-5xl mx-auto">

        {/* Headline */}
        <h1
          className="text-white font-bold text-center leading-tight"
          style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}
        >
          The Browser is not magic.
          <br />
          <div className="flex items-center justify-center mt-3 flex-wrap gap-2">
            <span className="text-white/80">It's a</span>
            <span style={{ filter: "drop-shadow(0 0 28px currentColor)" }}>
              <ChangingTextEff />
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <h2 className="text-white/60 text-sm sm:text-base md:text-lg mt-4 text-center max-w-md">
          Explore how browsers work under the hood.
        </h2>

        {/* Terminal  */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 w-full">
          <div  className="w-full sm:w-auto max-w-sm sm:max-w-none"
          style={{ boxShadow: "0 0 0 1px rgba(0,229,255,0.2), 0 0 32px rgba(0,229,255,0.12)" }}>
            <Terminal />
          </div>
          <Link to="/home" className="w-full sm:w-auto flex justify-center">
            <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-3 px-8 rounded-lg h-12 transition-all duration-200">
              Start Exploring
            </button>
          </Link>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full mt-8 sm:mt-10"
          style={{ perspective: "800px" }}
        >
          {[
            { num: "5",  label: "Pipeline Stages", color: "#00E5FF", delay: 1.9 },
            { num: "3",  label: "Render Modes",    color: "#8B5CF6", delay: 2.0 },
            { num: "9+", label: "Core Concepts",   color: "#00FFA3", delay: 2.1 },
            { num: "∞",  label: "Things to Learn", color: "#F472B6", delay: 2.2 },
          ].map((s) => <StatCard key={s.label} {...s} />)}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingBody;
