import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS } from "../content";
import myself from "../assets/img/yoX2.webp";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className='w-full border-t border-outline-variant/10 bg-surface-low py-16'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <div className='flex items-center gap-3'>
            <span className='h-8 w-8 overflow-hidden rounded-full border border-outline-variant/30'>
              <img src={myself} alt='Emanuel Pesci' className='h-full w-full object-cover' />
            </span>
            <span className='font-display text-xl font-bold text-on-surface'>Emanuel Pesci</span>
          </div>
          <p className='text-on-surface-variant'>
            © {new Date().getFullYear()} Emanuel Pesci. {translations[language].footer}
          </p>
        </div>

        <div className='flex gap-8'>
          <a
            href={LINKS.linkedin}
            target='_blank'
            rel='noreferrer'
            className='font-mono text-xs uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-secondary'
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target='_blank'
            rel='noreferrer'
            className='font-mono text-xs uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-secondary'
          >
            GitHub
          </a>
          <a
            href={LINKS.email}
            className='font-mono text-xs uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-secondary'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
