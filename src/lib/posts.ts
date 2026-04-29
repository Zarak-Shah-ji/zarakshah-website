import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Mode } from "./mode";

export type Post = {
  slug: string;
  title: string;
  date: string;
  mode: Mode;
  description: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/writing");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filepath = path.join(CONTENT_DIR, filename);
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        mode: ((data.mode as string) === "life" ? "life" : "work") as Mode,
        description: String(data.description ?? ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(
  slug: string
): { frontmatter: Post; content: string } | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: {
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      mode: ((data.mode as string) === "life" ? "life" : "work") as Mode,
      description: String(data.description ?? ""),
    },
    content,
  };
}

export function formatPostDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}
