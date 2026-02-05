import { ArrowLeft, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { albums } from '../albumData';

interface AlbumPageProps {
  albumSlug: string;
  onBack: () => void;
}

const slugToIndex: Record<string, number> = {
  'research-lab': 0,
  'athletic-training': 1,
  'apitherapy': 2,
  'conferences': 3,
};

export default function AlbumPage({ albumSlug, onBack }: AlbumPageProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const albumIndex = slugToIndex[albumSlug] ?? 0;
  const album = albums[albumIndex];
  const galleryItem = t.gallery.items[albumIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{t.gallery.backToGallery}</span>
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">{album.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {galleryItem.title}
            </h1>
          </div>
          <p className="text-lg text-slate-600 ml-1">
            {galleryItem.description}
          </p>
          {album.photos.length > 0 && (
            <p className="text-sm text-slate-400 mt-2 ml-1">
              {album.photos.length} {t.gallery.photoCount}
            </p>
          )}
        </div>

        {album.photos.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {album.photos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={photo.src}
                  alt={photo.note[language]}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {photo.note[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <Camera size={64} strokeWidth={1} className="mb-4" />
            <p className="text-xl font-medium">{t.gallery.noPhotosYet}</p>
          </div>
        )}
      </div>
    </div>
  );
}
