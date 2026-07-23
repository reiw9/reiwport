import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 ease-premium hover:border-foreground/20 hover:bg-surface-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
