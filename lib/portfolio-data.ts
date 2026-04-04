export const profile = {
  name: "Aparna Sharma",
  title: "Senior Software Engineer",
  location: "Bengaluru, India",
  /** Short line under name: roles · email */
  identityLine: "Senior Software Engineer · MERN & commerce",
  tagline:
    "Love to build scalable products, mentor engineers, and ship high-quality experiences in payments and e-commerce.",
  metaDescription:
    "Senior Software Engineer at PayPal (7+ yrs): MERN, SFCC, APIs, Jest, microservices, and e-commerce. Bengaluru.",
  summary:
    "Senior Software Engineer at PayPal with over 7 years of expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and hands-on experience with SFCC (Salesforce Commerce Cloud), HTML, JavaScript, TypeScript, CSS, RWD, Shopify, PHP, and MySQL. Proficient in API development and integration. Adept at writing test cases using Jest and committed to ensuring high code quality. Familiar with Kafka for event-driven architecture and a solid understanding of basic AWS services. Demonstrated strong leadership abilities through mentoring teams, conducting code reviews, and optimizing performance. Passionate about building scalable, high-performance applications and delivering robust solutions in payments, e-commerce, and full-stack development while staying updated with the latest technologies.",
  links: {
    email: "mailto:aparnasharma157@gmail.com",
    emailDisplay: "aparnasharma157@gmail.com",
    linkedin: "https://www.linkedin.com/in/aparna-sharma-97006b141/",
    github: "https://github.com/aparnasharma16",
    twitter: "https://x.com/aparna1697",
    instagram: "https://www.instagram.com/aparnasharma1601",
  },
  /** Set to e.g. "/resume.pdf" after adding the file under public/ */
  resumePdfPath: "",
};

