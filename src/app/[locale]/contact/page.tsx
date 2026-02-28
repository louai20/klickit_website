'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge mb-4 animate-fade-in-up">📬 {t('contact.subtitle')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">{t('contact.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-400">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '📧',
                title: t('contact.email'),
                content: 'info@klickit.nu',
                href: 'mailto:info@klickit.nu'
              },
              {
                icon: '📍',
                title: t('contact.address'),
                content: t('contact.addressContent'),
                href: '#'
              },
              {
                icon: '📱',
                title: t('contact.social'),
                content: '@klickitnu',
                href: '#'
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="card p-6 text-center hover-scale animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">
                  {item.content}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="gradient-text">{t('contact.form.title')}</span>
              </h2>

              {submitted ? (
                <div className="card p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.form.successText')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                    >
                      <option value="">{t('contact.form.selectSubject')}</option>
                      <option value="general">{t('contact.form.subjects.general')}</option>
                      <option value="courses">{t('contact.form.subjects.courses')}</option>
                      <option value="volunteer">{t('contact.form.subjects.volunteer')}</option>
                      <option value="partner">{t('contact.form.subjects.partner')}</option>
                      <option value="other">{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover-scale"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div className="animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="gradient-text">{t('contact.faq')}</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="card p-6"
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
                      <span className="text-indigo-500">❓</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 pl-9">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="card p-6 mt-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
                <h3 className="font-bold text-lg mb-4">💡 {t('contact.tip')}</h3>
                <p className="text-white/80">
                  {t('contact.tipText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Bridges Section */}
      <section className="py-16 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container text-center relative z-10">
          <div className="text-5xl mb-6 animate-bounce-slow">🌉</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            {t('contact.closing')}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t('contact.closingText')}
          </p>
        </div>
      </section>
    </div>
  );
}
