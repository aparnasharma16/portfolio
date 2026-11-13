const experienceYears = '8+';
const headline = 'I build web products that feel fast and don’t break.';
const subhead = `From storefronts and checkout to payment platforms and the internal tools teams run on. ${experienceYears} years in, still sweating the details.`;

export const profile = {
  name: 'Aparna Sharma',
  title: 'Senior Software Engineer',
  location: 'Bengaluru, India',
  /** Hero headline: the one bold line on the site. */
  headline,
  /** Supporting line under the headline. */
  subhead,
  /** Headline + subhead, for meta descriptions and link previews. */
  valueProposition: `${headline} ${subhead}`,
  metaDescription: `Senior Software Engineer at PayPal with ${experienceYears} years of leading web architecture, full-stack delivery, and engineering teams. Bengaluru.`,
  experienceYears,
  yearsExperience: `${experienceYears} years`,
  /** Title of the home page hiring box. */
  hireHeadline: 'Hiring a senior or lead engineer?',
  availabilityNote:
    'Open to senior and lead full-stack roles where I own the architecture, set the quality bar, and grow the engineers around me.',
  resumeLastUpdated: 'May 2026',
  links: {
    email: 'mailto:aparnasharma157@gmail.com',
    emailDisplay: 'aparnasharma157@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aparna-sharma-97006b141/',
    github: 'https://github.com/aparnasharma16',
    twitter: 'https://x.com/aparna1697',
    instagram: 'https://www.instagram.com/aparnasharma1601',
  },
  resumePdfPath: '/Aparna_Sharma_FullStack_Developer.pdf',
  avatarPath: '/aparna-sharma.jpeg',
  siteUrl: 'https://aparnasharma.dev',
};

export type SitePageQuoteKey = 'home' | 'work' | 'impact' | 'blog' | 'resume' | 'hobbies';

export const sitePageQuotes: Record<SitePageQuoteKey, { text: string; attribution: string }> = {
  home: {
    text: 'Be steadfast in yoga. Perform your duties without attachment to success or failure. Such equanimity is called yoga.',
    attribution: 'Bhagavad Gita, 2.48',
  },
  work: {
    text: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of your actions.',
    attribution: 'Bhagavad Gita, 2.47',
  },
  impact: {
    text: 'By devotion to one’s own natural duty, a person attains perfection.',
    attribution: 'Bhagavad Gita, 18.45',
  },
  blog: {
    text: 'In this world, there is nothing so purifying as true knowledge.',
    attribution: 'Bhagavad Gita, 4.38',
  },
  hobbies: {
    text: 'Yoga ends sorrow for one who is moderate in eating and recreation, balanced in work, and regulated in sleep and waking.',
    attribution: 'Bhagavad Gita, 6.17',
  },
  resume: {
    text: 'A person must elevate themselves by their own mind, and not degrade themselves. The mind is the friend of the conditioned soul, and their enemy as well.',
    attribution: 'Bhagavad Gita, 6.5',
  },
} as const;

export type ExpertiseArea = {
  label: string;
  description: string;
  /** Optional supporting points shown under the description. */
  details?: readonly string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    label: 'Frontend architecture',
    description:
      'Set the frontend direction for large React and TypeScript apps: component systems, state architecture, performance, and accessibility standards the whole team builds on.',
  },
  {
    label: 'Backend and APIs',
    description:
      'Design Node.js services and APIs that hold up under load, with clear contracts, Redis caching, Kafka messaging, and a deliberate path from monolith to microservices.',
  },
  {
    label: 'Delivery and quality',
    description:
      'Drive work from design doc to production: break it down, sequence the releases, and put testing and CI/CD in place so what ships stays reliable.',
  },
  {
    label: 'Payments and commerce',
    description:
      'Lead the flows where trust and money meet, from storefronts and checkout to payment platforms and the internal tools behind them.',
  },
  {
    label: 'Technical leadership',
    description:
      'Lead teams of up to 8 engineers: set technical direction, raise the bar through reviews and standards, and grow people into owners.',
    details: [
      'Set architecture and delivery plans for the team, and owned release readiness.',
      'Mentored engineers on React, testing, and maintainable patterns, helping juniors grow into confident feature owners.',
      'Introduced review standards, documentation habits, and release processes the team kept using.',
      'Stayed hands-on in the code while setting direction, so technical decisions stayed grounded.',
    ],
  },
];

