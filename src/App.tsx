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
  const [subAlbumSlug, setSubAlbumSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#album/')) {
        const path = hash.replace('#album/', '');
        const parts = path.split('/');
        setAlbumSlug(parts[0]);
        setSubAlbumSlug(parts[1] || null);
      } else {
        setAlbumSlug(null);
        setSubAlbumSlug(null);
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

  const openSubAlbum = (subSlug: string) => {
    if (albumSlug) {
      window.location.hash = `album/${albumSlug}/${subSlug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeAlbum = () => {
    if (subAlbumSlug && albumSlug) {
      window.location.hash = `album/${albumSlug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = 'gallery';
      setTimeout(() => {
        const el = document.getElementById('gallery');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Navigation />
        {albumSlug ? (
          <AlbumPage
            albumSlug={albumSlug}
            subAlbumSlug={subAlbumSlug || undefined}
            onBack={closeAlbum}
            onOpenSubAlbum={openSubAlbum}
          />
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
