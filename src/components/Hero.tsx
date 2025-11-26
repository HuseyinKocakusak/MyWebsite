import { ArrowDown, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            Molecular Biology Athletic Performance Scientific Advisor
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Integrating neuroscience, cellular metabolism, exercise physiology, and nutritional strategies.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:scale-105 font-medium shadow-lg shadow-slate-900/20"
          >
            Get In Touch
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all hover:scale-105 font-medium"
          >
            View Projects
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
