"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ROLES = [
  {
    org: "Nursery & Primary",
    location: "Jos, Plateau State",
    role: "Proprietor",
    since: "2026",
    description:
      "The established core of Firm Foundation &amp; Dominion Academy, founded by my parents. I recently took on its proprietorship — bringing systems thinking to admissions, reporting, parent communication, and modern classroom infrastructure.",
    focus: [
      "Foundational literacy and numeracy",
      "Structured parent reporting",
      "Modern classroom infrastructure",
    ],
  },
  {
    org: "Secondary",
    location: "Jos, Plateau State",
    role: "Proprietor",
    since: "2026",
    description:
      "The newest section of the school, launched this year. Standing it up means owning the academic calendar, faculty operations, and piloting SkoolBox as the in-classroom AI tutor.",
    focus: [
      "Curriculum coverage tracking",
      "Teacher workload reduction via AI",
      "Offline-first classroom tooling",
    ],
  },
];

const PRINCIPLES = [
  {
    title: "Run it, then write it.",
    body: "I don&apos;t design for users I haven&apos;t observed. Every system I ship gets used by people I can name — students, partners, marketing operators, traders.",
  },
  {
    title: "Software is a multiplier, not a magic trick.",
    body: "AI-native tooling lets a small team operate like a large one. Claude Code is in my flow every day; at Fonio Labs, the studio I founded, Sanity MCP runs the publishing pipeline so I ship content by prompting. The leverage is real.",
  },
  {
    title: "Ship to where people actually are.",
    body: "SkoolBox is offline-first because the school that needs it most doesn&apos;t have reliable broadband. TitaCenter speaks Naira-first because that&apos;s where its users live. Constraint becomes feature.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative border-t border-[var(--color-line)] py-24 md:py-40"
    >
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Leadership & Education"
          title={"What I'm\nbuilding offline."}
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 md:col-start-3">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] md:text-2xl md:leading-snug">
              Code is one half of my work. The other half is operating Firm Foundation &amp;
              Dominion Academy — the school my parents founded in Jos, Plateau State — with the
              same rigor I bring to a codebase: clear systems, observable outcomes, and tools
              that let small teams move like large ones.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-[var(--color-line)] md:grid-cols-2">
          {ROLES.map((r, i) => (
            <motion.article
              key={r.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-paper)] p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  {r.role} · since {r.since}
                </p>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  {r.location}
                </span>
              </div>
              <h3 className="display mt-4 text-4xl md:text-5xl">{r.org}</h3>
              <p
                className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink)]"
                dangerouslySetInnerHTML={{ __html: r.description }}
              />
              <ul className="mt-6 space-y-2">
                {r.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-mute)]">
                    <span aria-hidden className="mt-2 inline-block h-px w-4 bg-[var(--color-ink)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow mb-8">Operating principles</p>
          <div className="grid gap-px bg-[var(--color-line)] md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--color-paper)] p-8 md:p-10"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="display mt-4 text-2xl md:text-3xl"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="mt-4 text-[15px] leading-relaxed text-[var(--color-mute)]"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
