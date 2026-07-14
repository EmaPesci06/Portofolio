interface SectionHeadingProps {
  overline: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ overline, title, subtitle }: SectionHeadingProps) {
  return (
    <div data-reveal>
      <span className='text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400'>
        {overline}
      </span>
      <h2 className='mt-2 text-2xl font-bold tracking-tight sm:text-3xl'>{title}</h2>
      {subtitle && <p className='mt-2 text-slate-600 dark:text-slate-300'>{subtitle}</p>}
    </div>
  );
}
