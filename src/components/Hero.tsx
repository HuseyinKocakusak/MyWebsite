import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { albums, heroPhotos, type HeroPhoto } from '../albumData';

// Card layout for one side, outermost card first. The right side mirrors it.
const cardLayout = [
  { offset: '-2%', width: '13vw', bottom: '-70px', rotate: -11, bg: 'bg-blue-600' },
  { offset: '8.5%', width: '12vw', bottom: '-30px', rotate: 6, bg: 'bg-orange-500' },
  { offset: '18%', width: '11vw', bottom: '-60px', rotate: -4, bg: 'bg-lime-400' },
  { offset: '27%', width: '10vw', bottom: '-25px', rotate: 5, bg: 'bg-emerald-400' },
];

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const photoLabel = (photo: HeroPhoto) => {
    const albumIndex = albums.findIndex((a) => a.slug === photo.album);
    const item = t.gallery.items[albumIndex];
    if (!photo.subAlbum) return item.title;
    const subIndex = albums[albumIndex].subAlbums?.findIndex((s) => s.slug === photo.subAlbum) ?? -1;
    return item.subItems?.[subIndex]?.title ?? item.title;
  };

  const renderSide = (photos: HeroPhoto[], side: 'left' | 'right') =>
    photos.map((photo, i) => {
      const layout = cardLayout[i];
      const rotate = side === 'left' ? layout.rotate : -layout.rotate;
      const hash = `#album/${photo.album}${photo.subAlbum ? `/${photo.subAlbum}` : ''}`;
      return (
        <a
          key={photo.src}
          href={hash}
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label={photoLabel(photo)}
          title={photoLabel(photo)}
          className={`group absolute aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 ${layout.bg} transition-transform duration-300 ease-out [transform:rotate(var(--r))] hover:[transform:translateY(-16px)_rotate(var(--r))] hover:z-20`}
          style={{
            [side]: layout.offset,
            bottom: layout.bottom,
            width: layout.width,
            zIndex: i + 1,
            '--r': `${rotate}deg`,
          } as React.CSSProperties}
        >
          <img
            src={photo.src}
            alt={photoLabel(photo)}
            width={480}
            height={600}
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      );
    });

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pt-20 pb-32 md:pb-[17vw]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block p-6 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
              <div>{t.hero.title1}</div>
              <div>{t.hero.title2}</div>
              <div>{t.hero.title3}</div>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-600">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:scale-105 font-medium shadow-lg shadow-slate-900/20"
          >
            {t.hero.getInTouch}
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://www.instagram.com/huseyin_kocakusak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-slate-100 transition-all hover:scale-110 shadow-md"
          >
            <Instagram size={24} className="text-slate-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/huseyinkocakusak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-slate-100 transition-all hover:scale-110 shadow-md"
          >
            <Linkedin size={24} className="text-slate-900" />
          </a>
          <a
            href="mailto:huseyinkocakusak@gmail.com"
            className="p-3 bg-white rounded-full hover:bg-slate-100 transition-all hover:scale-110 shadow-md"
          >
            <Mail size={24} className="text-slate-900" />
          </a>
        </div>

      </div>

      <div className="hidden md:block absolute inset-x-0 bottom-0 h-0">
        {renderSide(heroPhotos.left, 'left')}
        {renderSide(heroPhotos.right, 'right')}
      </div>

      <button
        onClick={scrollToGallery}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-4 whitespace-nowrap rounded-full bg-white border border-slate-200 px-6 py-4 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <span className="font-mono text-sm tracking-widest uppercase text-slate-500">
          {albums.length} {t.hero.albums}
        </span>
        <span className="font-medium text-slate-900">{t.hero.openGallery}</span>
        <ArrowRight size={18} className="text-slate-900" />
      </button>
    </section>
  );
}
