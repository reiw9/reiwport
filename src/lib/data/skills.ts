import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Operations & Infrastructure",
    description:
      "I keep the technical side of a live website running smoothly, so everything behind the scenes just works.",
    skills: [
      "Git & GitHub workflows",
      "Cloudflare deployment & DNS",
      "Website auditing",
      "Deployment basics",
      "Environment & config management",
      "Incident triage",
    ],
  },
  {
    title: "Technical Direction",
    description:
      "I make the calls on what gets built and whether it's actually right — the tools are just tools.",
    skills: [
      "AI-assisted coding workflows",
      "Prompt-driven feature planning",
      "Code review & sanity-checking AI output",
      "Iterative debugging with AI pairing",
      "Technical documentation",
    ],
  },
  {
    title: "Product & UX",
    description:
      "I think about the site like a product: who's using it, where they get stuck, what's actually worth fixing.",
    skills: [
      "Product thinking",
      "UI/UX improvements",
      "Responsive design",
      "User flow & booking-funnel design",
      "Feature planning & prioritization",
    ],
  },
  {
    title: "Content Systems",
    description:
      "If someone can update the site without texting me first, I've done my job.",
    skills: [
      "Sanity CMS (schemas & content modeling)",
      "Supabase (auth, database, integration)",
      "CMS management & editorial workflow",
      "Structured content planning",
    ],
  },
  {
    title: "Website Health",
    description:
      "I keep a site healthy — fast, findable, and usable by everyone who lands on it.",
    skills: [
      "SEO optimization",
      "Accessibility (WCAG-aligned)",
      "QA testing",
      "Performance auditing",
      "Cross-browser & cross-device testing",
    ],
  },
];
