"use client";

import { motion, type Variants } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
};

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function RevealText({
  text,
  className,
  as: As = "h2",
  delay = 0,
  stagger = 0.08,
}: Props) {
  const lines = text.split("\n");
  return (
    <As className={className}>
      {lines.map((line, i) => (
        // The mask is what gets observed: the hidden line sits outside it, so it never intersects.
        <motion.span
          key={i}
          className="reveal-line"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.span className="block" variants={lineVariants} custom={i * (stagger / 0.08) + delay}>
            {line || " "}
          </motion.span>
        </motion.span>
      ))}
    </As>
  );
}
