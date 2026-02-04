'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();

  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-900 text-white mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="text-xl font-bold">KlickIT</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {footerLinks.connect.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
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
              <li className="flex items-center gap-3 text-gray-400">
                <span className="text-xl">📧</span>
                <a href="mailto:info@klickit.nu" className="hover:text-white transition-colors">
                  info@klickit.nu
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <span className="text-xl">📍</span>
                <span>{t('footer.location')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.newsletter')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletterText')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors"
              />
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} KlickIT. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
