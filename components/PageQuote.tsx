type PageQuoteProps = {
  quote: { readonly text: string; readonly attribution: string };
};

/** Small closing line at the end of a page: the quote, then its source. */
export function PageQuote({ quote }: PageQuoteProps) {
  return (
    <figure className="mt-16 max-w-md print:hidden">
      <blockquote className="text-small text-pretty text-[var(--muted-fg)] italic">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption className="mt-1 text-caption text-[var(--muted-fg)]">
        {quote.attribution}
      </figcaption>
    </figure>
  );
}
