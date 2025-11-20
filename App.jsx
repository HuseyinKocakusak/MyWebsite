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

const Icons = {
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
  { id: 1, title: "Field Sampling", category: "Scientific", description: "Collecting soil microbe data before hive placement.", icon: <Icons.Beaker className="w-6 h-6 text-primary" /> },
  { id: 2, title: "Sunrise Ride", category: "Sport", description: "Gravel intervals along the ridge at dawn.", icon: <Icons.Dumbbell className="w-6 h-6 text-primary" /> },
  { id: 3, title: "Hive Inspection", category: "Beekeeper", description: "Checking brood frames after spring bloom.", icon: <Icons.Hexagon className="w-6 h-6 text-secondary" /> },
  { id: 4, title: "Daily Notes", category: "Daily", description: "Notebook sketches of experimental setups.", icon: <Icons.BookOpen className="w-6 h-6 text-primary" /> },
  { id: 5, title: "Meadow Still", category: "Aesthetic", description: "The apiary framed by wildflowers and soft light.", icon: <Icons.Leaf className="w-6 h-6 text-secondary" /> },
  { id: 6, title: "Lab Bench", category: "Scientific", description: "Spectrometry runs organized for carbon-aware scheduling.", icon: <Icons.FlaskConical className="w-6 h-6 text-primary" /> },
  { id: 7, title: "Post-Game Reset", category: "Sport", description: "Recovery protocols after a night match.", icon: <Icons.Award className="w-6 h-6 text-secondary" /> },
  { id: 8, title: "Apiary Sunset", category: "Beekeeper", description: "Golden hour silhouettes across the hives.", icon: <Icons.Images className="w-6 h-6 text-secondary" /> },
];

