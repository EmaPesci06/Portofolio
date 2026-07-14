import { useState } from "react";
import type { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS, FORMSPREE_ID } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { SectionHeading } from "./SectionHeading";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 transition-shadow focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-white/5 dark:text-white";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [status, setStatus] = useState<Status>("idle");
  const ref = useSectionReveal<HTMLElement>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree error");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id='contacto'
      className='mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6'
    >
      <SectionHeading overline={t.overline} title={t.title} subtitle={t.subtitle} />

      <div className='mt-8 grid gap-10 sm:grid-cols-2'>
        <form onSubmit={handleSubmit} data-reveal className='flex flex-col gap-4'>
          <div>
            <label htmlFor='name' className='mb-1 block text-sm font-medium'>
              {t.name}
            </label>
            <input id='name' name='name' type='text' required className={inputClasses} />
          </div>
          <div>
            <label htmlFor='email' className='mb-1 block text-sm font-medium'>
              {t.email}
            </label>
            <input id='email' name='email' type='email' required className={inputClasses} />
          </div>
          <div>
            <label htmlFor='message' className='mb-1 block text-sm font-medium'>
              {t.message}
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type='submit'
            disabled={status === "sending"}
            className='cursor-pointer rounded-lg bg-gradient-to-r from-sky-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-indigo-500/50 hover:brightness-110 active:scale-95 disabled:opacity-60'
          >
            {status === "sending" ? t.sending : t.send}
          </button>

          {status === "success" && (
            <p className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>
              {t.success}
            </p>
          )}
          {status === "error" && (
            <p className='text-sm font-medium text-red-600 dark:text-red-400'>{t.error}</p>
          )}
        </form>

        <div data-reveal>
          <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>{t.orDirect}</p>
          <div className='mt-4 flex flex-col gap-3'>
            <a
              href={LINKS.email}
              className='inline-flex cursor-pointer items-center gap-3 text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400'
            >
              <FontAwesomeIcon icon={faEnvelope} className='h-5 w-5' />
              emanuelpesci@gmail.com
            </a>
            <a
              href={LINKS.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex cursor-pointer items-center gap-3 text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400'
            >
              <FontAwesomeIcon icon={faLinkedin} className='h-5 w-5' />
              linkedin.com/in/emanuel-pesci
            </a>
            <a
              href={LINKS.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex cursor-pointer items-center gap-3 text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400'
            >
              <FontAwesomeIcon icon={faGithub} className='h-5 w-5' />
              github.com/emapesci06
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
