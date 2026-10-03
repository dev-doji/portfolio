export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "WorldQuant University",
    role: "MSc Financial Engineering — in progress",
    period: "2026 — 2029",
    location: "Online",
    summary:
      "Studying quantitative finance alongside engineering work: financial modeling, derivative pricing, machine learning for finance, and portfolio management.",
    stack: ["Quantitative finance", "Derivative pricing", "ML for finance", "Portfolio management"],
  },
  {
    company: "Firm Foundation & Dominion Academy",
    role: "Proprietor",
    period: "2026 — Present",
    location: "Jos, Plateau State",
    summary:
      "Took on the proprietorship of the school my parents founded — nursery, primary, and a newly opened secondary section. Running academic operations, faculty oversight, and piloting SkoolBox, an offline-first AI tutor I build in my own time, as in-classroom infrastructure. Treating school operations like a product: clear systems, observable outcomes.",
    stack: ["Operations", "Curriculum", "Edu-tech rollout", "Stakeholder ops"],
  },
  {
    company: "Pagrin",
    role: "Senior Frontend Engineer",
    period: "2025 — 2026",
    location: "Remote",
    summary:
      "Led the frontend across a multi-app Turborepo: partners dashboard, embeddable web SDK, and the shared @pagrin/ai-chat, /analytics, /i18n, /ui packages. Designed and shipped the dashboard interface, the embeddable SDK surface, and the i18n + analytics pipeline that powers both apps.",
    stack: ["Next.js 16", "Turborepo", "next-intl", "PostHog", "React 19", "ECharts"],
  },
  {
    company: "Tokkenly",
    role: "Product Engineering Lead",
    period: "2025 — 2026",
    location: "Remote",
    summary:
      "Led product engineering for Tokkenly, a money and investing app built on Base: custodial dollar accounts, P2P sends, and naira conversion. Built the double-entry accounting interface and the send flows.",
    stack: ["Next.js", "React 19", "Tailwind CSS", "Base", "USDC", "Framer Motion"],
  },
  {
    company: "Tita Group",
    role: "Senior Frontend Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Lead frontend across Tita Group's product portfolio. Shipped TitaCenter (fintech super-app — on/off-ramp, exchange, invoicing, payment gateway, wallet) and Stim (real-money Web3 PvP gaming on Base, plus a separate Next.js + wagmi admin panel). Built the animation language, design tokens, and data-fetching patterns the engineering team extends.",
    stack: ["Next.js 16", "React 19", "TanStack Query", "Framer Motion", "viem", "wagmi"],
  },
  {
    company: "Fonio Labs",
    role: "Founder",
    period: "2025 — Present",
    location: "Jos, Nigeria",
    summary:
      "Fonio Labs is the technology studio I founded in October 2025. Its products are Rabit (embedded wallet SDK), Rhodium (WhatsApp checkout with auto-confirmed transfers), and SkoolBox (offline-first AI tutor). I also migrated foniolabs.xyz to Sanity + Next.js + Vercel: 9 document types, 8 reusable section blocks, custom Studio components (slug-with-auto-redirect, SEO preview, OG preview, presentation tool), and Claude Code + Sanity MCP wired in so I publish content by prompting. Lighthouse 95+ across the board.",
    stack: ["Next.js 16", "Sanity", "GROQ", "Claude Code MCP", "HubSpot", "Vercel"],
  },
  {
    company: "Independent / Open Source",
    role: "Full-Stack & Web3 Engineer",
    period: "2020 — Present",
    location: "Jos, Nigeria",
    summary:
      "Built and maintain Rabit, a MIT-licensed embedded wallet SDK with non-custodial Shamir-based key recovery — 12 packages, EVM + Solana, `create-rabit-app` scaffolder. Earlier: shipped wallets, on/off-ramps, PvP dApps, and fintech tools for clients across Africa and Europe.",
    stack: ["TypeScript", "Solidity", "viem", "@solana/web3.js", "Tauri", "Rust"],
  },
];
