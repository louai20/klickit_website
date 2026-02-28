'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Organization from '@/components/Organization';

export default function HomePage() {
  const { t, locale } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const syncTheme = () => setDarkMode(document.documentElement.classList.contains('dark'));
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50+', label: t('stats.workshops'), icon: '🎯' },
    { value: '500+', label: t('stats.students'), icon: '👥' },
    { value: '25+', label: t('stats.volunteers'), icon: '💪' },
    { value: '10+', label: t('stats.partners'), icon: '🤝' }
  ];

  const activities = [
    {
      icon: '🧠',
      title: t('whatwedo.workshops.title'),
      description: t('whatwedo.workshops.description'),
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: '👨‍👩‍👧',
      title: t('whatwedo.courses.title'),
      description: t('whatwedo.courses.description'),
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: '🧩',
      title: t('whatwedo.collaboration.title'),
      description: t('whatwedo.collaboration.description'),
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: '🛟',
      title: t('whatwedo.elderly.title'),
      description: t('whatwedo.elderly.description'),
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: '🎯',
      title: t('whatwedo.focus.title'),
      description: t('whatwedo.focus.description'),
      gradient: 'from-indigo-500 to-purple-400'
    },
    {
      icon: '🤝',
      title: t('whatwedo.parents.title'),
      description: t('whatwedo.parents.description'),
      gradient: 'from-teal-500 to-blue-400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6bTEwIDEwdjZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float shadow-lg shadow-yellow-400/20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-float animation-delay-2000 shadow-lg shadow-pink-400/20"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-float animation-delay-4000 shadow-lg shadow-blue-400/20"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-float shadow-lg shadow-green-400/20"></div>

        {/* Rotating Elements */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/10 rounded-full animate-spin-slow animation-delay-1000"></div>

        <div className="container relative z-10 text-center pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-900 dark:text-slate-100 text-sm font-semibold mb-8 animate-fade-in-up backdrop-blur-md bg-white/75 dark:bg-slate-900/65 border border-white/40 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-black/40">
            <span className="animate-pulse">✨</span>
            <span>{t('hero.subtitle')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 bg-gradient-to-r from-white via-white/90 to-blue-200 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              href={`/${locale}/courses`}
              className="btn btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
              <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/get-involved`}
              className="btn btn-secondary transform hover:scale-105 transition-all duration-300"
            >
              {t('hero.learnMore')}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section relative -mt-20 z-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="card card-hover text-center animate-fade-in-up group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center text-4xl animate-bounce-slow group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="stat-number text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4 animate-fade-in-up bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">📖 {t('about.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                <span className="gradient-text">{t('about.title')}</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
                {t('about.description')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
                {t('about.mission')}
              </p>
              <Link
                href={`/${locale}/get-involved`}
                className="btn btn-primary inline-flex items-center gap-2 animate-fade-in-up animation-delay-600"
              >
                {t('about.learnMore')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Values Card */}
            <div className="relative">
              <div className={`rounded-3xl p-8 text-white animate-fade-in-up animation-delay-200 ${darkMode ? 'bg-sky-900/50' : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'}`}>
                <h3 className="text-2xl font-bold mb-6">{t('about.values')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🌍</div>
                    <div>
                      <div className="font-semibold text-lg">{t('about.inclusion')}</div>
                      <div className="text-white/80">{t('about.inclusion.desc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💡</div>
                    <div>
                      <div className="font-semibold text-lg">{t('about.innovation')}</div>
                      <div className="text-white/80">{t('about.innovation.desc')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">👥</div>
                    <div>
                      <div className="font-semibold text-lg">{t('about.community')}</div>
                      <div className="text-white/80">{t('about.community.desc')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse-slow animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <Organization />

      {/* What We Do Section */}
      <section id="whatwedo" className={`section ${darkMode ? 'bg-sky-900/40' : 'bg-gray-50'}`}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge mb-4 animate-fade-in-up">💪 {t('whatwedo.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('whatwedo.title')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              {t('whatwedo.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="card card-hover animate-fade-in-up group relative overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-white/5 dark:bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-4 hover-scale mx-auto shadow-lg">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{t('hero.learnMore')}</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            {t('courses.ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('courses.ctaText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href={`/${locale}/courses`}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href={`/${locale}/events`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              {t('events.upcoming')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="badge mb-4 animate-fade-in-up">📬 {t('contact.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                <span className="gradient-text">{t('contact.title')}</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
                {t('contact.cta')}
              </p>
              <a
                href="mailto:info@klickit.nu"
                className="inline-flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline animate-fade-in-up animation-delay-600"
              >
                <span className="text-2xl">📧</span>
                info@klickit.nu
              </a>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold mb-4">{t('contact.closing')}</h3>
              <p className="text-white/80 mb-6">
                {t('contact.closingText')}
              </p>
              <div className="flex flex-wrap gap-3">
                {[t('tags.education'), t('tags.community'), t('tags.inclusion'), t('tags.innovation')].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
