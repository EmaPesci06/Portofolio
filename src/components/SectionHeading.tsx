interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className='flex max-w-3xl flex-col gap-3'>
      {eyebrow && <span className='font-mono text-xs uppercase tracking-[0.18em] text-cobalt'>{eyebrow}</span>}
      <h2 className='font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-[2.9rem]'>
        {title}
      </h2>
    </div>
  );
}
