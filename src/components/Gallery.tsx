import { Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { albums } from '../albumData';

const albumSlugs = ['research-lab', 'athletic-training', 'apitherapy', 'conferences'];

interface GalleryProps {
  onOpenAlbum: (slug: string) => void;
}

export default function Gallery({ onOpenAlbum }: GalleryProps) {
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t.gallery.title}
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.gallery.items.map((item, index) => {
            const slug = albumSlugs[index];
            const album = albums[index];
            const photoCount = album.photos.length;

            return (
              <button
                key={item.title}
                onClick={() => onOpenAlbum(slug)}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 h-64 flex flex-col justify-between text-left"
              >
                <div className="flex items-center justify-center flex-1">
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {album.icon}
                  </span>
                </div>
                <div className="bg-gradient-to-t from-slate-900 to-slate-900/80 p-6 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-slate-400 text-xs">
                    <Camera size={12} />
                    <span>{photoCount} {t.gallery.photoCount}</span>
                  </div>
                </div>
              </button>
            );
          })}
          {t.gallery.items.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 h-64 flex flex-col justify-end"
            >
              <div className="bg-gradient-to-t from-slate-900 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
