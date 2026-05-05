export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Developer",
  tagline: "I craft beautiful, performant web experiences that users love.",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Next.js, and Node.js, with a strong focus on performance, accessibility, and clean code. When I'm not coding, you'll find me hiking, reading, or contributing to open-source projects.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resume: "/resume.pdf",
  avatar: "/images/alex-morgan-developer-portrait.jpg",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Open Source Stars", value: "1.2k" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Framer Motion", level: 80 },
      { name: "Vue.js", level: 72 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export const projects = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A comprehensive analytics platform for SaaS businesses with real-time metrics, custom dashboards, and team collaboration features. Built with Next.js 14, Prisma, and PostgreSQL.",
    longDescription:
      "This full-featured SaaS analytics dashboard was built to help businesses track their key metrics in real time. It features customizable widgets, multi-tenant architecture, role-based access control, and beautiful data visualizations powered by Recharts. The backend uses Prisma ORM with PostgreSQL for reliable data storage, and Redis for caching frequently accessed metrics.",
    image: "/images/saas-analytics-dashboard-ui.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with product management, cart, checkout with Stripe integration, and an admin panel. Handles thousands of SKUs with blazing-fast search.",
    longDescription:
      "A production-ready e-commerce platform built from the ground up. Features include a product catalog with advanced filtering, a persistent shopping cart, Stripe Checkout integration, order management, and a full-featured admin panel. The search is powered by Algolia for sub-millisecond results across thousands of products.",
    image: "/images/ecommerce-platform-storefront.jpg",
    tags: ["Next.js", "Stripe", "Algolia", "MongoDB", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing tool that helps users draft, edit, and improve content using GPT-4. Features real-time suggestions, tone adjustment, and grammar correction.",
    longDescription:
      "Leveraging the OpenAI GPT-4 API, this writing assistant provides real-time content suggestions, tone analysis, and grammar corrections. Users can set writing goals, choose from multiple writing styles, and export their work in various formats. The app uses streaming responses for a smooth, real-time experience.",
    image: "/images/ai-writing-assistant-interface.jpg",
    tags: ["React", "OpenAI", "Node.js", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "devops-monitor",
    title: "DevOps Monitoring Tool",
    description:
      "A lightweight infrastructure monitoring dashboard that tracks server health, uptime, and alerts. Integrates with AWS CloudWatch and sends Slack notifications.",
    longDescription:
      "Built for DevOps teams who need a simple, unified view of their infrastructure. This tool aggregates metrics from AWS CloudWatch, Datadog, and custom endpoints, displaying them in a clean dashboard. Configurable alerting rules send notifications to Slack or email when thresholds are breached.",
    image: "/images/devops-monitoring-dashboard.jpg",
    tags: ["React", "AWS", "Docker", "Node.js", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "social-media-scheduler",
    title: "Social Media Scheduler",
    description:
      "Schedule and manage social media posts across Twitter, LinkedIn, and Instagram from a single dashboard. Includes analytics and best-time-to-post recommendations.",
    longDescription:
      "A social media management tool that connects to Twitter, LinkedIn, and Instagram APIs. Users can compose posts with rich media, schedule them for optimal times, and track engagement analytics. The recommendation engine analyzes historical data to suggest the best posting times for each platform.",
    image: "/images/social-media-scheduler-app.jpg",
    tags: ["Next.js", "Twitter API", "PostgreSQL", "Bull Queue", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "open-source-ui-kit",
    title: "Open Source UI Kit",
    description:
      "A comprehensive React component library with 50+ accessible, customizable components. Built with Radix UI primitives, Tailwind CSS, and full TypeScript support.",
    longDescription:
      "An open-source component library designed for production use. All 50+ components are built on Radix UI primitives for accessibility, styled with Tailwind CSS for easy customization, and fully typed with TypeScript. The library includes a Storybook documentation site and achieves 100% WCAG 2.1 AA compliance.",
    image: "/images/open-source-ui-component-library.jpg",
    tags: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
