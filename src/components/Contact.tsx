import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

// ─────────────────────────────────────────────────────────────────────────────
// Get your free access key from https://web3forms.com
// Enter your email (huseyinkocakusak@gmail.com), check your inbox, paste below:
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${formData.name}`,
          from_name: formData.name,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t.contact.title}
        </h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto mb-8"></div>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">{t.contact.contactInfo}</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Mail size={24} className="text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t.contact.email}</h4>
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
                  <h4 className="font-semibold text-slate-900 mb-1">{t.contact.location}</h4>
                  <p className="text-slate-600">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                {t.contact.description}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contact.yourName}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contact.yourEmail}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                {t.contact.yourMessage}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors resize-none"
                required
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:scale-105 font-medium shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <span>{t.contact.sending}</span>
              ) : (
                <>
                  <span>{t.contact.sendMessage}</span>
                  <Send size={20} />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <CheckCircle size={20} />
                <span>{t.contact.successMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <AlertCircle size={20} />
                <span>{t.contact.errorMessage}</span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-600">
          <p>&copy; 2026 HÜSEYİN KOCAKUŞAK</p>
        </div>
      </div>
    </section>
  );
}
