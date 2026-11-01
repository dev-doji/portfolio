"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Timeline" title={"Where I've\nbeen."} />

        <ol className="mx-auto max-w-4xl">
          {EXPERIENCE.map((e, i) => (
            <motion.li
              key={e.company + e.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative grid gap-4 border-t border-[var(--color-line)] py-10 md:grid-cols-[180px_1fr_auto] md:gap-8"
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                {e.period}
              </div>
              <div>
                <h3 className="display text-3xl md:text-4xl">{e.company}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-mute)]">
                  {e.role} · {e.location}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]">
                  {e.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-[var(--color-mute)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <span aria-hidden className="hidden self-start font-mono text-xs text-[var(--color-mute)] md:block">
                {String(EXPERIENCE.length - i).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
