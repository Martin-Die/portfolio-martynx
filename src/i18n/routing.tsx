import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/pages/about': {
            en: '/about',
            fr: '/a-propos',
        },
        '/pages/contact': '/contact',
        '/pages/gallery': {
            en: '/gallery',
            fr: '/gallerie',
        },
        '/pages/presentation': {
            en: '/presentation',
            fr: '/présentation',
        },
        '/pages/7': '/7',
    }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation(routing);