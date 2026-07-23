import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-display-md font-semibold text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
