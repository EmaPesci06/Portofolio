import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";
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
            "[data-hero-card]",
            { opacity: 0, scale: 0.92, y: 20, duration: 0.9, ease: "expo.out" },
            "<0.2"
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
    <section
      ref={container}
      id='inicio'
      className='relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6'
    >
      {/* Luz ambiente decorativa */}
      <div data-blobs aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <div
          data-blob='1'
          className='absolute -right-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]'
        />
        <div
          data-blob='2'
          className='absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]'
        />
      </div>

      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-16 md:grid-cols-12'>
        <div className='flex flex-col items-start gap-6 md:col-span-7 lg:col-span-8'>
          <div
            data-hero
            className='inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary-container/20 px-4 py-2'
          >
            <span className='h-2 w-2 rounded-full bg-secondary motion-safe:animate-pulse' />
            <span className='font-mono text-sm tracking-wider text-secondary'>{t.available}</span>
          </div>

          <h1
            data-hero
            className='max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl'
          >
            {t.titlePrefix}
            <span className='text-gradient'>{t.titleGradient}</span>
          </h1>

          <p data-hero className='max-w-2xl text-lg leading-relaxed text-on-surface-variant'>
            {t.description}
          </p>

          <div data-hero className='mt-4 flex flex-wrap gap-4'>
            <a
              href={t.cvLink}
              download='CV-Emanuel-Pesci.pdf'
              className='flex cursor-pointer items-center gap-2 rounded-xl bg-primary-container px-8 py-4 font-display font-semibold text-on-primary-container shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95'
            >
              <FontAwesomeIcon icon={faDownload} />
              {t.downloadCv}
            </a>
            <a
              href='#proyectos'
              className='flex cursor-pointer items-center gap-2 rounded-xl border border-outline-variant px-8 py-4 font-display font-semibold text-on-surface transition-all hover:bg-surface-highest/30 active:scale-95'
            >
              {t.viewProjects}
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* Profile card */}
        <div data-hero-card className='hidden md:col-span-5 md:block lg:col-span-4'>
          <div className='group relative'>
            <div className='absolute inset-0 rounded-3xl bg-primary/20 blur-2xl transition-all duration-500 group-hover:bg-primary/30' />
            <div className='relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-high/50 p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-primary/40 group-hover:-translate-y-2'>
              <div className='mb-2 flex w-full items-center justify-between'>
                <div className='flex gap-1.5'>
                  <span className='h-2.5 w-2.5 rounded-full bg-error/40' />
                  <span className='h-2.5 w-2.5 rounded-full bg-secondary/40' />
                  <span className='h-2.5 w-2.5 rounded-full bg-primary/40' />
                </div>
                <span className='font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/60'>
                  Profile ID: EP-89
                </span>
              </div>

              <div className='relative'>
                <div className='h-32 w-32 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl transition-all duration-500 group-hover:border-primary/60'>
                  <img
                    src={myself}
                    alt='Emanuel Pesci'
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='absolute -bottom-2 -right-2 rounded-lg border border-secondary/20 bg-secondary-container p-1.5 text-on-secondary-container shadow-lg'>
                  <FontAwesomeIcon icon={faCheck} className='h-4 w-4' />
                </div>
              </div>

              <div className='space-y-1'>
                <h2 className='font-display text-2xl font-semibold text-on-background'>
                  Emanuel Pesci
                </h2>
                <div className='flex flex-col items-center gap-2'>
                  <span className='font-mono text-sm font-semibold tracking-wide text-primary'>
                    {t.card.role}
                  </span>
                  <span className='h-0.5 w-12 rounded-full bg-outline-variant/30' />
                  <span className='text-sm font-medium text-on-surface-variant'>
                    {t.card.subtitle}
                  </span>
                </div>
              </div>

              <div className='mt-4 flex w-full flex-col gap-3 rounded-2xl border border-outline-variant/20 bg-surface-high/50 p-4'>
                <div className='flex items-center justify-between font-mono text-[11px]'>
                  <span className='text-on-surface-variant'>{t.card.successRate}</span>
                  <span className='font-bold text-secondary'>100%</span>
                </div>
                <div className='h-1.5 w-full overflow-hidden rounded-full bg-outline-variant/20'>
                  <div className='h-full w-full bg-gradient-to-r from-primary to-secondary' />
                </div>
                <div className='grid grid-cols-2 gap-2 pt-1'>
                  <span className='rounded-lg border border-outline-variant/10 bg-surface-container py-2 font-mono text-[10px] text-on-surface-variant'>
                    {t.card.chipProjects}
                  </span>
                  <span className='rounded-lg border border-outline-variant/10 bg-surface-container py-2 font-mono text-[10px] text-on-surface-variant'>
                    {t.card.chipYears}
                  </span>
                </div>
              </div>

              <div className='absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
