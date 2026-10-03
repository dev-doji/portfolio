import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Nav from "./components/Nav";
import Loader from "./components/Loader";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanueldoji.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emmanuel Doji — Engineer, Operator, Educator",
    template: "%s — Emmanuel Doji",
  },
  description:
    "Founder of Fonio Labs, senior frontend engineer for Tita Group, open-source maintainer (Rabit), and proprietor of Firm Foundation & Dominion Academy in Jos. AI-native software, fintech, and education in one operator.",
  keywords: [
    "Emmanuel Doji",
    "Pagrin",
    "Tita Group",
    "Dominion Academy",
    "Firm Foundation School",
    "Rabit Wallet",
    "SkoolBox",
    "Fonio Labs",
    "Rhodium",
    "Tokkenly",
    "Frontend Engineer",
    "Web3 Engineer",
    "Next.js Engineer",
    "Claude Code",
    "AI-Native Developer",
    "Jos Nigeria",
  ],
  authors: [{ name: "Emmanuel Doji" }],
  creator: "Emmanuel Doji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Emmanuel Doji",
    title: "Emmanuel Doji — Engineer, Operator, Educator",
    description:
      "Founder of Fonio Labs · senior frontend engineer for Tita Group · maintainer of Rabit · proprietor of Firm Foundation & Dominion Academy. Shipping software, fintech, and education from Jos, Nigeria.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Emmanuel Doji" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Doji — Engineer, Operator, Educator",
    description:
      "Founder · senior frontend engineer · open-source maintainer · school proprietor. AI-native software, fintech, and education.",
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <LenisProvider>
          <Loader />
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
