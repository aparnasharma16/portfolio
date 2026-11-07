import type { ReactNode, SVGProps } from 'react';

/**
 * Shared icon set. Add new icons here instead of declaring one-off SVG components
 * inside pages, so every page draws from the same glyphs.
 */

type IconProps = { className?: string };

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.8,
}: IconProps & { children: ReactNode; strokeWidth?: SVGProps<SVGSVGElement>['strokeWidth'] }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function FillIcon({ className, d }: IconProps & { d: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={d} />
    </svg>
  );
}

/* ---------- UI ---------- */

export function MailIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </StrokeIcon>
  );
}

export function FileIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12h6M9 16h6" />
    </StrokeIcon>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="m9 6 6 6-6 6" />
    </StrokeIcon>
  );
}

/* ---------- Brands ---------- */

export function XBrandIcon({ className }: IconProps) {
  return (
    <FillIcon
      className={className}
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <FillIcon
      className={className}
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <FillIcon
      className={className}
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <FillIcon
      className={className}
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  );
}

/* ---------- Stack categories ---------- */

export function MonitorIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </StrokeIcon>
  );
}

export function ServerIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
    </StrokeIcon>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13" />
      <path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </StrokeIcon>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3 6 5v5c0 4.1 2.4 7.8 6 9 3.6-1.2 6-4.9 6-9V5l-6-2Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </StrokeIcon>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
    </StrokeIcon>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M17.5 19H7a5 5 0 1 1 1.1-9.9A6 6 0 0 1 19.5 11a4 4 0 0 1-2 8Z" />
    </StrokeIcon>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a3 3 0 0 1 0 5.74" />
    </StrokeIcon>
  );
}

export function SitemapIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    </StrokeIcon>
  );
}

/* ---------- Navigation ---------- */

export function HomeIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </StrokeIcon>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
    </StrokeIcon>
  );
}

export function TrendingUpIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </StrokeIcon>
  );
}

export function BookOpenIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22Z" />
    </StrokeIcon>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </StrokeIcon>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </StrokeIcon>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </StrokeIcon>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </StrokeIcon>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </StrokeIcon>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2.2}>
      <path d="M20 6 9 17l-5-5" />
    </StrokeIcon>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </StrokeIcon>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className} strokeWidth={2}>
      <path d="M7 17 17 7M8 7h9v9" />
    </StrokeIcon>
  );
}

/* ---------- Hobbies & reading ---------- */

export function PaletteIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.2-.3-.4-.7-.4-1 0-.9.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9-10-9Z" />
    </StrokeIcon>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3.65a1 1 0 0 0-.22-.62l-3.03-3.87A1.01 1.01 0 0 0 17.96 7H6.04a1.01 1.01 0 0 0-.79.39L2.22 11.7a1 1 0 0 0-.22.62V16c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M9 17h6" />
    </StrokeIcon>
  );
}

export function MusicIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </StrokeIcon>
  );
}

export function CoffeeIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v2M10 2v2M14 2v2" />
    </StrokeIcon>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
    </StrokeIcon>
  );
}

export function CookingIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 4v3M8 4v1M16 4v1" />
      <path d="M3 11h18" />
      <path d="M5 11v2a7 7 0 0 0 14 0v-2" />
      <path d="M7 20h10" />
    </StrokeIcon>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
    </StrokeIcon>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" />
    </StrokeIcon>
  );
}
