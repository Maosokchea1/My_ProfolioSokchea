import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav'; // 👈 Import BottomNav ចូលទីនេះ

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import EducationExperience from './sections/EducationExperience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Data
import { en } from './data/english';
import { km } from './data/khmer'; 

function App() {
  const [lang, setLang] = useState('English');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const t = lang === 'English' ? en : km;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'English' ? 'ភាសាខ្មែរ' : 'English'));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`App min-h-screen transition-colors duration-200 pb-20 ${
        isDarkMode ? 'dark bg-black text-white' : 'bg-white text-black'
      } ${lang === 'ភាសាខ្មែរ' ? 'font-khmer' : 'font-sans'}`}
    >
      <Header
        lang={lang}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        t={t}
      />

      <main className="pt-16">
        <section id="home">
          <Home t={t} isDarkMode={isDarkMode} />
          <Hero t={t} isDarkMode={isDarkMode} lang={lang} />
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
          <Contact t={t} isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer t={t} isDarkMode={isDarkMode} lang={lang} />

      {/* 👈 ហៅ BottomNav មកប្រើប្រាស់នៅទីនេះ (បង្ហាញសម្រាប់ទូរស័ព្ទដៃ) */}
      <BottomNav t={t} isDarkMode={isDarkMode} lang={lang} />
    </div>
  );
}

export default App;
