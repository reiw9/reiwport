import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/experience/Timeline";
import { CTASection } from "@/components/home/CTASection";
import { timeline } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A timeline of dental study, independent website operations work on JC Dental, and ongoing project-driven learning.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section className="pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="An honest timeline, not a résumé of job titles"
            description="Three overlapping tracks: dental school, one real technical project, and the ongoing learning that ties them together."
          />
        </Reveal>
      </Section>

      <Section>
        <Timeline entries={[...timeline]} />
      </Section>

      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
