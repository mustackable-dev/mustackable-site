import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'bg'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeCookie: false
});