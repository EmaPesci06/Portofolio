interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: "primary" | "secondary";
}

const accentClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

export function SectionHeading({ title, subtitle, accent = "primary" }: SectionHeadingProps) {
  return (
    <div data-reveal className='flex flex-col gap-4'>
      <h2 className='font-display text-3xl font-bold tracking-tight sm:text-5xl'>{title}</h2>
      <div className={`h-1 w-24 rounded-full ${accentClasses[accent]}`} />
      {subtitle && <p className='max-w-xl text-on-surface-variant'>{subtitle}</p>}
    </div>
  );
}
