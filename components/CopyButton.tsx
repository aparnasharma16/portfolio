'use client';

import { showToast } from '@/components/Toast';
import type { ComponentProps } from 'react';

type CopyButtonProps = Omit<ComponentProps<'button'>, 'onClick' | 'type'> & {
  /** The text that goes on the clipboard. */
  text: string;
  /** Toast shown after copying. */
  copiedMessage: string;
  /** Toast shown when the clipboard is unavailable. */
  failedMessage: string;
};

/** A button that copies `text` and confirms with the site toast. Content comes from the caller. */
export function CopyButton({ text, copiedMessage, failedMessage, ...props }: CopyButtonProps) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      showToast(copiedMessage);
    } catch {
      showToast(failedMessage);
    }
  }

  return <button type="button" onClick={copy} {...props} />;
}
