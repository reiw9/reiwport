import type { Metadata } from "next";
import { Server, Sparkles, Compass, Database, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SkillCategoryBlock } from "@/components/skills/SkillCategoryBlock";
import { CTASection } from "@/components/home/CTASection";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Web operations, AI-assisted development, product & UX thinking, CMS/data tooling, and SEO/accessibility/QA — categorized and grounded in real project work.",
};

const icons = [Server, Sparkles, Compass, Database, ShieldCheck];

export default function SkillsPage() {
  return (
    <>
      <Section className="pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I bring, organized honestly"
            description="Grouped by the kind of problem each skill actually solves, not by buzzword density."
          />
        </Reveal>
      </Section>

      <Section>
        <div>
          {skillCategories.map((category, i) => (
            <SkillCategoryBlock
              key={category.title}
              category={category}
              icon={icons[i] ?? Server}
              index={i}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
