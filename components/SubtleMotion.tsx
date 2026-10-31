'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function MotionReveal({ children, className, delay = 0, y = 16 }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function getExpandTransition(reduceMotion: boolean) {
  return reduceMotion ? { duration: 0 } : { duration: 0.28, ease };
}
