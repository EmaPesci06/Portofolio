import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../hooks/useTheme";
import { translations } from "../content";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { handleChangeTheme, theme } = useTheme();
  const t = translations[language].nav;

  return (
    <nav className='sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80'>
      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6'>
        <a href='#' className='text-lg font-bold tracking-tight'>
          Emanuel Pesci
        </a>

        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:flex'>
            <a href='#proyectos' className='hover:text-zinc-950 dark:hover:text-white'>
              {t.projects}
            </a>
            <a href='#experiencia' className='hover:text-zinc-950 dark:hover:text-white'>
              {t.experience}
            </a>
            <a href='#contacto' className='hover:text-zinc-950 dark:hover:text-white'>
              {t.contact}
            </a>
          </div>

          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold uppercase text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={handleChangeTheme}
            className='rounded-md border border-zinc-300 px-2 py-1 text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
}
