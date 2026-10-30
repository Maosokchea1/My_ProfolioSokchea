import React, { useState } from 'react';

const Contact = ({ t, isDarkMode, lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const currentFontClass = isKhmer ? 'font-khmer' : 'font-sans';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const BOT_TOKEN = '8238427766:AAHosmOVxtdASC0l9AOdJT25upMzPa7GLKA';
    const CHAT_ID = '1302983925';

    const text = `📬 New message from Portfolio!\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(isKhmer ? 'បរាជ័យក្នុងការផ្ញើសារទៅកាន់ Telegram។' : 'Failed to send message to Telegram.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(isKhmer ? 'បញ្ហាប្រព័ន្ធ Network!' : 'Network Error!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 border-t transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'border-zinc-800/80 bg-[#0c0c0e] text-white' : 'border-zinc-100 bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {isKhmer ? 'ទំនាក់ទំនង' : 'Get In Touch'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {t?.contact?.title || (isKhmer ? 'ទំនាក់ទំនងមកខ្ញុំ' : 'Contact Me')}
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t?.contact?.subtitle || (isKhmer ? 'មានសំណួរ ឬចង់ពិភាក្សាគម្រោង? ផ្ញើសារមកខ្ញុំបានគ្រប់ពេល។' : 'Have a question or looking to build something together? Send a message below.')}
          </p>
        </div>

        {/* Contact Info Cards with Reliable High-Quality Inline SVGs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
          
          {/* Telegram Card */}
          <a
            href="https://t.me/sokcheamoa" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-5 rounded-2xl border flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-200 hover:-translate-y-1 hover:border-[#229ED9] hover:shadow-lg hover:shadow-[#229ED9]/15 active:scale-95 ${
              isDarkMode ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300' : 'border-zinc-200 bg-zinc-50/80 text-zinc-700'
            }`}
          >
            <div className="w-12 h-12 mb-3 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#229ED9" />
                <path d="M7 11.8l3 1.1 1.2 3.7c.1.3.4.4.6.2l1.7-1.4 3.5 2.6c.4.3.8.1.9-.3l2.1-9.9c.1-.5-.3-.8-.7-.6l-12.3 4.6z" fill="#FFFFFF" />
              </svg>
            </div>
            <p className="text-xs text-zinc-400 mb-0.5">Telegram</p>
            <p className="text-sm font-semibold text-[#229ED9] flex items-center gap-1">
              @sokcheamoa <span>↗</span>
            </p>
          </a>

          {/* Location Card */}
          <div className={`p-5 rounded-2xl border flex flex-col items-center justify-center select-none transition-all duration-200 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 ${
            isDarkMode ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300' : 'border-zinc-200 bg-zinc-50/80 text-zinc-700'
          }`}>
            <div className="w-12 h-12 mb-3 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
                <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
              </svg>
            </div>
            <p className="text-xs text-zinc-400 mb-0.5">Location</p>
            <p className="text-sm font-semibold">Phnom Penh, Cambodia</p>
          </div>

          {/* Status Card (Verified Badge with Glowing Indicator) */}
          <div className={`p-5 rounded-2xl border flex flex-col items-center justify-center select-none transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 ${
            isDarkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50/80'
          }`}>
            <div className="w-12 h-12 mb-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2l2.4 2.3 3.3-.6 1.4 3 3 1.4-.6 3.3L23.8 14l-2.3 2.4.6 3.3-3 1.4-1.4 3-3.3-.6L12 25.8l-2.4-2.3-3.3.6-1.4-3-3-1.4.6-3.3L.2 14l2.3-2.4-.6-3.3 3-1.4 1.4-3 3.3.6L12 2z" 
                  fill="#10B981" 
                  transform="scale(0.85) translate(2, 2)"
                />
                <path 
                  d="M9 12.5l2 2 4.5-4.5" 
                  stroke="#FFFFFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <p className="text-xs text-zinc-400 mb-0.5">Status</p>
            <p className="text-sm font-semibold text-emerald-500 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Work
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className={`p-6 sm:p-8 rounded-3xl border ${
            isDarkMode ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-white shadow-xs'
          }`}
        >
          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm text-center font-medium">
              {t?.contact?.successMessage || (isKhmer ? 'សាររបស់អ្នកត្រូវបានបញ្ជូនដោយជោគជ័យ! អរគុណ។' : 'Your message has been sent successfully!')}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Name Input */}
            <div>
              <label className={`flex items-center gap-1.5 text-xs font-semibold mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>{t?.contact?.nameLabel || 'Name'}</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t?.contact?.namePlaceholder || 'John Doe'}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  isDarkMode
                    ? 'bg-zinc-900/80 border-zinc-800 text-white focus:border-primary focus:ring-2 focus:ring-primary/20'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className={`flex items-center gap-1.5 text-xs font-semibold mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{t?.contact?.emailLabel || 'Email'}</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t?.contact?.emailPlaceholder || 'example@gmail.com'}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  isDarkMode
                    ? 'bg-zinc-900/80 border-zinc-800 text-white focus:border-primary focus:ring-2 focus:ring-primary/20'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-primary focus:ring-2 focus:ring-primary/20'
                }`}
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="mb-6">
            <label className={`flex items-center gap-1.5 text-xs font-semibold mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{t?.contact?.messageLabel || 'Message'}</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t?.contact?.messagePlaceholder || 'Write your message here...'}
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                isDarkMode
                  ? 'bg-zinc-900/80 border-zinc-800 text-white focus:border-primary focus:ring-2 focus:ring-primary/20'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-primary hover:bg-primary-600 transition-all cursor-pointer flex items-center justify-center gap-2.5 transform active:scale-95 disabled:opacity-50 select-none shadow-md shadow-primary/25"
          >
            <svg className="w-4 h-4 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span>
              {loading ? (isKhmer ? 'កំពុងផ្ញើ...' : 'Sending...') : (t?.contact?.submitBtn || (isKhmer ? 'ផ្ញើសារ' : 'Send Message'))}
            </span>
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;