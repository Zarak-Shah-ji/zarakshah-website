import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <p className="text-sm text-muted">404 &mdash; page not here.</p>
      <p className="mt-4 text-sm">
        <Link href="/" className="underline underline-offset-4 decoration-rule">
          Back home
        </Link>
      </p>
    </div>
  );
}
