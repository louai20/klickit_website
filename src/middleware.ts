import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'sv', 'ar'],
  defaultLocale: 'sv',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(sv|en|ar)/:path*']
};
