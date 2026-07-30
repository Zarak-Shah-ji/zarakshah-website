import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/posts";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Writing",
  description: "Posts by Zarak Shah.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="py-10">
      <h1 className="reveal mb-2 text-xl font-medium">Writing</h1>
      <p
        className="reveal mb-10 text-base text-muted"
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
      >
        Thoughts on data science, engineering, and life.
      </p>

      {posts.length === 0 ? (
        <p className="text-base text-muted">No posts yet.</p>
      ) : (
        <ul className="stagger grid gap-6">
          {posts.map((post) => (
            <li key={post.slug} data-show={post.mode} className="row">
              <Divider />
              <Link
                href={`/writing/${post.slug}`}
                className="row-link block pt-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="row-title text-base font-medium leading-snug">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-sm text-muted"
                  >
                    {formatPostDate(post.date)}
                  </time>
                </div>
                {post.description && (
                  <p className="mt-1 text-sm text-muted line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
