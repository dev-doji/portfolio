import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  summary: string;
  date: string;
  topic: string;
  draft?: boolean;
};

const ROOT = path.join(process.cwd(), "content", "blog");

function toFrontmatter(slug: string, data: Record<string, unknown>): BlogFrontmatter {
  return {
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    // YAML parses bare dates into Date objects.
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
    topic: String(data.topic ?? "Engineering"),
    draft: Boolean(data.draft),
  };
}

export async function listPosts() {
  const files = await fs.readdir(ROOT).catch(() => [] as string[]);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const { data } = matter(await fs.readFile(path.join(ROOT, file), "utf8"));
        return { slug, frontmatter: toFrontmatter(slug, data) };
      })
  );
  return posts
    .filter((p) => !p.frontmatter.draft)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export async function getPost(slug: string) {
  try {
    const raw = await fs.readFile(path.join(ROOT, `${slug}.mdx`), "utf8");
    const { content, data } = matter(raw);
    const frontmatter = toFrontmatter(slug, data);
    return frontmatter.draft ? null : { slug, content, frontmatter };
  } catch {
    return null;
  }
}
