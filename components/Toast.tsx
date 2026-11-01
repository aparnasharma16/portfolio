'use client';

import { CheckIcon } from '@/components/icons';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

const subscribe = () => () => {};

/** Show a short confirmation message; it hides itself after `duration` ms. */
export function useToast(duration = 2000) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const show = useCallback(
    (next: string) => {
      window.clearTimeout(timer.current);
      setMessage(next);
      timer.current = window.setTimeout(() => setMessage(null), duration);
    },
    [duration]
  );

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { message, show };
}

/** Bottom-centred confirmation pill. Sits above the mobile dock. */
export function Toast({ message }: { message: string | null }) {
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  if (!mounted) return null;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[70] flex justify-center px-4 sm:bottom-8 print:hidden"
    >
      <AnimatePresence>
        {message ? (
          <motion.div
            key={message}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-[0.82rem] font-medium text-[var(--background)] shadow-lg"
          >
            <CheckIcon className="h-3.5 w-3.5" />
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>,
    document.body
  );
}
