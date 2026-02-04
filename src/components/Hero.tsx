'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
}
