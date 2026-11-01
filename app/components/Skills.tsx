"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[var(--color-paper-2)] py-24 text-[var(--color-ink)] md:py-40">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Stack"
          title={"Tools I\nreach for."}
          className="text-[var(--color-ink)]"
        />

        <div className="grid gap-px bg-[var(--color-mute)]/30 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-[var(--color-paper-2)] p-8 md:p-10"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="display text-3xl">{group.title}</h3>
                <span className="font-mono text-xs text-[var(--color-ink)]/50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-ink)]/30 px-3 py-1.5 text-xs font-mono text-[var(--color-ink)]/90 transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
