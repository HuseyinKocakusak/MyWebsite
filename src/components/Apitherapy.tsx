import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import {
  Eye,
  Target,
  Shield,
  FlaskConical,
  MapPin,
  TreePine,
  Microscope,
  Feather,
  BookOpen,
  Search,
  Atom,
  Heart,
  Leaf,
  Globe,
  ArrowRight,
} from 'lucide-react';

const visionIcons = [FlaskConical, MapPin, TreePine];
const missionIcons = [Microscope, Feather, BookOpen];
const principleIcons = [Eye, Search, Atom, Heart, Leaf];

export default function Apitherapy() {
  const { language } = useLanguage();
  const t = translations[language];

  const team = [
    { name: 'Osman Falakalı', role: t.apitherapy.roles.cofounder, image: '👨‍💼', emoji: true },
    { name: 'Mehmet Kocakuşak', role: t.apitherapy.roles.cofounder, image: '👨‍💼', emoji: true },
    { name: 'Hüseyin Kocakuşak', role: t.apitherapy.roles.scientificAdvisor, image: '👨‍🔬', emoji: true },
  ];

  return (
    <section id="apitherapy" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t.apitherapy.title}
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-amber-800">
          {t.apitherapy.companyName}
        </h3>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-slate-900">{t.apitherapy.ourTeam}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-6xl overflow-hidden">
                  {member.emoji ? (
                    <span className="text-6xl">{member.image}</span>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-amber-700 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-amber-100 rounded-xl">
              <Eye className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.apitherapy.vision}
            </h3>
          </div>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            {t.apitherapy.visionTagline}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.apitherapy.visionHighlights.map((item, index) => {
              const Icon = visionIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-amber-100 rounded-xl">
              <Target className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.apitherapy.mission}
            </h3>
          </div>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            {t.apitherapy.missionTagline}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.apitherapy.missionPillars.map((item, index) => {
              const Icon = missionIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400" />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="p-2.5 bg-amber-100 rounded-xl">
              <Shield className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.apitherapy.principles}
            </h3>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.apitherapy.principleItems.map((item, index) => {
              const Icon = principleIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-md border border-amber-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner — beeonia.com */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 p-8 md:p-12 text-center">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20" />
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/15 rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">beeonia.com</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t.apitherapy.ctaTitle}
            </h3>
            <p className="text-amber-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.apitherapy.ctaDescription}
            </p>
            <a
              href="https://beeonia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.apitherapy.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
