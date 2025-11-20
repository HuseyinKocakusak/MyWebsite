const { useEffect, useMemo, useRef, useState } = React;

const IconBase = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const icons = {
  Award: (props) => (
    <IconBase {...props}>
      <path d="M12 15a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" />
      <path d="m9 14.65-1.45 4.35L12 17l4.45 2-1.45-4.35" />
    </IconBase>
  ),
  Beaker: (props) => (
    <IconBase {...props}>
      <path d="M4.5 3h15" />
      <path d="M6 3v9a6 6 0 1 0 12 0V3" />
      <path d="M6 14h12" />
    </IconBase>
  ),
  BookOpen: (props) => (
    <IconBase {...props}>
      <path d="M2 4a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2Z" />
      <path d="M22 4a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2Z" />
    </IconBase>
  ),
  Brain: (props) => (
    <IconBase {...props}>
      <path d="M12 5V3a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M12 5V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2" />
      <path d="M8 7H5.5A2.5 2.5 0 0 0 3 9.5 2.5 2.5 0 0 0 5.5 12" />
      <path d="M16 7h2.5A2.5 2.5 0 0 1 21 9.5 2.5 2.5 0 0 1 18.5 12" />
      <path d="M12 13v9" />
      <path d="M10 18a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-1.5" />
      <path d="M14 18a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1.5" />
      <path d="M12 7v6a2 2 0 0 1-2 2H8" />
      <path d="M12 7v6a2 2 0 0 0 2 2h2" />
    </IconBase>
  ),
  Dumbbell: (props) => (
    <IconBase {...props}>
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1.5-1.5" />
      <path d="M3 3l1.5 1.5" />
      <path d="M3 8.5 8.5 3" />
      <path d="M15.5 21 21 15.5" />
      <path d="M12.5 10.5 9.5 13.5" />
    </IconBase>
  ),
  Flame: (props) => (
    <IconBase {...props}>
      <path d="M8.5 14.5A3.5 3.5 0 1 0 15 11c0-3-3-6-3-6s-5 5.5-5 9.5a5 5 0 0 0 10 0c0-1-.3-2-.7-2.8" />
    </IconBase>
  ),
  GalleryVertical: (props) => (
    <IconBase {...props}>
      <rect x="3" y="2" width="7" height="20" rx="2" />
      <rect x="14" y="2" width="7" height="20" rx="2" />
      <path d="M7.5 2v20" />
      <path d="M16.5 2v20" />
    </IconBase>
  ),
  Globe2: (props) => (
    <IconBase {...props}>
      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    </IconBase>
  ),
  GraduationCap: (props) => (
    <IconBase {...props}>
      <path d="m22 10-10 3L2 10l10-3 10 3Z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
      <path d="m6 17 6-4 6 4" />
    </IconBase>
  ),
  Hexagon: (props) => (
    <IconBase {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73Z" />
    </IconBase>
  ),
  Images: (props) => (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 15s2-3 5-3 4 3 7 3 4-3 6-3" />
      <path d="M8 9h.01" />
    </IconBase>
  ),
  Leaf: (props) => (
    <IconBase {...props}>
      <path d="M11 3a7 7 0 0 0-7 7c0 5 5 9 9 9a7 7 0 0 0 7-7C20 7 16 3 11 3Z" />
      <path d="M9 9c1 1 3 2 6 2" />
    </IconBase>
  ),
  Mail: (props) => (
    <IconBase {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </IconBase>
  ),
  Menu: (props) => (
    <IconBase {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </IconBase>
  ),
  Sparkles: (props) => (
    <IconBase {...props}>
      <path d="M12 3 13 8l5 1-5 1-1 5-1-5-5-1 5-1Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 17h4" />
      <path d="M17 3h4" />
    </IconBase>
  ),
  Telescope: (props) => (
    <IconBase {...props}>
      <path d="m21 3-1.3 3.9" />
      <path d="m13.1 8.9 3.8 1.3" />
      <path d="m11.6 12.2 2.8 2.8" />
      <path d="m12.2 11.6 2.8 2.8" />
      <path d="m17.2 5.8 1.4 4.4" />
      <path d="m3 21 9-9" />
      <path d="m12 12 9 9" />
      <path d="M9 15l6 6" />
      <path d="M10 14l6 6" />
    </IconBase>
  ),
  X: (props) => (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  ),
  FlaskConical: (props) => (
    <IconBase {...props}>
      <path d="M10 2v8l-3.5 7A2 2 0 0 0 8.3 20h7.4a2 2 0 0 0 1.8-3l-3.5-7V2" />
      <path d="M6.5 12h11" />
    </IconBase>
  ),
};
import React, { useEffect, useMemo, useRef, useState } from "https://esm.sh/react@18.2.0";
import {
  Award,
  Beaker,
  BookOpen,
  Brain,
  Dumbbell,
  Flame,
  GalleryVertical,
  Globe2,
  GraduationCap,
  Hexagon,
  Images,
  Leaf,
  Mail,
  Menu,
  Sparkles,
  Telescope,
  X,
  FlaskConical,
} from "https://esm.sh/lucide-react@0.473.0?dev";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "science", label: "Science" },
  { id: "beekeeping", label: "Beekeeping" },
  { id: "sport", label: "Sport" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About Me" },
  { id: "contact", label: "Contact" },
];

const scienceAims = [
  "Advance sustainable biomaterials research with measurable ecological impact.",
  "Mentor interdisciplinary teams blending data, biology, and systems thinking.",
  "Publish transparent, reproducible studies that invite collaboration.",
];

const scienceArticles = [
  {
    title: "Microbial Consortia for Coastal Resilience",
    summary: "Exploring engineered symbioses that stabilize shoreline erosion while boosting biodiversity.",
  },
  {
    title: "Carbon-Aware Labs",
    summary: "Designing laboratory automation that schedules heavy instrumentation during renewable peaks.",
  },
  {
    title: "Data Provenance in Field Studies",
    summary: "Implementing tamper-evident data trails to keep citizen science contributions trustworthy.",
  },
];

const beekeepingStatements = [
  {
    title: "Mission",
    copy: "Protect pollinator health through regenerative apiaries and transparent stewardship.",
  },
  {
    title: "Vision",
    copy: "A thriving network of community hives that educates, nourishes, and inspires.",
  },
  {
    title: "Aim",
    copy: "Bridge science and craft to track hive wellness and share open data for keepers everywhere.",
  },
];

const sportAims = [
  "Train with biomechanical insights to prevent injury and sustain peak form.",
  "Apply data-driven periodization to balance endurance, strength, and agility.",
  "Celebrate team wins and personal bests with humility and intent.",
];

const sportArticles = [
  {
    title: "Altitude Blocks for Endurance",
    summary: "How micro-dosed altitude exposure pairs with recovery metrics to extend aerobic ceilings.",
  },
  {
    title: "Neural Priming Before Competition",
    summary: "A primer on CNS activation drills that keep reaction times sharp without fatigue.",
  },
  {
    title: "Fueling with Intent",
    summary: "Testing honey-based gels versus synthetics for sustained effort and gut comfort.",
  },
];

const galleryItemsSeed = [
  { id: 1, title: "Field Sampling", category: "Scientific", description: "Collecting soil microbe data before hive placement.", icon: <icons.Beaker className="w-6 h-6 text-primary" /> },
  { id: 2, title: "Sunrise Ride", category: "Sport", description: "Gravel intervals along the ridge at dawn.", icon: <icons.Dumbbell className="w-6 h-6 text-primary" /> },
  { id: 3, title: "Hive Inspection", category: "Beekeeper", description: "Checking brood frames after spring bloom.", icon: <icons.Hexagon className="w-6 h-6 text-secondary" /> },
  { id: 4, title: "Daily Notes", category: "Daily", description: "Notebook sketches of experimental setups.", icon: <icons.BookOpen className="w-6 h-6 text-primary" /> },
  { id: 5, title: "Meadow Still", category: "Aesthetic", description: "The apiary framed by wildflowers and soft light.", icon: <icons.Leaf className="w-6 h-6 text-secondary" /> },
  { id: 6, title: "Lab Bench", category: "Scientific", description: "Spectrometry runs organized for carbon-aware scheduling.", icon: <icons.FlaskConical className="w-6 h-6 text-primary" /> },
  { id: 7, title: "Post-Game Reset", category: "Sport", description: "Recovery protocols after a night match.", icon: <icons.Award className="w-6 h-6 text-secondary" /> },
  { id: 8, title: "Apiary Sunset", category: "Beekeeper", description: "Golden hour silhouettes across the hives.", icon: <icons.Images className="w-6 h-6 text-secondary" /> },
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@huseyinkocakusak.com", icon: <icons.Mail className="w-5 h-5" /> },
  { label: "Research", href: "https://orcid.org", icon: <icons.Globe2 className="w-5 h-5" /> },
  { label: "Strava", href: "https://www.strava.com", icon: <icons.Sparkles className="w-5 h-5" /> },
  { id: 1, title: "Field Sampling", category: "Scientific", description: "Collecting soil microbe data before hive placement.", icon: <Beaker className="w-6 h-6 text-primary" /> },
  { id: 2, title: "Sunrise Ride", category: "Sport", description: "Gravel intervals along the ridge at dawn.", icon: <Dumbbell className="w-6 h-6 text-primary" /> },
  { id: 3, title: "Hive Inspection", category: "Beekeeper", description: "Checking brood frames after spring bloom.", icon: <Hexagon className="w-6 h-6 text-secondary" /> },
  { id: 4, title: "Daily Notes", category: "Daily", description: "Notebook sketches of experimental setups.", icon: <BookOpen className="w-6 h-6 text-primary" /> },
  { id: 5, title: "Meadow Still", category: "Aesthetic", description: "The apiary framed by wildflowers and soft light.", icon: <Leaf className="w-6 h-6 text-secondary" /> },
  { id: 6, title: "Lab Bench", category: "Scientific", description: "Spectrometry runs organized for carbon-aware scheduling.", icon: <FlaskConical className="w-6 h-6 text-primary" /> },
  { id: 7, title: "Post-Game Reset", category: "Sport", description: "Recovery protocols after a night match.", icon: <Award className="w-6 h-6 text-secondary" /> },
  { id: 8, title: "Apiary Sunset", category: "Beekeeper", description: "Golden hour silhouettes across the hives.", icon: <Images className="w-6 h-6 text-secondary" /> },
];

const socialLinks = [
  { label: "Email", href: "mailto:hello@huseyinkocakusak.com", icon: <Mail className="w-5 h-5" /> },
  { label: "Research", href: "https://orcid.org", icon: <Globe2 className="w-5 h-5" /> },
  { label: "Strava", href: "https://www.strava.com", icon: <Sparkles className="w-5 h-5" /> },
];

const filterOptions = ["All", "Daily", "Beekeeper", "Sport", "Scientific", "Aesthetic"];

const badgeClasses =
  "inline-flex items-center gap-2 rounded-full bg-[#F0F8FF] text-[#2F4F4F] px-3 py-1 text-sm font-semibold";

function SectionShell({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">{eyebrow}</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold text-[#2F4F4F]">{title}</h2>
          {description ? <p className="max-w-2xl text-base text-[#333333]/80">{description}</p> : null}
        </div>
      </div>
      <div className="rounded-2xl border border-[#2F4F4F]/10 bg-[#F0F8FF] p-6 shadow-sm shadow-[#2F4F4F]/10">
        {children}
      </div>
    </section>
  );
}

function AimList({ aims, icon }) {
  return (
    <ul className="space-y-4">
      {aims.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 rounded-xl bg-white/70 px-4 py-3 text-[#333333] shadow-sm shadow-[#2F4F4F]/10 transition duration-300 hover:shadow-md"
        >
          <span className="mt-0.5">{icon}</span>
          <p className="leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function ArticleGrid({ articles }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <div
          key={article.title}
          className="group flex flex-col justify-between rounded-xl border border-[#2F4F4F]/10 bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2F4F4F]">{article.title}</h3>
            <p className="text-sm text-[#333333]/75">{article.summary}</p>
          </div>
          <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#DAA520] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#b48719]">
            <icons.BookOpen className="w-4 h-4" /> Read Summary
            <BookOpen className="w-4 h-4" /> Read Summary
          </button>
        </div>
      ))}
    </div>
  );
}

function Gallery({ activeFilter, onFilterChange, items, onUpload, galleryRef }) {
  const fileInputRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const handleFiles = (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const readers = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) =>
            resolve({
              id: crypto.randomUUID(),
              title: file.name,
              category: "Daily",
              description: "Uploaded from your device.",
              image: e.target?.result,
            });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then(onUpload);
  };

  return (
    <div ref={galleryRef} className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-secondary bg-secondary text-white shadow"
                : "border-[#2F4F4F]/20 bg-white text-[#2F4F4F] hover:border-[#2F4F4F]/40"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
              activeFilter === filter
                ? "border-[#DAA520] bg-[#DAA520] text-white shadow-sm"
                : "border-[#2F4F4F]/15 bg-white text-[#333333] hover:border-[#2F4F4F]/30"
            }`}
          >
            {filter}
          </button>
        ))}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="rounded-full border border-dashed border-[#2F4F4F]/30 bg-white px-4 py-2 text-sm font-semibold text-[#2F4F4F] hover:border-secondary hover:text-secondary"
        >
          Upload from device
        </button>
        <input
          className="inline-flex items-center gap-2 rounded-full border border-dashed border-[#2F4F4F]/25 bg-white px-4 py-2 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#DAA520] hover:text-[#DAA520]"
        >
          <Images className="w-4 h-4" /> Add Images
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={handleFiles}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-[#2F4F4F]/10 bg-white shadow-sm shadow-[#2F4F4F]/10"
          >
            {item.image ? (
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
            ) : (
              <div className="flex h-48 items-center justify-center bg-[#F0F8FF] text-4xl">{item.icon}</div>
            )}
            <div className="space-y-1 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.category}</p>
          onChange={handleFiles}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-[#2F4F4F]/10 bg-white/80 shadow-sm shadow-[#2F4F4F]/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {item.image ? (
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            ) : (
              <div className="flex h-48 w-full items-center justify-center bg-[#F0F8FF] text-[#2F4F4F]">
                {item.icon ?? <GalleryVertical className="w-10 h-10" />}
              </div>
            )}
            <div className="space-y-2 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4F4F]/70">
                <span className="rounded-full bg-[#DAA520]/15 px-3 py-1 text-[#DAA520]">{item.category}</span>
              </div>
              <h4 className="text-lg font-semibold text-[#2F4F4F]">{item.title}</h4>
              <p className="text-sm text-[#333333]/75">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState(galleryItemsSeed);
  const galleryRef = useRef(null);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleUpload = (items) => {
    setGalleryItems((prev) => [...items, ...prev]);
    setActiveFilter("All");
  };

  useEffect(() => {
    const onScroll = () => setMobileOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2F4F4F]/10 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F4F4F] text-white shadow-sm shadow-[#2F4F4F]/30">
              <icons.Hexagon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-secondary">Premium Nature Professional</p>
              <p className="text-lg font-bold text-[#2F4F4F]">Hüseyin Kocakuşak</p>
            </div>
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="rounded-full px-3 py-2 text-sm font-semibold text-[#2F4F4F] transition hover:bg-[#F0F8FF]"
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState(galleryItemsSeed);
  const [activeFilter, setActiveFilter] = useState("All");
  const galleryRef = useRef(null);

  useEffect(() => {
    document.body.className = "bg-[#FAFAF9]";
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleApiaryView = () => {
    setActiveFilter("Beekeeper");
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#333333]">
      <header className="sticky top-0 z-30 border-b border-[#2F4F4F]/10 bg-[#FAFAF9]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F4F4F] text-white shadow-sm">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2F4F4F]">Premium Nature Professional</p>
              <p className="text-lg font-semibold text-[#333333]">Hüseyin Kocakuşak</p>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-semibold text-[#2F4F4F] lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="rounded-full px-3 py-2 transition hover:bg-[#F0F8FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            className="rounded-lg p-2 text-[#2F4F4F] hover:bg-[#F0F8FF] md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <icons.X className="h-6 w-6" /> : <icons.Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen ? (
          <div className="border-t border-[#2F4F4F]/10 bg-background md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#2F4F4F] hover:bg-[#F0F8FF]"
            className="lg:hidden rounded-full border border-[#2F4F4F]/20 p-2 text-[#2F4F4F]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#2F4F4F]/10 bg-[#F0F8FF] px-4 py-3 lg:hidden">
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold text-[#2F4F4F] shadow-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20 pt-28 md:px-6 md:pt-32">
        <section id="home" className="grid gap-8 rounded-3xl bg-white p-8 shadow-lg shadow-[#2F4F4F]/10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Science • Apiary • Sport</p>
            <h1 className="text-4xl font-black text-[#2F4F4F] sm:text-5xl">
              Premium Nature Professional blending research, beekeeping, and athletic grit.
            </h1>
            <p className="text-lg text-[#333333]/85">
              Grounded in ecosystems, sharpened by inquiry, and energized by movement. I bridge labs, hives, and
              training grounds to steward healthy futures.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={badgeClasses}><icons.Beaker className="h-4 w-4" /> Researcher</span>
              <span className={badgeClasses}><icons.Hexagon className="h-4 w-4" /> Apiarist</span>
              <span className={badgeClasses}><icons.Dumbbell className="h-4 w-4" /> Athlete</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNav("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#2F4F4F]/30 transition hover:bg-[#263e3e]"
              >
                <icons.Mail className="h-4 w-4" /> Contact
              </button>
              <button
                onClick={() => handleNav("gallery")}
                className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-[#F0F8FF] px-5 py-3 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#2F4F4F]/40"
              >
                <icons.GalleryVertical className="h-4 w-4" /> View gallery
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#2F4F4F]/10 bg-[#F0F8FF] p-5 shadow-sm shadow-[#2F4F4F]/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F4F4F] text-white">
                  <icons.Telescope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Current focus</p>
                  <p className="text-lg font-bold text-[#2F4F4F]">Field-ready biomaterials</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#333333]/80">
                Testing sustainable substrates that benefit pollinator habitats while enabling sensor-rich research.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#2F4F4F]/10 bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Science</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">12+</p>
                <p className="text-sm text-[#333333]/75">peer-reviewed pieces</p>
              </div>
              <div className="rounded-2xl border border-[#2F4F4F]/10 bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Apiary</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">18</p>
                <p className="text-sm text-[#333333]/75">healthy hives</p>
              </div>
              <div className="rounded-2xl border border-[#2F4F4F]/10 bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Sport</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">2:59</p>
                <p className="text-sm text-[#333333]/75">marathon PR</p>
              </div>
              <div className="rounded-2xl border border-[#2F4F4F]/10 bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Community</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">30+</p>
                <p className="text-sm text-[#333333]/75">workshops hosted</p>
        )}
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10">
        <section id="home" className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-[#F0F8FF] via-white to-[#DAA520]/10 p-8 shadow-lg shadow-[#2F4F4F]/10 md:grid-cols-2">
          <div className="space-y-6">
            <div className={badgeClasses}>
              <Sparkles className="w-4 h-4" /> Researcher · Apiarist · Athlete
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#2F4F4F] sm:text-5xl">
              Premium Nature Professional blending science, hives, and sport.
            </h1>
            <p className="text-lg leading-relaxed text-[#333333]/80">
              I connect rigorous research with regenerative beekeeping and disciplined athletics. Each practice informs the others—data
              keeps the science honest, the bees ground the work, and sport sharpens resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNavClick("science")}
                className="inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2F4F4F]/20 transition hover:-translate-y-0.5 hover:bg-[#243b3b]"
              >
                <Beaker className="w-4 h-4" /> Explore Science
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-white px-5 py-3 text-sm font-semibold text-[#2F4F4F] transition hover:-translate-y-0.5 hover:border-[#DAA520] hover:text-[#DAA520]"
              >
                <Mail className="w-4 h-4" /> Contact
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Science", "Beekeeping", "Sport"].map((pillar) => (
                <div key={pillar} className="rounded-2xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F4F4F]/80">Focus</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#DAA520]/20 to-transparent blur-3xl" aria-hidden />
            <div className="relative space-y-4 rounded-3xl border border-[#2F4F4F]/15 bg-white/80 p-6 shadow-xl shadow-[#2F4F4F]/15 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#2F4F4F] p-3 text-white">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4F4F]/80">Ethos</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">Grounded curiosity</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#333333]/80">
                Every project honors ecology, data clarity, and performance craft. The work stays transparent so you can adapt it to your
                own context.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F0F8FF] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <FlaskConical className="w-4 h-4" /> Science
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Evidence, reproducibility, open methods.</p>
                </div>
                <div className="rounded-2xl bg-[#DAA520]/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <Hexagon className="w-4 h-4" /> Apiary
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Hive welfare, floral mapping, regenerative care.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <Dumbbell className="w-4 h-4" /> Sport
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Form, fuel, and focus tuned by data and feel.</p>
                </div>
                <div className="rounded-2xl bg-[#2F4F4F] p-4 text-white shadow-sm shadow-[#2F4F4F]/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" /> Cross-pollination
                  </div>
                  <p className="mt-2 text-sm text-white/90">Ideas travel between domains to unlock better answers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          id="science"
          eyebrow="Science"
          title="Researcher with ecological intent"
          description="Hands-on with field data, lab automation, and transparent science communication."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <AimList aims={scienceAims} icon={<icons.Brain className="h-5 w-5 text-[#2F4F4F]" />} />
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                <div className="rounded-xl bg-[#2F4F4F] p-3 text-white">
                  <icons.Beaker className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Lab mindset</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">Measured. Reproducible. Open.</p>
                </div>
          title="Research with field-ready rigor"
          description="Data-rich methods, transparent outcomes, and collaborative science that stays accountable to the environments it touches."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className={badgeClasses}>
                <Beaker className="w-4 h-4" /> Aims & Achievements
              </div>
              <AimList aims={scienceAims} icon={<Telescope className="w-5 h-5 text-[#2F4F4F]" />} />
            </div>
            <div className="space-y-4">
              <div className={badgeClasses}>
                <BookOpen className="w-4 h-4" /> Curated Articles
              </div>
              <ArticleGrid articles={scienceArticles} />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="beekeeping"
          eyebrow="Beekeeping"
          title="Apiarist stewarding resilient colonies"
          description="Balancing tradition with instrumentation to care for pollinators."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {beekeepingStatements.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">{item.title}</p>
                <p className="mt-2 text-lg font-semibold text-[#2F4F4F]">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-[#333333]/80">
              <icons.Hexagon className="h-5 w-5 text-secondary" />
              Transparent hive logs, seasonal splits, and integrated pest management.
            </div>
            <button
              onClick={() => {
                setActiveFilter("Beekeeper");
                galleryRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#DAA520] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b48719]"
            >
              View Our Apiary
            </button>
          title="Regenerative apiaries with measurable care"
          description="Tracking hive wellness, floral flows, and community education so the bees thrive and the ecosystem benefits."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className={badgeClasses}>
                <Hexagon className="w-4 h-4" /> Mission · Vision · Aim
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 xl:flex xl:gap-4">
                {beekeepingStatements.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#2F4F4F]/10 bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DAA520]">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#333333]/80">{item.copy}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleApiaryView}
                  className="inline-flex items-center gap-2 rounded-full bg-[#DAA520] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#DAA520]/30 transition hover:-translate-y-0.5 hover:bg-[#b48719]"
                >
                  <Images className="w-4 h-4" /> View Our Apiary
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-white px-5 py-3 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#DAA520] hover:text-[#DAA520]"
                >
                  <Leaf className="w-4 h-4" /> Partner
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className={badgeClasses}>
                <GraduationCap className="w-4 h-4" /> Field Education
              </div>
              <div className="rounded-2xl bg-white/90 p-5 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-sm leading-relaxed text-[#333333]/80">
                  Workshops weave scientific literacy with hands-on craft. Participants log hive vitals, map forage, and leave with an
                  actionable plan to uplift pollinators in their region.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#F0F8FF] p-4">
                    <p className="text-sm font-semibold text-[#2F4F4F]">Community Hives</p>
                    <p className="text-sm text-[#333333]/70">Shared apiaries with transparent data dashboards.</p>
                  </div>
                  <div className="rounded-xl bg-[#DAA520]/10 p-4">
                    <p className="text-sm font-semibold text-[#2F4F4F]">Forage Mapping</p>
                    <p className="text-sm text-[#333333]/70">Seasonal bloom tracking to align hive moves.</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                    <p className="text-sm font-semibold text-[#2F4F4F]">Health Protocols</p>
                    <p className="text-sm text-[#333333]/70">Integrated pest management with gentle interventions.</p>
                  </div>
                  <div className="rounded-xl bg-[#2F4F4F] p-4 text-white shadow-sm shadow-[#2F4F4F]/15">
                    <p className="text-sm font-semibold">Data Co-ops</p>
                    <p className="text-sm text-white/90">Open datasets to compare regional hive wellness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="sport"
          eyebrow="Sport"
          title="Athlete refining data-driven performance"
          description="Training blocks guided by recovery, mindset, and measurable gains."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <AimList aims={sportAims} icon={<icons.Dumbbell className="h-5 w-5 text-[#2F4F4F]" />} />
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                <div className="rounded-xl bg-[#2F4F4F] p-3 text-white">
                  <icons.Flame className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Approach</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">Intentional, grounded, repeatable.</p>
                </div>
          title="Athletics tuned by science and feel"
          description="Training that respects recovery, celebrates movement, and applies data where it serves longevity."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className={badgeClasses}>
                <Dumbbell className="w-4 h-4" /> Aims & Achievements
              </div>
              <AimList aims={sportAims} icon={<Award className="w-5 h-5 text-[#2F4F4F]" />} />
            </div>
            <div className="space-y-4">
              <div className={badgeClasses}>
                <BookOpen className="w-4 h-4" /> Curated Articles
              </div>
              <ArticleGrid articles={sportArticles} />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="gallery"
          eyebrow="Gallery"
          title="Moments across science, apiary, and sport"
          description="Filter and explore scenes; add your own moments from your device."
        >
          <Gallery
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            items={galleryItems}
            onUpload={handleUpload}
            galleryRef={galleryRef}
          />
        </SectionShell>

        <SectionShell
          id="about"
          eyebrow="About"
          title="About Hüseyin"
          description="Blending research rigor, ecological care, and athletic resilience."
        >
          <div className="grid gap-6 md:grid-cols-[220px,1fr]">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm shadow-[#2F4F4F]/10">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[#DAA520] to-[#2F4F4F] opacity-90" />
              <p className="mt-4 text-lg font-semibold text-[#2F4F4F]">You</p>
              <p className="text-sm text-[#333333]/70">Researcher • Apiarist • Athlete</p>
            </div>
            <div className="space-y-4 text-[#333333]/85">
              <p>
                I navigate the intersections of science, ecology, and sport to create measurable impact. I love
                translating field observations into repeatable lab insights, while keeping a beekeeper’s patience and an
                athlete’s discipline.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <icons.GraduationCap className="h-4 w-4" /> Expertise
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Biomaterials, data capture, regenerative design.</p>
                </div>
                <div className="rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <icons.Leaf className="h-4 w-4" /> Philosophy
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Honor the hive, trust the data, respect the body.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Let’s collaborate"
          description="Share projects, research ideas, or training opportunities."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#2F4F4F]">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#2F4F4F] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2F4F4F]">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#2F4F4F] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#2F4F4F]">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea"
                  className="mt-1 w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#2F4F4F] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#2F4F4F]/30 transition hover:bg-[#263e3e]"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-sm font-semibold text-[#2F4F4F]">Connect</p>
                <div className="mt-3 space-y-2 text-sm text-[#333333]/80">
                  <p>hello@huseyinkocakusak.com</p>
                  <p>Ankara, Türkiye • Available for collaboration</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-white px-4 py-2 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#2F4F4F]/40"
                    className="flex items-center gap-2 rounded-xl border border-[#2F4F4F]/10 bg-[#F0F8FF] px-4 py-3 text-sm font-semibold text-[#2F4F4F] shadow-sm transition hover:border-[#DAA520] hover:text-[#DAA520]"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="rounded-xl bg-[#2F4F4F] p-4 text-white">
                <p className="text-sm font-semibold">Smooth transitions</p>
                <p className="text-sm text-white/80">
                  Sections fade and lift subtly so navigating feels calm and intentional across devices.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>
    </div>
  );
}

export default App;
