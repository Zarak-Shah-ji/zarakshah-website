import Link from "next/link";

export default function NotFound() {
  return (
    <div className="stagger py-24">
      <p className="text-base text-muted">404 &mdash; page not here.</p>
      <p className="mt-4 text-base">
        <Link
          href="/"
          className="underline underline-offset-4 decoration-rule transition-colors duration-300 hover:text-accent hover:decoration-accent"
        >
          Back home
        </Link>
      </p>
    </div>
  );
}
