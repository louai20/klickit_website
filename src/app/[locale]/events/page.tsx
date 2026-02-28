'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const syncTheme = () => setDarkMode(document.documentElement.classList.contains('dark'));
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const upcomingEvents = [
    {
      title: 'Digital säkerhet för föräldrar',
      date: '15 feb 2025',
      time: '18:00-20:00',
      location: 'Biblioteket, Centralt',
      description: 'Lär dig hur du kan skydda dina barn på nätet och förstå deras digitala värld.',
      type: 'workshop',
      icon: '🔒'
    },
    {
      title: 'Introduktion till AI för nybörjare',
      date: '22 feb 2025',
      time: '14:00-16:00',
      location: 'Kulturhuset, Sal 3',
      description: 'En grundläggande introduktion till artificiell intelligens och hur den påverkar vårt dagliga liv.',
      type: 'lecture',
      icon: '🤖'
    },
    {
      title: 'Kodning för barn (Årskurs 3-6)',
      date: '1 mar 2025',
      time: '10:00-12:00',
      location: 'TechHub, Main Hall',
      description: 'Lär dig grunderna i programmering med roliga och enkla övningar.',
      type: 'workshop',
      icon: '💻'
    },
    {
      title: 'Sociala medier - Fördelar och risker',
      date: '8 mar 2025',
      time: '17:00-19:00',
      location: 'Medborgarhuset',
      description: 'En öppen diskussion om sociala mediers påverkan på ungdomar och hur man använder dem ansvarsfullt.',
      type: 'discussion',
      icon: '📱'
    },
    {
      title: 'Smartphone-kurs för seniorer',
      date: '15 mar 2025',
      time: '10:00-12:00',
      location: 'Seniorcentret',
      description: 'En nybörjarkurs anpassad för dig som vill lära dig använda din smartphone bättre.',
      type: 'course',
      icon: '📱'
    }
  ];

  const pastEvents = [
    {
      title: 'Kickoff - Vi bygger broar',
      date: '7 jul 2025',
      description: 'Föreningens officiella lansering med tal, mingel och framtidsvisioner.',
      icon: '🚀'
    },
    {
      title: 'Sommarkodläger för ungdomar',
      date: '15-19 jul 2025',
      description: 'Fem dagar fullspäckade med programmering, spelutveckling och digitalt skapande.',
      icon: '🎮'
    }
  ];

  const eventTypes = [
    { type: 'workshop', label: 'Workshop', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
    { type: 'lecture', label: 'Föreläsning', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
    { type: 'discussion', label: 'Diskussion', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    { type: 'course', label: 'Kurs', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="pb-16 pt-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge mb-4 animate-fade-in-up">📅 {t('events.subtitle')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('events.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-400">
              {t('events.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Legend */}
      <section className="pb-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {eventTypes.map((eventType, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium ${eventType.color}`}
              >
                {eventType.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 animate-fade-in-up">
            <span>🗓️</span>
            {t('events.upcoming')}
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="card p-6 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Date Box */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex flex-col items-center justify-center text-white">
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.type === 'workshop' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        event.type === 'lecture' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                          event.type === 'discussion' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                        }`}>
                        {eventTypes.find(et => et.type === event.type)?.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <span>📅</span>
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <span>🕐</span>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <span>📍</span>
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <button className="btn btn-primary whitespace-nowrap">
                      {t('events.register')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className={`py-16 ${darkMode ? 'bg-sky-900/40' : 'bg-gray-50'}`}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 animate-fade-in-up">
            <span>📚</span>
            {t('events.past')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <div
                key={idx}
                className="card p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            {t('events.ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-200">
            {t('events.ctaText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {t('events.suggest')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
              {t('events.volunteer')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
