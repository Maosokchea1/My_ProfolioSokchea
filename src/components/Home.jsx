import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/Myself1.png';
import TechIcon from './TechIcon';

const Home = ({ t, isDarkMode, lang }) => {
  const fullName = "Mao Sokchea";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;

    const typeEffect = () => {
      const currentText = fullName;

      if (!isDeleting) {
        setDisplayedName(currentText.substring(0, index + 1));
        index++;

        if (index === currentText.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, 2000);
          return;
        }
      } else {
        setDisplayedName(currentText.substring(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      const speed = isDeleting ? 70 : 120;
      timer = setTimeout(typeEffect, speed);
    };

    timer = setTimeout(typeEffect, 150);
    return () => clearTimeout(timer);
  }, []);

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  
  const statusText = isKhmer 
    ? "បើកទទួលគម្រោងថ្មីៗ & ការងារ" 
    : "Available for new opportunities";

  const roleTitle = isKhmer 
    ? "Frontend & Backend API Developer" 
    : (t?.welcomeTitle || "Frontend & Backend API Developer");

  const roleSubtitle = isKhmer
    ? "ខ្ញុំគឺជា Developer ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើត Web Applications ទំនើបៗ ដោយអាចសរសេរបានទាំង Frontend និង Backend API រួមមាន Python FastAPI, Laravel និង React ។"
    : (t?.welcomeSubtitle || "Passionate software developer specializing in building modern web applications, scalable Backend APIs with Python FastAPI and Laravel, and interactive frontends with React.");

  const viewProjectsText = isKhmer ? "មើលគម្រោង" : (t?.viewProjects || "View Projects");
  const contactText = isKhmer ? "ទាក់ទងខ្ញុំ" : (t?.contactMe || "Get in Touch");

  // Professional Tech Stack with Official Docs URLs
  const techStack = [
    { 
      name: "React", 
      url: "https://react.dev" 
    },
    { 
      name: "FastAPI", 
      url: "https://fastapi.tiangolo.com" 
    },
    { 
      name: "Laravel", 
      url: "https://laravel.com" 
    },
    { 
      name: "Tailwind CSS", 
      url: "https://tailwindcss.com" 
    },
    { 
      name: "Python", 
      url: "https://www.python.org" 
    },
    { 
      name: "MySQL", 
      url: "https://www.mysql.com" 
    },
  ];

  return (
    <section 
      id="home" 
      className={`py-16 md:py-24 transition-colors duration-200 ${
        isDarkMode ? 'text-white' : 'text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="text-center md:text-left max-w-2xl">
            
            {/* Simple Status Badge with Click Effect */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border cursor-pointer select-none transform active:scale-95 active:border-primary active:text-primary active:ring-2 active:ring-primary/30 transition-all duration-150 ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700' 
                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{statusText}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              <span>{displayedName}</span>
              <span className="animate-pulse text-primary font-light">|</span>
            </h1>
            
            {/* Role Title */}
            <p className="text-lg sm:text-xl font-semibold mb-4 text-primary">
              {roleTitle}
            </p>
            
            {/* Bio Subtitle */}
            <p className={`text-sm sm:text-base mb-8 leading-relaxed max-w-xl ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              {roleSubtitle}
            </p>
            
            {/* Action Buttons with Spring Click Animation & Primary Activation */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-600 shadow-sm shadow-primary/25 cursor-pointer transform active:scale-95 active:ring-4 active:ring-primary/40 transition-all duration-150 select-none"
              >
                {viewProjectsText}
              </a>

              <a
                href="#contact"
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold border cursor-pointer transform active:scale-95 active:border-primary active:bg-primary active:text-white active:ring-2 active:ring-primary/30 transition-all duration-150 select-none ${
                  isDarkMode 
                    ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800/80 hover:text-white hover:border-primary' 
                    : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 hover:border-primary'
                }`}
              >
                {contactText}
              </a>
            </div>

            {/* Clean Tech Stack with Pure Inline SVG Icons (Never Broken) & Docs URLs */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 pt-2">
              <span className={`text-xs font-medium mr-1 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Stack:
              </span>
              {techStack.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View official ${tech.name} documentation (${tech.url})`}
                  className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border cursor-pointer transform hover:-translate-y-0.5 active:scale-90 active:border-primary active:bg-primary/10 active:text-primary active:ring-2 active:ring-primary/40 transition-all duration-150 select-none ${
                    isDarkMode 
                      ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-primary hover:text-primary' 
                      : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  <TechIcon name={tech.name} className="w-4 h-4 flex-shrink-0" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>

          </div>

          {/* Right Side: Simple Clean Profile Image with Click Feedback */}
          <div className="flex-shrink-0">
            <div className={`relative w-56 sm:w-64 lg:w-72 rounded-2xl overflow-hidden border p-1 cursor-pointer transform active:scale-95 active:border-primary active:ring-4 active:ring-primary/20 transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-100'
            }`}>
              <img 
                src={profileImage} 
                alt="Mao Sokchea" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;