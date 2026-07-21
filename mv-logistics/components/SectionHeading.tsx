export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-heading md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink-secondary">{description}</p>}
    </div>
  );
}
