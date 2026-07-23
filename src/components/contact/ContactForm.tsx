"use client";

import { useState, type FormEvent } from "react";
import { Send, CircleCheck, CircleAlert } from "lucide-react";
import { ButtonAsButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${inputClasses} resize-none`}
          placeholder="What are you working on, and how can I help?"
        />
      </div>

      <div className="mt-1 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ButtonAsButton type="submit" icon={<Send className="h-4 w-4" />}>
          Send message
        </ButtonAsButton>
        <p className="text-xs text-muted">
          Opens your email client with this pre-filled.
        </p>
      </div>

      <div aria-live="polite">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm text-emerald-500">
            <CircleCheck className="h-4 w-4" strokeWidth={1.5} />
            Your email client should now be open — thanks for reaching out.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <CircleAlert className="h-4 w-4" strokeWidth={1.5} />
            Please fill in every field with a valid email address.
          </p>
        ) : null}
      </div>
    </form>
  );
}
