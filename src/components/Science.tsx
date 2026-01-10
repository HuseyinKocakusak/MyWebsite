import { BookOpen, FileText, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Science() {
  const { language } = useLanguage();
  const t = translations[language];

  const sections = [
    {
      id: 'academia',
      title: t.science.academia,
      icon: BookOpen,
      content: t.science.academiaText,
      type: 'text',
    },
    {
      id: 'literature',
      title: t.science.literature,
      icon: FileText,
      content: t.science.literatureItems,
      type: 'list',
    },
    {
      id: 'publications',
      title: t.science.publications,
      icon: Award,
      content: [
        { title: 'KOCAKUSAK, H., KÖK, A. B., OZTURK, B., KARACICEK, B., GENC, S. (2025)', venue: 'Deciphering the Role of tRNA-Derived Fragments in Neurological and Psychiatric Disease Pathogenesis. Frontiers in Cellular Neuroscience', url: 'https://www.frontiersin.org/journals/cellular-neuroscience/articles/10.3389/fncel.2025.1663788/full' },
      ],
      type: 'publications',
    },
    {
      id: 'conferences',
      title: t.science.conferences,
      icon: Users,
      content: [
        { title: '22nd Turkish Neuroscience Congress', year: '2024', location: 'Istanbul, Turkey', url: 'https://www.bad.org.tr/guncel-usk/' },
        { title: '1st International Extracellular Vesicles Conference', year: '2024', location: 'Ankara, Turkey', type: 'Poster', url: 'https://meetinghand.com/e/1-extracellular-vesicles-conference/#welcome-3069' },
        { title: 'Exposome-TR Symposium', year: '2024', location: 'Izmir, Turkey', url: 'https://www.deu.edu.tr/etkinlik/exposome-tr-sempozyumu/' },
        { title: 'The 8th Venusberg Meeting on Neuroinflammation', year: '2025', location: 'Belval, Luxemburg', type: 'Poster', url: 'https://neuroinflammation.uni.lu/' },
        { title: '23rd Turkish Neuroscience Congress', year: '2025', location: 'Izmir, Turkey', type: 'Organization Team', url: 'https://usktubas.org/genel-bilgiler' },
      ],
      type: 'conferences',
    },
  ];

  return (
    <section id="science" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t.science.title}
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-6 flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Icon size={28} className="text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>

                <div className="p-8">
                  {section.type === 'text' && (
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  )}

                  {section.type === 'list' && (
                    <div className="space-y-6">
                      {(section.content as any[]).map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 leading-relaxed">
                            {item.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'publications' && (
                    <div className="space-y-6">
                      {(section.content as any[]).map((item, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg border border-blue-200 flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-900 mb-2">
                              {item.title}
                            </h4>
                            <p className="text-slate-600 italic">
                              {item.venue}
                            </p>
                          </div>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm whitespace-nowrap"
                            >
                              {t.science.read}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'conferences' && (
                    <div className="space-y-4">
                      {(section.content as any[]).map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex flex-col gap-1">
                              <div className="p-2 bg-blue-700 rounded text-white font-bold text-sm">
                                {item.year}
                              </div>
                              {item.type && (
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                                  {item.type}
                                </span>
                              )}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-slate-900">
                                {item.title}
                              </h4>
                              <p className="text-slate-600">
                                {item.location}
                              </p>
                            </div>
                          </div>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm ml-4 whitespace-nowrap"
                            >
                              {t.science.visit}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
