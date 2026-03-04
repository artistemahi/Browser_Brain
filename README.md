# 🧠 Browser Rendering Visualizer

An interactive visual tool that explains how browsers convert HTML & CSS into pixels on the screen.

This project simulates the complete rendering pipeline:

HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite

Built to help developers understand how browsers work internally.

---

## 🚀 Features

### 🌳 DOM Visualization
- Converts HTML into a visual DOM tree
- Shows node hierarchy
- Real-time typing simulation
- Undo & re-type animation

### 🎨 CSS & Styling Stage
- Demonstrates how CSS becomes CSSOM
- Shows how DOM + CSSOM create Render Tree

### 📐 Layout (Reflow)
- Explains how browser calculates:
  - Width & Height
  - Position (x, y)
  - Flow (block, flex, grid)
- Demonstrates why layout is expensive
- Shows layout-triggering operations

### 🖌 Paint Stage
- Simulates drawing:
  - Background
  - Borders
  - Text
  - Shadows
- Demonstrates Repaint
- Shows difference between repaint & reflow

### 🚀 Composite Stage (GPU)
- Simulates layer creation
- Shows GPU acceleration
- Demonstrates:
  - Width animation (Layout + Paint + Composite)
  - Transform animation (Composite only)
- Explains why transform & opacity are faster

---

## 🛠 Tech Stack

- React
- TypeScript
- TailwindCSS
- (Optional) GSAP / Framer Motion for animations

---

## 🧠 What This Project Teaches

- How browsers parse HTML
- How CSS is applied
- What the Render Tree is
- What triggers Reflow
- What triggers Repaint
- What GPU Composite means
- Why some animations are expensive
- How to write performance-friendly UI

---

## 🎯 Educational Purpose

This project is designed for:

- Frontend developers
- Students learning browser internals
- Interview preparation
- Understanding performance optimization
- Teaching rendering pipeline visually

---

## 🖥 How It Works

1. HTML is parsed into DOM.
2. CSS is parsed into CSSOM.
3. DOM + CSSOM → Render Tree.
4. Layout calculates geometry.
5. Paint draws pixels.
6. Composite merges layers using GPU.

Each stage is interactive and visual.

---

## 🔥 Future Improvements

- Box Model visualizer
- Specificity visualizer
- Paint flashing simulation
- FPS meter simulation
- Layer inspector mode
- Performance warnings
- Chrome DevTools-style rendering panel

---

## 📦 Installation

```bash
git clone <your-repo-link>
cd browser-rendering-visualizer
npm install
npm run dev
