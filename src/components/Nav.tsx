import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Nav() {
  return (
    <header className="reveal flex items-baseline justify-between py-7">
      <Link
        href="/"
        className="link-sweep text-xl font-medium tracking-tight"
        aria-label="Home"
      >
        Home
      </Link>
      <nav className="flex items-baseline gap-6 text-base text-muted">
        <ModeToggle />
      </nav>
    </header>
  );
}
