import { ArrowDown, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="border-4 border-red-600 inline-block p-6 mb-6">
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
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all hover:scale-105 font-medium"
          >
            {t.hero.viewProjects}
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-12">
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

        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
}
