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
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
      </svg>
    );

  // កែសម្រួល Icon ឱ្យកាន់តែ Simple & Professional (ប្រើ strokeWidth="1.75")
  const getNavLinkIcon = (href, isActive) => {
    const iconClass = "w-4 h-4 stroke-current";
    
    let svgPath = null;
    switch (href) {
      case '#home':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v4.875h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        );
        break;
      case '#about':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        );
        break;
      case '#skills':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
        );
        break;
      case '#projects':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.5 18.75L13.67 12.92m0 0l-3.34-3.34a3 3 0 10-4.24 4.24l3.34 3.34m4.24-4.24L7.5 5.25A1.5 1.5 0 005.25 7.5l5.92 5.92" />
          </svg>
        );
        break;
      case '#education-experience':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 01-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 3.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
        );
        break;
      case '#contact':
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        );
        break;
      default:
        svgPath = (
          <svg className={iconClass} fill="none" strokeWidth="1.75" viewBox="0 0 24 24">
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

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-3">
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

          {/* Mobile Menu Button */}
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