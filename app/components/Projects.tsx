"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectShowcase from "./ProjectShowcase";
import { PROJECTS, PROJECT_TAGS, type ProjectTag } from "@/lib/data/projects";

const FILTERS = ["All", ...PROJECT_TAGS] as const;
type Filter = "All" | ProjectTag;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="work" className="py-24 md:py-40">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="Selected work" title={"What\nI ship."} />

        <div role="group" aria-label="Filter projects" className="mb-14 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-11 cursor-pointer rounded-lg border px-4 font-mono text-xs transition-colors ${
                filter === f
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-paper)]"
                  : "border-[var(--color-line)] text-[var(--color-mute)] hover:text-[var(--color-ink)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-20 md:gap-32">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectShowcase key={p.slug} project={p} flip={i % 2 === 1} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
