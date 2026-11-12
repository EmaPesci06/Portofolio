import { useState } from "react";
import type { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, FORMSPREE_ID, LINKS } from "../content";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-cobalt";

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

  const contactRow = "flex items-center gap-3 font-medium transition-colors hover:text-cobalt";

  return (
    <section id='contacto' className='scroll-mt-16 px-4 py-16 sm:px-6 md:py-24'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='flex flex-col gap-5'>
          <h2 className='font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-[2.9rem]'>
            {t.title}
          </h2>
          <p className='text-lg text-muted'>{t.subtitle}</p>
          <div className='mt-2 flex flex-col gap-4'>
            <a href={LINKS.email} className={`${contactRow} break-all`}>
              <FontAwesomeIcon icon={faEnvelope} className='h-4 w-4 shrink-0 text-cobalt' />
              emanuelpesci@gmail.com
            </a>
            <a href={LINKS.linkedin} target='_blank' rel='noreferrer' className={contactRow}>
              <FontAwesomeIcon icon={faLinkedin} className='h-4 w-4 shrink-0 text-cobalt' />
              linkedin.com/in/emanuel-pesci
            </a>
            <a href={LINKS.github} target='_blank' rel='noreferrer' className={contactRow}>
              <FontAwesomeIcon icon={faGithub} className='h-4 w-4 shrink-0 text-cobalt' />
              github.com/emapesci06
            </a>
            <span className='flex items-center gap-3 text-muted'>
              <FontAwesomeIcon icon={faLocationDot} className='h-4 w-4 shrink-0' />
              {t.location}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 rounded-xl border border-line bg-card p-6 sm:p-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='font-mono text-xs text-muted'>{t.name}</label>
            <input id='name' name='name' type='text' required placeholder={t.namePlaceholder} className={inputClasses} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-mono text-xs text-muted'>{t.email}</label>
            <input id='email' name='email' type='email' required placeholder={t.emailPlaceholder} className={inputClasses} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='font-mono text-xs text-muted'>{t.message}</label>
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
            className='flex cursor-pointer items-center justify-center gap-2 rounded-md bg-cobalt py-3.5 font-semibold text-on-cobalt transition-opacity hover:opacity-90 disabled:opacity-60'
          >
            {status === "sending" ? t.sending : t.send}
            <FontAwesomeIcon icon={faPaperPlane} className='h-3.5 w-3.5' />
          </button>
          <p aria-live='polite' className='text-sm font-medium'>
            {status === "success" && <span className='text-done'>{t.success}</span>}
            {status === "error" && <span className='text-[#d1453b]'>{t.error}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
