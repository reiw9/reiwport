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
    body: "A dental practice needed a real website. I said yes without really knowing what I was getting into, and somewhere between the first page and the hundredth small decision, I got hooked.",
  },
  {
    index: "03",
    title: "What clicked",
    body: "Getting a booking flow to actually work and figuring out an unclear clinical symptom aren't that different to investigate: look at what's actually happening, isolate the variable that's causing it, make one change, and verify the result before moving to the next thing. That approach — patient, methodical, evidence-first — is what made me useful at this without a CS background.",
  },
  {
    index: "04",
    title: "Where that leaves me",
    body: "I'm not going to market myself as a software engineer, because I'm not one. What I am is someone who can take a website from an idea to something real and working — and keep it that way. I'd like to keep doing exactly that, professionally, alongside finishing dental school.",
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
