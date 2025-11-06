import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LangContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'app_lang';

const TRANSLATIONS = {
  en: {
    brand: 'Vibe AI',
    nav: { home: 'Home', chat: 'Chat', resources: 'Resources' },
    hero: {
      title: 'Create with 3D energy',
      subtitle:
        'An elegant starter with a live camera preview, resource cards, and a Spline-powered hero.',
      cta: 'Get Started',
    },
    chat: {
      title: 'Local Camera Preview',
      safeOn: 'Safe mode: ON (no microphone)',
      safeOff: 'Safe mode: OFF (with microphone)',
      start: 'Start',
      stop: 'Stop',
      note:
        'Media never leaves your browser. Toggle safe mode to disable/enable microphone.',
      errorDenied: 'Permission denied. Please allow camera access.',
      errorGeneric: 'Unable to start camera. Check permissions and try again.',
    },
    resources: {
      title: 'Resources',
      items: [
        {
          title: 'Docs',
          body: 'Read guides and API references to move fast with clarity.',
          href: 'https://vitejs.dev/guide/',
        },
        {
          title: 'UI Patterns',
          body: 'Explore ready-made patterns to ship beautiful interfaces.',
          href: 'https://tailwindcss.com/components',
        },
        {
          title: '3D Scenes',
          body: 'Drop in interactive Spline scenes for delightful hero sections.',
          href: 'https://spline.design/',
        },
      ],
    },
    footer: 'Built with React, Tailwind, and a spark of creativity.',
  },
  ru: {
    brand: 'Vibe AI',
    nav: { home: 'Главная', chat: 'Чат', resources: 'Ресурсы' },
    hero: {
      title: 'Создавайте с 3D-энергией',
      subtitle:
        'Элегантный стартер с превью камеры, карточками ресурсов и героем на Spline.',
      cta: 'Начать',
    },
    chat: {
      title: 'Локальное превью камеры',
      safeOn: 'Безопасный режим: ВКЛ (без микрофона)',
      safeOff: 'Безопасный режим: ВЫКЛ (с микрофоном)',
      start: 'Старт',
      stop: 'Стоп',
      note:
        'Медиа не покидает ваш браузер. Переключите безопасный режим, чтобы отключить/включить микрофон.',
      errorDenied: 'Доступ запрещен. Разрешите доступ к камере.',
      errorGeneric: 'Не удалось запустить камеру. Проверьте разрешения и повторите попытку.',
    },
    resources: {
      title: 'Ресурсы',
      items: [
        {
          title: 'Документация',
          body: 'Читайте руководства и справочники API, чтобы двигаться быстро и уверенно.',
          href: 'https://vitejs.dev/guide/',
        },
        {
          title: 'UI-паттерны',
          body: 'Изучайте готовые решения для красивых интерфейсов.',
          href: 'https://tailwindcss.com/components',
        },
        {
          title: '3D-сцены',
          body: 'Добавляйте интерактивные сцены Spline для эффектных героев.',
          href: 'https://spline.design/',
        },
      ],
    },
    footer: 'Сделано на React и Tailwind с искрой креатива.',
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  // Detect and persist
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored && (stored === 'en' || stored === 'ru')) {
      setLang(stored);
      return;
    }
    const navLang = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language.toLowerCase() : DEFAULT_LANG;
    const guess = navLang.startsWith('ru') ? 'ru' : 'en';
    setLang(guess);
    try {
      localStorage.setItem(STORAGE_KEY, guess);
    } catch {}
  }, []);

  const value = useMemo(() => ({
    lang,
    setLang: (l) => {
      setLang(l);
      try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    },
    t: (path) => {
      const parts = path.split('.');
      let cur = TRANSLATIONS[lang];
      for (const p of parts) {
        if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
        else return path;
      }
      return cur;
    },
  }), [lang]);

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
