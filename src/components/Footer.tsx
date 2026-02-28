'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t, locale } = useLanguage();
  const [darkMode, setDarkMode] = useState(true);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const syncTheme = () => {
      const htmlIsDark = document.documentElement.classList.contains('dark');
      const stored = localStorage.getItem('darkMode');
      const storedDark = stored === 'true';
      setDarkMode(htmlIsDark || storedDark);
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    explore: [
      { label: t('nav.home'), href: `/${locale}` },
      { label: t('nav.courses'), href: `/${locale}/courses` },
      { label: t('nav.events'), href: `/${locale}/events` },
      { label: t('nav.getInvolved'), href: `/${locale}/get-involved` },
      { label: t('nav.contact'), href: `/${locale}/contact` }
    ],
    connect: [
      { label: 'Facebook', href: '#', icon: '📘' },
      { label: 'Instagram', href: '#', icon: '📷' },
      { label: 'LinkedIn', href: '#', icon: '💼' },
      { label: 'YouTube', href: '#', icon: '▶️' }
    ]
  };

  return (
    <footer className={`mt-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-sky-50 text-slate-900'}`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="KlickIT Logo"
                onError={(e) => {
                  e.currentTarget.src = '/next.svg';
                }}
                className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              />
              <span className="text-xl font-bold">KlickIT</span>
            </Link>
            <p className="text-slate-600 dark:text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {footerLinks.connect.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-10 h-10 bg-white border border-sky-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                  title={item.label}
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.explore')}</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-indigo-500">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400">
                <span className="text-xl">📧</span>
                <a href="mailto:info@klickit.nu" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  info@klickit.nu
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-gray-400">
                <span className="text-xl">📍</span>
                <span>{t('footer.location')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.newsletter')}</h3>
            <p className="text-slate-600 dark:text-gray-400 mb-4">
              {t('footer.newsletterText')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 text-slate-900 placeholder-slate-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-sky-200'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-gray-500 text-sm">
              © {currentYear} KlickIT. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-slate-600 dark:text-gray-500">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
