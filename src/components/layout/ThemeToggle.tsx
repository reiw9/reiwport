"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-300 hover:bg-surface-hover",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden />
        ) : (
          <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
