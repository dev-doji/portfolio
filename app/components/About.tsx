"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "5+", label: "Years shipping production software" },
  { value: "3", label: "Organizations I help run" },
  { value: "12", label: "Open-source packages I maintain" },
  { value: "1", label: "School under my proprietorship" },
];

const PILLARS = [
  {
    tag: "01 · Engineering",
    title: "I ship product, not slides.",
    body: "Five years of building production software across web, Web3, and AI-native tooling. At Pagrin I led the frontend as senior engineer — partners dashboard, embeddable web SDK, shared AI chat and analytics packages — across a multi-app Turborepo. Maintainer of Rabit, a MIT-licensed embedded wallet SDK with non-custodial key recovery.",
  },
  {
    tag: "02 · Operating",
    title: "I&apos;ve been on both sides of the table.",
    body: "Inside Tita Group I&apos;ve built TitaCenter (fintech: on-ramp, off-ramp, exchange, invoicing, wallet) and Stim (real-money Web3 PvP gaming on Base). I know what it takes to spec, ship, and operate a product, not just write the code. That perspective shapes every interface I design and every architectural decision I make.",
  },
  {
    tag: "03 · Education",
    title: "I&apos;m building schools my country needs.",
    body: "Firm Foundation &amp; Dominion Academy is one institution in Jos, Plateau State — nursery and primary, with a secondary section we just opened. My parents founded it; I recently took on its proprietorship, bringing the same systems thinking I use in software to running it. In my own time I&apos;m building SkoolBox, an offline-first AI tutor in Tauri + Rust, so children with intermittent internet can still learn with AI in the room.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={"Three vectors,\none operator."}
        />

        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative md:col-span-4 md:col-start-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper-2)]">
              <Image
                src="/profile-picture.png"
                alt="Emmanuel Doji"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                priority
                className="object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
              <span>Emmanuel Doji</span>
              <span>Jos, Nigeria</span>
            </figcaption>
          </motion.figure>

          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] md:text-2xl md:leading-snug">
              I build things that have to work — in production, and in the real world that
              leans on them. Code that ships to users. Businesses that have to make payroll.
              A school that opens its doors every morning. I live at the seam where engineering
              meets ownership, because that&apos;s where software stops being a demo and starts
              changing how people earn, build, and learn.
            </p>
          </div>

          <div className="md:col-span-10 md:col-start-2">
            <div className="hairline my-10" />
            <div className="grid gap-px bg-[var(--color-line)] md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <motion.article
                  key={p.tag}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[var(--color-paper)] p-8 md:p-10"
                >
                  <p className="eyebrow mb-6">{p.tag}</p>
                  <h3
                    className="display text-3xl leading-tight md:text-4xl"
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                  <p
                    className="mt-5 text-[15px] leading-relaxed text-[var(--color-mute)]"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </motion.article>
              ))}
            </div>
          </div>

          <div className="md:col-span-10 md:col-start-3">
            <div className="hairline mb-10 mt-6" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <dt className="display text-5xl md:text-6xl">{s.value}</dt>
                  <dd className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-mute)]">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
