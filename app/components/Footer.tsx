import Logo from "./Logo";
import { SOCIALS } from "@/lib/data/socials";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-paper-2)] pb-8 text-[var(--color-ink)]/70">
      <div className="container-x">
        <div className="hairline mb-8 bg-[var(--color-ink)]/15" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-[var(--color-ink)]">
            <Logo className="h-6 w-auto" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/70">
              © {new Date().getFullYear()} Emmanuel Doji
            </p>
          </div>
          <ul className="flex flex-wrap gap-5 font-mono text-xs uppercase tracking-[0.18em] [&_a]:inline-block [&_a]:py-1.5">
            <li>
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                Twitter
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIALS.email}`} data-cursor="hover">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
