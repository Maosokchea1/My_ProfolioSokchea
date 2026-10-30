import React, { useEffect, useState } from 'react';

const icons = {
  '#home': <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9.5 20v-6h5v6" />,
  '#about': <><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20c.7-4 2.9-6 6.5-6s5.8 2 6.5 6" /></>,
  '#skills': <><path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  '#experience': <><path d="m3 9 9-5 9 5-9 5z" /><path d="M7 12v4c2.8 2.2 7.2 2.2 10 0v-4M21 9v7" /></>,
  '#projects': <><path d="M3.5 7.5h6l2 2h9v10h-17z" /><path d="M3.5 7.5v-3h7l2 3" /></>,
  '#contact': <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
};

const fallbackLabels = {
  '#home': 'Home', '#about': 'About', '#skills': 'Skills',
  '#experience': 'Experience', '#projects': 'Projects', '#contact': 'Contact',
};

const shortKhmerLabels = {
  '#home': 'ទំព័រដើម', '#about': 'អំពីខ្ញុំ', '#skills': 'ជំនាញ',
  '#experience': 'ប្រវត្តិ', '#projects': 'គម្រោង', '#contact': 'ទំនាក់ទំនង',
};

const BottomNav = ({ t, isDarkMode, lang }) => {
  const [active, setActive] = useState('#home');
  const navHrefs = {
    home: '#home', about: '#about', skills: '#skills', 
    education: '#experience', projects: '#projects', contact: '#contact',
  };
  const links = Array.isArray(t?.nav)
    ? t.nav
    : Object.entries(t?.nav || {}).map(([key, name]) => ({
        name,
        href: navHrefs[key] || `#${key}`,
      }));
  const safeLinks = links.length
    ? links
    : Object.entries(fallbackLabels).map(([href, name]) => ({ href, name }));
  const isKhmer = lang === 'ភាសាខ្មែរ';

  useEffect(() => {
    const sections = safeLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(`#${visible[visible.length - 1].target.id}`);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [safeLinks]);

  return (
    <nav
      aria-label="Mobile navigation"
      className={`fixed bottom-0 left-0 right-0 z-50 grid grid-cols-6 border-t px-2 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-md lg:hidden ${
        isDarkMode ? 'border-zinc-800 bg-[#0c0c0e]/95' : 'border-zinc-200 bg-white/95'
      }`}
    >
      {safeLinks.map(({ href, name }) => {
        const isActive = active === href;
        return (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            aria-current={isActive ? 'page' : undefined}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-semibold cursor-pointer select-none transform active:scale-80 active:bg-primary/20 active:text-primary transition-all duration-150 ${
              isActive
                ? 'text-primary font-bold bg-primary/10 shadow-2xs'
                : isDarkMode ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {icons[href]}
            </svg>
            <span className="w-full truncate text-center">
              {isKhmer ? shortKhmerLabels[href] : fallbackLabels[href] || name}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default BottomNav;