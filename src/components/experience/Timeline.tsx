import { Reveal } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/types";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
      />
      <ol className="flex flex-col gap-14">
        {entries.map((entry, i) => (
          <li key={entry.id} className="relative">
            <Reveal delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[32px_1fr] sm:gap-8">
                <div className="hidden sm:flex sm:justify-center">
                  <span className="relative mt-1.5 flex h-3 w-3">
                    {entry.status === "ongoing" ? (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    ) : null}
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-background bg-accent" />
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {entry.period}
                    </span>
                    {entry.status === "ongoing" ? (
                      <span className="rounded-full bg-surface-hover px-2.5 py-0.5 text-xs text-muted">
                        Ongoing
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{entry.subtitle}</p>
                  <p className="mt-5 max-w-2xl text-balance leading-relaxed text-muted">
                    {entry.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