export const workPageQuote = {
  text: "Excellence is never an accident; it is the result of high intention and intelligent effort.",
  attribution: "Aristotle",
} as const;

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
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "PayPal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQehMn3aH23yJN5YVvX0dUiDhzAwcyZCxSIw&s",
    location: "Bengaluru, India",
    workType: "On-Site",
    period: "January 2026 – Present",
    periodShort: "Jan 2026 – Present",
    current: true,
    tech: [
      "TypeScript",
      "React",
      "Node",
      "REST",
      "Jest",
      "GraphQL",
      "AWS",
      "Playwright",
      "MySQL",
    ],
    highlights: [
      "Architected and shipped full-stack payment features using React, Node.js, and GraphQL, serving millions of daily transactions globally.",
      "Built end-to-end integration and unit test suites with Playwright and Jest, achieving 90%+ code coverage across critical checkout flows.",
      "Designed RESTful microservices handling real-time payment processing, reducing API latency by 35% through query optimization and caching.",
      "Led deployments across staging and production environments with CI/CD pipelines, zero-downtime releases, and automated rollback strategies.",
    ],
  },
  {
    role: "Technical Lead",
    company: "Dentsu",
    logo: "https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg",
    location: "Bengaluru, India",
    workType: "On-Site",
    period: "November 2024 – December 2025",
    periodShort: "Nov 2024 – Dec 2025",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "TypeScript",
      "Jest",
      "Cypress",
      "Kafka",
      "MySQL",
    ],
    highlights: [
      "Led a team of 8 engineers delivering MERN stack applications with end-to-end ownership from architecture to production deployment.",
      "Drove monolith-to-microservices migration using Kafka for event-driven architecture, reducing system downtime by 30%.",
      "Implemented comprehensive E2E testing with Cypress and unit testing with Jest, cutting production bugs by 45%.",
      "Integrated third-party payment gateways and built MySQL-backed reporting dashboards for real-time business analytics.",
      "Established code review standards, Swagger-based API documentation, and CI/CD best practices across the engineering org.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Merkle, a dentsu company",
    logo: "https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg",
    location: "Bengaluru, India",
    workType: "On-Site",
    period: "April 2023 – October 2024",
    periodShort: "Apr 2023 – Oct 2024",
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Shopify",
      "GraphQL",
      "Tailwind",
      "Cypress",
      "Figma",
    ],
    highlights: [
      "Built a reusable component library with React and TypeScript, reducing feature delivery time by 40% across 3 product teams.",
      "Implemented Cypress E2E tests for all critical user flows, achieving 95% regression coverage before each release.",
      "Customized Shopify themes and integrated GraphQL APIs for optimized data fetching, improving page load by 2s.",
      "Mentored 5 junior developers on React patterns, testing best practices, and responsive design with Tailwind CSS.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Merkle, a dentsu company",
    logo: "https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/logo%20dentsu%20hitam.jpeg",
    location: "Bengaluru, India",
    workType: "On-Site",
    period: "August 2021 – March 2023",
    periodShort: "Aug 2021 – Mar 2023",
    tech: [
      "React",
      "WordPress",
      "PHP",
      "MySQL",
      "Algolia",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Led frontend development for multi-site e-commerce platforms serving US and Canada markets with 50K+ daily active users.",
      "Built custom WooCommerce plugins with PHP and MySQL, automating inventory sync and reducing manual effort by 60%.",
      "Integrated Algolia search with faceted filtering, improving product discovery and increasing conversion rates by 15%.",
      "Developed real-time sales dashboards with React and MySQL queries, enabling data-driven decisions for stakeholders.",
    ],
  },
  {
    role: "PHP Developer",
    company: "ONS Tech",
    logo: "https://www.onstechglobal.com/build/assets/ons_tech_logo-4dbdbfd3.png",
    location: "Chandigarh, India",
    workType: "On-Site",
    period: "August 2018 – July 2021",
    periodShort: "Aug 2018 – Jul 2021",
    tech: ["PHP", "MySQL", "React Native", "JavaScript", "CodeIgniter"],
    highlights: [
      "Delivered end-to-end web applications using PHP, CodeIgniter, and MySQL, serving 10K+ users across 5 client projects.",
      "Built a React Native admin app with real-time reporting and push notifications, adopted by 3 enterprise clients.",
      "Migrated legacy PHP applications to modern architecture, improving page load performance by 40%.",
      "Automated CRM workflows with CRON jobs and MySQL stored procedures, saving 20 hours/week of manual processing.",
    ],
  },
  {
    role: "Trainee",
    company: "ONS Tech",
    logo: "https://www.onstechglobal.com/build/assets/ons_tech_logo-4dbdbfd3.png",
    location: "Chandigarh, India",
    workType: "On-Site",
    period: "January 2018 – July 2018",
    periodShort: "Jan 2018 – Jul 2018",
    tech: ["PHP", "MySQL", "JavaScript"],
    highlights: [
      "Built a project management system with P&L reporting using PHP and MySQL, handling 500+ active projects.",
      "Developed admin modules with Grocery CRUD and complex relational database schemas for multi-tenant data.",
      "Created reusable PHP templates and UI components, establishing consistent design patterns across 4 internal tools.",
    ],
  },
];

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "Chitkara Institute of Engineering & Technology",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGkBGFJe-tIGpvst2pWJCQkUFMhDuJ-qM4A&s",
  years: "2014 — 2018",
} as const;

export const accomplishments = [
  { title: "Certified AI Associate", org: "Salesforce", date: "Oct 17, 2024" },
  { title: "Q4 Make It Real Award", org: "Merkle / dentsu", date: "2023" },
  {
    title: "Certified JavaScript Developer I",
    org: "Salesforce",
    date: "Jul 10, 2023",
  },
  { title: "Q3 Trail Blazer Award", org: "Merkle / dentsu", date: "2022" },
] as const;

export const blogPosts = [
  {
    slug: "shipping-quality-at-scale",
    title: "Shipping quality at scale",
    description:
      "Notes on code review, testing, and pragmatic architecture in product teams.",
    date: "Mar 15, 2026",
  },
] as const;

export const searchLinks = [
  { href: "/", label: "Home", hint: "Landing" },
  { href: "/work", label: "Work", hint: "Experience" },
  { href: "/blog", label: "Blog", hint: "Writing" },
  { href: "/resume", label: "Resume", hint: "CV" },
] as const;
