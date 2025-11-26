import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-8"></div>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
          Have a project in mind or just want to chat? I'd love to hear from you.
          Drop me a message and I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Mail size={24} className="text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a
                    href="mailto:huseyinkocakusak@gmail.com"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    huseyinkocakusak@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <MapPin size={24} className="text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">🇹🇷 Izmir, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's build something amazing together!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:scale-105 font-medium shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-600">
          <p>&copy; 2026 HÜSEYİN KOCAKUŞAK</p>
        </div>
      </div>
    </section>
  );
}
