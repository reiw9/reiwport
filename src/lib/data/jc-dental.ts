export const jcDental = {
  meta: {
    title: "JC Dental",
    tagline: "Website operations & product work for a live dental clinic",
    role: "Website Operations & Product Coordination",
    year: "2025 — Present",
    status: "In production",
    links: {
      live: "#",
      repo: "#",
    },
    stack: [
      "React-based frontend",
      "Sanity CMS",
      "Supabase (Database & Auth)",
      "Cloudflare (Deployment, DNS, CDN)",
      "Git & GitHub",
      "AI-assisted development tools",
    ],
  },

  overview: {
    heading: "Overview",
    body: [
      "JC Dental is a real, in-production website for a dental clinic — not a demo or a personal side-project built in isolation. For the past year I've worked on it as a website operator and product-minded collaborator: directing AI-assisted development, making UX and product calls, and handling the operational work that keeps a live site running for real patients.",
      "I'm not the sole engineer behind it, and I'm not a software engineer by training. My contribution sits at the intersection of product thinking, technical coordination, and hands-on execution — using AI tools as my primary development partner while owning the decisions, the quality bar, and the follow-through that AI alone can't provide.",
      "The work spanned the full lifecycle of a live product: UI/UX improvements, SEO, accessibility, CMS content modeling, Supabase integration, Cloudflare deployment, security auditing, performance work, and the QA and documentation that hold it all together.",
    ],
  },

  challenges: [
    {
      heading: "Booking flow friction",
      body: "The appointment booking flow asked for too much upfront, gave unclear feedback at each step, and left patients unsure whether their booking had actually gone through — a serious problem for a healthcare site where trust matters.",
    },
    {
      heading: "Non-technical content updates",
      body: "Clinic staff needed to update services, team bios, and pricing regularly, but every change required a developer to touch code. That bottleneck meant content went stale and small updates took far longer than they should.",
    },
    {
      heading: "Local SEO & discoverability",
      body: "As a local practice, JC Dental depends on ranking for local, intent-driven search terms. Thin metadata, missing structured data, and non-semantic markup were quietly working against that goal.",
    },
    {
      heading: "Accessibility gaps",
      body: "Form fields without proper labels, inconsistent focus states, and contrast issues meant the site was harder to use for patients relying on screen readers, keyboard navigation, or simply larger text — an especially important gap to close on a healthcare site.",
    },
    {
      heading: "Security & operational risk",
      body: "The site handles real patient contact and booking data. That raises the bar on how auth, database access rules, and environment configuration are handled — and on how carefully deployments are reviewed before they go live.",
    },
    {
      heading: "Performance on mobile",
      body: "Marketing and service pages were image-heavy, and most patients were arriving on mobile connections — so load time directly affected whether visitors stayed long enough to book.",
    },
  ],

  solutions: [
    {
      heading: "Simplified, guided booking flow",
      body: "Reworked the booking flow into clearer steps with explicit progress and confirmation states, reducing the fields asked for upfront and making sure every patient gets an unambiguous confirmation that their appointment was booked.",
    },
    {
      heading: "Sanity CMS content modeling",
      body: "Modeled Sanity schemas for services, team members, and site content so clinic staff can publish updates directly — no developer required for routine changes, with structure still enforced so the front end never breaks.",
    },
    {
      heading: "Structured SEO pass",
      body: "Added descriptive metadata, Open Graph tags, and structured data for the business, cleaned up heading hierarchy and semantic HTML, and built out an internal linking and sitemap structure aimed at local search visibility.",
    },
    {
      heading: "Accessibility remediation",
      body: "Audited the site against WCAG-aligned practices: added proper label associations, fixed focus and contrast issues, and tested keyboard-only navigation across the key user flows, including booking.",
    },
    {
      heading: "Security review & hardening",
      body: "Reviewed Supabase access rules and auth flows, audited environment variable and secret handling, and tightened Cloudflare-level configuration — treating this as an ongoing practice rather than a one-time check.",
    },
    {
      heading: "Performance optimization",
      body: "Optimized and lazy-loaded images, trimmed unnecessary weight from key pages, and leaned on Cloudflare's CDN and caching to keep mobile load times down.",
    },
    {
      heading: "Process & workflow",
      body: "Introduced a structured Git/GitHub workflow — feature branches, PR review, and a pre-deploy checklist — plus technical documentation so decisions and setup steps are recorded, not just remembered.",
    },
  ],

  lessonsLearned: [
    {
      heading: "Directing AI is a skill of its own",
      body: "Getting good results from AI-assisted development meant writing clear specs, reviewing every change critically, and knowing enough about the system to catch when an output looked right but wasn't. The quality of the outcome depended on the judgment applied on top of the tool, not just the tool itself.",
    },
    {
      heading: "Non-technical stakeholders need workflows, not access",
      body: "Giving clinic staff a CMS instead of ad-hoc code changes turned content updates from a bottleneck into a non-issue — the fix was a process change as much as a technical one.",
    },
    {
      heading: "Accessibility and SEO overlap more than expected",
      body: "Cleaning up semantic HTML and heading structure for accessibility improved crawlability and SEO signals at the same time — the two audits kept reinforcing each other.",
    },
    {
      heading: "Security is a practice, not a checkbox",
      body: "The most useful shift was treating auditing as a recurring habit tied to every meaningful change, rather than a one-off pass done once and forgotten.",
    },
    {
      heading: "Real usage beats assumptions",
      body: "Several booking-flow decisions changed after watching where real friction actually showed up, which didn't always match my initial assumptions about what needed fixing.",
    },
  ],

  futureImprovements: [
    "Instrument proper analytics to measure booking funnel drop-off with real data, rather than qualitative observation alone.",
    "Expand automated test coverage for the booking flow to reduce reliance on manual QA.",
    "Explore multi-language support to serve a broader patient base.",
    "Continue performance work with more aggressive image and edge-caching strategies.",
    "Formalize a small design system to keep UI consistent as the site keeps growing.",
  ],

  screenshots: [
    {
      label: "Homepage",
      caption: "Hero section and services overview",
    },
    {
      label: "Booking Flow",
      caption: "Step-by-step appointment scheduling",
    },
    {
      label: "Sanity Studio",
      caption: "Content management view used by clinic staff",
    },
    {
      label: "Mobile Experience",
      caption: "Responsive layout across breakpoints",
    },
  ],
} as const;
