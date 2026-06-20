"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { gentleTransition } from "@/lib/motion";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduceMotion ? { duration: 0.3 } : { ...gentleTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
