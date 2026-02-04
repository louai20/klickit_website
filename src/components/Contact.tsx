'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            <a
              href={`mailto:${t('contact.email')}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {t('contact.email')}
            </a>
          </p>
          <p className="text-gray-600">
            {t('contact.cta')}
          </p>
        </div>
      </div>
    </section>
  );
}
