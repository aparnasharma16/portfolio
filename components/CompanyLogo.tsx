import Image from 'next/image';

type CompanyLogoProps = {
  src: string;
  alt: string;
  size?: 'sm' | 'md';
};

const styles = {
  sm: {
    frame: 'h-8 w-8 rounded-lg',
    image: 'p-1',
    sizes: '32px',
  },
  md: {
    frame: 'h-11 w-11 rounded-xl',
    image: 'p-1.5',
    sizes: '44px',
  },
} as const;

export function CompanyLogo({ src, alt, size = 'md' }: CompanyLogoProps) {
  const variant = styles[size];

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--card)] ${variant.frame}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={variant.sizes}
        className={`object-contain ${variant.image}`}
      />
    </div>
  );
}
