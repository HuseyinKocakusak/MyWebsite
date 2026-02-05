import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Science from './components/Science';
import Apitherapy from './components/Apitherapy';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import AlbumPage from './components/AlbumPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [albumSlug, setAlbumSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#album/')) {
        setAlbumSlug(hash.replace('#album/', ''));
      } else {
        setAlbumSlug(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openAlbum = (slug: string) => {
    window.location.hash = `album/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAlbum = () => {
    window.location.hash = 'gallery';
    setTimeout(() => {
      const el = document.getElementById('gallery');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Navigation />
        {albumSlug ? (
          <AlbumPage albumSlug={albumSlug} onBack={closeAlbum} />
        ) : (
          <>
            <Hero />
            <Science />
            <Apitherapy />
            <Gallery onOpenAlbum={openAlbum} />
            <About />
            <Contact />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
