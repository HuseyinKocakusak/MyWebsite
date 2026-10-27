// Generates static HTML for /en/ and /tr/ after `vite build` and the SSR build.
// docs/index.html (the client build output) is used as the template; the root
// page is then replaced with a small redirect based on the visitor's language.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'docs');
const ssrDir = path.join(root, 'dist-ssr');

const now = new Date();
const buildDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
globalThis.__BUILD_DATE__ = buildDate;

const { render, seo, SITE_URL, LANGUAGES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const alternates = [
  ...LANGUAGES.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}/" />`),
  `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
].join('\n    ');

for (const lang of LANGUAGES) {
  const { title, description, ogLocale } = seo[lang];
  const url = `${SITE_URL}/${lang}/`;
  const otherLocales = LANGUAGES.filter((l) => l !== lang).map(
    (l) => `<meta property="og:locale:alternate" content="${seo[l].ogLocale}" />`,
  );
  const head = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    alternates,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    ...otherLocales,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
  ].join('\n    ');

  const html = template
    .replace('<html lang="en">', `<html lang="${lang}" data-build-date="${buildDate}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(lang));

  fs.mkdirSync(path.join(outDir, lang), { recursive: true });
  fs.writeFileSync(path.join(outDir, lang, 'index.html'), html);
  console.log(`prerendered /${lang}/`);
}

// Root: x-default page. A saved language choice wins, then the browser language.
const redirect = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(seo.en.title)}</title>
    <meta name="description" content="${escape(seo.en.description)}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    ${alternates}
    <script>
      (function () {
        var lang;
        try { lang = localStorage.getItem('lang'); } catch (e) {}
        if (lang !== 'en' && lang !== 'tr') {
          var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
          lang = /^tr\\b/i.test(prefs[0]) ? 'tr' : 'en';
        }
        location.replace('/' + lang + '/' + location.hash);
      })();
    </script>
    <noscript><meta http-equiv="refresh" content="0; url=/en/" /></noscript>
  </head>
  <body>
    <p><a href="/en/">English</a> · <a href="/tr/">Türkçe</a></p>
  </body>
</html>
`;
fs.writeFileSync(path.join(outDir, 'index.html'), redirect);
console.log('wrote root redirect');

fs.rmSync(ssrDir, { recursive: true, force: true });
