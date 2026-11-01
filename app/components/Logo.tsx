type Props = {
  className?: string;
};

// The "ED" mark: three bars and an open D. Fills inherit `currentColor`
// so it adapts to any surface.
export default function Logo({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 398 294" fill="none" className={className} role="img" aria-label="ED">
      <g fill="currentColor">
        <rect width="166" height="38" />
        <rect y="127" width="135" height="38" />
        <rect y="256" width="166" height="38" />
      </g>
      <path d="M206 19 H251 A128 128 0 0 1 251 275 H206" stroke="currentColor" strokeWidth="38" />
    </svg>
  );
}
