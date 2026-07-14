import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className='border-t border-zinc-200 py-6 dark:border-zinc-800'>
      <p className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
        © {new Date().getFullYear()} Emanuel Pesci — {translations[language].footer}
      </p>
    </footer>
  );
}
