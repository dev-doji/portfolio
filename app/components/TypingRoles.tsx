"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Founder @ Fonio Labs.",
  "Senior frontend engineer.",
  "Building for Tita Group.",
  "Open-source maintainer.",
  "Proprietor — Firm Foundation & Dominion Academy.",
  "AI-native builder.",
];

export default function TypingRoles() {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[index];
    const tick = () => {
      if (!deleting) {
        if (chars < word.length) {
          setChars((c) => c + 1);
        } else {
          window.setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (chars > 0) {
          setChars((c) => c - 1);
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % ROLES.length);
        }
      }
    };
    const delay = deleting ? 30 : 60;
    const id = window.setTimeout(tick, delay);
    return () => window.clearTimeout(id);
  }, [chars, deleting, index]);

  return (
    <span className="inline-flex items-baseline">
      <span aria-live="polite">{ROLES[index].slice(0, chars)}</span>
      <span className="ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] animate-pulse bg-[var(--color-ink)]" />
    </span>
  );
}
