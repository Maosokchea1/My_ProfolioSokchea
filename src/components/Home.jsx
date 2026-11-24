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
          }, 2200);
          return;
        }
      } else {
        setDisplayedName(currentText.substring(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      const speed = isDeleting ? 65 : 110;
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

  const techStack = [
    { name: "React", url: "https://react.dev" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
    { name: "Laravel", url: "https://laravel.com" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Python", url: "https://www.python.org" },
    { name: "MySQL", url: "https://www.mysql.com" },
    { name: "PostgreSQL", url: "https://www.postgresql.org" },
  ];

  // Orbit settings (angles around 360deg circle)
  const radius = 136; // px radius of the circular orbit

  return (
    <section 
      id="home" 
      className={`relative overflow-hidden py-20 md:py-28 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-zinc-900'
      }`}
    >
      {/* Subtle Background Ambient Glow & Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-20 bg-primary" />
        <div 
          className={`absolute inset-0 bg-[size:32px_32px] ${
            isDarkMode 
              ? 'bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]' 
              : 'bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]'
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Content + Circular Tech Orbit */}
          <div className="text-center md:text-left max-w-2xl min-w-0 w-full">
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium mb-7 border backdrop-blur-md shadow-sm transition-all duration-200 hover:scale-[1.02] ${
              isDarkMode 
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-primary/50' 
                : 'bg-white/80 border-zinc-200/80 text-zinc-700 hover:border-primary/50'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{statusText}</span>
            </div>

            {/* Greeting & Animated Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 min-h-[1.2em]">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-white via-zinc-100 to-zinc-400' 
                  : 'from-zinc-900 via-zinc-800 to-zinc-600'
              }`}>
                {displayedName}
              </span>
              <span className="animate-pulse text-primary font-light ml-0.5">|</span>
            </h1>
            
            {/* Role Title */}
            <div className="inline-block mb-5">
              <p className="text-lg sm:text-xl font-bold text-primary tracking-wide">
                {roleTitle}
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full mt-1 mx-auto md:mx-0" />
            </div>
            
            {/* Bio Subtitle */}
            <p className={`text-sm sm:text-base mb-9 leading-relaxed max-w-xl mx-auto md:mx-0 ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              {roleSubtitle}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-600 shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 select-none"
              >
                <span>{viewProjectsText}</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#contact"
                className={`px-7 py-3 rounded-xl text-sm font-semibold border backdrop-blur-sm transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 select-none ${
                  isDarkMode 
                    ? 'border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:bg-zinc-800 hover:border-primary/60' 
                    : 'border-zinc-300 bg-white/70 text-zinc-800 hover:bg-zinc-100 hover:border-primary/60'
                }`}
              >
                {contactText}
              </a>
            </div>

            {/* Core Technologies - Circular Orbit Rotation */}
            <div className="pt-5 border-t border-dashed border-zinc-200 dark:border-zinc-800/80">
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                Core Technologies
              </p>

              <style>{`
                @keyframes orbitSpinCW {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                @keyframes orbitSpinCCW {
                  from {
                    transform: rotate(360deg);
                  }
                  to {
                    transform: rotate(0deg);
                  }
                }
                .tech-orbit-wheel {
                  animation: orbitSpinCW 24s linear infinite;
                  will-change: transform;
                }
                .tech-orbit-upright {
                  animation: orbitSpinCCW 24s linear infinite;
                  will-change: transform;
                }
                .tech-orbit-container:hover .tech-orbit-wheel,
                .tech-orbit-container:hover .tech-orbit-upright {
                  animation-play-state: paused;
                }
              `}</style>

              <div className="tech-orbit-container relative mx-auto md:mx-0 w-[340px] h-[340px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
                {/* Outer Circular Track Ring */}
                <div
                  className={`pointer-events-none absolute rounded-full border border-dashed ${
                    isDarkMode
                      ? 'w-[272px] h-[272px] border-zinc-800'
                      : 'w-[272px] h-[272px] border-zinc-300/90'
                  }`}
                />

                {/* Inner Subtle Ring */}
                <div
                  className={`pointer-events-none absolute rounded-full border ${
                    isDarkMode
                      ? 'w-[150px] h-[150px] border-zinc-800/70 bg-zinc-900/40'
                      : 'w-[150px] h-[150px] border-zinc-200/90 bg-white/60'
                  }`}
                />

                {/* Center Label */}
                <div className="pointer-events-none relative z-10 text-center px-3">
                  <span className="block text-[10px] uppercase tracking-widest text-primary font-bold">
                    Stack
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDarkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    {techStack.length} Tools
                  </span>
                </div>

                {/* Rotating Circular Wheel */}
                <div className="tech-orbit-wheel absolute inset-0 flex items-center justify-center">
                  {techStack.map((tech, index) => {
                    const angleDeg = (360 / techStack.length) * index;
                    return (
                      <div
                        key={tech.name}
                        style={{
                          position: 'absolute',
                          transform: `rotate(${angleDeg}deg) translateY(-${radius}px) rotate(-${angleDeg}deg)`,
                        }}
                      >
                        <div className="tech-orbit-upright">
                          <a
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`View official ${tech.name} documentation`}
                            className={`group inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-md shadow-md hover:scale-110 active:scale-95 transition-transform duration-200 select-none whitespace-nowrap ${
                              isDarkMode
                                ? 'border-zinc-700/90 bg-zinc-900/95 text-zinc-200 hover:border-primary hover:text-white'
                                : 'border-zinc-200 bg-white/95 text-zinc-800 hover:border-primary hover:text-zinc-950'
                            }`}
                          >
                            <TechIcon
                              name={tech.name}
                              className="w-3.5 h-3.5 flex-shrink-0"
                            />
                            <span>{tech.name}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Elevated Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className={`relative w-60 sm:w-68 lg:w-76 rounded-3xl p-2 border backdrop-blur-md shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] ${
              isDarkMode 
                ? 'border-zinc-800/90 bg-zinc-900/90 shadow-black/50' 
                : 'border-zinc-200/90 bg-white/90 shadow-zinc-300/50'
            }`}>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={profileImage} 
                  alt="Mao Sokchea" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Experience / Role Pill */}
              <div className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl border shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-semibold ${
                isDarkMode 
                  ? 'bg-zinc-900/95 border-zinc-800 text-zinc-200' 
                  : 'bg-white/95 border-zinc-200 text-zinc-800'
              }`}>
                <span className="text-primary text-base">⚡</span>
                <span>Full-Stack Dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;