export default function TruckIllustration({ className = '', variant = 'light' }: { className?: string; variant?: 'light' | 'color' }) {
  const cab = variant === 'light' ? '#FFFFFF' : '#1E4E9D';
  const cabShade = variant === 'light' ? 'rgba(255,255,255,0.65)' : '#163C78';
  const box = variant === 'light' ? 'rgba(255,255,255,0.92)' : '#F1F5F9';
  const boxStroke = variant === 'light' ? 'rgba(255,255,255,0.5)' : '#E2E8F0';
  const accent = '#C62828';
  const wheel = variant === 'light' ? '#0F2A52' : '#1E293B';
  const ground = variant === 'light' ? 'rgba(255,255,255,0.25)' : 'rgba(30,78,157,0.15)';

  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* ground line */}
      <line x1="10" y1="188" x2="470" y2="188" stroke={ground} strokeWidth="2" strokeDasharray="4 6" />

      {/* trailer box */}
      <rect x="130" y="55" width="230" height="120" rx="10" fill={box} stroke={boxStroke} strokeWidth="1.5" />
      <line x1="205" y1="55" x2="205" y2="175" stroke={boxStroke} strokeWidth="1.5" />
      <line x1="280" y1="55" x2="280" y2="175" stroke={boxStroke} strokeWidth="1.5" />
      <rect x="140" y="66" width="40" height="14" rx="3" fill={accent} opacity="0.85" />

      {/* cab */}
      <path
        d="M30 175 V115 C30 105 37 97 47 97 H85 L120 130 V175 Z"
        fill={cab}
      />
      <path d="M85 97 L120 130 H85 Z" fill={cabShade} />
      {/* windshield */}
      <rect x="92" y="108" width="22" height="18" rx="3" fill="#0F2A52" opacity="0.55" />
      {/* headlight */}
      <circle cx="34" cy="150" r="4" fill="#D4A62A" />

      {/* connector */}
      <rect x="118" y="150" width="16" height="10" fill={wheel} opacity="0.5" />

      {/* wheels */}
      {[62, 148, 220, 320].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="180" r="16" fill={wheel} />
          <circle cx={cx} cy="180" r="6" fill={variant === 'light' ? '#fff' : '#F1F5F9'} opacity="0.8" />
        </g>
      ))}

      {/* motion lines */}
      <line x1="380" y1="120" x2="430" y2="120" stroke={ground} strokeWidth="3" strokeLinecap="round" />
      <line x1="380" y1="140" x2="415" y2="140" stroke={ground} strokeWidth="3" strokeLinecap="round" />
      <line x1="380" y1="160" x2="425" y2="160" stroke={ground} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
