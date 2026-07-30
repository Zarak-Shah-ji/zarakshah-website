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
    <div className="reveal flex items-center gap-6" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
      <div className="relative w-fit">
        <button
          type="button"
          onClick={handleClick}
          aria-label={`Switch to ${mode === "work" ? "life" : "work"} mode`}
          className="group cursor-pointer select-none rounded-full border-2 border-accent/40 p-[3px] transition-[border-color,transform] duration-300 hover:scale-[1.04] hover:border-accent/70 active:scale-[0.98]"
        >
          <div className="relative h-[7rem] w-[7rem] overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work_dp.jpeg"
              alt="Zarak Shah"
              className={`absolute inset-0 h-full w-full rounded-full object-cover transition-[opacity,transform] duration-500 group-hover:scale-105 ${
                mode === "work" ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/life_dp.jpeg"
              alt="Zarak Shah"
              className={`absolute inset-0 h-full w-full rounded-full object-cover transition-[opacity,transform] duration-500 group-hover:scale-105 ${
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
            key="work"
            className="reveal"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "2rem",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Zarak Shah
          </span>
        ) : (
          <span
            key="life"
            className="reveal"
            style={{
              fontFamily: "var(--font-caveat)",
              fontSize: "2.6rem",
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
