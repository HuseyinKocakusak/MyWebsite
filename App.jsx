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
          title="Moments across science, hives, and sport"
          description="Filter by theme or upload your own images to keep a living log of the work."
        >
          <Gallery
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            items={galleryItems}
            onUpload={(newItems) => setGalleryItems((prev) => [...newItems, ...prev])}
            galleryRef={galleryRef}
          />
        </SectionShell>

        <SectionShell
          id="about"
          eyebrow="About"
          title="About Hüseyin"
          description="A cross-domain practitioner blending lab rigor, ecological care, and disciplined movement."
        >
          <div className="grid gap-6 md:grid-cols-[240px,1fr]">
            <div className="relative h-60 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2F4F4F] to-[#DAA520] shadow-lg shadow-[#2F4F4F]/20">
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/60">🙂</div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4F4F]">
                Profile Ready
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-[#333333]/85">
                I navigate research labs, apiaries, and training grounds with the same intent: thoughtful preparation, honest measurement,
                and adaptive practice. Each discipline keeps the others honest. You can swap any text here with your own story while
                keeping the layout intact.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <p className="text-sm font-semibold text-[#2F4F4F]">Interdisciplinary Lens</p>
                  <p className="text-sm text-[#333333]/70">From microbial ecology to endurance metrics, I translate between domains.</p>
                </div>
                <div className="rounded-2xl bg-[#F0F8FF] p-4 shadow-sm shadow-[#2F4F4F]/10">
                  <p className="text-sm font-semibold text-[#2F4F4F]">Leadership & Mentorship</p>
                  <p className="text-sm text-[#333333]/70">Teams thrive when clarity, empathy, and shared purpose guide the work.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Systems Thinking", "Regenerative Design", "Data Ethics", "Community Sport"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-[#2F4F4F]/10 px-4 py-2 text-sm font-semibold text-[#2F4F4F]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Let’s collaborate"
          description="Reach out for research partnerships, apiary consulting, or performance projects."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-[#2F4F4F]">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#DAA520] focus:outline-none focus:ring-2 focus:ring-[#DAA520]/40"
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold text-[#2F4F4F]">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#DAA520] focus:outline-none focus:ring-2 focus:ring-[#DAA520]/40"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-[#2F4F4F]">
                Message
                <textarea
                  rows="4"
                  placeholder="Tell me about your project"
                  className="w-full rounded-xl border border-[#2F4F4F]/20 bg-white px-4 py-3 text-sm text-[#333333] shadow-sm focus:border-[#DAA520] focus:outline-none focus:ring-2 focus:ring-[#DAA520]/40"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2F4F4F]/20 transition hover:-translate-y-0.5 hover:bg-[#243b3b]"
              >
                <Mail className="w-4 h-4" /> Send Message
              </button>
            </form>
            <div className="space-y-4 rounded-2xl bg-white/90 p-6 shadow-sm shadow-[#2F4F4F]/10">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#DAA520]/15 p-3 text-[#DAA520]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2F4F4F]">Staying in touch</p>
                  <p className="text-sm text-[#333333]/75">Let’s keep the conversation transparent and actionable.</p>
                </div>
              </div>
              <div className="space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
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
