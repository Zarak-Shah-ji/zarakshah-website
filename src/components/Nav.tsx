import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Nav() {
  return (
    <header className="flex items-baseline justify-between py-8">
      <Link
        href="/"
        className="text-2xl font-medium tracking-tight"
        aria-label="Home"
      >
        Home
      </Link>
      <nav className="flex items-baseline gap-6 text-lg text-muted">
        <ModeToggle />
      </nav>
    </header>
  );
}
