import React from 'react';
import { Globe } from 'lucide-react';
import { useLang } from '../i18n';

export default function NavBar() {
  const { lang, setLang, t } = useLang();

  const toggleLang = () => setLang(lang === 'en' ? 'ru' : 'en');

  return (
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight">{t('brand')}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black transition">{t('nav.home')}</a>
          <a href="#chat" className="hover:text-black transition">{t('nav.chat')}</a>
          <a href="#resources" className="hover:text-black transition">{t('nav.resources')}</a>
        </nav>
        <button
          onClick={toggleLang}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
          aria-label="Toggle language"
          title="Toggle language"
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium">{lang.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
}
