/* eslint-disable react-refresh/only-export-components -- build-time entry, not a hot-reloaded module */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import type { Language } from './seo';

export { seo, SITE_URL, LANGUAGES } from './seo';

export function render(language: Language): string {
  return renderToString(
    <ErrorBoundary>
      <StrictMode>
        <App language={language} />
      </StrictMode>
    </ErrorBoundary>
  );
}
