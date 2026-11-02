// Google Analytics 4, loaded only after the visitor accepts cookies.
// Set the Measurement ID (G-XXXXXXXXXX) from Google Analytics: Admin > Data streams.
// While it is empty, neither the consent banner nor Google Analytics is shown.
export const GA_MEASUREMENT_ID = '';

export type Consent = 'granted' | 'denied';

const CONSENT_KEY = 'analytics-consent';
export const CONSENT_RESET_EVENT = 'analytics-consent-reset';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function analyticsEnabled(): boolean {
  return GA_MEASUREMENT_ID !== '';
}

export function storedConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(consent: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page view only.
  }
}

let loaded = false;

export function loadGoogleAnalytics() {
  if (loaded || !analyticsEnabled()) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function deleteAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    });
  });
}

export function setConsent(consent: Consent) {
  storeConsent(consent);
  if (consent === 'granted') {
    loadGoogleAnalytics();
  } else if (loaded) {
    // Withdrawn after Analytics had started: remove its cookies and reload without it.
    deleteAnalyticsCookies();
    window.location.reload();
  }
}

export function reopenConsentBanner() {
  window.dispatchEvent(new Event(CONSENT_RESET_EVENT));
}
