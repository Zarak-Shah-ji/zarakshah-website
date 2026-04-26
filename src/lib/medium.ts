import { XMLParser } from "fast-xml-parser";
import type { Mode } from "./mode";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  date: Date;
  categories: string[];
  mode: Mode;
};

const FEED_URL = "https://medium.com/feed/@zarak-shah";

// Posts the author has explicitly placed in "life" — everything else is work.
const LIFE_TITLES = new Set<string>([
  "Renting from Airport Parking Facilities: A Unique Approach",
  "How to Identify Your Life Goals and Make Them a Reality",
]);

function classify(title: string): Mode {
  return LIFE_TITLES.has(title) ? "life" : "work";
}

type RawItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  category?: string | string[];
};

const parser = new XMLParser({
  ignoreAttributes: true,
  parseTagValue: false,
  trimValues: true,
});

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parsed = parser.parse(xml);
    const items: RawItem[] = parsed?.rss?.channel?.item ?? [];
    const list = Array.isArray(items) ? items : [items];

    return list
      .filter((item): item is RawItem => Boolean(item?.title && item?.link))
      .map((item) => {
        const title = String(item.title);
        const pubDate = String(item.pubDate ?? "");
        const date = new Date(pubDate);
        const categories = Array.isArray(item.category)
          ? item.category.map(String)
          : item.category
            ? [String(item.category)]
            : [];
        return {
          title,
          link: String(item.link),
          pubDate,
          date,
          categories,
          mode: classify(title),
        };
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch {
    return [];
  }
}

export function formatPostDate(date: Date): string {
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
