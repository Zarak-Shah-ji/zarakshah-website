"use client";

import { useMode } from "./ModeProvider";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div
      role="group"
      aria-label="Switch site mode"
      className="inline-flex items-center text-xs tracking-wide uppercase"
    >
      <button
        type="button"
        onClick={() => setMode("professional")}
        aria-pressed={mode === "professional"}
        className={
          mode === "professional"
            ? "text-foreground"
            : "text-muted hover:opacity-100"
        }
      >
        Professional
      </button>
      <span aria-hidden className="mx-2 text-muted">
        /
      </span>
      <button
        type="button"
        onClick={() => setMode("personal")}
        aria-pressed={mode === "personal"}
        className={
          mode === "personal"
            ? "text-foreground"
            : "text-muted hover:opacity-100"
        }
      >
        Personal
      </button>
    </div>
  );
}
