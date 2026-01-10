import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { key: 'science', label: t.nav.science },
    { key: 'longevity', label: t.nav.longevity },
    { key: 'apitherapy', label: t.nav.apitherapy },
    { key: 'gallery', label: t.nav.gallery },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
          >
            Hüseyin KOCAKUŞAK
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-slate-700 hover:text-slate-900 hover:scale-110 transition-all font-medium"
              >
                {item.label}
              </button>
            ))}

            <div className="flex gap-1 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  language === 'en'
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  language === 'tr'
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100'
                }`}
              >
                TR
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-slate-700 hover:text-slate-900 hover:scale-110 transition-all font-medium text-left"
              >
                {item.label}
              </button>
            ))}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  language === 'en'
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  language === 'tr'
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-700 hover:bg-slate-100'
                }`}
              >
                TR
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
