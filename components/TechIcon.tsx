import type { ReactNode } from 'react';

type IconDef = {
  label: string;
  glyph: ReactNode;
};

const chipClassName =
  'group inline-flex h-11 items-center overflow-hidden rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--chip-bg)] px-3 text-[var(--foreground)] shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-[var(--border)] hover:bg-[var(--background)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]';

const labelClassName =
  'max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-24 group-focus-visible:opacity-100';

const iconWrapClassName = 'flex h-5 w-5 shrink-0 items-center justify-center';

function Svg({ children, viewBox = '0 0 24 24' }: { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={viewBox}
      className="h-5 w-5 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function LetterBadge({ text, bg, fg = '#ffffff' }: { text: string; bg: string; fg?: string }) {
  return (
    <Svg>
      <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill={bg} />
      <text
        x="12"
        y="15.1"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill={fg}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {text}
      </text>
    </Svg>
  );
}

const icons: Record<string, IconDef> = {
  TypeScript: {
    label: 'TypeScript',
    glyph: <LetterBadge text="TS" bg="#3178C6" />,
  },
  JavaScript: {
    label: 'JavaScript',
    glyph: <LetterBadge text="JS" bg="#F7DF1E" fg="#111827" />,
  },
  React: {
    label: 'React',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.6"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.6"
        />
      </Svg>
    ),
  },
  'React Native': {
    label: 'React Native',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.6"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.6"
        />
      </Svg>
    ),
  },
  Node: {
    label: 'Node.js',
    glyph: (
      <Svg>
        <path d="M12 1.8 20.4 6.7v10.6L12 22.2 3.6 17.3V6.7L12 1.8Z" fill="#539E43" />
        <path d="M9.1 15.9V8.1h1.7l3.3 4.2V8.1h1.8v7.8h-1.6L10.9 11v4.9H9.1Z" fill="#ffffff" />
      </Svg>
    ),
  },
  'Node.js': {
    label: 'Node.js',
    glyph: (
      <Svg>
        <path d="M12 1.8 20.4 6.7v10.6L12 22.2 3.6 17.3V6.7L12 1.8Z" fill="#539E43" />
        <path d="M9.1 15.9V8.1h1.7l3.3 4.2V8.1h1.8v7.8h-1.6L10.9 11v4.9H9.1Z" fill="#ffffff" />
      </Svg>
    ),
  },
  REST: {
    label: 'REST APIs',
    glyph: (
      <Svg>
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#F97316" />
        <path
          d="M7 14.5c2.5-5 5.5 0 8-5"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="m13.4 7.8 1.7 1.7-1.7 1.7"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  'REST APIs': {
    label: 'REST APIs',
    glyph: (
      <Svg>
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#F97316" />
        <path
          d="M7 14.5c2.5-5 5.5 0 8-5"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="m13.4 7.8 1.7 1.7-1.7 1.7"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  Jest: {
    label: 'Jest',
    glyph: (
      <Svg>
        <path d="M12 2.5 8.4 4.1v5.2L12 11l3.6-1.7V4.1L12 2.5Z" fill="#99425B" />
        <path d="M8.4 11.4 5.4 13v4.1l3 1.5 3-1.5V13l-3-1.6Z" fill="#C16A7B" />
        <path d="M15.6 11.4 12.6 13v4.1l3 1.5 3-1.5V13l-3-1.6Z" fill="#C16A7B" />
      </Svg>
    ),
  },
  GraphQL: {
    label: 'GraphQL',
    glyph: (
      <Svg>
        <path
          d="M12 3 18.5 6.8v10.4L12 21 5.5 17.2V6.8 12"
          stroke="#E535AB"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 6.8 18.5 17.2M18.5 6.8 5.5 17.2M12 3v18"
          stroke="#E535AB"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="12" cy="3" r="1.8" fill="#E535AB" />
        <circle cx="18.5" cy="6.8" r="1.8" fill="#E535AB" />
        <circle cx="18.5" cy="17.2" r="1.8" fill="#E535AB" />
        <circle cx="12" cy="21" r="1.8" fill="#E535AB" />
        <circle cx="5.5" cy="17.2" r="1.8" fill="#E535AB" />
        <circle cx="5.5" cy="6.8" r="1.8" fill="#E535AB" />
      </Svg>
    ),
  },
  AWS: {
    label: 'AWS',
    glyph: (
      <Svg viewBox="0 0 32 24">
        <text
          x="8"
          y="11"
          fontSize="7.5"
          fontWeight="700"
          fill="currentColor"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          aws
        </text>
        <path
          d="M7 16.5c5.8 3.7 12 3.8 18.3.5"
          stroke="#FF9900"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m22.4 14.6 3.6.4-1.7 3.1"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  MongoDB: {
    label: 'MongoDB',
    glyph: (
      <Svg>
        <path
          d="M12 2.5c2.7 3.1 4.2 6.2 4.2 9.1 0 4.1-2.5 7.5-4.2 9.9-1.8-2.3-4.2-5.8-4.2-9.9 0-3 1.5-6 4.2-9.1Z"
          fill="#13AA52"
        />
        <path d="M12 4.5v13.7" stroke="#B8E6C6" strokeWidth="1.2" strokeLinecap="round" />
      </Svg>
    ),
  },
  Express: {
    label: 'Express',
    glyph: (
      <Svg viewBox="0 0 30 24">
        <text
          x="3"
          y="15"
          fontSize="10"
          fontWeight="600"
          fill="currentColor"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          ex
        </text>
      </Svg>
    ),
  },
  Swagger: {
    label: 'Swagger',
    glyph: (
      <Svg>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="#85EA2D" />
        <path d="M7 12h10M12 7v10" stroke="#173200" strokeWidth="1.8" strokeLinecap="round" />
      </Svg>
    ),
  },
  Kafka: {
    label: 'Kafka',
    glyph: (
      <Svg>
        <circle cx="7" cy="12" r="2" fill="currentColor" />
        <circle cx="17" cy="6" r="2" fill="currentColor" />
        <circle cx="17" cy="18" r="2" fill="currentColor" />
        <path
          d="M9 12h6m0 0V8m0 4v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Redux: {
    label: 'Redux',
    glyph: (
      <Svg>
        <circle cx="7.2" cy="15.8" r="1.7" fill="#764ABC" />
        <circle cx="12.2" cy="8.8" r="1.7" fill="#764ABC" />
        <circle cx="17.5" cy="15.2" r="1.7" fill="#764ABC" />
        <path
          d="M8.8 14.8c.9-3.3 2.1-4.8 4.3-5.5m.8 1.3c1.6.4 2.7 1.3 3.5 3.1m-8.5 2c2.2 1.3 4.8 1.7 7.5.8"
          stroke="#764ABC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Shopify: {
    label: 'Shopify',
    glyph: (
      <Svg>
        <path
          d="M8 6.2c.4-2.3 1.8-3.7 3.8-3.7 1.5 0 2.6.8 3.1 2.2"
          stroke="#6AB04A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M6.5 6.3h11l-1.2 11.2H7.7L6.5 6.3Z" fill="#95BF47" />
        <path
          d="M10 11.2c.4-1 1.3-1.5 2.2-1.5 1.1 0 1.9.4 2.7 1"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9.4 14.3c.8.7 1.7 1 2.8 1 1 0 1.9-.3 2.6-.9"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Tailwind: {
    label: 'Tailwind CSS',
    glyph: (
      <Svg>
        <path
          d="M7 9.4c1.1-1.4 2.3-2.1 3.8-2.1 2.2 0 3.6 1.2 4.2 3.5.4 1.5 1 2.1 1.9 2.1.7 0 1.4-.4 2.1-1.3"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 14.6c1.1-1.4 2.3-2.1 3.8-2.1 2.2 0 3.6 1.2 4.2 3.5.4 1.5 1 2.1 1.9 2.1.7 0 1.4-.4 2.1-1.3"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  'Tailwind CSS': {
    label: 'Tailwind CSS',
    glyph: (
      <Svg>
        <path
          d="M7 9.4c1.1-1.4 2.3-2.1 3.8-2.1 2.2 0 3.6 1.2 4.2 3.5.4 1.5 1 2.1 1.9 2.1.7 0 1.4-.4 2.1-1.3"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 14.6c1.1-1.4 2.3-2.1 3.8-2.1 2.2 0 3.6 1.2 4.2 3.5.4 1.5 1 2.1 1.9 2.1.7 0 1.4-.4 2.1-1.3"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Figma: {
    label: 'Figma',
    glyph: (
      <Svg>
        <circle cx="9" cy="6.5" r="3.2" fill="#F24E1E" />
        <circle cx="15" cy="6.5" r="3.2" fill="#FF7262" />
        <circle cx="9" cy="12" r="3.2" fill="#A259FF" />
        <circle cx="15" cy="12" r="3.2" fill="#1ABCFE" />
        <circle cx="9" cy="17.5" r="3.2" fill="#0ACF83" />
      </Svg>
    ),
  },
  WordPress: {
    label: 'WordPress',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="9" fill="#21759B" />
        <text
          x="12"
          y="15.2"
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="700"
          fill="#ffffff"
          fontFamily="Georgia, serif"
        >
          W
        </text>
      </Svg>
    ),
  },
  PHP: {
    label: 'PHP',
    glyph: (
      <Svg viewBox="0 0 32 24">
        <ellipse cx="16" cy="12" rx="12" ry="7" fill="#777BB4" />
        <text
          x="16"
          y="15"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#ffffff"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          php
        </text>
      </Svg>
    ),
  },
  Algolia: {
    label: 'Algolia',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="8.5" fill="#003DFF" />
        <circle cx="12" cy="12" r="4.2" fill="#ffffff" />
        <circle cx="12" cy="12" r="2.3" fill="#003DFF" />
      </Svg>
    ),
  },
  HTML: {
    label: 'HTML5',
    glyph: (
      <Svg>
        <path d="M5 3h14l-1.2 14.5L12 20l-5.8-2.5L5 3Z" fill="#E34F26" />
        <path d="M12 4.2h5.7l-1 12L12 18.3V4.2Z" fill="#EF652A" />
        <path
          d="m8 8.1.2 2.2H12V8.1H8Zm.4 3.3.3 3 3.3 1.1v-2.2l-1.3-.4-.1-1.5H8.4Zm7.2-3.3H12v2.2h3.4l-.3 3-3.1 1v2.3l3.2-1.1.8-7.4Z"
          fill="#ffffff"
        />
      </Svg>
    ),
  },
  CSS: {
    label: 'CSS3',
    glyph: (
      <Svg>
        <path d="M5 3h14l-1.2 14.5L12 20l-5.8-2.5L5 3Z" fill="#1572B6" />
        <path d="M12 4.2h5.7l-1 12L12 18.3V4.2Z" fill="#33A9DC" />
        <path
          d="m8.3 8.1.2 2.2H12V8.1H8.3Zm.3 3.3.3 3 3.1 1.1v-2.3l-1.3-.4-.1-1.4H8.6Zm3.4-3.3v2.2h3.2l-.3 3-2.9 1v2.3l3-1.1.8-7.4H12Z"
          fill="#ffffff"
        />
      </Svg>
    ),
  },
  MySQL: {
    label: 'MySQL',
    glyph: (
      <Svg>
        <path
          d="M7 15.8c2.5-5.5 6.7-6.8 10-4.8-1.8.2-2.8 1-3.5 2.4 2 .1 3.4 1 4.5 2.6-3.7-.8-7.7-.9-11 .2Z"
          fill="#00758F"
        />
        <path
          d="M15.3 7.7c1.8-.2 2.8.6 3.2 2.1"
          stroke="#F29111"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Playwright: {
    label: 'Playwright',
    glyph: (
      <Svg>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#2EAD33" />
        <path
          d="M8 8.5c0 2.5 1 4 3 5M16 8.5c0 2.5-1 4-3 5M9.5 16.5l2.5-3 2.5 3"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  Cypress: {
    label: 'Cypress',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="9.5" fill="#1B1E2E" />
        <path
          d="M15.5 9.5c-1-.8-2.2-1-3.5-.6-1.3.4-2 1.5-2 3.1s.7 2.7 2 3.1c1.3.4 2.5.2 3.5-.6"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Storybook: {
    label: 'Storybook',
    glyph: (
      <Svg>
        <rect x="4" y="2" width="16" height="20" rx="3" fill="#FF4785" />
        <path
          d="M14.5 5.5 15 3l.5 2.5M10 8.5c2.5-1 5-.5 5 1.5s-2.5 2.5-5 1.5M10 14c2.5-1 5-.5 5 1.5s-2.5 2.5-5 1.5"
          stroke="#ffffff"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </Svg>
    ),
  },
  Claude: {
    label: 'Claude',
    glyph: (
      <Svg>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#D4A27F" />
        <path
          d="M8.5 14.5c1-2.5 2.5-4 3.5-4s2.5 1.5 3.5 4"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="10" cy="9" r="1" fill="#ffffff" />
        <circle cx="14" cy="9" r="1" fill="#ffffff" />
      </Svg>
    ),
  },
  'Next.js': {
    label: 'Next.js',
    glyph: (
      <Svg>
        <circle cx="12" cy="12" r="9.5" fill="currentColor" />
        <path
          d="M10 8v8M10 8l6.5 8M16 8v5"
          stroke="var(--background, #ffffff)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  CodeIgniter: {
    label: 'CodeIgniter',
    glyph: (
      <Svg>
        <path
          d="M14.2 3.5c-.8 2.8.2 4.4 2.7 5-2.7.3-4.2 1.7-4.2 4.1 0 2 1.1 3.6 3.3 4.8-4-.2-6.7-2.6-6.7-6.2 0-3.3 2-6.1 4.9-7.7Z"
          fill="#EE4623"
        />
      </Svg>
    ),
  },
};

function fallbackLabel(name: string) {
  return name
    .split(/[\s.-]+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TechIcon({ name }: { name: string }) {
  const icon = icons[name];
  const label = icon?.label ?? name;

  return (
    <span className={chipClassName} title={label}>
      <span className={iconWrapClassName}>
        {icon?.glyph ?? (
          <span className="text-[10px] font-semibold tracking-tight">{fallbackLabel(name)}</span>
        )}
      </span>
      <span className={labelClassName}>{label}</span>
    </span>
  );
}
