import { BookOpen, CheckCircle, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t.about.title}
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BookOpen size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{t.about.scienceBased}</h3>
                  <p className="text-slate-600">
                    {t.about.scienceBasedDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <CheckCircle size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{t.about.disciplined}</h3>
                  <p className="text-slate-600">
                    {t.about.disciplinedDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BarChart3 size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{t.about.analytic}</h3>
                  <p className="text-slate-600">
                    {t.about.analyticDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
