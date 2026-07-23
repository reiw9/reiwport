import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

export function InfoGrid({
  items,
  columns = 3,
  numbered = false,
}: {
  items: readonly { heading: string; body: string }[];
  columns?: 2 | 3;
  numbered?: boolean;
}) {
  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {items.map((item, i) => (
        <RevealItem key={item.heading}>
          <Card className="h-full">
            {numbered ? (
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : null}
            <h3 className="mt-3 text-base font-medium text-foreground">
              {item.heading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.body}
            </p>
          </Card>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
