import { useState, useMemo } from 'react';
import { BookOpen, FileText, Award, Users, Tag, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ITEMS_PER_PAGE = 10;

const categoryColors: Record<string, { bg: string; text: string; border: string; activeBg: string }> = {
  ev: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', activeBg: 'bg-purple-600' },
  apitherapy: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', activeBg: 'bg-amber-500' },
  brain: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', activeBg: 'bg-rose-500' },
  exercise: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', activeBg: 'bg-emerald-500' },
};

interface LiteratureItem {
  title: string;
  year: string;
  url: string;
  dateAdded: string;
  summary: string;
  categories: string[];
}

export default function Science() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = t.science.literatureCategories as Record<string, string>;
  const literatureItems = t.science.literatureItems as LiteratureItem[];

  // Sort by dateAdded (newest first), then filter by category
  const sortedItems = useMemo(() =>
    [...literatureItems].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()),
    [literatureItems]
  );

  const filteredItems = activeCategory
    ? sortedItems.filter((item) => item.categories.includes(activeCategory))
    : sortedItems;

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const sections = [
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
          {/* Academia section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <BookOpen size={28} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.science.academia}</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.science.academiaText}
              </p>
            </div>
          </div>

          {/* Literature section with category filters */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <FileText size={28} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.science.literature}</h3>
            </div>

            <div className="p-8">
              {/* Category filter buttons */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === null
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.science.allCategories}
                </button>
                {Object.entries(categories).map(([key, label]) => {
                  const colors = categoryColors[key] || { activeBg: 'bg-slate-600', bg: 'bg-slate-50', text: 'text-slate-700' };
                  return (
                    <button
                      key={key}
                      onClick={() => handleCategoryChange(activeCategory === key ? null : key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === key
                          ? `${colors.activeBg} text-white shadow-md`
                          : `${colors.bg} ${colors.text} hover:opacity-80`
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Article cards grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {paginatedItems.map((item, index) => (
                  <div
                    key={`${currentPage}-${index}`}
                    className="group border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all flex flex-col"
                  >
                    {/* Title with publication year */}
                    <div className="flex items-start gap-3 mb-3">
                      <Tag size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-slate-900 leading-snug">
                        {item.title} ({item.year})
                      </h4>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-600 leading-relaxed mb-4 pl-[30px]">
                      {item.summary}
                    </p>

                    {/* Bottom section: date added, categories, link */}
                    <div className="mt-auto pl-[30px] space-y-3">
                      {/* Date added to website */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={13} />
                        <span>{t.science.addedOn} {formatDate(item.dateAdded)}</span>
                      </div>

                      {/* Categories and link row */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex flex-wrap gap-2">
                          {item.categories.map((catKey) => {
                            const colors = categoryColors[catKey] || { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' };
                            return (
                              <span
                                key={catKey}
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                              >
                                {categories[catKey]}
                              </span>
                            );
                          })}
                        </div>

                        {/* Article link */}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap"
                        >
                          {t.science.readArticle}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <p className="text-center text-slate-400 py-8">
                  No articles found in this category.
                </p>
              )}

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Publications and Conferences sections */}
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
