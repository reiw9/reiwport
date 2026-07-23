import { Stethoscope, SearchCode, ClipboardCheck, RefreshCw } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const pairs = [
  {
    icon: SearchCode,
    step: "Assess",
    clinical: "Take a history, examine, don't assume the obvious cause is the real one.",
    technical: "Reproduce the issue, check logs and analytics before touching anything.",
  },
  {
    icon: Stethoscope,
    step: "Diagnose",
    clinical: "Form a differential, narrow it down with evidence.",
    technical: "Isolate the actual variable — a broken query, a missing label, a slow asset.",
  },
  {
    icon: ClipboardCheck,
    step: "Treat",
    clinical: "Apply the specific, appropriate treatment — not a generic fix.",
    technical: "Direct a targeted change with AI tooling, reviewing every step.",
  },
  {
    icon: RefreshCw,
    step: "Reassess",
    clinical: "Follow up, confirm the treatment actually worked.",
    technical: "QA the fix across devices, check it didn't break something else.",
  },
];

export function ProblemSolving() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="How I think"
          title="One diagnostic process, two very different rooms"
          description="I didn't bring coding skills into dentistry — I brought a dentistry mindset into web work."
        />
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pairs.map((pair) => (
          <RevealItem key={pair.step}>
            <Card className="flex h-full flex-col">
              <pair.icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-base font-medium text-foreground">
                {pair.step}
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <p className="text-muted">
                  <span className="font-mono text-xs uppercase tracking-wide text-foreground/60">
                    Clinic —{" "}
                  </span>
                  {pair.clinical}
                </p>
                <p className="text-muted">
                  <span className="font-mono text-xs uppercase tracking-wide text-foreground/60">
                    Website —{" "}
                  </span>
                  {pair.technical}
                </p>
              </div>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
