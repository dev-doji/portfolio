"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/data/projects";

type Props = { project: Project; flip: boolean };

const SHOT_WIDTH = 1440;

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

export default function ProjectShowcase({ project, flip }: Props) {
  const reduced = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState(0);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 22 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 22 });

  // Pans the full-page screenshot through the frame, so people see the whole page move.
  const startPan = () => {
    const el = frame.current;
    if (!el) return;
    const rendered = (el.clientWidth / SHOT_WIDTH) * project.shot.height;
    setPan(Math.max(0, rendered - el.clientHeight));
  };
  const stopPan = () => {
    setPan(0);
    px.set(0);
    py.set(0);
  };
  // Touch screens can't hover, so the page scrolls itself once it's on screen.
  const onTouchView = (start: boolean) => {
    if (!window.matchMedia("(hover: none)").matches) return;
    if (start) startPan();
    else setPan(0);
  };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const canPan = project.shot.height > 900;
  const href = project.demo ?? project.github;

  return (
    <motion.article
      layout={!reduced}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ "--p": "var(--color-accent)" } as React.CSSProperties}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-2" : ""}`} style={{ perspective: 1400 }}>
        <motion.div
          onMouseEnter={startPan}
          onMouseMove={onMove}
          onMouseLeave={stopPan}
          onFocus={startPan}
          onBlur={stopPan}
          onViewportEnter={() => onTouchView(true)}
          onViewportLeave={() => onTouchView(false)}
          viewport={{ amount: 0.6 }}
          style={{ rotateX, rotateY }}
          className="group relative rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-2)] transition-[border-color,box-shadow] duration-500 hover:border-[var(--p)] hover:shadow-[0_24px_80px_-24px_var(--p)]"
        >
          <div className="flex items-center gap-3 border-b border-[var(--color-line)] px-3.5 py-2.5">
            <span aria-hidden className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
            </span>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-[var(--color-paper)] px-3 py-1 font-mono text-xs text-[var(--color-mute)] transition-colors hover:text-[var(--p)]"
              >
                <FiLock className="h-3 w-3 shrink-0" />
                <span className="truncate">{displayUrl(project.demo)}</span>
                <FiArrowUpRight className="ml-auto shrink-0" />
              </a>
            ) : (
              <span className="flex-1 font-mono text-xs text-[var(--color-mute)]">{project.title}</span>
            )}
          </div>

          <div ref={frame} className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-[var(--color-paper)]">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="block h-full"
            >
              <Image
                src={project.shot.src}
                alt={`${project.title} live site`}
                width={SHOT_WIDTH}
                height={project.shot.height}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full ease-in-out"
                style={{
                  transform: `translateY(${reduced ? 0 : -pan}px)`,
                  transitionProperty: "transform",
                  transitionDuration: pan ? `${Math.max(3, pan / 90)}s` : "0.9s",
                }}
              />
            </a>
            {canPan && !pan && (
              <span className="pointer-events-none absolute bottom-3 right-3 hidden rounded-full [@media(hover:hover)]:block bg-black/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-white backdrop-blur transition-opacity group-hover:opacity-0">
                Hover to scroll
              </span>
            )}
          </div>
        </motion.div>
      </div>

      <div className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-mute)]">
          <span className="text-[var(--p)]">{project.index}</span> · {project.year}
        </p>
        <h3 className="display mt-4 text-4xl md:text-5xl">{project.title}</h3>
        <p className="mt-2 font-mono text-xs text-[var(--color-mute)]">
          {project.role}
          {project.org && project.org !== project.title ? ` · ${project.org}` : ""}
        </p>
        <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-mute)]">{project.outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-[var(--color-line)] px-2 py-0.5 font-mono text-xs text-[var(--color-mute)]"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--p)] px-4 text-sm font-semibold text-[var(--color-paper)] transition-transform hover:-translate-y-0.5"
            >
              Visit site <FiArrowUpRight />
            </a>
          )}
          {project.caseStudy && (
            <Link
              href={`/case-studies/${project.caseStudy}`}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--color-line)] px-4 text-sm transition-colors hover:border-[var(--p)]"
            >
              Case study <FiArrowUpRight />
            </Link>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-line)] transition-colors hover:border-[var(--p)]"
            >
              <SiGithub className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
