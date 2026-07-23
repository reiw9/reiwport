import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const isList = [
  "Someone who can own the operational health of a real website",
  "Comfortable directing AI-assisted development and reviewing its output critically",
  "Strong on product thinking, UI/UX judgment, SEO, and accessibility",
  "Capable with Git/GitHub workflow, Cloudflare, Supabase, and Sanity CMS",
  "Methodical — I verify fixes rather than assume they worked",
];

const isNotList = [
  "A software engineer, and I won't claim to be one",
  "Someone who writes production code from scratch unaided",
  "Presenting a side project as a company or a team",
  "Claiming years of experience I don't have",
  "Interested in senior engineering roles — I'm aiming at product-adjacent, operational roles",
];

export function Positioning() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Clarity"
          title="What I am — and what I'm honestly not"
          description="Being precise about this upfront saves everyone's time."
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
          <div className="h-full rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-base font-medium text-foreground">What I&rsquo;m not</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {isNotList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" strokeWidth={2} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
