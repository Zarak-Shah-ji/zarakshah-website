"use client";

import { useMode } from "./ModeProvider";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div
      role="group"
      aria-label="Switch site mode"
      className="inline-flex items-center rounded-full border border-accent/35 p-[3px] text-sm tracking-wide uppercase"
    >
      <button
        type="button"
        onClick={() => setMode("work")}
        aria-pressed={mode === "work"}
        className={`rounded-full px-3 py-1 transition-all duration-200 ${
          mode === "work"
            ? "bg-accent text-background"
            : "text-muted hover:opacity-80"
        }`}
      >
        Work
      </button>
      <button
        type="button"
        onClick={() => setMode("life")}
        aria-pressed={mode === "life"}
        className={`rounded-full px-3 py-1 transition-all duration-200 ${
          mode === "life"
            ? "bg-accent text-background"
            : "text-muted hover:opacity-80"
        }`}
      >
        Life
      </button>
    </div>
  );
}
