interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className='flex max-w-3xl flex-col gap-4'>
      {eyebrow && (
        <span className='font-mono text-xs uppercase tracking-[0.18em] text-cobalt'>{eyebrow}</span>
      )}
      <h2 className='font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl'>
        {title}
      </h2>
      {subtitle && <p className='text-lg text-muted'>{subtitle}</p>}
    </div>
  );
}
