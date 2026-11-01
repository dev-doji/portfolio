"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";
import { SOCIALS } from "@/lib/data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-paper-2)] py-32 text-[var(--color-ink)] md:py-48"
    >
      <div className="container-x">
        <p className="eyebrow mb-6 text-[var(--color-ink)]/60">08 · Get in touch</p>
        <RevealText
          as="h2"
          className="display text-5xl leading-[0.95] sm:text-6xl md:text-8xl lg:text-9xl"
          text={"Have something\nbuilt right."}
        />
        <div className="mt-10 grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <p className="max-w-xl text-lg text-[var(--color-ink)]/70 md:text-xl">
            I&apos;m always open to conversations — partnerships, advisory, speaking, collaborations
            across software, fintech, and education. The fastest way is email; the deepest is a
            phone call.
          </p>
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-44 shrink-0 md:w-56"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-ink)]/15">
              <Image
                src="/image-4.jpeg"
                alt="Emmanuel Doji"
                fill
                sizes="(min-width: 768px) 224px, 176px"
                className="object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
              />
            </div>
          </motion.figure>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <motion.a
            href={`mailto:${SOCIALS.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block w-fit font-display text-3xl underline decoration-[var(--color-ink)]/40 underline-offset-8 transition-colors hover:decoration-[var(--color-ink)] md:text-5xl"
            data-cursor="hover"
          >
            {SOCIALS.email}
          </motion.a>

          <Magnetic strength={0.45}>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="grid h-32 w-32 place-items-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] md:h-40 md:w-40"
            >
              <span className="text-center font-mono text-xs uppercase tracking-[0.18em]">
                Write me
                <br />
                <FiArrowUpRight className="ml-1 inline" />
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[var(--color-ink)]/15 pt-10 md:grid-cols-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/50">
              Based in
            </p>
            <p className="mt-2 font-display text-2xl">Jos, Nigeria</p>
            <p className="text-sm text-[var(--color-ink)]/60">WAT · UTC+1</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/50">
              Phone
            </p>
            <p className="mt-2 font-display text-2xl">{SOCIALS.phone}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/50">
              I respond to
            </p>
            <p className="mt-2 font-display text-2xl">Real work</p>
            <p className="text-sm text-[var(--color-ink)]/60">
              Partnerships · advisory · interesting problems
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/50">
              Response time
            </p>
            <p className="mt-2 font-display text-2xl">{"< 24h"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
