import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS } from "../content";

export function Footer() {
  const { language } = useLanguage();
  const link = "font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink";

  return (
    <footer className='border-t border-line px-4 py-10 sm:px-6'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left'>
        <p className='text-sm text-muted'>
          © {new Date().getFullYear()} Emanuel Pesci. {translations[language].footer}
        </p>
        <div className='flex gap-6'>
          <a href={LINKS.linkedin} target='_blank' rel='noreferrer' className={link}>LinkedIn</a>
          <a href={LINKS.github} target='_blank' rel='noreferrer' className={link}>GitHub</a>
          <a href={LINKS.email} className={link}>Email</a>
        </div>
      </div>
    </footer>
  );
}
