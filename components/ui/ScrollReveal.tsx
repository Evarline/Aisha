"use client";

import { motion, useReducedMotion, type Variant } from "framer-motion";
import React from "react";

/* ──────────────────────────────────────────────
   Apple-style scroll-triggered reveal animations
   ────────────────────────────────────────────── */

type AnimationVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "zoomOut"
  | "popUp"
  | "slideUp"
  | "blur"
  | "revealScale";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  /** How much of the element must be visible before triggering (0-1) */
  threshold?: number;
  /** Once triggered, never reset */
  once?: boolean;
  className?: string;
  staggerChildren?: number;
}

const hidden: Record<AnimationVariant, Variant> = {
  fadeUp:      { opacity: 0, y: 60 },
  fadeDown:    { opacity: 0, y: -60 },
  fadeLeft:    { opacity: 0, x: -80 },
  fadeRight:   { opacity: 0, x: 80 },
  zoomIn:      { opacity: 0, scale: 0.85 },
  zoomOut:     { opacity: 0, scale: 1.15 },
  popUp:       { opacity: 0, scale: 0.6, y: 40 },
  slideUp:     { opacity: 0, y: 100 },
  blur:        { opacity: 0, filter: "blur(12px)" },
  revealScale: { opacity: 0, scale: 0.92, y: 30 },
};

const visible: Record<AnimationVariant, Variant> = {
  fadeUp:      { opacity: 1, y: 0 },
  fadeDown:    { opacity: 1, y: 0 },
  fadeLeft:    { opacity: 1, x: 0 },
  fadeRight:   { opacity: 1, x: 0 },
  zoomIn:      { opacity: 1, scale: 1 },
  zoomOut:     { opacity: 1, scale: 1 },
  popUp:       { opacity: 1, scale: 1, y: 0 },
  slideUp:     { opacity: 1, y: 0 },
  blur:        { opacity: 1, filter: "blur(0px)" },
  revealScale: { opacity: 1, scale: 1, y: 0 },
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  className = "",
  staggerChildren,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: hidden[variant],
        visible: {
          ...visible[variant],
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94], // Apple-like ease out
            ...(staggerChildren ? { staggerChildren } : {}),
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Stagger container + child for grid/list reveals
   ────────────────────────────────────────────── */

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayStart?: number;
  once?: boolean;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
  delayStart = 0,
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delayStart,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: hidden[variant],
        visible: {
          ...visible[variant],
          transition: {
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Parallax wrapper for depth effect
   ────────────────────────────────────────────── */

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // negative = slower, positive = faster
}

export function Parallax({ children, className = "", speed = -0.2 }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: speed * 100 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
