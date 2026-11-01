import type { MetadataRoute } from "next";
import { listPosts } from "@/lib/blog";
import { listCaseStudies } from "@/lib/case-studies";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanueldoji.xyz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const studies = await listCaseStudies();
  const posts = await listPosts();
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.frontmatter.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...studies.map((s) => ({
      url: `${SITE_URL}/case-studies/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
