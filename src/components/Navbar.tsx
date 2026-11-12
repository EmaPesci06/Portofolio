import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const links = [
    { href: "#agentes", label: t.nav.agents },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className='fixed top-0 z-50 h-16 w-full border-b border-line bg-paper/85 backdrop-blur-md'>
      <nav className='mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5 sm:px-8'>
        <a href='#inicio' className='font-display text-lg font-bold tracking-tight'>
          Emanuel Pesci
        </a>

        <div className='hidden items-center gap-7 md:flex'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-muted transition-colors hover:text-ink'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='cursor-pointer rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-ink hover:text-ink'
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <a
            href={t.hero.cvLink}
            download='CV-Emanuel-Pesci.pdf'
            className='hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-cobalt sm:block'
          >
            {t.nav.downloadCv}
          </a>
        </div>
      </nav>
    </header>
  );
}
