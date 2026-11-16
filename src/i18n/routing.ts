import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fa'],

    defaultLocale: 'en'
});

export type Locale = (typeof routing.locales)[number];

// Locales written right-to-left
const rtlLocales: readonly Locale[] = ['fa'];

export function getDirection(locale: string): 'ltr' | 'rtl' {
    return rtlLocales.includes(locale as Locale) ? 'rtl' : 'ltr';
}
