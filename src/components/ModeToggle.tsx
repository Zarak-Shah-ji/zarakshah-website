"use client";

import { useMode } from "./ModeProvider";
import type { Mode } from "@/lib/mode";

const OPTIONS: { value: Mode; label: string }[] = [
  { value: "work", label: "Work" },
  { value: "life", label: "Life" },
];

export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div
      role="group"
      aria-label="Switch site mode"
      className="inline-flex items-center rounded-full border border-accent/35 p-[3px] text-xs tracking-wide uppercase transition-colors duration-300 hover:border-accent/60"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setMode(option.value)}
          aria-pressed={mode === option.value}
          className={`cursor-pointer rounded-full px-3 py-1 transition-all duration-300 ease-out active:scale-95 ${
            mode === option.value
              ? "bg-accent text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
