import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import {
  CONSENT_RESET_EVENT,
  analyticsEnabled,
  loadGoogleAnalytics,
  setConsent,
  storedConsent,
  type Consent,
} from '../analytics';

export default function CookieBanner() {
  const { language } = useLanguage();
  const t = translations[language].cookies;
  // Hidden on the prerendered page; decided in the browser after mount.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    const consent = storedConsent();
    if (consent === 'granted') loadGoogleAnalytics();
    if (consent === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_RESET_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_RESET_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const choose = (consent: Consent) => {
    setVisible(false);
    setConsent(consent);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.settings}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-xl bg-slate-900 text-slate-200 shadow-2xl p-5 sm:flex sm:items-center sm:gap-6"
    >
      <p className="text-sm leading-relaxed">{t.message}</p>
      <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
        <button
          onClick={() => choose('denied')}
          className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 transition-colors text-sm font-medium"
        >
          {t.decline}
        </button>
        <button
          onClick={() => choose('granted')}
          className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition-colors text-sm font-medium"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
