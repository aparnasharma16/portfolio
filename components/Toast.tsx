'use client';

import { CheckIcon } from '@/components/icons';
import { useEffect, useRef, useSyncExternalStore } from 'react';

/**
 * One toast for the whole site, rendered once by `SiteShell` (`ToastRegion`), so every
 * confirmation shows and is announced from the same place. Call `showToast` from anywhere.
 */
type ToastState = { message: string; visible: boolean };

const DURATION = 2000;
let state: ToastState = { message: '', visible: false };
let timer: number | undefined;
const listeners = new Set<() => void>();

function setState(next: ToastState) {
  state = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const serverState: ToastState = { message: '', visible: false };

type AriaNotifyDocument = Document & { ariaNotify?: (message: string) => void };

/** Show a short confirmation; it hides itself after two seconds. */
export function showToast(message: string) {
  window.clearTimeout(timer);
  setState({ message, visible: true });
  // Screen readers: ariaNotify where supported; otherwise the region's live text announces it.
  (document as AriaNotifyDocument).ariaNotify?.(message);
  timer = window.setTimeout(() => setState({ ...state, visible: false }), DURATION);
}

const supportsPopover = () => Object.hasOwn(HTMLElement.prototype, 'popover');
const supportsAriaNotify = () => 'ariaNotify' in document;
const subscribeNever = () => () => {};

/** Bottom-centred confirmation pill, above the mobile dock. A manual popover (top layer). */
export function ToastRegion() {
  const { message, visible } = useSyncExternalStore(
    subscribe,
    () => state,
    () => serverState
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAriaNotify = useSyncExternalStore(subscribeNever, supportsAriaNotify, () => false);
  const liveText = visible && !hasAriaNotify ? message : '';

  // Starts `hidden` so browsers without popover support don't show it; where popover is
  // supported, the popover itself keeps it hidden until shown.
  useEffect(() => {
    if (ref.current && supportsPopover()) ref.current.hidden = false;
  }, []);

  useEffect(() => {
    const toast = ref.current;
    if (!toast) return;
    if (!supportsPopover()) {
      toast.hidden = !visible;
      return;
    }
    const open = toast.matches(':popover-open');
    if (visible && !open) toast.showPopover();
    else if (!visible && open) toast.hidePopover();
  }, [visible, message]);

  return (
    <div role="region" aria-label="Notifications" className="print:hidden">
      <p className="sr-only" role="status" aria-live="polite">
        {liveText}
      </p>
      <div
        ref={ref}
        popover="manual"
        hidden
        className="toast-popover pointer-events-none fixed inset-x-0 top-auto bottom-[calc(5.5rem+env(safe-area-inset-bottom))] m-0 h-auto w-auto max-w-none overflow-visible border-0 bg-transparent px-4 py-0 text-center sm:bottom-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-small font-medium text-[var(--background)] shadow-lg">
          <CheckIcon className="h-3.5 w-3.5" />
          {message}
        </span>
      </div>
    </div>
  );
}
