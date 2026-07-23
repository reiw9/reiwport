import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Operations & Infrastructure",
    description:
      "Running the day-to-day technical side of a live website — from version control to deployment.",
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
    title: "AI-Assisted Development",
    description:
      "Directing AI tools to plan, build, and debug real features — reviewing every output critically rather than accepting it blindly.",
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
      "Thinking about the site as a product — who uses it, where they get stuck, and what changes actually move the needle.",
    skills: [
      "Product thinking",
      "UI/UX improvements",
      "Responsive design",
      "User flow & booking-funnel design",
      "Feature planning & prioritization",
    ],
  },
  {
    title: "Content & Data Layer",
    description:
      "Managing the systems that hold and serve a site's content and data.",
    skills: [
      "Sanity CMS (schemas & content modeling)",
      "Supabase (auth, database, integration)",
      "CMS management & editorial workflow",
      "Structured content planning",
    ],
  },
  {
    title: "Quality, SEO & Accessibility",
    description:
      "Making sure a site is fast, findable, and usable by everyone — not just functional.",
    skills: [
      "SEO optimization",
      "Accessibility (WCAG-aligned)",
      "QA testing",
      "Performance auditing",
      "Cross-browser & cross-device testing",
    ],
  },
];
