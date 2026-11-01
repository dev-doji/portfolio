import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { getCaseStudy, listCaseStudies } from "@/lib/case-studies";
import { mdxComponents } from "../../components/mdxComponents";
import Footer from "../../components/Footer";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await listCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.frontmatter.title,
    description: study.frontmatter.problem,
    openGraph: {
      title: study.frontmatter.title,
      description: study.frontmatter.problem,
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const { frontmatter, content } = study;

  return (
    <main className="pt-28 md:pt-36">
      <section className="container-x pb-16 md:pb-24">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)] hover:text-[var(--color-ink)]"
          data-cursor="hover"
        >
          <FiArrowLeft /> All case studies
        </Link>

        <header className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow mb-4">
              {frontmatter.project} · {frontmatter.year} · {frontmatter.role}
            </p>
            <h1 className="display text-5xl leading-[0.95] md:text-7xl">{frontmatter.title}</h1>
          </div>
          <div className="flex gap-2">
            {frontmatter.github && (
              <a
                href={frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                data-cursor="hover"
              >
                <SiGithub /> Repo
              </a>
            )}
            {frontmatter.demo && (
              <a
                href={frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
                data-cursor="hover"
              >
                Live <FiArrowUpRight />
              </a>
            )}
          </div>
        </header>

        <ul className="mt-10 flex flex-wrap gap-1.5">
          {frontmatter.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-mute)]"
            >
              {s}
            </li>
          ))}
        </ul>

        {frontmatter.metrics && (
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-[var(--color-line)] py-10 md:grid-cols-4">
            {frontmatter.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  {m.label}
                </dt>
                <dd className="mt-2 display text-3xl md:text-4xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <article className="container-x pb-24 md:pb-40">
        <div className="mx-auto max-w-3xl">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
