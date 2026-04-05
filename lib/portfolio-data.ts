export const profile = {
  name: 'Aparna Sharma',
  title: 'Senior Software Engineer',
  location: 'Bengaluru, India',
  identityLine: 'Senior Software Engineer · MERN · payments · commerce',
  tagline:
    'I build reliable, high-quality products across frontend, backend, and commerce platforms, with a strong focus on delivery ownership and engineering quality.',
  valueProposition:
    'Engineering leader and senior IC with 8+ years shipping payment and commerce experiences, improving product quality, and mentoring teams across fast-moving product organizations.',
  metaDescription:
    'Senior Software Engineer at PayPal (8+ yrs): MERN, SFCC, APIs, Jest, microservices, and e-commerce. Bengaluru.',
  summary:
    'Senior Software Engineer at PayPal with over 7 years of expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and hands-on experience with SFCC (Salesforce Commerce Cloud), HTML, JavaScript, TypeScript, CSS, RWD, Shopify, PHP, and MySQL. Proficient in API development and integration. Adept at writing test cases using Jest and committed to ensuring high code quality. Familiar with Kafka for event-driven architecture and a solid understanding of basic AWS services. Demonstrated strong leadership abilities through mentoring teams, conducting code reviews, and optimizing performance. Passionate about building scalable, high-performance applications and delivering robust solutions in payments, e-commerce, and full-stack development while staying updated with the latest technologies.',
  yearsExperience: '8+ years',
  primaryFocus: 'Frontend systems, full-stack delivery, payments, and commerce',
  availabilityNote:
    'Open to senior frontend and full-stack engineering roles with strong product ownership, quality focus, and mentoring opportunities.',
  resumeLastUpdated: 'April 2026',
  links: {
    email: 'mailto:aparnasharma157@gmail.com',
    emailDisplay: 'aparnasharma157@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aparna-sharma-97006b141/',
    github: 'https://github.com/aparnasharma16',
    twitter: 'https://x.com/aparna1697',
    instagram: 'https://www.instagram.com/aparnasharma1601',
  },
  resumePdfPath: '',
  currentStatus: 'Building checkout & payment experiences at PayPal',
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
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    label: 'Frontend Engineering',
    description:
      'Build accessible, scalable interfaces in React and TypeScript with strong performance and maintainability.',
  },
  {
    label: 'Full-Stack Delivery',
    description:
      'Own features end-to-end across APIs, services, testing, release workflows, and production readiness.',
  },
  {
    label: 'E-commerce & Payments',
    description:
      'Deliver checkout, commerce, and customer-facing flows where reliability, trust, and speed matter.',
  },
  {
    label: 'Leadership & Mentoring',
    description:
      'Guide engineers through reviews, standards, testing strategy, and execution without losing delivery pace.',
  },
];

export type FeaturedWin = {
  metric: string;
  title: string;
  summary: string;
};

export const featuredWins: FeaturedWin[] = [
  {
    metric: '35%',
    title: 'Lower API latency',
    summary:
      'Improved payment-service response times through query optimization and smarter caching strategies.',
  },
  {
    metric: '90%+',
    title: 'Coverage on critical flows',
    summary:
      'Built Playwright and Jest coverage for high-value checkout journeys to raise release confidence.',
  },
  {
    metric: '8 engineers',
    title: 'Led delivery teams',
    summary:
      'Managed execution, architecture direction, and engineering standards while shipping MERN products.',
  },
  {
    metric: '45%',
    title: 'Fewer production bugs',
    summary:
      'Introduced stronger E2E and unit testing practices that materially reduced release regressions.',
  },
  {
    metric: '50K+',
    title: 'Daily active users served',
    summary:
      'Built commerce experiences at scale across multi-site storefronts used across North American markets.',
  },
];

export type ExpertiseGroup = {
  title: string;
  items: string[];
};

