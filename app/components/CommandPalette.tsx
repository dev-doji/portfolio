"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import { SOCIALS } from "@/lib/data/socials";

type Item = { label: string; hint: string; href: string };

const ITEMS: Item[] = [
  { label: "About", hint: "Section", href: "/#about" },
  { label: "Work", hint: "Section", href: "/#work" },
  { label: "Experience", hint: "Section", href: "/#experience" },
  { label: "Blog", hint: "Page", href: "/blog" },
  { label: "Case studies", hint: "Page", href: "/case-studies" },
  { label: "Contact", hint: "Section", href: "/#contact" },
  ...PROJECTS.map((p) => ({ label: p.title, hint: "Project", href: p.demo ?? p.github ?? "/#work" })),
  { label: "GitHub", hint: "Link", href: SOCIALS.github },
  { label: "LinkedIn", hint: "Link", href: SOCIALS.linkedin },
  { label: "X", hint: "Link", href: SOCIALS.twitter },
];

export const OPEN_PALETTE_EVENT = "open-command-palette";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const results = useMemo(
    () => ITEMS.filter((i) => i.label.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      returnFocus.current?.focus();
      return;
    }
    returnFocus.current = document.activeElement as HTMLElement;
    setQuery("");
    setActive(0);
    requestAnimationFrame(() => input.current?.focus());
  }, [open]);

  const go = (item?: Item) => {
    if (!item) return;
    setOpen(false);
    if (item.href.startsWith("http")) window.open(item.href, "_blank", "noopener");
    else window.location.href = item.href;
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Arrow keys move through results, so focus stays in the dialog.
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      go(results[active]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[150] grid place-items-start justify-items-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ y: -12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-2)]"
          >
            <input
              ref={input}
              id="palette-input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Search projects and pages"
              aria-label="Search projects and pages"
              role="combobox"
              aria-expanded
              aria-controls="palette-results"
              aria-activedescendant={results[active] ? `palette-option-${active}` : undefined}
              autoComplete="off"
              className="w-full border-b border-[var(--color-line)] bg-transparent px-4 py-3.5 text-[var(--color-ink)] outline-none placeholder:text-[var(--color-mute)] focus:border-[var(--color-accent)] focus-visible:outline-none"
            />
            <ul id="palette-results" role="listbox" data-lenis-prevent className="max-h-80 overflow-y-auto p-2">
              {results.map((item, i) => (
                <li key={item.label} role="presentation">
                  <button
                    id={`palette-option-${i}`}
                    type="button"
                    role="option"
                    aria-selected={i === active}
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(item)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${
                      i === active ? "bg-[var(--color-accent)] text-[var(--color-paper)]" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs opacity-70">{item.hint}</span>
                  </button>
                </li>
              ))}
              {!results.length && (
                <li role="presentation" className="px-3 py-4 text-sm text-[var(--color-mute)]">No matches for that search.</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
