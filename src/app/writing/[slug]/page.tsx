import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatPostDate } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="py-12">
      <header className="mb-10">
        <h1 className="mb-2 text-2xl font-medium leading-tight">
          {post.frontmatter.title}
        </h1>
        <time dateTime={post.frontmatter.date} className="text-base text-muted">
          {formatPostDate(post.frontmatter.date)}
        </time>
      </header>
      <div className="prose">{content}</div>
    </article>
  );
}
