import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

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
      className={`App min-h-screen transition-colors duration-200 ${
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
        {/* Hero Section */}
        <section id="home">
          <Hero t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>

        {/* About Section */}
        <section id="about">
          <About t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>
        
        {/* Education & Experience Section */}
        <section id="experience">
          <EducationExperience t={t} isDarkMode={isDarkMode} lang={lang} />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects t={t} isDarkMode={isDarkMode} />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact t={t} isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer t={t} isDarkMode={isDarkMode} lang={lang} />
      <BottomNav t={t} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
