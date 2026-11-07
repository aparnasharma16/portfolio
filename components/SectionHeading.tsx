import { type ViewAllAction, ViewAllLink } from '@/components/ViewAllLink';

type SectionHeadingProps = {
  title: string;
  id?: string;
  action?: ViewAllAction;
};

/** Lightweight section title with an optional "View all" link aligned to the right. */
export function SectionHeading({ title, id, action }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 id={id} className="text-heading text-[var(--foreground)]">
        {title}
      </h2>
      {action ? <ViewAllLink {...action} /> : null}
    </div>
  );
}
