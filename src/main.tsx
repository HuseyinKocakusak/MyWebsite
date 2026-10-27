import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { languageFromPath, seo, type Language } from './seo';
import './index.css';

function storedLanguage(): Language {
  try {
    return localStorage.getItem('lang') === 'tr' ? 'tr' : 'en';
  } catch {
    return 'en';
  }
}

const language = languageFromPath(window.location.pathname) ?? storedLanguage();
const container = document.getElementById('root')!;
const app = (
  <ErrorBoundary>
    <StrictMode>
      <App language={language} />
    </StrictMode>
  </ErrorBoundary>
);

// /en/ and /tr/ ship prerendered HTML (scripts/prerender.mjs); the dev server does not.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  document.title ||= seo[language].title;
  createRoot(container).render(app);
}
