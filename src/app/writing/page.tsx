import type { Metadata } from "next";
import { fetchMediumPosts, formatPostDate } from "@/lib/medium";

export const metadata: Metadata = {
  title: "Writing",
  description: "Posts by Zarak Shah.",
};

export const revalidate = 3600;

export default async function WritingPage() {
  const posts = await fetchMediumPosts();

  return (
    <div className="py-12">
      <h1 className="mb-2 text-lg font-medium">Writing</h1>
      <p className="mb-10 text-base text-muted">
        Posts live on{" "}
        <a
          href="https://medium.com/@zarak-shah"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-rule"
        >
          Medium
        </a>
        . Listed here, sorted by what mode you&rsquo;re in.
      </p>

      {posts.length === 0 ? (
        <p className="text-base text-muted">
          {/* TODO: feed unreachable at build — retry on next revalidation */}
          Couldn&rsquo;t reach the feed. Try again in an hour.
        </p>
      ) : (
        <ul className="grid gap-6">
          {posts.map((post) => (
            <li
              key={post.link}
              className="border-t border-rule pt-4"
              data-show={post.mode}
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-base font-medium leading-snug">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date.toISOString()}
                    className="shrink-0 text-sm text-muted"
                  >
                    {formatPostDate(post.date)}
                  </time>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
