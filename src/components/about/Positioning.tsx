import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const isList = [
  "Keeps things running after launch, not just at launch",
  "Doesn't ship anything unchecked, AI-written or not",
  "Catches what's confusing, slow, hard to use, or invisible on Google",
  "Methodical — verifies fixes rather than assuming they worked",
];

const isNotList = [
  "A software engineer, and I won't claim to be one",
  "Presenting a side project as a company or a team",
  "Claiming years of experience I don't have",
];

export function Positioning() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Clarity"
          title="So we're clear"
          description="Here's where I fit best — and where I don't."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-base font-medium text-foreground">What I am</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {isList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-base font-medium text-foreground">What I&rsquo;m not</h3>
            <div className="flex flex-1 flex-col justify-center">
              <ul className="mt-6 flex flex-col gap-4">
                {isNotList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" strokeWidth={2} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
