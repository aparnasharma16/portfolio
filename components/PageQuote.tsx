type PageQuoteProps = {
  quote: { readonly text: string; readonly attribution: string };
  className?: string;
};

export function PageQuote({ quote, className = 'mt-20' }: PageQuoteProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-8 py-12 text-center md:px-12 ${className}`}
    >
      <span
        className="pointer-events-none absolute left-4 top-2 font-serif text-7xl leading-none text-[var(--foreground)]/[0.06] dark:text-[var(--foreground)]/[0.08] md:left-8 md:text-8xl"
        aria-hidden
      >
        “
      </span>
      <span
        className="pointer-events-none absolute bottom-0 right-4 font-serif text-7xl leading-none text-[var(--foreground)]/[0.06] dark:text-[var(--foreground)]/[0.08] md:right-8 md:text-8xl"
        aria-hidden
      >
        ”
      </span>
      <blockquote className="relative z-[1] mx-auto max-w-lg">
        <p className="text-base font-medium leading-relaxed text-[var(--foreground)] md:text-lg">
          {quote.text}
        </p>
        <figcaption className="mt-4 text-sm text-[var(--muted-fg)]">
          — {quote.attribution}
        </figcaption>
      </blockquote>
    </figure>
  );
}
