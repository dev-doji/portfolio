import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowUpRight } from "react-icons/fi";
import { listCaseStudies } from "@/lib/case-studies";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Deep-dives on selected engineering work — Sanity migrations, embedded wallets, monorepos, and offline-first AI.",
};

export default async function CaseStudiesIndex() {
  const studies = await listCaseStudies();
  return (
    <main className="pt-32 md:pt-40">
      <section className="container-x pb-24 md:pb-40">
        <p className="eyebrow mb-6">Case studies</p>
        <h1 className="display text-6xl md:text-9xl">
          Deep dives,<br />
          <span className="italic text-[var(--color-mute)]">honestly written.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--color-mute)]">
          Selected work, with the constraints I hit, the decisions I made, and the metrics that
          came out the other side.
        </p>

        <div className="mt-16 border-t border-[var(--color-line)]">
          {studies.map(({ slug, frontmatter }, i) => (
            <Link
              key={slug}
              href={`/case-studies/${slug}`}
              className="group grid items-start gap-4 border-b border-[var(--color-line)] py-10 transition-colors hover:bg-[var(--color-paper-2)] md:grid-cols-[80px_1fr_auto] md:gap-10 md:py-14"
              data-cursor="hover"
            >
              <span className="font-mono text-xs text-[var(--color-mute)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="display text-3xl leading-tight md:text-5xl">{frontmatter.title}</h2>
                <p className="mt-3 max-w-2xl text-base text-[var(--color-mute)]">
                  {frontmatter.problem}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {frontmatter.stack.slice(0, 5).map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-[var(--color-mute)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <FiArrowUpRight className="hidden text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
