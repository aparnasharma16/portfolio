'use client';

import { profile } from '@/lib/portfolio-data';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SPLASH_MS = 800;

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const pct = Math.min(Math.round(((now - start) / SPLASH_MS) * 100), 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setShow(false), 500);
    }, SPLASH_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]"
        >
          <div className="flex flex-col items-center gap-5 px-6 text-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[var(--border)] shadow-lg"
            >
              <Image
                src="/new_image.jpeg"
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease }}
              className="text-[1.5rem] font-bold tracking-[-0.03em] text-[var(--foreground)]"
            >
              {profile.name}
            </motion.h1>

            {/* Role + Company */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease }}
              className="text-[0.9rem] text-[var(--muted-fg)]"
            >
              {profile.title} at PayPal
            </motion.p>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3.5 py-1.5 text-[0.8rem] text-[var(--muted-fg)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
              </span>
              Currently working
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3, ease }}
              className="mt-1 flex w-40 flex-col items-center gap-2"
            >
              <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--border)]">
                <div
                  className="h-full rounded-full bg-[var(--foreground)] transition-[width] duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[0.7rem] tabular-nums text-[var(--subtle)]">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
