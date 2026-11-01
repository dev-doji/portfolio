"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import DotField from "./DotField";
import Magnetic from "./Magnetic";
import Terminal from "./Terminal";
import TypingRoles from "./TypingRoles";
import { SOCIALS } from "@/lib/data/socials";

const LINKS = [
  { href: SOCIALS.github, label: "GitHub", icon: <SiGithub /> },
  { href: SOCIALS.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
  { href: SOCIALS.twitter, label: "X", icon: <SiX /> },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 md:pt-32">
      <DotField />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <motion.div
          className="min-w-0 lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Frontend engineer · Jos, Nigeria
          </p>
          <h1 className="display mt-6 text-[3.4rem] sm:text-[5rem] xl:text-[6.5rem]">
            I build interfaces people enjoy using.
          </h1>
          <p className="mt-6 font-mono text-base text-[var(--color-accent)] md:text-lg">
            <TypingRoles />
          </p>
          <p className="mt-5 max-w-xl text-base text-[var(--color-mute)] md:text-lg">
            I&apos;m Emmanuel Doji, product lead at{" "}
            <span className="text-[var(--color-ink)]">Tokkenly</span>, founder of{" "}
            <span className="text-[var(--color-ink)]">Fonio Labs</span>, and proprietor of a school in
            Jos. Most of my work is in the front end, in fintech, Web3 and education.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#work" className="btn-ink">
                See the work <FiArrowDown />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-outline">
                Get in touch <FiArrowUpRight />
              </a>
            </Magnetic>
          </div>

          <ul className="mt-8 flex items-center gap-5 font-mono text-xs text-[var(--color-mute)]">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-[var(--color-ink)]"
                >
                  {l.icon} {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="min-w-0 lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
