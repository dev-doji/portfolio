import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FiArrowLeft } from "react-icons/fi";
import { getPost, listPosts } from "@/lib/blog";
import { mdxComponents } from "../../components/mdxComponents";
import Footer from "../../components/Footer";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await listPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: { title: post.frontmatter.title, description: post.frontmatter.summary, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <main className="pt-28 md:pt-36">
      <article className="container-x pb-24 md:pb-40">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)] hover:text-[var(--color-ink)]"
          >
            <FiArrowLeft /> All posts
          </Link>
          <p className="eyebrow mb-4 mt-12">
            {frontmatter.topic} · {frontmatter.date}
          </p>
          <h1 className="display text-5xl md:text-6xl">{frontmatter.title}</h1>
          <p className="mt-6 text-xl text-[var(--color-mute)]">{frontmatter.summary}</p>
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
