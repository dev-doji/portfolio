"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data/projects";
import { SOCIALS } from "@/lib/data/socials";

type Line = { kind: "in" | "out"; text: string };

const HELP = "try: whoami · projects · open tokkenly · stack · blog · contact · clear";

const WHOAMI =
  "Emmanuel Doji. Frontend engineer, product lead at Tokkenly,\nfounder of Fonio Labs, school proprietor in Jos, Nigeria.";

function run(raw: string): string | null {
  const [cmd, arg] = raw.trim().toLowerCase().split(/\s+/);
  switch (cmd) {
    case "help":
      return HELP;
    case "whoami":
      return WHOAMI;
    case "projects":
      return PROJECTS.map((p) => `${p.index}  ${p.slug}`).join("\n");
    case "stack":
      return "React · Next.js · TypeScript · Tailwind · Framer Motion · viem · Tauri";
    case "contact":
      return SOCIALS.email;
    case "blog":
      window.location.href = "/blog";
      return "opening /blog ...";
    case "open": {
      const p = PROJECTS.find((x) => x.slug === arg);
      if (!p) return `open: no project called "${arg ?? ""}". Run: projects`;
      window.open(p.demo ?? p.github ?? "/#work", "_blank", "noopener");
      return `opening ${p.title} ...`;
    }
    case "sudo":
      return "permission granted. Let's talk: " + SOCIALS.email;
    default:
      return `command not found: ${cmd}. Run: help`;
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "in", text: "whoami" },
    { kind: "out", text: WHOAMI },
    { kind: "out", text: HELP },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [lines]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    setValue("");
    setCursor(-1);
    if (!text) return;
    setHistory((h) => [text, ...h]);
    if (text.toLowerCase() === "clear") return setLines([]);
    const out = run(text);
    setLines((l) => [...l, { kind: "in", text }, ...(out ? [{ kind: "out" as const, text: out }] : [])]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    const next = Math.min(history.length - 1, Math.max(-1, cursor + (e.key === "ArrowUp" ? 1 : -1)));
    setCursor(next);
    setValue(next === -1 ? "" : history[next]);
  };

  return (
    <div
      onClick={() => input.current?.focus()}
      data-lenis-prevent
      className="w-full overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-2)]/90 transition-colors focus-within:border-[var(--color-accent)] font-mono text-[13px] leading-relaxed shadow-[0_24px_80px_-32px_var(--color-accent)] backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[var(--color-mute)]" />
        <span className="ml-2 text-xs text-[var(--color-mute)]">doji@portfolio: ~</span>
      </div>
      <div ref={log} className="h-64 overflow-y-auto p-4">
        {lines.map((l, i) => (
          <p key={i} className={`whitespace-pre-wrap break-words ${l.kind === "in" ? "" : "mb-2 text-[var(--color-mute)]"}`}>
            {l.kind === "in" && <span className="text-[var(--color-accent)]">$ </span>}
            {l.text}
          </p>
        ))}
        <form onSubmit={submit} className="flex min-h-8 items-center">
          <label htmlFor="terminal-input" className="text-[var(--color-accent)]">$&nbsp;</label>
          <input
            ref={input}
            id="terminal-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command"
            className="min-w-0 flex-1 bg-transparent py-1 outline-none focus-visible:outline-none placeholder:text-[var(--color-mute)]/60"
          />
        </form>
      </div>
    </div>
  );
}
