"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.09 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-24 md:pb-36 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-float"
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-muted">
            Open to remote & freelance work
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-4xl text-balance text-center text-display-lg font-semibold text-foreground"
        >
          One real website sparked{" "}
          <span className="text-gradient">a curiosity I didn&rsquo;t expect.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-balance text-center text-sm leading-relaxed text-muted md:text-base"
        >
          I&rsquo;m a dental student. I keep coming back to building websites
          because I still haven&rsquo;t run out of things I want to improve.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mx-auto mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/projects" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            View Projects
          </Button>
          <Button href="/contact" variant="secondary" size="lg" icon={<Mail className="h-4 w-4" />}>
            Contact Me
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
