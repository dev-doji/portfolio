"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Magnetic from "./Magnetic";
import TypingRoles from "./TypingRoles";
import { SOCIALS } from "@/lib/data/socials";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 md:pt-36"
    >
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="eyebrow">Jos, Nigeria · Builder · Operator · Educator</span>
          <span className="font-mono text-xs text-[var(--color-mute)]">
            <span className="mr-2 inline-block h-2 w-2 translate-y-[0.15em] rounded-full bg-emerald-500" />
            Shipping with Fonio Labs · Tita Group · Firm Foundation &amp; Dominion Academy
          </span>
        </div>
      </div>

      <div className="container-x mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          <h1 className="display text-[4rem] leading-[0.9] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem]">
            <span className="block reveal-line">
              <motion.span
                className="block italic text-[var(--color-mute)]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                I&apos;m
              </motion.span>
            </span>
            <span className="block reveal-line">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                Emmanuel Doji.
              </motion.span>
            </span>
          </h1>

          <div className="mt-10 grid grid-cols-1 items-end gap-10 md:mt-16 md:grid-cols-[1fr_auto]">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
                Currently
              </p>
              <p className="font-display text-2xl leading-tight md:text-3xl">
                <TypingRoles />
              </p>
              <p className="mt-6 max-w-md text-base text-[var(--color-mute)] md:text-lg">
                Founder of <span className="text-[var(--color-ink)]">Fonio Labs</span>,
                senior frontend engineer shipping interfaces for{" "}
                <span className="text-[var(--color-ink)]">Tita Group</span>, maintainer of
                open-source SDKs, and proprietor of a school in Jos, Plateau State. I build at
                the seam of software, business, and education — and I write code with Claude
                Code in the loop every single day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a href="#work" className="btn-ink">
                  See the work
                  <FiArrowDown />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn-outline">
                  Start a conversation
                  <FiArrowUpRight />
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container-x mt-20 pb-10 md:mt-32 md:pb-14">
        <div className="hairline mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.18em]">
            <li>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                data-cursor="hover"
              >
                <SiGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                data-cursor="hover"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                data-cursor="hover"
              >
                <SiX /> Twitter
              </a>
            </li>
          </ul>
          <div className="font-mono text-xs text-[var(--color-mute)]">
            <pre className="hidden md:block">{`> writing code, running businesses_`}</pre>
          </div>
          <motion.div
            initial={{ y: -4 }}
            animate={{ y: 4 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]"
          >
            Scroll <FiArrowDown />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
