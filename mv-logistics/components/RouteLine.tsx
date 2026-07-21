'use client';

/**
 * Signature motif: a dashed shipment route with a travelling dot.
 * Represents "goods in transit" — the core idea of the brand — and
 * recurs across the hero, coverage, and industries sections.
 */
export default function RouteLine({
  className = '',
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const stroke = variant === 'light' ? 'rgba(255,255,255,0.55)' : 'rgba(30,78,157,0.35)';
  const dot = variant === 'light' ? '#D4A62A' : '#C62828';

  return (
    <svg
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        id="route-path"
        d="M2 90 C 100 20, 220 110, 320 50 S 520 10, 598 60"
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      <circle r="5" fill={dot}>
        <animateMotion dur="6s" repeatCount="indefinite" path="M2 90 C 100 20, 220 110, 320 50 S 520 10, 598 60" />
      </circle>
    </svg>
  );
}
