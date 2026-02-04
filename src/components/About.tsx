'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t('about.description')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium text-blue-600">
            {t('about.mission')}
          </p>
        </div>
      </div>
    </section>
  );
}
