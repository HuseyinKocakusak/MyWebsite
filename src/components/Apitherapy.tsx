import { Users } from 'lucide-react';

export default function Apitherapy() {
  const team = [
    { name: 'Osman Falakalı', role: 'Co-founder', image: '👨‍💼', emoji: true },
    { name: 'Mehmet Kocakuşak', role: 'Co-founder', image: '👨‍💼', emoji: true },
    { name: 'Hüseyin Kocakuşak', role: 'Scientific Advisor, Digital Marketing Manager', image: '/images/team/huseyin-kocakusak.jpg', emoji: false },
  ];

  const visionText = "Vizyonumuz, arıların ve insanların uzun vadeli sağlığını gözetiyoruz ki kaliteli bal üretelim ve sürdürülebilir bir şekilde müşterilerimize muazzam bir bal yedirelim. Arıcılığı bilimsel bilgi, analiz ve izlenebilirlik temeline oturtarak arılarımızın uzun vadeli sağlığını korumayı; bunun doğal sonucu olarak da kalıntı yükü düşük, yüksek nitelikli balları sürdürülebilir bir şekilde üreterek insanlara güvenle sunmayı esas alan bir model haline getirmektir. Geleneksel arıcılık birikimini güncel literatür, saha verileri ve kalite analizleriyle birleştirerek, süreçleri şeffaf ve denetlenebilir bir yapıya kavuşturmayı amaçlıyoruz. Yıl içinde farklı flora ve iklim kuşaklarına göç ederek; Yamanlar Dağı'nda bahar aylarında zengin çiçek kombinasyonlarından elde ettiğimiz polen ve çiçek balıyla, Menderes'te özellikle püren ve hayıt ağırlıklı bitki örtüsünden kaynaklanan aromatik ballarla ve Balıkesir/Kütahya gibi daha iç bölgelerde ürettiğimiz karaçaltı balıyla bu yaklaşımı somutlaştırıyoruz. Uzun vadede, bu bölgelerde yürüttüğümüz gezgin arıcılık faaliyetleriyle hem biyolojik çeşitliliğin korunmasına katkı sağlayan hem de güvenilir, bilim temelli üretim modeliyle referans gösterilmeyi hedefliyoruz.";

  const missionText = "Arıların ve doğanın ihtiyaçlarını önceleyen, bilimsel temelli ve izlenebilir üretim süreçleriyle güvenilir arı ürünleri sunmaktır. Kolonilerimizi flora ve iklim koşullarına uygun biçimde konumlandırarak, kimyasal yükü düşük, mümkün olduğunca sade ve müdahalesiz bir üretim modeli benimsiyoruz. Her adımda hijyen kurallarına, analiz sonuçlarına ve güncel bilimsel verilere dayanarak çalışıyor; elde ettiğimiz bilgiyi hem tüketicilerle hem de arıcılarla paylaşarak daha bilinçli bir bal kültürü oluşmasına katkı sağlamayı amaçlıyoruz.";

  const principlesText = "Çalışma biçimimizi belirleyen temel ilkelerimiz; şeffaflık, izlenebilirlik, bilimsel yaklaşım, arı refahı ve çevresel yükün en aza indirilmesidir. Üretim noktalarımızı seçerken hem arılarımızın sağlığını hem balımızın kalitesini hem de tüketicilerimizin uzun vadeli sağlığını gözeterek, mikroplastik ve tarım ilacı maruziyetini pratikte 0'a indirmeyi hedefliyoruz. Bu nedenle PM2.5 başta olmak üzere hava kirliliğinin düşük olduğu, tarımsal ilaç kullanımının minimal olduğu, mümkün olduğunca el değmemiş bölgeleri uzun saha çalışmalarıyla tespit ediyor ve arılıklarımızı bu alanlarda konumlandırıyoruz. Ürünlerimizin kaynağını, hasat dönemlerini ve kullanılan yöntemleri açıkça paylaşmayı; yanıltıcı, abartılı veya bilimsel temeli olmayan iddialardan uzak durmayı ilke ediniyoruz. Sürekli öğrenmeyi, güncel bilimsel literatür ve sahadaki gözlemlerimizle üretimimizi geliştirmeyi ve bu birikimi paydaşlarımızla paylaşmayı da değişmeyen bir çalışma prensibi olarak kabul ediyoruz.";

  return (
    <section id="apitherapy" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Apitherapy
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-amber-800">
          Ege Arıcılık
        </h3>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Our Team</h3>
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
              <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {visionText}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {missionText}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-lg">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">İlkelerimiz</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-700 leading-relaxed text-lg">
                {principlesText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
