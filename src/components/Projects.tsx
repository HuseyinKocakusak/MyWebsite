import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, inventory management, and real-time analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'AI Content Generator',
      description: 'ML-powered tool that generates high-quality content for blogs, social media, and marketing.',
      tech: ['Python', 'React', 'OpenAI', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300"></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
