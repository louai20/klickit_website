import { LanguageProvider } from '@/context/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider locale={locale as 'en' | 'sv' | 'ar'}>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
