import { useState } from "react";
import type { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, FORMSPREE_ID } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "rounded-xl border border-outline-variant/30 bg-surface-high px-4 py-3 text-on-surface placeholder-on-surface-variant/50 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary";

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
    <section ref={ref} id='contacto' className='relative scroll-mt-20 px-6 py-16 md:py-28'>
      <div
        data-reveal
        className='glass-surface relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 md:p-16'
      >
        <div className='absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl' />

        <div className='relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div className='flex flex-col gap-6'>
            <h2 className='font-display text-3xl font-bold tracking-tight sm:text-5xl'>
              {t.title}
            </h2>
            <p className='text-on-surface-variant'>{t.subtitle}</p>

            <div className='mt-8 flex flex-col gap-4'>
              <a
                href='mailto:emanuelpesci@gmail.com'
                className='flex cursor-pointer items-center gap-4 text-on-surface transition-colors hover:text-primary'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-primary' />
                </span>
                <span className='font-medium'>emanuelpesci@gmail.com</span>
              </a>
              <div className='flex items-center gap-4 text-on-surface'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10'>
                  <FontAwesomeIcon icon={faLocationDot} className='text-secondary' />
                </span>
                <span className='font-medium'>{t.location}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name' className='font-mono text-sm text-on-surface-variant'>
                {t.name}
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                placeholder={t.namePlaceholder}
                className={inputClasses}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='font-mono text-sm text-on-surface-variant'>
                {t.email}
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                placeholder={t.emailPlaceholder}
                className={inputClasses}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='message' className='font-mono text-sm text-on-surface-variant'>
                {t.message}
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows={4}
                placeholder={t.messagePlaceholder}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type='submit'
              disabled={status === "sending"}
              className='flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-4 font-display font-semibold text-on-primary transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60'
            >
              {status === "sending" ? t.sending : t.send}
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {status === "success" && (
              <p className='text-sm font-medium text-secondary'>{t.success}</p>
            )}
            {status === "error" && <p className='text-sm font-medium text-error'>{t.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
