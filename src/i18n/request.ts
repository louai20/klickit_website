import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'sv', 'ar'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  const validLocale = locale as Locale;

  if (!locales.includes(validLocale)) {
    notFound();
  }

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
