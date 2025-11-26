import { BookOpen, CheckCircle, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I am a science-driven molecular biologist who focuses on understanding how cells communicate through extracellular vesicles and small noncoding RNAs. I approach complex biological questions with analytical precision, aiming to generate clear, reproducible, and meaningful results.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Outside the lab, I apply the same discipline to training, combining strength work, endurance running, and evidence-based nutrition to continuously improve physical performance. I also practice beekeeping with a scientific mindset, emphasizing natural production, sustainability, and traceable quality.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I value rigorous thinking, consistent work, and projects that create measurable impact in research, sport, and the products I develop.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BookOpen size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Science Based</h3>
                  <p className="text-slate-600">
                    Grounding all decisions and strategies in peer-reviewed research and empirical evidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <CheckCircle size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Disciplined</h3>
                  <p className="text-slate-600">
                    Committed to consistent execution, rigorous methodology, and sustainable practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BarChart3 size={28} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Analytic</h3>
                  <p className="text-slate-600">
                    Using data-driven analysis and critical thinking to generate measurable, meaningful results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
