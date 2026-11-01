"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import { SOCIALS } from "@/lib/data/socials";

const NOTABLE = [
  {
    repo: "rabit-wallet",
    summary: "MIT-licensed embedded wallet SDK. 12 packages, Shamir Secret Sharing, EVM + Solana.",
    href: "https://github.com/dev-doji/rabit-wallet",
  },
  {
    repo: "pagrin",
    summary: "Multi-app Turborepo with shared @pagrin/ai-chat, /analytics, /i18n, /ui packages.",
    href: "https://github.com/dev-doji/pagrin",
  },
  {
    repo: "foniolabs/website",
    summary: "Sanity + Next.js 16 migration with custom Studio components and Claude Code MCP.",
    href: "https://github.com/foniolabs/website",
  },
];

export default function OpenSource() {
  const username = "dev-doji";
  return (
    <section id="open-source" className="border-t border-[var(--color-line)] py-24 md:py-40">
      <div className="container-x">
        <SectionHeading index="07" eyebrow="Open source" title={"Code I've\nshipped publicly."} />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-2)] p-4">
              <Image
                src={`https://ghchart.rshah.org/000000/${username}`}
                alt={`${username} GitHub contribution graph`}
                width={840}
                height={140}
                unoptimized
                className="h-auto w-full"
              />
              <p className="mt-3 px-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                github.com/{username} · last 12 months
              </p>
            </div>

            <div className="mt-6">
              <Magnetic>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink"
                >
                  <SiGithub /> View GitHub profile <FiArrowUpRight />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Notable</p>
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {NOTABLE.map((n, i) => (
                <motion.li
                  key={n.repo}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                    data-cursor="hover"
                  >
                    <div>
                      <p className="font-mono text-sm">{n.repo}</p>
                      <p className="mt-1 text-sm text-[var(--color-mute)]">{n.summary}</p>
                    </div>
                    <FiArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
