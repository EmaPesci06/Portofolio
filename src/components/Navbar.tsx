import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../content";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const t = translations[language];

  const links = [
    { href: "#ia", label: t.nav.ai },
    { href: "#ecommerce", label: t.nav.ecommerce },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#contacto", label: t.nav.contact },
  ];

  const iconButton =
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-ink hover:text-ink";

  return (
    <header className='fixed top-0 z-50 w-full border-b border-line bg-paper/90 backdrop-blur-md'>
      <nav className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6'>
        <a href='#inicio' className='font-display text-lg font-extrabold tracking-tight'>
          Emanuel Pesci
        </a>

        <div className='hidden items-center gap-7 lg:flex'>
          {links.map((link) => (
            <a key={link.href} href={link.href} className='text-sm font-medium text-muted transition-colors hover:text-ink'>
              {link.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <button
            onClick={toggleTheme}
            className={iconButton}
            aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
            title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className='h-4 w-4' />
          </button>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className={`${iconButton} font-mono text-xs`}
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <a
            href={t.hero.cvLink}
            download='CV-Emanuel-Pesci.pdf'
            className='hidden h-10 items-center rounded-md bg-ink px-4 text-sm font-semibold text-paper transition-colors hover:bg-cobalt hover:text-on-cobalt sm:flex'
          >
            {t.nav.downloadCv}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`${iconButton} lg:hidden`}
            aria-expanded={open}
            aria-controls='menu-movil'
            aria-label='Menu'
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className='h-4 w-4' />
          </button>
        </div>
      </nav>

      {open && (
        <div id='menu-movil' className='border-t border-line bg-paper px-4 pb-4 lg:hidden'>
          <ul className='flex flex-col'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='block border-b border-line py-3 font-medium'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={t.hero.cvLink}
            download='CV-Emanuel-Pesci.pdf'
            className='mt-4 flex h-11 items-center justify-center rounded-md bg-ink font-semibold text-paper sm:hidden'
          >
            {t.nav.downloadCv}
          </a>
        </div>
      )}
    </header>
  );
}
