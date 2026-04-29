"use client";

import { useState } from "react";
import { useMode } from "./ModeProvider";

const RIPPLE_MS = 600;

export function ProfileToggle() {
  const { mode, toggle } = useMode();
  const [rippling, setRippling] = useState(false);

  function handleClick() {
    if (rippling) return;
    toggle();
    setRippling(true);
    setTimeout(() => setRippling(false), RIPPLE_MS);
  }

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-fit">
        <button
          type="button"
          onClick={handleClick}
          aria-label={`Switch to ${mode === "work" ? "life" : "work"} mode`}
          className="cursor-pointer select-none rounded-full border-2 border-accent/40 p-[3px] transition-[border-color,transform] duration-200 hover:scale-[1.03] hover:border-accent/70"
        >
          <div className="relative h-[136px] w-[136px] overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work_dp.jpeg"
              alt="Zarak Shah"
              className={`absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-300 ${
                mode === "work" ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/life_dp.jpeg"
              alt="Zarak Shah"
              className={`absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-300 ${
                mode === "life" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>
        {rippling && (
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-accent"
            style={{ animation: `dp-ripple ${RIPPLE_MS}ms ease-out forwards` }}
          />
        )}
      </div>

      <div className="flex flex-col justify-center">
        {mode === "work" ? (
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "2.1rem",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Zarak Shah
          </span>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-caveat)",
              fontSize: "2.8rem",
              lineHeight: 1.1,
            }}
          >
            Zarak
          </span>
        )}
      </div>
    </div>
  );
}
