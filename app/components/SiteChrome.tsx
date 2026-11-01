"use client";

import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import CommandPalette from "./CommandPalette";
import LenisProvider from "./LenisProvider";
import Nav from "./Nav";

/** Everything around the page. The CMS at /keystatic brings its own interface. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  if (usePathname().startsWith("/keystatic")) return <>{children}</>;
  return (
    <MotionConfig reducedMotion="user">
      <LenisProvider>
        <Nav />
        <CommandPalette />
        {children}
      </LenisProvider>
    </MotionConfig>
  );
}
