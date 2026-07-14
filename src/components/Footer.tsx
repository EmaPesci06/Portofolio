import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className='border-t border-slate-200 py-6 dark:border-white/10'>
      <p className='text-center text-sm text-slate-500 dark:text-slate-400'>
        © {new Date().getFullYear()} Emanuel Pesci — {translations[language].footer}
      </p>
    </footer>
  );
}
