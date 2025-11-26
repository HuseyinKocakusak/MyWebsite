export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile', 'Leadership'] },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-600 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
