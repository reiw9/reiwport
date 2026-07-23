import { Reveal } from "@/components/ui/Reveal";

const sections = [
  {
    index: "01",
    title: "Where I started",
    body: "Dental training runs on structured problem-solving: take a history, examine carefully, form a differential, treat, and reassess. None of that involved a computer — but the underlying discipline of not guessing, and not treating a symptom you haven't actually diagnosed, turned out to transfer almost directly.",
  },
  {
    index: "02",
    title: "How the project actually started",
    body: "JC Dental needed real, ongoing attention — the kind a small live website always needs: things that were confusing for patients, content that was out of date, pages that weren't showing up in search. I started fixing what I could see, using AI tools to help me build and debug, and kept going because the problems kept being genuinely interesting.",
  },
  {
    index: "03",
    title: "What clicked",
    body: "A confusing booking flow and an unclear clinical symptom aren't that different to investigate: look at what's actually happening, isolate the variable that's causing it, make one change, and verify the result before moving to the next thing. That mindset — patient, methodical, evidence-first — is what let me get genuinely useful at this without a CS background.",
  },
  {
    index: "04",
    title: "Where that leaves me",
    body: "I'm not going to market myself as a software engineer, because I'm not one. What I am is someone who can own the operational and product side of a website end-to-end — plan the fix, direct the AI-assisted build, verify it works, and document it — and I'd like to keep doing exactly that, professionally, alongside finishing dental school.",
  },
];

export function Narrative() {
  return (
    <div className="flex flex-col gap-16">
      {sections.map((section, i) => (
        <Reveal key={section.index} delay={i * 0.05}>
          <div className="grid grid-cols-1 gap-6 border-t border-border pt-10 md:grid-cols-[120px_1fr] md:gap-10">
            <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
              <span className="font-mono text-sm text-accent">{section.index}</span>
              <h3 className="text-lg font-medium text-foreground md:hidden">
                {section.title}
              </h3>
            </div>
            <div>
              <h3 className="hidden text-2xl font-medium text-foreground md:block">
                {section.title}
              </h3>
              <p className="mt-4 max-w-2xl text-balance leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
