"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {concepts.map(([title, hueA, hueB], i) => (
        <Card i={i} title={title} hueA={hueA} hueB={hueB} key={title} />
      ))}
    </div>
  );
}

interface CardProps {
  title: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ title, i }: CardProps) {
  const background = `linear-gradient(135deg, #0f172a, #1e293b)`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7 }}
    >
      <div style={{ ...splash, background }} />

      <motion.div style={card} variants={cardVariants}>
        <div style={{ textAlign: "center" }}>
          <div style={moduleLabel}>Module</div>
          <div style={titleStyle}>{title}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= Animation Variants ================= */

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 40,
    opacity: 1,
    rotate: -4,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
};

/* ================= Styles ================= */

const container: React.CSSProperties = {
  margin: "120px auto",
  maxWidth: 800,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -100,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  opacity: 0.9,
};

const card: React.CSSProperties = {
  width: 360,
  height: 220,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#0f172a",
  color: "white",
  letterSpacing: "2px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  transformOrigin: "10% 60%",
  border: "1px solid rgba(255,255,255,0.1)",
};

const moduleLabel: React.CSSProperties = {
  fontSize: 14,
  opacity: 0.5,
  marginBottom: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
};

const titleStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
};

/* ================= Data ================= */

const concepts: [string, number, number][] = [
  ["DOM", 200, 230],
  ["CSSOM", 240, 270],
  ["RENDER TREE", 260, 290],
  ["LAYOUT", 40, 60],
  ["PAINT", 340, 360],
  ["COMPOSITE", 300, 330],
  ["EVENT LOOP", 180, 210],
  ["MICROTASKS", 160, 190],
  ["PERFORMANCE", 20, 40],
];