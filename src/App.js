import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

// Sections
import About from './sections/About';
import Skills from './sections/Skills';
import EducationExperience from './sections/EducationExperience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Data
import { en } from './data/english';
import { km } from './data/khmer'; 

function App() {
  const [lang, setLang] = useState('ភាសាខ្មែរ');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState('0%');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = lang === 'English' ? en : km;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'English' ? 'ភាសាខ្មែរ' : 'English'));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(`${(totalScroll / windowHeight) * 100}%`);
      }
      setShowScrollTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`App relative min-h-screen transition-colors duration-200 ${
        isDarkMode ? 'dark bg-[#0c0c0e] text-zinc-100' : 'bg-white text-zinc-900'
      } ${lang === 'ភាសាខ្មែរ' ? 'font-khmer' : 'font-sans'}`}
    >
      {/* Subtle Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-primary z-[9999] transition-all duration-150"
        style={{ width: scrollProgress }}
      />

      <Header
        lang={lang}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        t={t}
      />

      <main className="pt-20">
        <section id="home">
          <Home t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>

        <section id="about">
          <About t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>
        
        <section id="skills">
          <Skills t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>
        
        <section id="experience">
          <EducationExperience t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>

        <section id="projects">
          <Projects t={t} isDarkMode={isDarkMode} />
        </section>

        <section id="contact">
          <Contact t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>
      </main>

      <Footer t={t} isDarkMode={isDarkMode} lang={lang} />

      {/* Clean Scroll-to-Top Button with Primary Activation */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-24 lg:bottom-8 right-6 z-40 p-3 rounded-full border cursor-pointer select-none transform transition-all duration-150 hover:scale-105 hover:border-primary hover:text-primary active:scale-90 active:border-primary active:bg-primary active:text-white active:ring-4 active:ring-primary/30 ${
            isDarkMode 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300 shadow-md' 
              : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Bottom Nav for Mobile */}
      <BottomNav t={t} isDarkMode={isDarkMode} lang={lang} />
    </div>
  );
}

export default App;