export type FeaturedWin = {
  metric: string;
  title: string;
  summary: string;
};

export const featuredWins: FeaturedWin[] = [
  {
    metric: '45%',
    title: 'Fewer production bugs',
    summary:
      'Brought in stronger testing standards and review habits while leading a team through a large platform migration.',
  },
  {
    metric: '30%',
    title: 'Less downtime',
    summary:
      'Led the move from a monolith to microservices with Kafka, so a failure in one part no longer took down the rest.',
  },
  {
    metric: '40%',
    title: 'Faster delivery',
    summary:
      'Built reusable component patterns for e-commerce teams, so new features took less time to ship.',
  },
  {
    metric: '95%',
    title: 'Regression coverage',
    summary:
      'Added Cypress tests across the critical shopping journeys, so regressions were caught before release.',
  },
];

export type StackGroupId =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'testing'
  | 'commerce'
  | 'delivery'
  | 'architecture'
  | 'practice';

export type StackGroup = {
  id: StackGroupId;
  title: string;
  /** One-line answer to "what do you use this for?" */
  summary: string;
  /** `capability`: how I work (design, leadership), shown as plain text rather than tool chips. */
  kind?: 'capability';
  items: string[];
};

/**
 * Single source for every stack listing (home preview, impact breakdown). Ordered the way
 * a lead is read: how systems are designed and teams are led first, then the tools.
 * Within a group, the most senior items come first, since previews show only the first few.
 */
