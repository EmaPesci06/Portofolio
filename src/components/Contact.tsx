import { useState } from "react";
import type { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS, FORMSPREE_ID } from "../content";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [status, setStatus] = useState<Status>("idle");

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
    <section id='contacto' className='mx-auto max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6'>
      <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{t.title}</h2>
      <p className='mt-2 text-zinc-600 dark:text-zinc-300'>{t.subtitle}</p>

      <div className='mt-8 grid gap-10 sm:grid-cols-2'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
            className='rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60'
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

        <div>
          <p className='text-sm font-medium text-zinc-500 dark:text-zinc-400'>{t.orDirect}</p>
          <div className='mt-4 flex flex-col gap-3'>
            <a
              href={LINKS.email}
              className='inline-flex items-center gap-3 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400'
            >
              <FontAwesomeIcon icon={faEnvelope} className='h-5 w-5' />
              emanuelpesci@gmail.com
            </a>
            <a
              href={LINKS.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-3 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400'
            >
              <FontAwesomeIcon icon={faLinkedin} className='h-5 w-5' />
              linkedin.com/in/emanuel-pesci
            </a>
            <a
              href={LINKS.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-3 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400'
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
