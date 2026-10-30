import React, { useState, useEffect } from 'react';

const Header = ({ lang, toggleLanguage, isDarkMode, toggleTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navHrefs = {
    home: '#home',
    about: '#about',
    skills: '#skills',
    projects: '#projects',
    education: '#experience',
    contact: '#contact',
  };

  const navLinks = Array.isArray(t?.nav)
    ? t.nav
    : Object.entries(t?.nav || {}).map(([key, name]) => ({
        name,
        href: navHrefs[key] || `#${key}`,
      }));

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const currentFontClass = isKhmer ? 'font-khmer' : 'font-sans';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const targetId = link.href.replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* =========================================================
     ⭐ ONE Professional Icon System — Lucide (inline SVG)
     • stroke-width="2"  • stroke-linecap="round"
     • stroke-linejoin="round"  • viewBox="0 0 24 24"
     All icons 100% consistent in style & visual weight.
     ========================================================= */

  // --- Shared props ---
  const iconProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  // --- Theme Icon (Sun / Moon) ---
  const ThemeIcon = ({ dark }) =>
    dark ? (
      <svg {...iconProps} className="w-5 h-5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ) : (
      <svg {...iconProps} className="w-5 h-5">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );

  // --- Navigation Icon (single unified set) ---
  const getNavLinkIcon = (href, isActive) => {
    let icon = null;

    switch (href) {
      case '#home': // Lucide: House
        icon = (
          <>
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </>
        );
        break;

      case '#about': // Lucide: User
        icon = (
          <>
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </>
        );
        break;

      case '#skills': // Lucide: Code-2
        icon = (
          <>
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </>
        );
        break;

      case '#projects': // Lucide: Folder
        icon = (
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        );
        break;

      case '#experience':
      case '#education':
      case '#education-experience': // Lucide: Briefcase
        icon = (
          <>
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </>
        );
        break;

      case '#contact': // Lucide: Mail
        icon = (
          <>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </>
        );
        break;

      default: // Lucide: Info
        icon = (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </>
        );
    }

    return (
      <span
        className={`flex items-center justify-center transition-colors duration-200 ${
          isActive
            ? 'text-primary'
            : isDarkMode
            ? 'text-zinc-400 group-hover:text-primary'
            : 'text-zinc-500 group-hover:text-primary'
        }`}
      >
        <svg {...iconProps} className="w-[18px] h-[18px]">
          {icon}
        </svg>
      </span>
    );
  };

  const getFlagUrl = (currentLang) =>
    currentLang === 'English'
      ? 'https://flagcdn.com/w40/gb.png'
      : 'https://flagcdn.com/w40/kh.png';

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-colors duration-200 border-b ${currentFontClass} ${
        isDarkMode
          ? 'bg-[#0c0c0e]/95 border-zinc-800/80 text-white'
          : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight inline-block cursor-pointer select-none transform active:scale-95 transition-all duration-150"
            >
              PORTFOLIO<span className="text-primary">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`group flex items-center gap-2 text-[15px] font-semibold px-4 py-2.5 rounded-xl cursor-pointer select-none transform active:scale-95 transition-all duration-150 ${
                    isActive
                      ? 'text-primary bg-primary/10 border border-primary/30 shadow-xs'
                      : isDarkMode
                      ? 'text-zinc-300 hover:text-primary hover:bg-zinc-800/60'
                      : 'text-zinc-700 hover:text-primary hover:bg-zinc-100'
                  }`}
                >
                  {getNavLinkIcon(link.href, isActive)}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme & Language */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <button
              onClick={toggleTheme}
              type="button"
              className={`flex items-center justify-center p-2.5 rounded-xl border cursor-pointer select-none transform active:scale-90 hover:border-primary hover:text-primary transition-all duration-150 ${
                isDarkMode
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
              aria-label="Toggle theme"
            >
              <ThemeIcon dark={isDarkMode} />
            </button>

            <button
              onClick={toggleLanguage}
              type="button"
              className={`flex items-center gap-2 text-sm font-semibold px-3.5 py-2.5 rounded-xl border cursor-pointer select-none transform active:scale-90 hover:border-primary hover:text-primary transition-all duration-150 ${
                isDarkMode
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
              aria-label="Toggle language"
            >
              <img
                src={getFlagUrl(lang)}
                alt={`${lang} flag`}
                className="w-5 h-3.5 object-cover rounded-xs"
              />
              <span>{lang}</span>
            </button>
          </div>

          {/* Mobile Quick Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className={`p-2.5 rounded-xl border cursor-pointer select-none transform active:scale-90 hover:border-primary transition-all duration-150 ${
                isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
              aria-label="Toggle theme"
            >
              <ThemeIcon dark={isDarkMode} />
            </button>

            <button
              onClick={toggleLanguage}
              type="button"
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border cursor-pointer select-none transform active:scale-90 hover:border-primary transition-all duration-150 ${
                isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
              aria-label="Toggle language"
            >
              <img
                src={getFlagUrl(lang)}
                alt={`${lang} flag`}
                className="w-4.5 h-3 object-cover rounded-xs"
              />
              <span>{lang === 'English' ? 'EN' : 'ខ្មែរ'}</span>
            </button>

            {/* Mobile Hamburger / Close — Lucide Menu & X */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-expanded={isOpen}
              className={`p-2.5 rounded-xl border cursor-pointer select-none transform active:scale-90 hover:border-primary transition-all duration-150 ${
                isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg {...iconProps} className="w-[18px] h-[18px]">
                {isOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`lg:hidden border-b px-4 py-4 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150 ${
            isDarkMode ? 'bg-[#0c0c0e] border-zinc-800' : 'bg-white border-zinc-200'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 font-semibold text-[15.5px] py-3.5 px-4 rounded-xl cursor-pointer transform active:scale-95 transition-all duration-150 ${
                  isActive
                    ? 'text-primary bg-primary/10 border border-primary/30 font-bold'
                    : isDarkMode
                    ? 'text-zinc-300 hover:text-primary hover:bg-zinc-800'
                    : 'text-zinc-700 hover:text-primary hover:bg-zinc-100'
                }`}
              >
                {getNavLinkIcon(link.href, isActive)}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;