export const stack: StackGroup[] = [
  {
    id: 'architecture',
    title: 'Architecture & design',
    summary: 'Thinking a system through, and writing it down, before it is built.',
    kind: 'capability',
    items: [
      'System design',
      'Micro-frontends',
      'API contract design',
      'Technical design docs',
      'High-level design (HLD)',
      'Low-level design (LLD)',
      'Microservices',
      'Event-driven architecture',
    ],
  },
  {
    id: 'practice',
    title: 'Leadership & practice',
    summary: 'How I lead a team, not just a codebase.',
    kind: 'capability',
    items: [
      'Technical direction',
      'Design reviews',
      'Code review standards',
      'Mentoring',
      'Release planning',
      'Accessibility',
      'Core Web Vitals',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Interfaces that stay fast as data and teams grow.',
    items: [
      'React',
      'TypeScript',
      'Design systems',
      'Next.js',
      'Redux',
      'RTK Query',
      'Formik',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'The APIs and services behind the screens.',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'Kafka', 'Express', 'Swagger', 'PHP'],
  },
  {
    id: 'testing',
    title: 'Quality & testing',
    summary: 'A test strategy and release gates, from unit tests to full user journeys.',
    items: ['Testing strategy', 'CI quality gates', 'Jest', 'Cypress', 'Playwright', 'Storybook'],
  },
  {
    id: 'data',
    title: 'Data & caching',
    summary: 'Storage and caching for high-traffic workflows.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    id: 'commerce',
    title: 'Commerce & payments',
    summary: 'Checkout, storefront and search platforms.',
    items: ['PayPal', 'Shopify', 'SFCC', 'WooCommerce', 'Algolia'],
  },
  {
    id: 'delivery',
    title: 'Cloud & delivery',
    summary: 'Getting changes to production safely.',
    items: ['CI/CD', 'AWS', 'Git'],
  },
];

export type CaseStudy = {
  title: string;
  company: string;
  logo?: string;
  period: string;
  context: string;
  problem: string;
  ownership: string;
  outcome: string;
  tech: string[];
  artifacts?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'Designing an embeddable bank payment journey',
    company: 'PayPal',
    logo: '/logos/paypal.jpg',
    period: '2025 – Present',
    context:
      'A new way for customers to pay straight from their bank account, built once and embedded in more than one app.',
    problem:
      'Bank payments leave the app, wait on the bank, and can fail in many ways. The journey had to stay clear for customers and be easy for other teams to embed.',
    ownership:
      'Owned the web architecture and wrote the design: sequence and state diagrams, API contracts, and the failure and security cases. Set the micro-frontend boundary, made the frame-or-redirect call, and led the build from consent to confirmation while closing contract gaps with partner teams.',
    outcome:
      'Host apps embed the journey through a typed contract without owning its logic. Every success and error state runs locally against a mock bank, and slow or failed steps end in a clear outcome instead of a dead end.',
    tech: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Jest'],
  },
  {
    title: 'Rebuilding an internal admin platform',
    company: 'PayPal',
    logo: '/logos/paypal.jpg',
    period: '2025 – Present',
    context:
      'Teams use an internal admin platform to configure and approve their work. Its UI was being rebuilt, with the old and new versions running side by side.',
    problem:
      'The new version had to move from mock data to live services, support bulk import and export, and apply the right access rules for internal and external users, without slowing down as records grew.',
    ownership:
      'Wrote the high- and low-level designs, led import and export from design to release, and designed the approvals workflow and the REST APIs behind it. Set the frontend test strategy and made code quality a release gate.',
    outcome:
      'Approvals stay fast as volume grows, bad data is caught before it is saved, access rules are enforced on the server, and the codebase passes the CI quality gate.',
    tech: ['React', 'TypeScript', 'Node.js', 'REST', 'Jest', 'Cypress'],
  },
  {
    title: 'Monolith to microservices migration leadership',
    company: 'Dentsu',
    logo: '/logos/dentsu.jpg',
    period: '2024 – 2025',
    context:
      'Led a team delivering MERN applications while the platform evolved toward more scalable and resilient architecture.',
    problem:
      'The existing system was slowing delivery and increasing operational risk, with testing and deployment quality needing improvement as the system grew.',
    ownership:
      'Led a team of 8 engineers, guided migration decisions, introduced better testing standards, and helped shape documentation and release practices.',
    outcome:
      'Reduced downtime by 30%, lowered production bugs by 45%, and strengthened engineering consistency through reviews, API standards, and CI/CD practices.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Kafka', 'Jest', 'Cypress', 'MySQL'],
  },
  {
    title: 'Reusable commerce frontend systems',
    company: 'Merkle / dentsu',
    logo: '/logos/dentsu.jpg',
    period: '2021 – 2024',
    context:
      'Built storefront and platform capabilities for e-commerce teams serving multiple markets and product teams.',
    problem:
      'Teams needed faster feature delivery, stronger consistency across interfaces, and better confidence in complex user-facing flows.',
    ownership:
      'Built reusable component patterns, customized commerce frontends, implemented Cypress coverage, and mentored junior engineers on scalable React practices.',
    outcome:
      'Improved delivery speed by 40%, reached 95% regression coverage for critical journeys, and helped reduce page-load time by around 2 seconds.',
    tech: ['React', 'TypeScript', 'Redux', 'Shopify', 'GraphQL', 'Tailwind CSS', 'Cypress'],
  },
  {
    title: 'Internal reusable component library',
    company: 'Dentsu',
    logo: '/logos/dentsu.jpg',
    period: '2024 – 2025',
    context:
      'Frontend teams across Dentsu were building similar UI patterns independently, leading to inconsistent experiences and duplicated effort across projects.',
    problem:
      'There was no shared component system, so teams were shipping inconsistent UIs, spending time rebuilding common patterns, and struggling to maintain design coherence across products.',
    ownership:
      'Led the build of a shared library of 50+ components (accordion, data table, dialog, drawer, combobox, and more) used across internal frontends, and wrote its documentation with three teammates.',
    outcome:
      'Reduced UI development time significantly by providing ready-to-use, well-documented components. Improved design consistency across teams and established a single source of truth for frontend patterns within the organization.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Jest'],
    artifacts: [
      'Accordion',
      'Alert',
      'Alert Dialog',
      'Aspect Ratio',
      'Avatar',
      'Badge',
      'Breadcrumb',
      'Button',
      'Button Group',
      'Calendar',
      'Card',
      'Carousel',
      'Chart',
      'Checkbox',
      'Collapsible',
      'Combobox',
      'Command',
      'Context Menu',
      'Data Table',
      'Date Picker',
      'Dialog',
      'Direction',
      'Drawer',
      'Dropdown Menu',
      'Empty',
      'Field',
      'Hover Card',
      'Input',
      'Input Group',
      'Input OTP',
      'Item',
      'Kbd',
      'Label',
      'Menubar',
      'Native Select',
      'Navigation Menu',
      'Pagination',
      'Popover',
      'Progress',
      'Radio Group',
      'Resizable',
      'Scroll Area',
      'Select',
      'Separator',
      'Sheet',
      'Sidebar',
      'Skeleton',
      'Slider',
      'Sonner',
      'Spinner',
      'Switch',
      'Table',
      'Tabs',
      'Textarea',
      'Toast',
      'Toggle',
      'Toggle Group',
      'Tooltip',
      'Typography',
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  logo?: string;
  location: string;
  workType: string;
  period: string;
  periodShort: string;
  current?: boolean;
  tech: string[];
  highlights: string[];
  group?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer – Full Stack Developer',
    company: 'PayPal',
    logo: '/logos/paypal.jpg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'October 2025 – Present',
    periodShort: 'Oct 2025 – Present',
    current: true,
    tech: ['React', 'TypeScript', 'Node', 'REST', 'GraphQL', 'Jest', 'Cypress'],
    highlights: [
      'Owned the web architecture for a new bank payment journey that runs inside two apps. Wrote the low-level design: architecture, sequence and state diagrams, API contracts, and the failure, security, and config design.',
      'Wrote the high- and low-level designs for the next version of an internal admin platform: component architecture, state, API contracts, and how the old and new versions run side by side behind role-based access.',
      'Drew the micro-frontend boundary for the payment journey: one embeddable component with a typed props-and-callbacks contract, so current and future host apps can add the flow without owning its logic.',
      'Made the calls that shaped the payment flow: an embedded frame or a full-page redirect (with an automatic fallback when the frame is blocked), where payment state lives across the bank redirect, and one shared API layer instead of direct calls, so permissions stay in a single backend.',
      'Designed the payment journey for failure from day one: idempotent requests, conflict and step-up handling, a polling window with a “still processing” outcome, and a fallback for every error. Built a local backend and bank mock so each outcome can be tested without a shared environment.',
      "Reviewed partner teams' schema and contract changes against the web design, turned the gaps into a concrete list of asks, and unblocked cross-team issues such as redirect allowlisting and frame-embedding rules.",
      'Led bulk import and export for the admin platform from design to release: data contracts, validation on the client and the server, clear error handling, and safeguards against lost edits and accidental destructive changes.',
      'Designed the approvals workflow with server-driven paging and filtering, plus the Node.js REST APIs and role rules behind it, so it stays fast as volume grows and access is enforced in one place. Led the move from mock data to live services, agreeing contracts with each dependent team.',
      'Made code quality a release gate in CI, set the Jest and Cypress test strategy, fixed critical production issues at the root rather than patching symptoms, and mentored engineers through reviews on TypeScript, testing, and design.',
    ],
  },
  {
    role: 'Technical Lead – Full Stack Developer',
    company: 'Dentsu',
    logo: '/logos/dentsu.jpg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'November 2024 – October 2025',
    periodShort: 'Nov 2024 – Oct 2025',
    group: 'dentsu',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'TypeScript', 'Kafka', 'Redis', 'MySQL'],
    highlights: [
      'Led a team of 8 engineers building MERN applications: set the technical direction, planned releases, and stayed hands-on in the code.',
      'Wrote HLD and LLD documents for new services and features, and ran design reviews with product, QA, and partner engineering teams before any build started.',
      'Led the move from a monolith to microservices with Kafka, cutting downtime by 30%.',
      'Raised the testing bar with Jest and Cypress standards and stricter code reviews, cutting production bugs by 45%.',
      'Led the build of a shared library of 50+ React components with Storybook docs, now used across internal frontends.',
      'Introduced Redis caching and tuned the Node.js services behind our main applications.',
      'Standardized API contracts with Swagger so frontend and backend teams could build in parallel.',
      'Mentored engineers across teams on React, testing, and system design, and set up the code review process the team still follows.',
    ],
  },
  {
    role: 'Senior Software Developer – Full Stack Developer',
    company: 'Merkle, a dentsu company',
    logo: '/logos/dentsu.jpg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'April 2023 – October 2024',
    periodShort: 'Apr 2023 – Oct 2024',
    group: 'dentsu',
    tech: ['React', 'Redux', 'TypeScript', 'GraphQL', 'Node', 'Formik', 'RTK Query'],
    highlights: [
      'Led frontend architecture for enterprise e-commerce apps: wrote the design docs, set the state management patterns, and reviewed every major change.',
      'Built reusable UI patterns shared across product teams, speeding up feature delivery by 40%.',
      'Designed the state layer with Redux, RTK Query, and Formik, which removed duplicate API calls and made complex forms easier to maintain.',
      'Improved Core Web Vitals on multi-market storefronts, cutting page load time by about 2 seconds.',
      'Set up Cypress coverage for the critical shopping journeys, reaching 95% regression coverage.',
      'Worked with backend teams on GraphQL and Node.js API design, and wrote the LLD for the frontend side of each integration.',
      'Mentored junior engineers on React, TypeScript, and testing.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Merkle, a dentsu company',
    logo: '/logos/dentsu.jpg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'August 2021 – March 2023',
    periodShort: 'Aug 2021 – Mar 2023',
    group: 'dentsu',
    tech: ['React', 'JavaScript', 'Node', 'Algolia', 'HTML', 'CSS'],
    highlights: [
      'Led frontend for multi-region e-commerce storefronts.',
      'Built dashboards and improved UX with Algolia search.',
      'Collaborated on Node.js APIs and improved accessibility standards.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'ONS Tech',
    location: 'Chandigarh, India',
    workType: 'On-Site',
    period: 'August 2018 – July 2021',
    periodShort: 'Aug 2018 – Jul 2021',
    group: 'onstech',
    tech: ['PHP', 'MySQL', 'Redis', 'JavaScript', 'CMS'],
    highlights: [
      'Developed web solutions using PHP and CMS platforms.',
      'Implemented Redis caching, improving performance by 40%.',
      'Built internal tools and automated workflows for CRM systems.',
    ],
  },
  {
    role: 'Trainee',
    company: 'ONS Tech',
    location: 'Chandigarh, India',
    workType: 'On-Site',
    period: 'January 2018 – July 2018',
    periodShort: 'Jan 2018 – Jul 2018',
    group: 'onstech',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    highlights: ['Developed a project management system with reporting and database design.'],
  },
];

export const currentRole = experience.find((job) => job.current);

export type GroupedExperience = {
  company: string;
  logo?: string;
  location: string;
  workType: string;
  period: string;
  periodShort: string;
  current?: boolean;
  roles: ExperienceEntry[];
};

/** Start and end of a "Mon YYYY – Mon YYYY" range; a single date is both ends. */
function periodBounds(period: string) {
  const [start, end = start] = period.split(/\s+[–—-]\s+/);
  return { start, end };
}

export function groupExperience(jobs: ExperienceEntry[]): GroupedExperience[] {
  const result: GroupedExperience[] = [];
  let i = 0;
  while (i < jobs.length) {
    const job = jobs[i];
    if (job.group) {
      const groupJobs: ExperienceEntry[] = [];
      while (i < jobs.length && jobs[i].group === job.group) {
        groupJobs.push(jobs[i]);
        i++;
      }
      const first = groupJobs[0];
      const last = groupJobs[groupJobs.length - 1];
      const span = `${periodBounds(last.periodShort).start} – ${periodBounds(first.periodShort).end}`;
      result.push({
        company: [...new Set(groupJobs.map((j) => j.company))].join(' / '),
        logo: first.logo,
        location: first.location,
        workType: first.workType,
        period: span,
        periodShort: span,
        current: first.current,
        roles: groupJobs,
      });
    } else {
      result.push({
        company: job.company,
        logo: job.logo,
        location: job.location,
        workType: job.workType,
        period: job.period,
        periodShort: job.periodShort,
        current: job.current,
        roles: [job],
      });
      i++;
    }
  }
  return result;
}

export const education = {
  degree: 'B.E., Computer Science & Engineering',
  school: 'Chitkara Institute of Engineering & Technology',
  logo: '/logos/chitkara.png',
  years: '2014 – 2018',
} as const;

export const accomplishments = [
  {
    title: 'Certified AI Associate',
    org: 'Salesforce',
    date: 'Oct 17, 2024',
    note: 'Validated applied AI fundamentals and practical product understanding.',
  },
  {
    title: 'Q4 Make It Real Award',
    org: 'Merkle / dentsu',
    date: '2023',
    note: 'Recognized for delivery impact and contribution to product execution.',
  },
  {
    title: 'Certified JavaScript Developer I',
    org: 'Salesforce',
    date: 'Jul 10, 2023',
    note: 'Demonstrated strong JavaScript foundation across modern application work.',
  },
  {
    title: 'Q3 Trail Blazer Award',
    org: 'Merkle / dentsu',
    date: '2022',
    note: 'Recognized for initiative, ownership, and engineering contribution.',
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const blogPosts: BlogPost[] = [];

export type UpcomingBlogTopic = {
  title: string;
  hint: string;
};

export const upcomingBlogTopics: UpcomingBlogTopic[] = [
  {
    title: 'How I improve frontend quality at scale',
    hint: 'Patterns, reviews, and testing culture',
  },
  {
    title: 'What I learned leading teams in commerce projects',
    hint: 'People, process, and delivery ownership',
  },
  {
    title: 'A practical testing strategy with Jest, Cypress, and Playwright',
    hint: 'Layered testing from unit to E2E',
  },
];

export type HobbyIconKey =
  'painting' | 'drives' | 'music' | 'coffee' | 'reading' | 'cooking' | 'travel';

export type Hobby = {
  label: string;
  icon: HobbyIconKey;
};

export const hobbies: Hobby[] = [
  { label: 'Painting', icon: 'painting' },
  { label: 'Long drives', icon: 'drives' },
  { label: 'Music', icon: 'music' },
  { label: 'Trying out coffees', icon: 'coffee' },
  { label: 'Reading books', icon: 'reading' },
  { label: 'Cooking', icon: 'cooking' },
  { label: 'Travel', icon: 'travel' },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Drafts are kept out of the site until replaced with a real, approved quote. */
  placeholder?: boolean;
};

// PLACEHOLDER: swap these for real quotes (with permission), then delete `placeholder: true`.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Aparna is who I’d give the messy project to. She breaks it down, keeps everyone in the loop, and ships it without drama. Her code reviews made the whole team sharper.',
    name: 'Engineering Manager',
    role: 'Managed Aparna',
    company: 'Dentsu',
    placeholder: true,
  },
  {
    quote:
      'When something broke in checkout, Aparna was usually the one who found the root cause, fixed it, and added the test so it stayed fixed. She takes real ownership of her work.',
    name: 'Senior Engineer',
    role: 'Worked on the same team',
    company: 'Merkle',
    placeholder: true,
  },
  {
    quote:
      'She asks the right questions early, which saves weeks later. Calm under deadlines, and great at explaining technical trade-offs to people who aren’t engineers.',
    name: 'Product Manager',
    role: 'Cross-team partner',
    company: 'PayPal',
    placeholder: true,
  },
];

/** Only real, approved quotes reach the site. */
export const publishedTestimonials = testimonials.filter((item) => !item.placeholder);

export type Book = {
  title: string;
  author: string;
  category: string;
  status: 'reading' | 'finished' | 'want-to-read';
  note?: string;
};

export const readingList: Book[] = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Engineering',
    status: 'finished',
    note: 'Shaped how I think about naming, functions, and code clarity.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-improvement',
    status: 'finished',
    note: 'Small systems beat big goals. True for code, and for life.',
  },
  {
    title: 'System Design Interview',
    author: 'Alex Xu',
    category: 'Engineering',
    status: 'finished',
    note: 'Practical patterns for thinking about scale and trade-offs.',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    category: 'Engineering',
    status: 'reading',
    note: 'Timeless advice on craftsmanship and professional growth.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Engineering',
    status: 'want-to-read',
  },
];

