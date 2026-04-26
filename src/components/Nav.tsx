import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Nav() {
  return (
    <header className="flex items-baseline justify-between py-8">
      <Link
        href="/"
        className="text-base font-medium tracking-tight"
        aria-label="Home — Zarak Shah"
      >
        Zarak Shah
      </Link>
      <nav className="flex items-baseline gap-6 text-sm text-muted">
        <Link href="/writing">Writing</Link>
        <Link href="/projects">Projects</Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
