import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Apitherapy() {
  const { language } = useLanguage();
  const t = translations[language];

  const team = [
    { name: 'Osman Falakalı', role: t.apitherapy.roles.cofounder, image: '👨‍💼', emoji: true },
    { name: 'Mehmet Kocakuşak', role: t.apitherapy.roles.cofounder, image: '👨‍💼', emoji: true },
    { name: 'Hüseyin Kocakuşak', role: t.apitherapy.roles.scientificAdvisor, image: '👨‍🔬', emoji: true },
    { name: 'Hüseyin Kocakuşak', role: t.apitherapy.roles.scientificAdvisor, image: '/images/team/huseyin-kocakusak.jpg', emoji: false },
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

        <div className="mb-16">
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

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.apitherapy.vision}</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.apitherapy.visionText}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.apitherapy.mission}</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.apitherapy.missionText}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.apitherapy.principles}</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.apitherapy.principlesText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
