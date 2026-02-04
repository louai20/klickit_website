'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CoursesPage() {
  const { t } = useLanguage();

  const courses = [
    {
      icon: '🧒',
      title: 'Digitala grunderna för barn',
      description: 'En introduktion till datorer, internet och säkerhet på nätet för barn 8-12 år.',
      duration: '6 veckor',
      level: t('courses.beginner'),
      age: '8-12 år',
      gradient: 'from-pink-500 to-rose-400'
    },
    {
      icon: '👦',
      title: 'Digital kompetens för unga',
      description: 'Fördjupning i sociala medier, kreativt skapande och framtidens arbetsmarknad.',
      duration: '8 veckor',
      level: t('courses.intermediate'),
      age: '13-18 år',
      gradient: 'from-purple-500 to-indigo-400'
    },
    {
      icon: '👨‍💼',
      title: 'Digitala verktyg för vuxna',
      description: 'Praktiska färdigheter i e-post, videomöten, dokumenthantering och online-tjänster.',
      duration: '4 veckor',
      level: t('courses.beginner'),
      age: '18+ år',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: '👵',
      title: 'Digital trygghet för seniorer',
      description: 'En skräddarsydd kurs för att känna sig trygg med smartphones, surfplattor och internet.',
      duration: '6 veckor',
      level: t('courses.beginner'),
      age: '65+ år',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: '🎨',
      title: 'Kreativt skapande digitalt',
      description: 'Lär dig bildredigering, videoframställning och musikproduktion med moderna verktyg.',
      duration: '10 veckor',
      level: t('courses.intermediate'),
      age: '12+ år',
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      icon: '💼',
      title: 'Digitalt arbete och karriär',
      description: 'Kompetenser för att navigera arbetsmarknaden och använda digitala verktyg i yrkeslivet.',
      duration: '8 veckor',
      level: t('courses.advanced'),
      age: '16+ år',
      gradient: 'from-green-500 to-lime-400'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge mb-4 animate-fade-in-up">📚 {t('courses.subtitle')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('courses.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-400">
              Vi erbjuder kurser anpassade för alla åldrar och nivåer
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div 
                key={idx}
                className="card card-hover animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon Header */}
                <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 hover-scale`}>
                  {course.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">⏱️</span>
                    <span className="text-gray-600 dark:text-gray-400">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">📅</span>
                    <span className="text-gray-600 dark:text-gray-400">{course.age}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">📊</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Nybörjare' || course.level === 'Beginner' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : course.level === 'Medel'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover-scale">
                  {t('courses.cta')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{t('courses.howItWorks')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: t('courses.steps.register'), icon: '📝' },
              { step: '2', title: t('courses.steps.choose'), icon: '🎯' },
              { step: '3', title: t('courses.steps.learn'), icon: '📖' },
              { step: '4', title: t('courses.steps.grow'), icon: '🌟' }
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 hover-scale">
                  {item.icon}
                </div>
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{t('courses.faq')}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t('courses.faq.q1'), a: t('courses.faq.a1') },
              { q: t('courses.faq.q2'), a: t('courses.faq.a2') },
              { q: t('courses.faq.q3'), a: t('courses.faq.a3') }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="card p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
                  <span className="text-indigo-500">❓</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            {t('courses.ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-200">
            {t('courses.ctaText')}
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
            {t('courses.cta')}
          </button>
        </div>
      </section>
    </div>
  );
}
