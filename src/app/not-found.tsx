import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-display-sm font-semibold text-balance">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Button href="/" variant="secondary" className="mt-8" icon={<ArrowLeft className="h-4 w-4 -scale-x-100" />}>
        Back to home
      </Button>
    </Section>
  );
}
