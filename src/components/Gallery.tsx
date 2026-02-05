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
