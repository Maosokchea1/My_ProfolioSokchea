import React from 'react';

const Footer = ({ t, isDarkMode, lang }) => {
  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const currentFontClass = isKhmer ? 'font-khmer' : 'font-sans';

  // បណ្តុំ Social Links ជាមួយ Icon SVG URL ផ្លូវការដែលមានពណ៌ស្រាប់ (Official Colored SVGs)
  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/sokcheamoa',
      // SVG ពណ៌ខៀវផ្ទៃមេឃផ្លូវការរបស់ Telegram
      iconUrl: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/telegram.svg',
      badgeClass: 'text-[#229ED9] bg-[#229ED9]/10 border-[#229ED9]/30 hover:bg-[#229ED9] hover:text-white',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sokcheamoa',
      // SVG Logo របស់ GitHub ផ្លូវការ
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      badgeClass: isDarkMode
        ? 'text-white bg-zinc-800/80 border-zinc-700 hover:bg-white hover:text-black'
        : 'text-zinc-900 bg-zinc-100 border-zinc-300 hover:bg-zinc-900 hover:text-white',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1LY2EmEAp7/?mibextid=wwXIfr',
      // SVG ពណ៌ខៀវផ្លូវការរបស់ Facebook
      iconUrl: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/facebook.svg',
      badgeClass: 'text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/30 hover:bg-[#1877F2] hover:text-white',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors duration-200 ${currentFontClass} ${
        isDarkMode
          ? 'bg-[#08080a] border-zinc-800/80 text-zinc-400'
          : 'bg-zinc-50 border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <a 
              href="#home" 
              className={`text-xl font-extrabold tracking-tight inline-block cursor-pointer select-none transform active:scale-95 transition-all duration-150 ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              Mao Sokchea<span className="text-primary">.</span>
            </a>
            <p className="text-xs text-zinc-500 mt-1 max-w-sm">
              {t?.footer?.description || (isKhmer 
                ? 'អរគុណសម្រាប់ការទស្សនា Portfolio របស់ខ្ញុំ។' 
                : 'Personal developer portfolio.')}
            </p>
          </div>

          {/* Social Links with Official Colored Icons & Copyright */}
          <div className="flex flex-col sm:items-end items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold cursor-pointer select-none transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-2xs ${social.badgeClass}`}
                >
                  <img
                    src={social.iconUrl}
                    alt={`${social.name} icon`}
                    className={`w-4 h-4 object-contain transition-transform duration-200 group-hover:scale-110 ${
                      social.name === 'GitHub' && isDarkMode ? 'filter invert brightness-200' : ''
                    }`}
                    loading="lazy"
                  />
                  <span>{social.name}</span>
                </a>
              ))}

              {/* Scroll To Top Button */}
              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top"
                className={`p-2 rounded-full border cursor-pointer select-none transform hover:-translate-y-0.5 active:scale-90 hover:border-primary hover:text-primary transition-all duration-150 shadow-2xs ${
                  isDarkMode
                    ? 'border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                <svg className="w-4 h-4 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500">
              &copy; {new Date().getFullYear()} Mao Sokchea. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;