import React, { useState } from 'react';

const Header = ({ lang, toggleLanguage, isDarkMode, toggleTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const navHrefs = {
    home: '#home',
    about: '#about',
    skills: '#skills',
    projects: '#projects',
    education: '#education-experience',
    contact: '#contact',
  };
  const navLinks = Array.isArray(t?.nav)
    ? t.nav
    : Object.entries(t?.nav || {}).map(([key, name]) => ({
        name,
        href: navHrefs[key] || `#${key}`,
      }));

  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer'
      ? 'font-khmer'
      : lang === 'සිංහහ' || lang === 'Sinhala'
      ? 'font-sinhala'
      : 'font-sans';

  const ThemeIcon = ({ dark }) =>
    dark ? (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    );

  const getNavLinkIcon = (href, isActive) => {
    const iconClass = "w-4 h-4 stroke-current";
    
    let svgPath = null;
    switch (href) {
      case '#home':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
        break;
      case '#about':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
        break;
      case '#experience':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
        break;
      case '#education':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
        break;
      case '#projects':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
        break;
      case '#contact':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
        break;
      default:
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
    }

    return (
      <span className={`flex items-center justify-center transition-colors ${
        isActive
          ? 'text-primary'
          : isDarkMode 
            ? 'text-zinc-400 group-hover:text-primary' 
            : 'text-zinc-500 group-hover:text-primary'
      }`}>
        {svgPath}
      </span>
    );
  };

  const getFlagUrl = (currentLang) => {
    if (currentLang === 'English') {
      return 'https://flagcdn.com/w40/gb.png';
    } else if (currentLang === 'ភាសាខ្មែរ' || currentLang === 'Khmer') {
      return 'https://flagcdn.com/w40/kh.png';
    } else {
      return 'https://flagcdn.com/w40/lk.png';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-colors duration-200 border-b ${currentFontClass} ${
        isDarkMode
          ? 'bg-black/90 border-zinc-800 text-white'
          : 'bg-white/90 border-zinc-200 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              PORTFOLIO<span className="text-primary">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`group flex items-center gap-2 text-sm font-medium py-2 transition-colors ${
                      isActive
                        ? 'text-primary'
                        : isDarkMode
                          ? 'text-zinc-300 hover:text-primary'
                          : 'text-zinc-700 hover:text-primary'
                    }`}
                  >
                    {getNavLinkIcon(link.href, isActive)}
                    <span>{link.name}</span>
                  </a>
                );
              })}
          </nav>

          {/* Desktop Controls (Color Picker removed) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              className={`flex items-center justify-center p-2.5 rounded-lg border transition-all shadow-sm ${
                isDarkMode
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-primary hover:border-primary'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-600 hover:text-primary hover:border-primary'
              }`}
              aria-label="Toggle theme"
            >
              <ThemeIcon dark={isDarkMode} />
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              type="button"
              className={`flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-lg border transition-all shadow-sm ${
                isDarkMode
                  ? 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-primary hover:border-primary'
                  : 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:text-primary hover:border-primary'
              }`}
              aria-label="Toggle language"
            >
              <img 
                src={getFlagUrl(lang)} 
                alt={`${lang} flag`} 
                className="w-5 h-3.5 object-cover rounded-sm shadow-sm" 
              />
              <span>{lang}</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls (Color Picker removed) */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className={`p-2 rounded-lg border transition-all shadow-sm ${
                isDarkMode
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-300'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-600'
              }`}
              aria-label="Toggle theme"
            >
              <ThemeIcon dark={isDarkMode} />
            </button>

            <button
              onClick={toggleLanguage}
              type="button"
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border transition-all shadow-sm ${
                isDarkMode
                  ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                  : 'border-zinc-300 bg-zinc-100 text-zinc-700'
              }`}
              aria-label="Toggle language"
            >
              <img 
                src={getFlagUrl(lang)} 
                alt={`${lang} flag`} 
                className="w-4.5 h-3 object-cover rounded-sm shadow-sm" 
              />
              <span>{lang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-lg border transition-all shadow-sm ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-primary hover:border-primary' 
                  : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-primary hover:border-primary'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-2 ${
            isDarkMode ? 'bg-black border-zinc-800' : 'bg-white border-zinc-200'
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
                  className={`flex items-center gap-3 font-medium text-base py-2 px-3 rounded-lg transition-all ${
                    isActive
                      ? 'text-primary'
                      : isDarkMode 
                        ? 'text-zinc-300 hover:text-primary' 
                        : 'text-zinc-700 hover:text-primary'
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
