export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  org?: string;
  stack: string[];
  outcome: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  /** Screenshot of the live site: `full` pans on hover when taller than the frame. */
  shot: { src: string; height: number };
  tags: ProjectTag[];
};

export const PROJECT_TAGS = ["Fintech", "Web3", "AI", "Open source", "EdTech", "SaaS"] as const;
export type ProjectTag = (typeof PROJECT_TAGS)[number];

export const PROJECTS: Project[] = [
  {
    slug: "tokkenly",
    index: "01",
    title: "Tokkenly",
    tagline:
      "A stablecoin neobank for Nigerians. One app to hold digital dollars, send and receive money, pay bills, buy and sell dollars with naira, gift stocks, and get exposure to US and Nigerian stocks.",
    year: "2025 — Present",
    role: "Product Lead",
    org: "Tokkenly",
    stack: ["Next.js", "React 19", "Tailwind CSS", "Base", "USDC", "Cloudflare Workers"],
    outcome:
      "I lead the product and its front end: the marketing site, the signed-in dashboard, and the staff back office, all from one monorepo with a shared brand system. Self-custodial by design, so every user's dollars and stocks sit in their own wallet.",
    demo: "https://tokkenly.com/",
    shot: { src: "/projects/tokkenly-full.webp", height: 3400 },
    tags: ["Fintech", "Web3"],
  },
  {
    slug: "bluebase",
    index: "02",
    title: "Bluebase",
    tagline:
      "The operating system for maritime companies. Vessels, crew, compliance and operational readiness in one system, replacing spreadsheets, WhatsApp groups and paper.",
    year: "2026 — Present",
    role: "Founder · Frontend lead",
    org: "Fonio Labs",
    stack: ["Next.js 16", "React 19", "Tailwind CSS", "Go", "pnpm workspaces", "Design system"],
    outcome:
      "Built the marketing site, a white-label dashboard prototype with per-company branding and onboarding, a platform console, and the shared design system behind them all.",
    demo: "https://bluebase.foniolabs.xyz/",
    shot: { src: "/projects/bluebase-full.webp", height: 3400 },
    tags: ["SaaS"],
  },
  {
    slug: "rhodium",
    index: "03",
    title: "Rhodium",
    tagline:
      "Sell on WhatsApp. Get paid without the screenshot. Conversational checkout with auto-confirmed bank transfers and Quai crypto rails.",
    year: "2025 — Present",
    role: "Lead Engineer · Solo build",
    org: "Fonio Labs",
    stack: ["Next.js", "React 19", "Tailwind CSS", "WhatsApp Cloud API", "Paystack", "Arbitrum", "Quai"],
    outcome:
      "Turns WhatsApp chats into automated checkouts. Virtual dedicated account numbers confirm transfers in ~2s with zero manual screenshot verification and instant naira ledger settlement.",
    demo: "https://www.userhodium.xyz/",
    shot: { src: "/projects/rhodium-full.webp", height: 3400 },
    tags: ["Fintech", "Web3"],
  },
    {
    slug: "stim",
    index: "04",
    title: "Stim",
    tagline:
      "Real-money Web3 PvP gaming and prediction marketplace. Tic-tac-toe in USDC on Base, with a minimax AI fallback when no opponent is online.",
    year: "2024 — 2025",
    role: "Full-stack engineer",
    org: "Tita Group",
    stack: ["React", "Vite", "viem", "wagmi", "RainbowKit", "Socket.IO", "Express", "Base"],
    outcome:
      "Wallet-connected PvP, real-money escrow, minimax + alpha-beta AI for solo play, full-stack i18n, PWA installability. Shipped admin panel separately on Next.js + wagmi.",
    demo: "https://stimapp.com/",
    shot: { src: "/projects/stim-hero.webp", height: 900 },
    tags: ["Web3"],
  },
  {
    slug: "rabit",
    index: "05",
    title: "Rabit",
    tagline:
      "Open-source embedded wallet SDK. 12-package Turborepo, EVM + Solana, 2-of-3 Shamir Secret Sharing for non-custodial recovery.",
    year: "2025",
    role: "Creator · Maintainer",
    org: "Fonio Labs · open source",
    stack: ["TypeScript", "Turborepo", "Changesets", "viem", "@solana/web3.js"],
    outcome:
      "MIT-licensed SDK with a `create-rabit-app` scaffolder, full CONTRIBUTING / SECURITY / CoC, and key recovery that doesn't require a custodian. The wallet layer that should have existed.",
    github: "https://github.com/dev-doji/rabit-wallet",
    demo: "https://rabitwallet.xyz/",
    caseStudy: "rabit-wallet",
    shot: { src: "/projects/rabit-full.webp", height: 3400 },
    tags: ["Web3", "Open source"],
  },
  {
    slug: "pagrin",
    index: "06",
    title: "Pagrin",
    tagline:
      "Partners dashboard + embeddable web SDK on a multi-app Turborepo with shared AI chat, analytics, and i18n packages.",
    year: "2025 — 2026",
    role: "Senior frontend engineer",
    org: "Pagrin",
    stack: ["Next.js 16", "Turborepo", "React 19", "next-intl", "@pagrin/ai-chat", "PostHog"],
    outcome:
      "Two product surfaces ship from one source of truth. Designed and shipped the partners dashboard UI, the embeddable web SDK, and the shared design system that powers both.",
    demo: "https://web-sdk-81ca.sandbox.pagrin.com/ai-assistant",
    caseStudy: "pagrin-frontend",
    shot: { src: "/projects/pagrin-hero.webp", height: 900 },
    tags: ["AI"],
  },
  {
    slug: "titacenter",
    index: "07",
    title: "TitaCenter",
    tagline:
      "Fintech super-app: on-ramp, off-ramp, exchange, trade, invoicing, payment-gateway, and wallet — one product, one team.",
    year: "2024 — Present",
    role: "Lead frontend engineer",
    org: "Tita Group",
    stack: ["Next.js 16", "React 19", "TanStack Query", "Framer Motion", "Recharts"],
    outcome:
      "Shipped seven financial product surfaces inside a single coherent interface. Built the design system, animation language, and data-fetching patterns the rest of the engineering team now extends.",
    demo: "https://titacenter.com",
    caseStudy: "titacenter",
    shot: { src: "/projects/titacenter-full.webp", height: 3400 },
    tags: ["Fintech"],
  },
  {
    slug: "schoolbox",
    index: "08",
    title: "SkoolBox",
    tagline:
      "Offline-first AI tutor for Nigerian classrooms with intermittent internet. Tauri 2 + Rust + local LLM. Built under Fonio Labs, designed for the school I run.",
    year: "2025 — Present",
    role: "Product engineer",
    org: "Fonio Labs · school pilot",
    stack: ["Tauri 2", "Rust", "React 18", "SQLite", "Qwen 3.8 LLM", "RAG", "KaTeX", "mammoth"],
    outcome:
      "A ~12MB desktop app that gives teachers AI-assisted lesson planning and students an AI tutor — without depending on the internet. Pilot deploys into the school I run.",
    demo: "https://skoolbox.xyz",
    caseStudy: "schoolbox-offline-ai",
    shot: { src: "/projects/schoolbox-full.webp", height: 3400 },
    tags: ["AI", "EdTech"],
  },
  {
    slug: "foniolabs",
    index: "09",
    title: "Fonio Labs",
    tagline:
      "The technology studio I founded, behind Bluebase, Rabit, Rhodium, and SkoolBox. Migrated its site to Sanity + Next.js with Claude Code MCP wired into the editor flow.",
    year: "2025 — Present",
    role: "Founder",
    org: "Technology studio",
    stack: ["Next.js 16", "Sanity", "GROQ", "Vercel", "Claude Code MCP", "HubSpot"],
    outcome:
      "I publish content by prompting Claude Code. Lighthouse 95+ across the board, zero SEO ranking drop after DNS cutover.",
    github: "https://github.com/foniolabs/website",
    demo: "https://foniolabs.xyz",
    caseStudy: "foniolabs-sanity-migration",
    shot: { src: "/projects/foniolabs-full.webp", height: 3400 },
    tags: ["AI"],
  },
];
