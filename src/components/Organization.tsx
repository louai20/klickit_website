'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Organization() {
    const { t } = useLanguage();

    const departments = [
        {
            title: t('org.dept.edu.title'),
            icon: '📚',
            description: t('org.dept.edu.desc'),
            gradient: 'from-blue-500 to-cyan-400'
        },
        {
            title: t('org.dept.community.title'),
            icon: '🤝',
            description: t('org.dept.community.desc'),
            gradient: 'from-purple-500 to-pink-400'
        },
        {
            title: t('org.dept.support.title'),
            icon: '🛠️',
            description: t('org.dept.support.desc'),
            gradient: 'from-orange-500 to-red-400'
        },
        {
            title: t('org.dept.innovation.title'),
            icon: '💡',
            description: t('org.dept.innovation.desc'),
            gradient: 'from-green-500 to-emerald-400'
        }
    ];

    return (
        <section className="section relative overflow-hidden bg-pattern">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-500"></div>
            </div>

            <div className="container">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
                        <span className="text-xl">🏢</span>
                        <span className="text-slate-900 dark:text-slate-100">{t('org.badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                        <span className="gradient-text">{t('org.title')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                        {t('org.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {departments.map((dept, idx) => (
                        <div
                            key={idx}
                            className="group glass-card p-8 card-interactive hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                            <div className="relative">
                                <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {dept.icon}
                                </div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 relative z-10 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {dept.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed">
                                {dept.description}
                            </p>

                            <div className="mt-6 w-8 h-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full group-hover:w-full group-hover:from-brand-500 group-hover:to-indigo-500 transition-all duration-500 relative z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