/**
 * Primary navigation: header, mobile dock, footer, and search all read from here.
 * The blog is hidden from navigation until it has posts (the page and its data remain).
 */
export const siteNav = [
  {
    href: '/',
    label: 'Home',
    description: 'Start here',
    keywords: ['home', 'landing', 'index'],
    shortcut: 'H',
  },
  {
    href: '/work',
    label: 'Work',
    description: 'Roles, companies, and what I did there',
    keywords: ['work', 'experience', 'career', 'jobs'],
    shortcut: 'W',
  },
  {
    href: '/impact',
    label: 'Impact',
    description: 'Results, case studies, how I work, and expertise',
    keywords: ['impact', 'case studies', 'results', 'expertise', 'stack', 'skills', 'awards'],
    shortcut: 'I',
  },
  {
    href: '/hobbies',
    label: 'Hobbies',
    description: 'Life beyond work, and what I’m reading',
    keywords: ['hobbies', 'interests', 'personal', 'painting', 'music', 'coffee', 'books'],
    shortcut: 'Y',
  },
  {
    href: '/resume',
    label: 'Resume',
    description: 'View or download my resume',
    keywords: ['resume', 'cv', 'pdf', 'download'],
    shortcut: 'R',
  },
] as const;

export type SiteNavHref = (typeof siteNav)[number]['href'];
