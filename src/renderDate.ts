// Literature items are hidden until their dateAdded. The static HTML is
// rendered at build time, so the first client render must use that same date
// for hydration to match; components switch to the real date after mount.

export function todayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function initialRenderDate(): string {
  if (typeof document !== 'undefined') {
    return document.documentElement.dataset.buildDate ?? todayString();
  }
  return (globalThis as { __BUILD_DATE__?: string }).__BUILD_DATE__ ?? todayString();
}
