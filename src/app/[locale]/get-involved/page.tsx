'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function GetInvolvedPage() {
  const { t } = useLanguage();

  const waysToGetInvolved = [
    {
      icon: '👨‍🏫',
      title: t('getInvolved.volunteer.title'),
      description: t('getInvolved.volunteer.description'),
      gradient: 'from-blue-500 to-cyan-400',
      benefits: [
        t('getInvolved.volunteer.benefit1'),
        t('getInvolved.volunteer.benefit2'),
        t('getInvolved.volunteer.benefit3')
      ]
    },
    {
      icon: '💝',
      title: t('getInvolved.donate.title'),
      description: t('getInvolved.donate.description'),
      gradient: 'from-pink-500 to-rose-400',
      benefits: [
        t('getInvolved.donate.benefit1'),
        t('getInvolved.donate.benefit2'),
        t('getInvolved.donate.benefit3')
      ]
    },
    {
      icon: '🤝',
      title: t('getInvolved.partner.title'),
      description: t('getInvolved.partner.description'),
      gradient: 'from-purple-500 to-indigo-400',
      benefits: [
        t('getInvolved.partner.benefit1'),
        t('getInvolved.partner.benefit2'),
        t('getInvolved.partner.benefit3')
      ]
    },
    {
      icon: '🏫',
      title: t('getInvolved.school.title'),
      description: t('getInvolved.school.description'),
      gradient: 'from-orange-500 to-amber-400',
      benefits: [
        t('getInvolved.school.benefit1'),
        t('getInvolved.school.benefit2'),
        t('getInvolved.school.benefit3')
      ]
    }
  ];

  const teamValues = [
    {
      icon: '🌍',
      title: t('values.inclusion.title'),
      description: t('values.inclusion.desc')
    },
    {
      icon: '💡',
      title: t('values.innovation.title'),
      description: t('values.innovation.desc')
    },
    {
      icon: '👥',
      title: t('values.community.title'),
      description: t('values.community.desc')
    },
    {
      icon: '📚',
      title: t('values.learning.title'),
      description: t('values.learning.desc')
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge mb-4 animate-fade-in-up">🤗 {t('getInvolved.subtitle')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('getInvolved.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-400">
              {t('getInvolved.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {waysToGetInvolved.map((way, idx) => (
              <div 
                key={idx}
                className="card p-8 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${way.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                  {way.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {way.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {way.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full py-3 bg-gradient-to-r ${way.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                  {t('getInvolved.cta')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-4 animate-fade-in-up">💎 {t('values.subtitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('values.title')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              {t('values.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, idx) => (
              <div 
                key={idx}
                className="card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 hover-scale">{value.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            {t('getInvolved.ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('getInvolved.ctaText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {t('getInvolved.join')}
            </button>
            <a 
              href="mailto:info@klickit.nu"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📧</span>
              info@klickit.nu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
