// Reordering.tsx
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Transition } from "motion/react";
 function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={container}>
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={spring}
          style={{ ...item, backgroundColor }}
        />
      ))}
    </ul>
  );
}

const initialOrder = [
  "#ff0088",
  "#dd00ee",
  "#9911ff",
  "#0d63f8",
];

function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: 10,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: 100,
};

const item: React.CSSProperties = {
  width: 80,
  height: 80,
  borderRadius: "8px",
};



export default Reordering;