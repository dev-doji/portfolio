import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowUpRight } from "react-icons/fi";
import { listPosts } from "@/lib/blog";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Emmanuel Doji on AI, fintech, education, and building products in Nigeria.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await listPosts();

  return (
    <main className="pt-28 md:pt-36">
      <section className="container-x pb-24 md:pb-40">
        <p className="eyebrow mb-4">Writing</p>
        <h1 className="display text-5xl md:text-7xl">Blog</h1>
        <p className="mt-5 max-w-xl text-lg text-[var(--color-mute)]">
          My thoughts on AI, fintech, education, and building products in Nigeria.
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 border-t border-[var(--color-line)] pt-8 text-[var(--color-mute)]">
            The first post is on its way.
          </p>
        ) : (
          <ul className="mt-16 border-t border-[var(--color-line)]">
            {posts.map(({ slug, frontmatter }) => (
              <li key={slug} className="border-b border-[var(--color-line)]">
                <Link href={`/blog/${slug}`} className="group grid gap-2 py-7 md:grid-cols-[180px_1fr_auto] md:gap-8">
                  <span className="font-mono text-xs text-[var(--color-mute)]">
                    {formatDate(frontmatter.date)}
                    <br />
                    <span className="text-[var(--color-accent)]">{frontmatter.topic}</span>
                  </span>
                  <span>
                    <span className="display block text-3xl transition-colors group-hover:text-[var(--color-accent)]">
                      {frontmatter.title}
                    </span>
                    <span className="mt-2 block text-[var(--color-mute)]">{frontmatter.summary}</span>
                  </span>
                  <FiArrowUpRight className="hidden transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </main>
  );
}
