import type { TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  {
    id: "dental",
    period: "4th Year · Ongoing",
    title: "Dental Student",
    subtitle: "Faculty of Dentistry, Turkey",
    description:
      "Full-time dental education, currently in the 4th year. Clinical training builds the same muscle that shows up in the web work below: careful diagnosis before treatment, precision under real constraints, and calm decision-making when something isn't going to plan.",
    points: [
      "Clinical case assessment and structured problem-solving",
      "Working under protocol, precision, and attention to detail",
      "Managing a demanding technical side-project alongside a full academic course load",
    ],
    status: "ongoing",
  },
  {
    id: "jc-dental",
    period: "~1 Year · Ongoing",
    title: "Website Operations — JC Dental",
    subtitle: "Independent, production website project",
    description:
      "Over the past year, I've taken ownership of the operational and product side of a real, live dental clinic website — working alongside AI tools as my primary development partner, and making the judgment calls a purely automated process can't make on its own.",
    points: [
      "Drove UI/UX improvements and booking-flow refinements based on real usability issues",
      "Owned SEO and accessibility passes across the site",
      "Managed Git/GitHub workflow, Cloudflare deployment, Supabase and Sanity CMS integration",
      "Ran security auditing, performance passes, and cross-device QA",
      "Wrote technical documentation and coordinated feature planning",
    ],
    status: "ongoing",
  },
  {
    id: "learning",
    period: "Ongoing",
    title: "Continuous Learning",
    subtitle: "Self-directed, project-driven",
    description:
      "Everything above was learned by doing — shipping real features on a real site, hitting real constraints, and figuring out the fix. That project-first learning style continues as the primary way I pick up new tools and concepts.",
    points: [
      "Learning in public through a live, real-world project rather than isolated tutorials",
      "Building working knowledge of modern deployment, CMS, and backend-as-a-service tools",
      "Developing a repeatable process for directing AI-assisted development responsibly",
    ],
    status: "ongoing",
  },
];
