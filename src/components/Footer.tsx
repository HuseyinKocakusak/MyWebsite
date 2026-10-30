import { ArrowUp, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { albums } from '../albumData';
import { initialRenderDate } from '../renderDate';
import { scrollToSection } from '../scrollToSection';

const CONTACT_EMAIL = 'huseyinkocakusak@gmail.com';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/huseyin_kocakusak/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huseyinkocakusak/', Icon: Linkedin },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, Icon: Mail },
];

interface FooterProps {
  onOpenAlbum: (slug: string) => void;
}

export default function Footer({ onOpenAlbum }: FooterProps) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  // Build year, so the prerendered HTML and the hydrated page agree.
  const year = initialRenderDate().slice(0, 4);

  const navItems = [
    { key: 'hero', label: t.footer.home },
    { key: 'science', label: t.nav.science },
    { key: 'apitherapy', label: t.nav.apitherapy },
    { key: 'gallery', label: t.nav.gallery },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact },
  ];

  const headingClass = 'text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5';
  const linkClass = 'text-slate-300 hover:text-white transition-colors text-left';

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.5fr]">
          <div>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-white"
            >
              Hüseyin KOCAKUŞAK
            </button>
            <p className="mt-2 text-sm text-slate-400">
              {t.hero.title1} · {t.hero.title2} · {t.hero.title3}
            </p>
            <p className="mt-5 leading-relaxed text-slate-400 max-w-sm">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="p-2.5 rounded-full bg-slate-800 text-slate-200 hover:bg-white hover:text-slate-900 transition-all hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h3 className={headingClass}>{t.footer.explore}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button onClick={() => scrollToSection(item.key)} className={linkClass}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>{t.footer.albums}</h3>
            <ul className="space-y-3">
              {albums.map((album, index) => (
                <li key={album.slug}>
                  <button
                    onClick={() => onOpenAlbum(album.slug)}
                    className={`${linkClass} flex items-center gap-2`}
                  >
                    <span aria-hidden="true">{album.icon}</span>
                    {t.gallery.items[index].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>{t.footer.connect}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} flex items-center gap-2 break-all`}>
                  <Mail size={16} className="shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2`}
                >
                  <Instagram size={16} className="shrink-0" />
                  @huseyin_kocakusak
                </a>
              </li>
              <li>
                <a
                  href={socialLinks[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2`}
                >
                  <Linkedin size={16} className="shrink-0" />
                  in/huseyinkocakusak
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="shrink-0 mt-1" />
                {t.contact.locationValue}
              </li>
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors"
            >
              {t.footer.sendMessage}
              <Send size={16} />
            </button>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between text-sm">
          <p className="text-slate-400">
            &copy; {year} Hüseyin Kocakuşak. {t.footer.rights}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1" aria-label={t.footer.language}>
              {(['en', 'tr'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    language === lang ? 'bg-white text-slate-900' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              {t.footer.backToTop}
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
