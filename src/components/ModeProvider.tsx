"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_MODE, type Mode, STORAGE_KEY, isMode } from "@/lib/mode";

type ModeContextValue = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggle: () => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE);

  useEffect(() => {
    const initial = document.documentElement.dataset.mode;
    if (isMode(initial)) {
      setModeState(initial);
    }
  }, []);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, []);

  const toggle = useCallback(() => {
    setMode(mode === "work" ? "life" : "work");
  }, [mode, setMode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
}
