import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { jcDental } from "@/lib/data/jc-dental";

export function CaseStudyHeader() {
  const { meta } = jcDental;
  return (
    <div>
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge>{meta.year}</Badge>
          <Badge>{meta.status}</Badge>
          <Badge>{meta.role}</Badge>
        </div>
        <h1 className="mt-6 text-balance text-display-lg font-semibold text-foreground">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
          {meta.tagline}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {meta.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
