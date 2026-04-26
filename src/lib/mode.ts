export type Mode = "professional" | "personal";

export const DEFAULT_MODE: Mode = "professional";

export const STORAGE_KEY = "mode";

export function isMode(value: unknown): value is Mode {
  return value === "professional" || value === "personal";
}
