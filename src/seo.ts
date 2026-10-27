export type Language = 'en' | 'tr';

export const SITE_URL = 'https://huseyinkocakusak.com';
export const LANGUAGES: Language[] = ['en', 'tr'];

// Per-language <head> content. Used by scripts/prerender.mjs when the static
// /en/ and /tr/ pages are generated at build time.
export const seo: Record<Language, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'Hüseyin Kocakuşak | Molecular Biology, Athletic Performance, Scientific Advisor',
    description: 'Integrating neuroscience, cellular metabolism, exercise physiology, and nutritional strategies.',
    ogLocale: 'en_US',
  },
  tr: {
    title: 'Hüseyin Kocakuşak | Moleküler Biyoloji, Atletik Performans, Bilimsel Danışman',
    description: 'Sinirbilim, hücresel metabolizma, egzersiz fizyolojisi ve beslenme stratejilerini entegre ediyorum.',
    ogLocale: 'tr_TR',
  },
};

export function languageFromPath(pathname: string): Language | null {
  const first = pathname.split('/')[1];
  return first === 'en' || first === 'tr' ? first : null;
}
