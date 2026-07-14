import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../hooks/useTheme";
import { translations } from "../content";
import { gsap, useGSAP } from "../lib/gsap";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { handleChangeTheme, theme } = useTheme();
  const t = translations[language].nav;
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  });

  return (
    <nav className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/60'>
      <div
        ref={progressRef}
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500'
      />

      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6'>
        <a href='#inicio' className='cursor-pointer text-lg font-bold tracking-tight'>
          Emanuel<span className='text-indigo-600 dark:text-indigo-400'> Pesci</span>
        </a>

        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 sm:flex'>
            <a
              href='#proyectos'
              className='cursor-pointer transition-colors hover:text-slate-950 dark:hover:text-white'
            >
              {t.projects}
            </a>
            <a
              href='#experiencia'
              className='cursor-pointer transition-colors hover:text-slate-950 dark:hover:text-white'
            >
              {t.experience}
            </a>
            <a
              href='#contacto'
              className='cursor-pointer transition-colors hover:text-slate-950 dark:hover:text-white'
            >
              {t.contact}
            </a>
          </div>

          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='cursor-pointer rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold uppercase text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-white/10'
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={handleChangeTheme}
            className='cursor-pointer rounded-md border border-slate-300 px-2.5 py-1.5 text-xs text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-white/10'
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
}
