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
    email: "mailto:your.email@example.com",
    emailDisplay: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },
  /** Set to e.g. "/resume.pdf" after adding the file under public/ */
  resumePdfPath: "",
};

/** Shown at the bottom of the Work page (reference-style quote block). */
export const workPageQuote = {
  text: "Excellence is never an accident; it is the result of high intention and intelligent effort.",
  attribution: "Aristotle",
} as const;

export type ExperienceEntry = {
  role: string;
  company: string;
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
    ],
    highlights: [
      "Building and operating reliable software for global payments at scale.",
      "Partnering with product, platform, and cross-functional teams to ship customer-impact work.",
      "Owning quality through code review, testing discipline, and pragmatic architecture.",
    ],
  },
  {
    role: "Technical Lead",
    company: "Dentsu",
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
      "Swagger",
      "Kafka",
    ],
    highlights: [
      "MERN stack end-to-end ownership across frontend and backend.",
      "Code reviews and scalable architecture standards for the team.",
      "Services for client onboarding and user management (brands & marketing).",
      "Swagger-based API documentation and clear service contracts.",
      "Cross-functional alignment with clients and business goals.",
      "Led monolith-to-microservices migration; reduced downtime ~30%.",
      "Integrated third-party payment gateways for smoother checkout.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Merkle, a dentsu company",
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
      "Figma",
    ],
    highlights: [
      "Reusable component library to shorten delivery cycles.",
      "Redux, RTK Query, and Formik for state and forms.",
      "Shopify theme, template, and layout customization.",
      "High-performance, interactive UI and web vitals focus.",
      "GraphQL APIs for leaner data fetching.",
      "Mentored juniors; React and frontend best-practice training.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Merkle, a dentsu company",
    location: "Bengaluru, India",
    workType: "On-Site",
    period: "August 2021 – March 2023",
    periodShort: "Aug 2021 – Mar 2023",
    tech: [
      "React",
      "WordPress",
      "PHP",
      "Algolia",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    highlights: [
      "Custom WooCommerce plugin; WordPress integrated with e-commerce.",
      "Led frontend for multi-site e-commerce (US & Canada).",
      "Algolia search; accessibility improvements with AQA tooling.",
      "Pages from style guides and business requirements.",
      "Real-time sales and engagement dashboards.",
      "Tighter mobile UX with design partners; improved retention signals.",
    ],
  },
  {
    role: "PHP Developer",
    company: "ONS Tech",
    location: "Chandigarh, India",
    workType: "On-Site",
    period: "August 2018 – July 2021",
    periodShort: "Aug 2018 – Jul 2021",
    tech: ["PHP", "MySQL", "React Native", "JavaScript", "CodeIgniter"],
    highlights: [
      "End-to-end web solutions with PHP frameworks and CMS.",
      "Page builder, dynamic content toolbar, CRM CRON automation.",
      "React Native admin app with custom reporting.",
      "Email workflow automation and business metric tracking.",
      "Legacy migrations; ~40% performance improvement.",
    ],
  },
  {
    role: "Trainee",
    company: "ONS Tech",
    location: "Chandigarh, India",
    workType: "On-Site",
    period: "January 2018 – July 2018",
    periodShort: "Jan 2018 – Jul 2018",
    tech: ["PHP", "MySQL", "JavaScript"],
    highlights: [
      "Project management system with P&L reporting.",
      "Admin modules with Grocery CRUD and complex database relationships.",
      "Custom templates for consistent UI across modules.",
    ],
  },
];

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "Chitkara Institute of Engineering & Technology",
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
