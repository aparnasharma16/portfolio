"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  type HTMLMotionProps,
} from "motion/react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 16,
}: MotionRevealProps) {
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

type MotionStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionStagger({
  children,
  className,
  delay = 0,
}: MotionStaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={
        reduceMotion
          ? {
              hidden: {},
              show: {},
            }
          : {
              hidden: {},
              show: {
                transition: {
                  delayChildren: delay,
                  staggerChildren: 0.08,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

type MotionItemProps = {
  children: ReactNode;
  className?: string;
};

export function MotionItem({ children, className }: MotionItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? {
              hidden: { opacity: 1 },
              show: { opacity: 1 },
            }
          : {
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.38, ease },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

type MotionPressProps = {
  children: ReactNode;
  className?: string;
};

export function MotionPress({ children, className }: MotionPressProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.18, ease }}
    >
      {children}
    </motion.span>
  );
}

export function getExpandTransition(reduceMotion: boolean) {
  return reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease };
}

export type MotionDivProps = HTMLMotionProps<"div">;

type MotionCounterProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function MotionCounter({
  value,
  className,
  duration = 1.6,
}: MotionCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : "");

  useEffect(() => {
    if (!inView || reduceMotion) {
      setDisplay(value);
      return;
    }

    const numericMatch = value.match(/^([\d.]+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numericMatch[1]);
    const suffix = value.slice(numericMatch[1].length);
    const isDecimal = numericMatch[1].includes(".");
    const startTime = performance.now();

    let raf: number;
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplay(
        `${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
      );

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
