import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about remote roles, freelance work, or website operations projects.",
};

export default function ContactPage() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about what you need"
          description="Whether it's a remote role, freelance project, or a quick question — I read everything myself."
        />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactInfo />
        </Reveal>
      </div>
    </Section>
  );
}
