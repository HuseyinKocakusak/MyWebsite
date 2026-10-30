export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  // An album page is open and the sections are not rendered: leave the
  // album first, then scroll once the home page is back.
  window.location.hash = id;
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}
