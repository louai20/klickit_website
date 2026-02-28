'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const applyThemeClass = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const shouldBeDark = savedDarkMode ? savedDarkMode === 'true' : true; // Default to true for the new logo integration
    setDarkMode(shouldBeDark);
    applyThemeClass(shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyThemeClass(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  const locales = [
    { code: 'sv', label: 'Svenska', short: 'SV' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ar', label: 'العربية', short: 'AR' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    setLocale(newLocale as 'en' | 'sv' | 'ar');
    router.push(newPath);
    setLangDropdownOpen(false);
  };

  const navItems = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/courses`, label: t('nav.courses') },
    { href: `/${locale}/events`, label: t('nav.events') },
    { href: `/${locale}/get-involved`, label: t('nav.getInvolved') },
    { href: `/${locale}/contact`, label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b shadow-sm ${darkMode ? 'bg-[#1e293bb3] border-white/10' : 'bg-white/90 border-gray-100'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-4 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="KlickIT Logo"
              onError={(e) => {
                e.currentTarget.src = '/next.svg';
              }}
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${pathname === item.href
                  ? (darkMode ? 'bg-indigo-600 text-white shadow-sm' : 'bg-indigo-100 text-indigo-600 shadow-sm')
                  : (darkMode ? 'text-slate-100 hover:text-white hover:bg-white/10' : 'text-slate-800 hover:text-indigo-700 hover:bg-slate-100')
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 group ${darkMode
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${darkMode ? 'bg-indigo-500' : 'bg-gray-400'
                  }`}></div>
                <div className={`relative w-6 h-6 rounded-lg transition-all duration-300 flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-600'
                  }`}>
                  {darkMode ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </div>
              </div>
              <span className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                {darkMode ? 'Light' : 'Dark'}
              </span>
            </button>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${darkMode
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
              >
                <svg className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  {locales.find(l => l.code === locale)?.label}
                </span>
                <svg className={`w-5 h-5 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-xl border py-2 ${darkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
                  }`}>
                  {locales.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => handleLanguageChange(loc.code)}
                      className={`w-full flex items-center gap-3 px-4 py-4 text-left transition-colors ${locale === loc.code
                        ? (darkMode ? 'bg-indigo-900/20 text-indigo-300' : 'bg-indigo-50 text-indigo-600')
                        : (darkMode ? 'hover:bg-gray-700 text-slate-100' : 'hover:bg-gray-50 text-slate-800')
                        }`}
                    >
                      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-bold px-2 leading-none">
                        {loc.short}
                      </span>
                      <div>
                        <div className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{loc.label}</div>
                      </div>
                      {locale === loc.code && (
                        <svg className="w-5 h-5 ml-auto text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn lg:hidden icon-btn p-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t ${darkMode ? 'bg-[#1e293bb3] border-white/10' : 'bg-white border-gray-100'}`}>
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-5 py-4 rounded-xl text-center font-medium transition-all duration-300 ${pathname === item.href
                  ? (darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600')
                  : (darkMode ? 'text-slate-100 hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100')
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