const socialLinks = [
  { label: "Email", href: "mailto:huseyinkocakusak@gmail.com", icon: <Icons.Mail className="w-5 h-5" /> },
  { label: "ORCID", href: "https://orcid.org/0000-0002-0670-1655", icon: <Icons.Globe2 className="w-5 h-5" /> },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=lPCH3-0AAAAJ&view_op=list_works&gmla=AKzYXQ3uDv5Dgv7vobBh5tnAVrppGOvxgz1-F4DDusNXlS5YiG4yKWORS9eCDvWR67nV2OO96gF3DaOeJvZbVlNT",
    icon: <Icons.GraduationCap className="w-5 h-5" />,
  },
  { label: "Instagram", href: "https://www.instagram.com/huseyin_kocakusak/", icon: <Icons.Sparkles className="w-5 h-5" /> },
  { label: "Medium", href: "https://medium.com/@huseyinkocakusak", icon: <Icons.BookOpen className="w-5 h-5" /> },
  { label: "Evrim Ağacı", href: "https://evrimagaci.org/orcinus22598", icon: <Icons.Leaf className="w-5 h-5" /> },
  { label: "Email", href: "mailto:hello@huseyinkocakusak.com", icon: <Icons.Mail className="w-5 h-5" /> },
  { label: "Research", href: "https://orcid.org", icon: <Icons.Globe2 className="w-5 h-5" /> },
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
            <Icons.BookOpen className="w-4 h-4" /> Read Summary
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
              <Icons.Hexagon className="h-6 w-6" />
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
            {mobileOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
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
              Extracellular Vesicles • Brain • Bee • Longevity
            </h1>
            <p className="text-lg text-[#333333]/85">
              Role of microglia derived extracellular vesicles in cell cell interactions across the brain. Science
              based beekeeping, lifting and nutrition.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={badgeClasses}><Icons.Beaker className="h-4 w-4" /> Researcher</span>
              <span className={badgeClasses}><Icons.Hexagon className="h-4 w-4" /> Beekeeper</span>
              Premium Nature Professional blending research, beekeeping, and athletic grit.
            </h1>
            <p className="text-lg text-[#333333]/85">
              Grounded in ecosystems, sharpened by inquiry, and energized by movement. I bridge labs, hives, and
              training grounds to steward healthy futures.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={badgeClasses}><Icons.Beaker className="h-4 w-4" /> Researcher</span>
              <span className={badgeClasses}><Icons.Hexagon className="h-4 w-4" /> Apiarist</span>
              <span className={badgeClasses}><Icons.Dumbbell className="h-4 w-4" /> Athlete</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNav("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#2F4F4F]/30 transition hover:bg-[#263e3e]"
              >
                <Icons.Mail className="h-4 w-4" /> Contact
              </button>
              <button
                onClick={() => handleNav("gallery")}
                className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-[#F0F8FF] px-5 py-3 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#2F4F4F]/40"
              >
                <Icons.GalleryVertical className="h-4 w-4" /> View gallery
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#2F4F4F]/10 bg-[#F0F8FF] p-5 shadow-sm shadow-[#2F4F4F]/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F4F4F] text-white">
                  <Icons.Telescope className="h-5 w-5" />
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
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">1</p>
                <p className="text-sm text-[#333333]/75">article</p>
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
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">45.07''</p>
                <p className="text-sm text-[#333333]/75">10K PR</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">2:59</p>
                <p className="text-sm text-[#333333]/75">marathon PR</p>
              </div>
              <div className="rounded-2xl border border-[#2F4F4F]/10 bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Community</p>
                <p className="mt-1 text-2xl font-bold text-[#2F4F4F]">30+</p>
                <p className="text-sm text-[#333333]/75">workshops hosted</p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          id="science"
          eyebrow="Science"
          title="Extracellular Vesicles Researcher"
          description="Neuroinflammation & Neuroprotection, non-coding RNAs"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <AimList aims={scienceAims} icon={<Icons.Brain className="h-5 w-5 text-[#2F4F4F]" />} />
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                <div className="rounded-xl bg-[#2F4F4F] p-3 text-white">
                  <Icons.Beaker className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Lab mindset</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">Measured. Reproducible. Open.</p>
                </div>
              </div>
              <ArticleGrid articles={scienceArticles} />
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="beekeeping"
          eyebrow="Beekeeping"
          title="Beekeeper stewarding resilient colonies"
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
              <Icons.Hexagon className="h-5 w-5 text-secondary" />
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
          </div>
        </SectionShell>

        <SectionShell
          id="sport"
          eyebrow="Sport"
          title="Athlete refining data-driven performance"
          description="Training blocks guided by recovery, mindset, and measurable gains."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <AimList aims={sportAims} icon={<Icons.Dumbbell className="h-5 w-5 text-[#2F4F4F]" />} />
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                <div className="rounded-xl bg-[#2F4F4F] p-3 text-white">
                  <Icons.Flame className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Approach</p>
                  <p className="text-lg font-semibold text-[#2F4F4F]">Intentional, grounded, repeatable.</p>
                </div>
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
          description="Molecular biologist who applies research mindset to health, sport, and personal development."
        >
          <div className="grid gap-6 md:grid-cols-[220px,1fr]">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm shadow-[#2F4F4F]/10">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[#DAA520] to-[#2F4F4F] opacity-90" />
              <p className="mt-4 text-lg font-semibold text-[#2F4F4F]">You</p>
              <p className="text-sm text-[#333333]/70">Researcher • Beekeeper • Athlete</p>
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
                    <Icons.GraduationCap className="h-4 w-4" /> Expertise
                  </div>
                  <p className="mt-2 text-sm text-[#333333]/75">Biomaterials, data capture, regenerative design.</p>
                </div>
                <div className="rounded-xl bg-white/80 p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2F4F4F]">
                    <Icons.Leaf className="h-4 w-4" /> Philosophy
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
          description="Contact for collaboration and evidence based exercise/nutrition "
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
                  <p>huseyinkocakusak@gmail.com</p>
                  <p>Izmir, Türkiye</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#2F4F4F]/20 bg-white px-4 py-2 text-sm font-semibold text-[#2F4F4F] transition hover:border-[#2F4F4F]/40"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>
      </main>
    </div>
  );
}
