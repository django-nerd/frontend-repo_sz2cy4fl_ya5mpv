import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../i18n';

export default function Resources() {
  const { t } = useLang();
  const items = t('resources.items');

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t('resources.title')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.isArray(items) && items.map((it, idx) => (
            <a key={idx} href={it.href} target="_blank" rel="noreferrer" className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
              <div className="font-medium text-lg">{it.title}</div>
              <p className="mt-2 text-sm text-gray-600">{it.body}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black">
                <span>Open</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
