"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
interface RevealProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
}
const Reveal = ({ children, direction = "right", duration = 0.8 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: direction === "right" ? 50 : -50 },
        visible: { opacity: 1, x: 0 },
      }}
      initial={"hidden"}
      animate={isInView ? "visible" : {}}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
