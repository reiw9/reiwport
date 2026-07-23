import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case study of JC Dental — the real, production website where I led UI/UX, SEO, accessibility, CMS management, deployment, and QA.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="One real project, treated properly"
          description="I'd rather show you one thing done honestly and in depth than a wall of half-finished demos."
        />
      </Reveal>

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            More in progress
          </p>
          <p className="mx-auto mt-3 max-w-md text-muted">
            I'm continuing to work on JC Dental and expect to take on
            additional projects as I move further into website operations and
            product roles.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
