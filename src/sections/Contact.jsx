import React, { useState } from 'react';

const Contact = ({ t, isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // អ្នកអាចបន្ថែម Logic ផ្ញើសារ (เช่น EmailJS ឬ Backend API) ទីនេះ
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-200 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header ផ្នែក Contact */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t?.contact?.title || 'Contact Me'}
          </h2>
          <p className={`mt-3 text-lg ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t?.contact?.subtitle || 'Feel free to get in touch with me by filling out the form below.'}
          </p>
        </div>

        {/* Form ទំនាក់ទំនង */}
        <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border shadow-lg ${
          isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          
          {submitted && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-500 text-center font-medium">
              {t?.contact?.successMessage || 'Your message has been sent successfully! Thank you.'}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* ឈ្មោះ */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {t?.contact?.nameLabel || 'Your Name'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t?.contact?.namePlaceholder || 'John Doe'}
                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white focus:border-primary'
                    : 'bg-white border-zinc-300 text-black focus:border-primary'
                }`}
              />
            </div>

            {/* អ៊ីមែល */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {t?.contact?.emailLabel || 'Your Email'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t?.contact?.emailPlaceholder || 'example@gmail.com'}
                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white focus:border-primary'
                    : 'bg-white border-zinc-300 text-black focus:border-primary'
                }`}
              />
            </div>
          </div>

          {/* សារ (Message) */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t?.contact?.messageLabel || 'Your Message'}
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t?.contact?.messagePlaceholder || 'Write your message here...'}
              className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none ${
                isDarkMode
                  ? 'bg-zinc-800 border-zinc-700 text-white focus:border-primary'
                  : 'bg-white border-zinc-300 text-black focus:border-primary'
              }`}
            ></textarea>
          </div>

          {/* ប៊ូតុងបញ្ជូនសារ */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-primary hover:bg-primary-600 transition-colors shadow-md"
          >
            {t?.contact?.submitBtn || 'Send Message'}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;