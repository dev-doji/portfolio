"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SHOTS = [
  {
    src: "/image-8.jpeg",
    alt: "Emmanuel teaching a web3 cohort to a room of students",
    caption: "Teaching the room",
  },
  {
    src: "/image-3.jpeg",
    alt: "Emmanuel on a conference panel discussion",
    caption: "On the panel — why products fail",
  },
  {
    src: "/image-5.jpeg",
    alt: "Emmanuel at a whiteboard explaining code",
    caption: "At the whiteboard",
  },
  {
    src: "/image-2.jpeg",
    alt: "Emmanuel at a Web3 builders gathering",
    caption: "With the builder community",
  },
];

export default function Gallery() {
  return (
    <section
      id="field"
      className="relative border-t border-[var(--color-line)] py-24 md:py-40"
    >
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="In the field"
          title={"On stage,\nin the room."}
        />

        <div className="grid gap-px bg-[var(--color-line)] md:grid-cols-2">
          {SHOTS.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden bg-[var(--color-paper-2)]"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <figcaption className="font-mono text-xs uppercase tracking-[0.18em] text-white">
                  {s.caption}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
