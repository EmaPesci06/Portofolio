import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS } from "../content";
import { gsap, useGSAP } from "../lib/gsap";
import myself from "../assets/img/yoX2.webp";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero]", { opacity: 0, y: 28, duration: 0.7, stagger: 0.12 })
          .from(
            "[data-hero-photo]",
            { opacity: 0, scale: 0.88, duration: 0.9, ease: "expo.out" },
            "<0.15"
          );

        gsap.to("[data-blob='1']", {
          x: 40,
          y: 35,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to("[data-blob='2']", {
          x: -30,
          y: -45,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to("[data-blobs]", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: container.current, start: "top top", scrub: 0.6 },
        });
      });
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className='relative overflow-hidden'
      id='inicio'
    >
      {/* Luz ambiente decorativa */}
      <div data-blobs aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <div
          data-blob='1'
          className='absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl dark:bg-indigo-600/25'
        />
        <div
          data-blob='2'
          className='absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/20'
        />
      </div>

      <div className='relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center gap-12 px-4 py-16 sm:flex-row sm:items-center sm:gap-16 sm:px-6'>
        <div className='order-2 text-center sm:order-1 sm:text-left'>
          <span
            data-hero
            className='inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
          >
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
            </span>
            {t.available}
          </span>

          <h1
            data-hero
            className='mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl'
          >
            <span className='bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-indigo-400 dark:to-violet-400'>
              Emanuel Pesci
            </span>
          </h1>
          <h2 data-hero className='mt-3 text-xl font-semibold sm:text-2xl'>
            {t.title}
          </h2>
          <p
            data-hero
            className='mt-4 max-w-2xl text-slate-600 dark:text-slate-300'
          >
            {t.description}
          </p>

          <div
            data-hero
            className='mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start'
          >
            <a
              href={t.cvLink}
              download='CV-Emanuel-Pesci.pdf'
              className='inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-indigo-500/50 hover:brightness-110 active:scale-95'
            >
              <FontAwesomeIcon icon={faDownload} />
              {t.downloadCv}
            </a>
            <a
              href='#proyectos'
              className='inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur transition-colors duration-200 hover:bg-slate-100 active:scale-95 dark:border-slate-700 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
            >
              {t.viewProjects}
            </a>

            <div className='flex items-center gap-4 sm:ml-2'>
              <a
                href={LINKS.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
                className='text-slate-500 transition-all duration-200 hover:scale-110 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400'
              >
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
              </a>
              <a
                href={LINKS.github}
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
                className='text-slate-500 transition-all duration-200 hover:scale-110 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              >
                <FontAwesomeIcon icon={faGithub} className='h-6 w-6' />
              </a>
              <a
                href={LINKS.email}
                aria-label='Email'
                className='text-slate-500 transition-all duration-200 hover:scale-110 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400'
              >
                <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>

        <div data-hero-photo className='order-1 sm:order-2'>
          <div className='rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-violet-500 p-1 shadow-2xl shadow-indigo-500/30'>
            <img
              src={myself}
              alt='Emanuel Pesci'
              className='h-44 w-44 rounded-full object-cover ring-4 ring-white dark:ring-slate-950 sm:h-56 sm:w-56'
            />
          </div>
        </div>

        <a
          href='#skills'
          aria-label={language === "es" ? "Bajar a habilidades" : "Scroll to skills"}
          className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200 sm:block'
        >
          <FontAwesomeIcon icon={faChevronDown} className='h-5 w-5 motion-safe:animate-bounce' />
        </a>
      </div>
    </header>
  );
}
