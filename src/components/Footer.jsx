import React from 'react';

const SocialIcon = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'Telegram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.944 4.668a1.25 1.25 0 0 0-1.364-.22L3.29 11.12a1.25 1.25 0 0 0 .06 2.333l4.15 1.38 1.565 5.01a1.25 1.25 0 0 0 2.094.52l2.373-2.297 4.41 3.24a1.25 1.25 0 0 0 1.964-.762l2.74-14.22a1.25 1.25 0 0 0-.719-1.356ZM9.74 14.37l8.53-7.66-6.94 8.95-.27 3.12-1.32-4.41Z" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      );
    case 'Facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.8V21h2.7Z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = ({ t, isDarkMode, lang }) => {
  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const fontClass = isKhmer ? 'font-khmer' : 'font-sans';

  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const yearText = currentYear > startYear ? `${startYear}–${currentYear}` : `${currentYear}`;

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/sokcheamoa',
      iconColor: isDarkMode ? 'text-sky-400' : 'text-[#229ED9]',
      hoverBorder: isDarkMode ? 'hover:border-sky-500/50' : 'hover:border-sky-300',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sokcheamoa',
      iconColor: isDarkMode ? 'text-zinc-100' : 'text-zinc-900',
      hoverBorder: isDarkMode ? 'hover:border-zinc-600' : 'hover:border-zinc-400',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1LY2EmEAp7/?mibextid=wwXIfr',
      iconColor: isDarkMode ? 'text-blue-400' : 'text-[#1877F2]',
      hoverBorder: isDarkMode ? 'hover:border-blue-500/50' : 'hover:border-blue-300',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative border-t transition-colors duration-300 ${fontClass} ${
        isDarkMode
          ? 'bg-[#09090b] border-zinc-800/80 text-zinc-400'
          : 'bg-zinc-50 border-zinc-200/90 text-zinc-600'
      }`}
    >
      {/* Top hairline accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10">
          {/* Brand & Bio */}
          <div className="text-center md:text-left max-w-md">
            <a
              href="#home"
              className={`inline-flex items-baseline text-2xl font-bold tracking-tight transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              <span>Mao Sokchea</span>
              <span className="text-primary ml-0.5">.</span>
            </a>

            <p
              className={`mt-2.5 text-sm leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {t?.footer?.description ||
                (isKhmer
                  ? 'អរគុណសម្រាប់ការទស្សនា Portfolio របស់ខ្ញុំ។ បង្កើតឡើងដោយផ្តោតលើគុណភាពកូដ និងបទពិសោធន៍អ្នកប្រើប្រាស់។'
                  : 'Personal developer portfolio focused on clean architecture, performance, and thoughtful user interfaces.')}
            </p>
          </div>

          {/* Connect & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h3
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              {isKhmer ? 'បណ្តាញទំនាក់ទំនង' : 'Connect'}
            </h3>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${social.hoverBorder} ${
                    isDarkMode
                      ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800/90'
                      : 'bg-white border-zinc-200/90 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 shadow-2xs'
                  }`}
                >
                  <SocialIcon
                    name={social.name}
                    className={`w-4 h-4 shrink-0 transition-transform duration-150 group-hover:scale-110 ${social.iconColor}`}
                  />
                  <span>{social.name}</span>
                </a>
              ))}

              <button
                type="button"
                onClick={scrollToTop}
                aria-label={isKhmer ? 'ឡើងទៅលើបំផុត' : 'Back to top'}
                title={isKhmer ? 'ឡើងទៅលើបំផុត' : 'Back to top'}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isDarkMode
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/90'
                    : 'bg-white border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-100/80 shadow-2xs'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            isDarkMode
              ? 'border-zinc-800/80 text-zinc-500'
              : 'border-zinc-200/80 text-zinc-500'
          }`}
        >
          <p>
            © {yearText} Mao Sokchea.{' '}
            {isKhmer ? 'រក្សាសិទ្ធិគ្រប់យ៉ាង។' : 'All rights reserved.'}
          </p>

          <p className="flex items-center gap-1.5">
            <span>{isKhmer ? 'បង្កើតដោយ' : 'Built with'}</span>
            <span className={`font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              React
            </span>
            <span aria-hidden="true">·</span>
            <span>{isKhmer ? 'រាជធានីភ្នំពេញ' : 'Phnom Penh'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;