export const coreExpertise: ExpertiseGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MySQL'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Cypress', 'Playwright', 'Regression strategy', 'QA collaboration'],
  },
  {
    title: 'Commerce',
    items: ['PayPal', 'Shopify', 'SFCC', 'WooCommerce', 'Checkout flows'],
  },
  {
    title: 'Leadership',
    items: [
      'Mentoring',
      'Code reviews',
      'Delivery ownership',
      'Standards',
      'Cross-team coordination',
    ],
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
    title: 'Checkout and payment experience improvements',
    company: 'PayPal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQehMn3aH23yJN5YVvX0dUiDhzAwcyZCxSIw&s',
    period: '2026 – Present',
    context:
      'Worked on payment experiences used in high-traffic checkout journeys where stability and speed directly affect customer trust.',
    problem:
      'Critical transaction flows needed stronger reliability, faster API performance, and better release confidence across environments.',
    ownership:
      'Owned full-stack feature delivery across React, Node.js, and GraphQL, and built automated test coverage for critical checkout paths.',
    outcome:
      'Reduced API latency by 35%, improved confidence with 90%+ coverage on key flows, and supported zero-downtime releases with production-ready delivery practices.',
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Jest', 'Playwright', 'AWS'],
  },
  {
    title: 'Monolith to microservices migration leadership',
    company: 'Dentsu',
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
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
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
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
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
    period: '2024 – 2025',
    context:
      'Frontend teams across Dentsu were building similar UI patterns independently, leading to inconsistent experiences and duplicated effort across projects.',
    problem:
      'There was no shared component system, so teams were shipping inconsistent UIs, spending time rebuilding common patterns, and struggling to maintain design coherence across products.',
    ownership:
      'Led the creation of a reusable component package with 50+ components — including Accordion, Data Table, Dialog, Drawer, Command, Combobox, and more — used across internal frontend systems. Collaborated with 3 teammates to build comprehensive documentation alongside the library.',
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

export const leadershipHighlights = [
  'Led teams of up to 8 engineers with end-to-end ownership across architecture, delivery, and release readiness.',
  'Mentored junior developers on React, testing, responsive design, and maintainable engineering patterns.',
  'Raised code quality through review standards, documentation discipline, and stronger release processes.',
  'Balanced hands-on implementation with technical direction in product environments where execution speed mattered.',
] as const;

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
    role: 'Senior Software Engineer',
    company: 'PayPal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQehMn3aH23yJN5YVvX0dUiDhzAwcyZCxSIw&s',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'January 2026 – Present',
    periodShort: 'Jan 2026 – Present',
    current: true,
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'Node',
      'REST',
      'Jest',
      'GraphQL',
      'AWS',
      'Playwright',
      'Claude',
    ],
    highlights: [
      'Architected and shipped full-stack payment features using React, Node.js, and GraphQL, serving millions of daily transactions globally.',
      'Built end-to-end integration and unit test suites with Playwright and Jest, achieving 90%+ code coverage across critical checkout flows.',
      'Designed RESTful microservices handling real-time payment processing, reducing API latency by 35% through query optimization and caching.',
      'Led deployments across staging and production environments with CI/CD pipelines, zero-downtime releases, and automated rollback strategies.',
    ],
  },
  {
    role: 'Technical Lead',
    company: 'Dentsu',
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'November 2024 – December 2025',
    periodShort: 'Nov 2024 – Dec 2025',
    group: 'dentsu',
    tech: [
      'MongoDB',
      'Express',
      'React',
      'Node',
      'TypeScript',
      'Jest',
      'Cypress',
      'Kafka',
      'MySQL',
    ],
    highlights: [
      'Led a team of 8 engineers delivering MERN stack applications with end-to-end ownership from architecture to production deployment.',
      'Drove monolith-to-microservices migration using Kafka for event-driven architecture, reducing system downtime by 30%.',
      'Implemented comprehensive E2E testing with Cypress and unit testing with Jest, cutting production bugs by 45%.',
      'Integrated third-party payment gateways and built MySQL-backed reporting dashboards for real-time business analytics.',
      'Established code review standards, Swagger-based API documentation, and CI/CD best practices across the engineering org.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Merkle, a dentsu company',
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'April 2023 – October 2024',
    periodShort: 'Apr 2023 – Oct 2024',
    group: 'dentsu',
    tech: ['React', 'Redux', 'TypeScript', 'Shopify', 'GraphQL', 'Tailwind', 'Cypress', 'Figma'],
    highlights: [
      'Built reusable React and TypeScript components used across 3 product teams, cutting feature delivery time by 40%.',
      'Developed checkout, order, and mini cart pages with Shopify and GraphQL, improving page load by 2 seconds.',
      'Integrated Razorpay payment gateway for seamless transactions across multiple storefronts.',
      'Built Node.js APIs for product catalog and inventory sync between Shopify and internal systems.',
      'Wrote Cypress E2E tests for all critical user flows, reaching 95% regression coverage before each release.',
      'Mentored 5 junior developers on React patterns, testing, and responsive design with Tailwind CSS.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Merkle, a dentsu company',
    logo: 'https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg',
    location: 'Bengaluru, India',
    workType: 'On-Site',
    period: 'August 2021 – March 2023',
    periodShort: 'Aug 2021 – Mar 2023',
    group: 'dentsu',
    tech: ['React', 'WordPress', 'PHP', 'MySQL', 'Algolia', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Built and maintained e-commerce storefronts for US and Canada markets, serving 50K+ daily active users.',
      'Developed checkout and order flows with WooCommerce, PHP, and MySQL for multi-site platforms.',
      'Built custom WordPress plugins to automate inventory sync and reduce manual work by 60%.',
      'Integrated Algolia search with filters, improving product discovery and boosting conversions by 15%.',
      'Created REST APIs with PHP for order management, reporting, and third-party service integrations.',
      'Built real-time sales dashboards with React and MySQL, helping stakeholders make data-driven decisions.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'ONS Tech',
    logo: 'https://www.onstechglobal.com/build/assets/ons_tech_logo-4dbdbfd3.png',
    location: 'Chandigarh, India',
    workType: 'On-Site',
    period: 'August 2018 – July 2021',
    periodShort: 'Aug 2018 – Jul 2021',
    tech: ['PHP', 'MySQL', 'React Native', 'JavaScript', 'CodeIgniter'],
    highlights: [
      'Delivered end-to-end web applications using PHP, CodeIgniter, and MySQL, serving 10K+ users across 5 client projects.',
      'Built a React Native admin app with real-time reporting and push notifications, adopted by 3 enterprise clients.',
      'Migrated legacy PHP applications to modern architecture, improving page load performance by 40%.',
      'Automated CRM workflows with CRON jobs and MySQL stored procedures, saving 20 hours/week of manual processing.',
    ],
  },
  {
    role: 'Trainee',
    company: 'ONS Tech',
    logo: 'https://www.onstechglobal.com/build/assets/ons_tech_logo-4dbdbfd3.png',
    location: 'Chandigarh, India',
    workType: 'On-Site',
    period: 'January 2018 – July 2018',
    periodShort: 'Jan 2018 – Jul 2018',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    highlights: [
      'Built a project management system with P&L reporting using PHP and MySQL, handling 500+ active projects.',
      'Developed admin modules with Grocery CRUD and complex relational database schemas for multi-tenant data.',
      'Created reusable PHP templates and UI components, establishing consistent design patterns across 4 internal tools.',
    ],
  },
];

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
        company: 'Dentsu / Merkle',
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
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGkBGFJe-tIGpvst2pWJCQkUFMhDuJ-qM4A&s',
  years: '2014 — 2018',
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
  icon: string;
};

export const upcomingBlogTopics: UpcomingBlogTopic[] = [
  {
    title: 'How I improve frontend quality at scale',
    hint: 'Patterns, reviews, and testing culture',
    icon: 'quality',
  },
  {
    title: 'What I learned leading teams in commerce projects',
    hint: 'People, process, and delivery ownership',
    icon: 'leadership',
  },
  {
    title: 'A practical testing strategy with Jest, Cypress, and Playwright',
    hint: 'Layered testing from unit to E2E',
    icon: 'testing',
  },
];

export type Hobby = {
  label: string;
  emoji: string;
};

export const hobbies: Hobby[] = [
  { label: 'Painting', emoji: 'painting' },
  { label: 'Long drives', emoji: 'drives' },
  { label: 'Music', emoji: 'music' },
  { label: 'Trying out coffees', emoji: 'coffee' },
  { label: 'Reading books', emoji: 'reading' },
  { label: 'Cooking', emoji: 'cooking' },
  { label: 'Travel', emoji: 'travel' },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Replace with real testimonials when available
export const testimonials: Testimonial[] = [
  {
    quote:
      'Aparna consistently delivered high-quality work and raised the bar for the entire team through thoughtful code reviews and mentoring.',
    name: 'Engineering Manager',
    role: 'Manager',
    company: 'Dentsu',
  },
  {
    quote:
      'Her ability to own complex features end-to-end, from architecture to production, made her an invaluable part of our commerce team.',
    name: 'Senior Engineer',
    role: 'Peer',
    company: 'Merkle',
  },
  {
    quote:
      "One of the strongest frontend engineers I've worked with — reliable, detail-oriented, and always thinking about long-term quality.",
    name: 'Product Lead',
    role: 'Cross-team',
    company: 'PayPal',
  },
];

export type Book = {
  title: string;
  author: string;
  category: string;
  status: 'reading' | 'finished' | 'want-to-read';
  note?: string;
};

export const readingList: Book[] = [
  {
    title: 'The Bhagavad Gita',
    author: 'Eknath Easwaran (translation)',
    category: 'Philosophy',
    status: 'finished',
    note: 'A constant reference for equanimity and purposeful action.',
  },
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
    note: 'Small systems beat big goals — applies to code and life.',
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

export const searchLinks = [
  { href: '/', label: 'Home', hint: 'Landing' },
  { href: '/work', label: 'Work', hint: 'Experience' },
  { href: '/impact', label: 'Impact', hint: 'Case studies' },
  { href: '/blog', label: 'Blog', hint: 'Writing' },
  { href: '/hobbies', label: 'Hobbies', hint: 'Beyond work' },
  { href: '/resume', label: 'Resume', hint: 'CV' },
] as const;
