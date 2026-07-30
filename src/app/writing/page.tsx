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
    <div className="py-12">
      <h1 className="mb-2 text-2xl font-medium">Writing</h1>
      <p className="mb-10 text-lg text-muted">
        Thoughts on data science, engineering, and life.
      </p>

      {posts.length === 0 ? (
        <p className="text-lg text-muted">No posts yet.</p>
      ) : (
        <ul className="grid gap-6">
          {posts.map((post) => (
            <li key={post.slug} data-show={post.mode}>
              <Divider />
              <Link href={`/writing/${post.slug}`} className="block pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-medium leading-snug">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-base text-muted"
                  >
                    {formatPostDate(post.date)}
                  </time>
                </div>
                {post.description && (
                  <p className="mt-1 text-base text-muted line-clamp-2">
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
