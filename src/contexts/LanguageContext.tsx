import { createContext, useContext, ReactNode } from 'react';
import type { Language } from '../seo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  // Each language has its own URL (/en/, /tr/), so switching loads that page.
  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // Storage can be unavailable (private mode); the URL still carries the language.
    }
    window.location.assign(`/${lang}/${window.location.hash}`);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
