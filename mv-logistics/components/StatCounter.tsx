'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatCounter({
  value,
  suffix = '',
  label,
  note,
}: {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl font-bold text-white md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">{label}</div>
      {note && <div className="text-xs text-white/50">{note}</div>}
    </div>
  );
}
