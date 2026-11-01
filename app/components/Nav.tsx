"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { SOCIALS } from "@/lib/data/socials";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mac, setMac] = useState(false);

  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.platform)), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[backdrop-filter,background-color,border-color] duration-500 ${
          scrolled
            ? "bg-[var(--color-paper)]/70 backdrop-blur-md border-b border-[var(--color-line)]"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="/#top" className="flex items-center gap-3" data-cursor="hover" aria-label="Emmanuel Doji — home">
            <Logo className="h-6 w-auto md:h-7" />
            <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)] sm:inline">
              Emmanuel Doji
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]"
                data-cursor="hover"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] px-3 py-2 font-mono text-xs text-[var(--color-mute)] transition-colors hover:text-[var(--color-ink)]"
            >
              Search
              <kbd className="rounded bg-[var(--color-paper-2)] px-1.5 py-0.5 text-xs">{mac ? "⌘ K" : "Ctrl K"}</kbd>
            </button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-[var(--color-paper-2)] pt-24 text-[var(--color-ink)] md:hidden"
          >
            <nav className="container-x mt-8 flex flex-1 flex-col gap-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block text-6xl"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-x mb-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em]">
              <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
              <span>Jos, NG</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
