import React from 'react';
import Spline from '@splinetool/react-spline';
import { useLang } from '../i18n';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2r5J0-Placeholder/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/10 to-white/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex flex-col items-start justify-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 drop-shadow-sm">{t('hero.title')}</h1>
        <p className="mt-4 max-w-2xl text-gray-700 text-base md:text-lg">{t('hero.subtitle')}</p>
        <div className="mt-6">
          <a href="#chat" className="inline-flex items-center rounded-md bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-900 transition">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
