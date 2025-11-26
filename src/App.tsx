import Hero from './components/Hero';
import Science from './components/Science';
import Apitherapy from './components/Apitherapy';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <Hero />
      <Science />
      <Apitherapy />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
