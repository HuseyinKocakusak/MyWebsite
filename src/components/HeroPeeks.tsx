import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

// One photo per gallery category, peeking up from the bottom corners of the hero.
// Images live in public/images/hero/ (600x750, cropped, metadata stripped).
// To change a photo, replace the file or edit `src` below.
// `titleIndex` points at the album's entry in translations.gallery.items.
interface Peek {
  src: string;
  href: string;
  titleIndex: number;
  side: 'left' | 'right';
  offset: number; // px from the screen edge
  bottom: number; // px, negative values push the card below the edge
  width: number;
  height: number;
  rotate: number; // degrees
  delay: number; // seconds before it rises
  z: number;
}

const peeks: Peek[] = [
  { src: '/images/hero/peek-bjj.jpg', href: '#album/athletic-training/brazilian-jiu-jitsu', titleIndex: 1, side: 'left', offset: -26, bottom: -44, width: 210, height: 262, rotate: -9, delay: 0.3, z: 2 },
  { src: '/images/hero/peek-lab.jpg', href: '#album/research-lab', titleIndex: 0, side: 'left', offset: 160, bottom: -96, width: 176, height: 220, rotate: 5, delay: 0.5, z: 1 },
  { src: '/images/hero/peek-apitherapy.jpg', href: '#album/apitherapy', titleIndex: 2, side: 'right', offset: -26, bottom: -44, width: 210, height: 262, rotate: 9, delay: 0.4, z: 2 },
  { src: '/images/hero/peek-conferences.jpg', href: '#album/conferences', titleIndex: 3, side: 'right', offset: 160, bottom: -96, width: 176, height: 220, rotate: -5, delay: 0.6, z: 1 },
];

export default function HeroPeeks() {
  const { language } = useLanguage();
  const items = translations[language].gallery.items;

  return (
    <div className="hero-peeks pointer-events-none absolute inset-0 hidden xl:block">
      {peeks.map((p, i) => {
        const title = items[p.titleIndex]?.title ?? '';
        return (
          <a
            key={p.src}
            href={p.href}
            aria-label={title}
            className="hero-peek pointer-events-auto absolute block"
            style={{
              [p.side]: `${p.offset}px`,
              bottom: `${p.bottom}px`,
              zIndex: p.z,
              animationDelay: `${p.delay}s`,
            }}
          >
            <span
              className="hero-peek-tilt block"
              style={{ rotate: `${p.rotate}deg`, animationDelay: `${-i * 0.9}s` }}
            >
              <span
                className="hero-peek-card relative block overflow-hidden rounded-2xl border-[5px] border-white"
                style={{ width: p.width, height: p.height }}
              >
                <img src={p.src} alt="" loading="eager" className="block h-full w-full object-cover" />
                <span className="hero-peek-tag absolute left-2.5 top-2.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow">
                  {title}
                </span>
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
