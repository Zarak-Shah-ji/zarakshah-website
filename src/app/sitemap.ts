import type { MetadataRoute } from "next";

const BASE = "https://zarakshah.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/writing`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
