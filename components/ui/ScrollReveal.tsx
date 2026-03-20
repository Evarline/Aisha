"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Types mapping for different variants
const variantsMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  revealScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: keyof typeof variantsMap;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  className = "",
  delay = 0,
  duration = 0.5,
}: ScrollRevealProps) {
  const selectedVariant = variantsMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.1,
  staggerChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantsMap;
}) {
  const selectedVariant = variantsMap[variant];

  return (
    <motion.div variants={selectedVariant} className={className}>
      {children}
    </motion.div>
  );
}
