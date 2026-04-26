"use client";

import { useMode } from "./ModeProvider";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div
      role="group"
      aria-label="Switch site mode"
      className="inline-flex items-center text-sm tracking-wide uppercase"
    >
      <button
        type="button"
        onClick={() => setMode("work")}
        aria-pressed={mode === "work"}
        className={
          mode === "work" ? "text-foreground" : "text-muted hover:opacity-100"
        }
      >
        Work
      </button>
      <span aria-hidden className="mx-2 text-muted">
        /
      </span>
      <button
        type="button"
        onClick={() => setMode("life")}
        aria-pressed={mode === "life"}
        className={
          mode === "life" ? "text-foreground" : "text-muted hover:opacity-100"
        }
      >
        Life
      </button>
    </div>
  );
}
