import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";
import { gsap, useGSAP } from "../lib/gsap";
import myself from "../assets/img/yoX2.webp";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  });

  return (
    <header className='fixed top-0 z-50 h-20 w-full border-b border-outline-variant/20 bg-background/80 backdrop-blur-xl'>
      <div
        ref={progressRef}
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary'
      />

      <nav className='mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6'>
        <a href='#inicio' className='flex cursor-pointer items-center gap-4'>
          <span className='h-10 w-10 overflow-hidden rounded-full border border-primary/30 shadow-md'>
            <img src={myself} alt='Emanuel Pesci' className='h-full w-full object-cover' />
          </span>
          <span className='font-display text-xl font-bold tracking-tight text-on-background'>
            Emanuel Pesci
          </span>
        </a>

        <div className='hidden items-center gap-8 md:flex'>
          <a
            href='#proyectos'
            className='font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary'
          >
            {t.nav.projects}
          </a>
          <a
            href='#experiencia'
            className='font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary'
          >
            {t.nav.experience}
          </a>
          <a
            href='#contacto'
            className='font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary'
          >
            {t.nav.contact}
          </a>
        </div>

        <div className='flex items-center gap-4'>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='cursor-pointer rounded-lg border border-outline-variant/40 px-3 py-2 font-mono text-sm tracking-wider text-on-surface-variant transition-colors hover:border-primary/60 hover:text-primary'
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <a
            href={t.hero.cvLink}
            download='CV-Emanuel-Pesci.pdf'
            className='hidden cursor-pointer rounded-xl bg-primary-container px-6 py-2.5 font-display font-semibold text-on-primary-container transition-transform duration-200 hover:scale-95 active:scale-90 sm:block'
          >
            {t.nav.downloadCv}
          </a>
        </div>
      </nav>
    </header>
  );
}
