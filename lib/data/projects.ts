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
};

export const PROJECTS: Project[] = [
  {
    slug: "rhodium",
    index: "01",
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
  },
  {
    slug: "tokkenly",
    index: "02",
    title: "Tokkenly",
    tagline:
      "The bank for your digital dollars. Hold, spend, and invest USDC on Base with double-entry ledgers, gasless sends, and compliant fiat rails.",
    year: "2025 — 2026",
    role: "Product Engineering Lead",
    org: "Tokkenly",
    stack: ["Next.js", "React 19", "Tailwind CSS", "Base", "USDC", "Framer Motion", "Web3"],
    outcome:
      "Custodial dollar accounts on Base engineered to six decimal places. Built the double-entry accounting interface, zero-fee P2P sends, and upcoming licensed naira convert/bill pay.",
    demo: "https://tokkenly.com/",
  },
  {
    slug: "stim",
    index: "03",
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
  },
  {
    slug: "rabit",
    index: "04",
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
  },
  {
    slug: "pagrin",
    index: "05",
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
  },
  {
    slug: "titacenter",
    index: "06",
    title: "TitaCenter",
    tagline:
      "Fintech super-app: on-ramp, off-ramp, exchange, trade, invoicing, payment-gateway, and wallet — one product, one team.",
    year: "2024 — Present",
    role: "Lead frontend engineer",
    org: "Tita Group",
    stack: ["Next.js 16", "React 19", "TanStack Query", "Framer Motion", "Recharts"],
    outcome:
      "Shipped seven financial product surfaces inside a single coherent interface. Built the design system, animation language, and data-fetching patterns the rest of the engineering team now extends.",
    caseStudy: "titacenter",
  },
  {
    slug: "schoolbox",
    index: "07",
    title: "SkoolBox",
    tagline:
      "Offline-first AI tutor for Nigerian classrooms with intermittent internet. Tauri 2 + Rust + local LLM. Built under Fonio Labs, designed for the school I run.",
    year: "2025 — Present",
    role: "Product engineer",
    org: "Fonio Labs · school pilot",
    stack: ["Tauri 2", "Rust", "React 18", "SQLite", "KaTeX", "mammoth"],
    outcome:
      "A ~12MB desktop app that gives teachers AI-assisted lesson planning and students an AI tutor — without depending on the internet. Pilot deploys into the school I run.",
    caseStudy: "schoolbox-offline-ai",
  },
  {
    slug: "foniolabs",
    index: "08",
    title: "Fonio Labs",
    tagline:
      "The technology studio I founded, behind Rabit, Rhodium, and SkoolBox. Migrated its site to Sanity + Next.js with Claude Code MCP wired into the editor flow.",
    year: "2025 — Present",
    role: "Founder",
    org: "Technology studio",
    stack: ["Next.js 16", "Sanity", "GROQ", "Vercel", "Claude Code MCP", "HubSpot"],
    outcome:
      "I publish content by prompting Claude Code. Lighthouse 95+ across the board, zero SEO ranking drop after DNS cutover.",
    github: "https://github.com/foniolabs/website",
    demo: "https://foniolabs.xyz",
    caseStudy: "foniolabs-sanity-migration",
  },
];
