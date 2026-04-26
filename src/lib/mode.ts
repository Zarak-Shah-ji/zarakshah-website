export type Mode = "work" | "life";

export const DEFAULT_MODE: Mode = "work";

export const STORAGE_KEY = "mode";

export function isMode(value: unknown): value is Mode {
  return value === "work" || value === "life";
}
