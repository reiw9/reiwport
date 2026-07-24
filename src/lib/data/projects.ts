import type { ProjectSummary } from "@/types";

export const projects: ProjectSummary[] = [
  {
    slug: "jc-dental",
    title: "JC Dental",
    tagline: "Website operations & product improvements for a live dental clinic site",
    description:
      "A production dental clinic website where I own UI/UX, SEO, accessibility, CMS management, deployment, and QA — working hands-in-hand with AI tools.",
    role: "Website Operations & Product",
    year: "2026 — Present",
    tags: ["UI/UX", "SEO", "Accessibility", "Sanity CMS", "Supabase", "Cloudflare"],
    href: "/projects/jc-dental",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): ProjectSummary | undefined {
  return projects.find((project) => project.slug === slug);
}
