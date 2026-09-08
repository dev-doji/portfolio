"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/data/projects";

type Props = { project: Project };

function formatDisplayUrl(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

export default function ProjectCard({ project }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const transform = useMotionTemplate`translate(calc(${springX}px - 50%), calc(${springY}px - 50%))`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const primaryUrl = project.demo ?? (project.caseStudy ? `/case-studies/${project.caseStudy}` : project.github);

  return (
    <motion.article
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-7 md:p-9 transition-all duration-500 hover:border-[var(--color-ink)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1"
    >
      <div>
        {/* Card Header: Index, Meta, and Year */}
        <div className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-5">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-paper-2)] font-mono text-xs font-medium text-[var(--color-ink)]">
              {project.index}
            </span>
            {project.org && (
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-mute)]">
                {project.role} · {project.org}
              </span>
            )}
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-mute)]">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <div className="mt-6">
          <h3 className="display text-4xl leading-[1.05] tracking-tight transition-colors group-hover:text-[var(--color-mute)] sm:text-5xl md:text-6xl">
            {primaryUrl ? (
              <a
                href={primaryUrl}
                target={project.demo || project.github ? "_blank" : "_self"}
                rel={project.demo || project.github ? "noopener noreferrer" : undefined}
                className="hover:underline underline-offset-4"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
        </div>

        {/* Live URL Pill / Card Tag */}
        {project.demo && (
          <div className="mt-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/url inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper-2)] px-3.5 py-1.5 font-mono text-xs text-[var(--color-ink)] transition-all hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              title={project.demo}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <FiGlobe className="h-3 w-3 shrink-0 opacity-60" />
              <span className="truncate font-medium">{formatDisplayUrl(project.demo)}</span>
              <FiArrowUpRight className="shrink-0 transition-transform group-hover/url:-translate-y-0.5 group-hover/url:translate-x-0.5" />
            </a>
          </div>
        )}

        {/* Tagline */}
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-mute)] sm:text-base">
          {project.tagline}
        </p>

        {/* Outcome */}
        <div className="mt-5 border-l-2 border-[var(--color-ink)] pl-4">
          <p className="text-xs leading-relaxed text-[var(--color-ink)] sm:text-sm">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="mt-8 pt-6 border-t border-[var(--color-line)]">
        {/* Stack tags */}
        <ul className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper-2)]/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-mute)]"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-paper)] transition-transform hover:-translate-y-0.5"
            >
              <span>Visit Site</span>
              <FiArrowUpRight />
            </a>
          )}

          {project.caseStudy && (
            <Link
              href={`/case-studies/${project.caseStudy}`}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-ink)] px-4 text-xs font-mono uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              <span>Case study</span>
              <FiArrowUpRight />
            </Link>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              title="GitHub Repository"
            >
              <SiGithub className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Floating cursor label tracking mouse on card */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-28 w-28 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-90 md:flex"
        style={{ transform }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
          {project.demo ? "Visit ↗" : project.caseStudy ? "Read ↗" : "View ↗"}
        </span>
      </motion.div>
    </motion.article>
  );
}
