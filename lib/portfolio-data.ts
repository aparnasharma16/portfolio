const experienceYears = '8+';
const headline = "I build web products that feel fast and don't break.";
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
  metaDescription: `Senior Software Engineer at PayPal (${experienceYears} yrs): MERN, SFCC, APIs, Jest, microservices, and e-commerce. Bengaluru.`,
  experienceYears,
  yearsExperience: `${experienceYears} years`,
  availabilityNote:
    'Open to senior frontend and full-stack engineering roles with strong product ownership, quality focus, and mentoring opportunities.',
  resumeLastUpdated: 'May 2025',
  links: {
    email: 'mailto:aparnasharma157@gmail.com',
    emailDisplay: 'aparnasharma157@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aparna-sharma-97006b141/',
    github: 'https://github.com/aparnasharma16',
    twitter: 'https://x.com/aparna1697',
    instagram: 'https://www.instagram.com/aparnasharma1601',
  },
  resumePdfPath: '/Aparna_Sharma_FullStack_Developer.pdf',
  siteUrl: 'https://aparnasharma.dev',
};

export type SitePageQuoteKey = 'home' | 'work' | 'impact' | 'blog' | 'resume';

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
    text: "By devotion to one's own natural duty, a person attains perfection.",
    attribution: 'Bhagavad Gita, 18.45',
  },
  blog: {
    text: 'In this world, there is nothing so purifying as true knowledge.',
    attribution: 'Bhagavad Gita, 4.38',
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
    metric: '40%',
    title: 'Faster API responses',
    summary:
      'Sped up a high-traffic internal platform with Redis caching, leaner data models, and Node.js tuning.',
  },
  {
    metric: '30%',
    title: 'Faster workflows',
    summary:
      'Led the frontend rebuild of an internal management tool in React and Redux, making everyday tasks quicker for its users.',
  },
  {
    metric: '8 engineers',
    title: 'Team led',
    summary:
      'Set technical direction, review standards, and delivery rhythm for a full-stack MERN team.',
  },
  {
    metric: '30%',
    title: 'Fewer production issues',
    summary:
      'Built approval workflows, role-based access, and audit-ready APIs that made releases more reliable.',
  },
  {
    metric: '25%',
    title: 'Fewer publishing errors',
    summary:
      'Shipped version history, change comparison, and one-click rollback so mistakes were easy to catch and undo.',
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
  items: string[];
};

/** Single source for every stack listing (home preview, impact breakdown). */
export const stack: StackGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Interfaces that stay fast as data and teams grow.',
    items: [
      'Next.js',
      'React',
      'TypeScript',
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
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Kafka', 'Swagger', 'PHP'],
  },
  {
    id: 'data',
    title: 'Data & caching',
    summary: 'Storage and caching for high-traffic workflows.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    id: 'testing',
    title: 'Testing',
    summary: 'Confidence from unit tests to full user journeys.',
    items: ['Jest', 'Cypress', 'Playwright', 'Storybook'],
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
    items: ['AWS', 'CI/CD', 'Git'],
  },
  {
    id: 'architecture',
    title: 'Architecture & design',
    summary: 'Thinking a system through before building it.',
    items: [
      'System design',
      'High-level design (HLD)',
      'Low-level design (LLD)',
      'Design docs',
      'Microservices',
    ],
  },
  {
    id: 'practice',
    title: 'Engineering practice',
    summary: 'How I work with a team, not just a codebase.',
    items: ['Code reviews', 'Mentoring', 'Accessibility', 'Core Web Vitals'],
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
    title: 'Rebuilding an internal campaign management platform',
    company: 'PayPal',
    logo: '/logos/paypal.jpg',
    period: '2025 – Present',
    context:
      'An internal platform used by many teams to plan and publish campaigns needed a rebuild to keep up with growing usage and more complex approvals.',
    problem:
      'The old system slowed down under heavy traffic, had limited access control and auditing, and offered no easy way to see what changed or undo a bad publish.',
    ownership:
      'Worked on the full stack in React, Redux, Node.js (Express), and Redis. Led the frontend and built approval workflows, role-based access, version history, change comparison, and rollback with the team.',
    outcome:
      'API responses got 40% faster, production issues dropped 30%, everyday workflows got 30% quicker, and publishing errors fell 25%.',
    tech: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express', 'Redis', 'REST'],
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
    tech: ['React', 'Redux', 'TypeScript', 'Node', 'Express', 'Redis', 'REST', 'AWS'],
    highlights: [
      'Designed and built the backend for an internal campaign management platform on Node.js, Express, and Redis, making API responses 40% faster.',
      'Built approval workflows, role-based access control, and audit-ready APIs, cutting production issues by 30%.',
      "Led frontend development of the platform's new React and Redux UI, making everyday workflows 30% faster.",
      'Shipped version history, change comparison, and rollback, reducing publishing errors by 25%.',
      'Improved frontend performance on large datasets by 35% through smarter caching and state management.',
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
      'Led scalable application development using MERN, driving architecture and best practices.',
      'Migrated monolith to microservices with Kafka, reducing downtime by 30%.',
      'Implemented Redis caching and optimized backend services using Node.js.',
      'Standardized APIs with Swagger and mentored developers across teams.',
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
      'Designed and built a reusable component library, standardizing UI patterns and accelerating development across multiple projects.',
      'Implemented scalable state management using Redux, RTK Query, and Formik, optimizing data flow and reducing redundant API calls.',
      'Optimized frontend performance by improving Core Web Vitals, reducing load time and enhancing user experience across enterprise applications.',
      'Contributed to API design and integration using GraphQL and Node.js, improving data flow efficiency and enabling scalable full-stack architecture.',
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
      result.push({
        company: [...new Set(groupJobs.map((j) => j.company))].join(' / '),
        logo: first.logo,
        location: first.location,
        workType: first.workType,
        period: `${last.periodShort.split(' – ')[0]} – ${first.periodShort.split(' – ')[1]}`,
        periodShort: `${last.periodShort.split(' – ')[0]} – ${first.periodShort.split(' – ')[1]}`,
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
      "Aparna is who I'd give the messy project to. She breaks it down, keeps everyone in the loop, and ships it without drama. Her code reviews made the whole team sharper.",
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
      "She asks the right questions early, which saves weeks later. Calm under deadlines, and great at explaining technical trade-offs to people who aren't engineers.",
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
    description: 'Results, case studies, how I work, and stack',
    keywords: ['impact', 'case studies', 'results', 'stack', 'skills', 'awards'],
    shortcut: 'I',
  },
  {
    href: '/hobbies',
    label: 'Hobbies',
    description: 'Life beyond code',
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
