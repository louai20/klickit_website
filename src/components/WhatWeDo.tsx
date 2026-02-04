'use client';

import { useLanguage } from '@/context/LanguageContext';

const activities = [
  { key: 'workshops', icon: '🧠' },
  { key: 'courses', icon: '👨‍👩‍👧' },
  { key: 'collaboration', icon: '🧩' },
  { key: 'elderly', icon: '🛟' },
  { key: 'focus', icon: '🎯' },
  { key: 'parents', icon: '🤝' }
];

export default function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section id="whatwedo" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whatwedo.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.key}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <span className="text-4xl mb-4 block">{activity.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(`whatwedo.${activity.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`whatwedo.${activity.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
