import React from 'react';

const Skills = ({ t, isDarkMode, lang }) => {
  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'font-khmer' : 'font-sans';

  // បញ្ជីជំនាញបច្ចេកវិទ្យា
  const skillsList = [
    { 
      name: "HTML & CSS", 
      level: "90%", 
      category: "Frontend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
    },
    { 
      name: "CSS", 
      level: "90%", 
      category: "Frontend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
    },
    { 
      name: "JavaScript", 
      level: "85%", 
      category: "Frontend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { 
      name: "React.js", 
      level: "80%", 
      category: "Framework", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "Tailwind CSS", 
      level: "90%", 
      category: "Styling", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
    },
    { 
      name: "PHP", 
      level: "75%", 
      category: "Backend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
    },
    { 
      name: "Laravel", 
      level: "75%", 
      category: "Framework", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" 
    },
    { 
      name: "Python", 
      level: "70%", 
      category: "Backend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    },
    { 
      name: "Node.js", 
      level: "70%", 
      category: "Backend", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      name: "Git & GitHub", 
      level: "75%", 
      category: "Tools", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    }
  ];

  // ញែកជំនាញតាមប្រភេទ (Frontend, Backend & Frameworks, Tools & Styling)
  const frontendSkills = skillsList.filter(s => s.category === "Frontend");
  const backendSkills = skillsList.filter(s => s.category === "Backend" || s.category === "Framework");
  const toolsSkills = skillsList.filter(s => s.category === "Tools" || s.category === "Styling");

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-200 overflow-hidden ${currentFontClass} ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'ជំនាញរបស់ខ្ញុំ' : 'My Skills'}
          </h2>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' 
              ? 'បច្ចេកវិទ្យា និងឧបករណ៍ដែលខ្ញុំប្រើប្រាស់ក្នុងការអភិវឌ្ឍន៍គេហទំព័រ។' 
              : 'Core technologies and tools I use to build robust web applications.'}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Category 1: Frontend */}
        <div>
          <h3 className="text-lg font-semibold mb-4 px-2">
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'ហ្វ្រុនអិន (Frontend)' : 'Frontend'}
          </h3>
          <div className={`relative w-full overflow-hidden flex flex-col py-4 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-950/40 border-zinc-900' : 'bg-zinc-100/60 border-zinc-200'
          }`}>
            <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>

            <div className="animate-marquee-left flex gap-6 px-3">
              {[...frontendSkills, ...frontendSkills].map((skill, index) => (
                <SkillCard key={`frontend-${index}`} skill={skill} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>

        {/* Category 2: Backend & Frameworks */}
        <div>
          <h3 className="text-lg font-semibold mb-4 px-2">
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'បែកអិន និងហ្វ្រេមវើក (Backend & Frameworks)' : 'Backend & Frameworks'}
          </h3>
          <div className={`relative w-full overflow-hidden flex flex-col py-4 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-950/40 border-zinc-900' : 'bg-zinc-100/60 border-zinc-200'
          }`}>
            <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>

            <div className="animate-marquee-right flex gap-6 px-3">
              {[...backendSkills, ...backendSkills].map((skill, index) => (
                <SkillCard key={`backend-${index}`} skill={skill} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>

        {/* Category 3: Tools & Styling */}
        <div>
          <h3 className="text-lg font-semibold mb-4 px-2">
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'ឧបករណ៍ និងស្ទីល (Tools & Styling)' : 'Tools & Styling'}
          </h3>
          <div className={`relative w-full overflow-hidden flex flex-col py-4 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-950/40 border-zinc-900' : 'bg-zinc-100/60 border-zinc-200'
          }`}>
            <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-zinc-950' : 'from-zinc-100'} to-transparent`}></div>

            <div className="animate-marquee-left flex gap-6 px-3">
              {[...toolsSkills, ...toolsSkills].map((skill, index) => (
                <SkillCard key={`tools-${index}`} skill={skill} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ skill, isDarkMode }) => (
  <div
    className={`w-[260px] sm:w-[280px] flex-shrink-0 p-5 rounded-xl border transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col justify-between ${
      isDarkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-zinc-200'
    }`}
  >
    <div>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center p-2 ${
            isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50 border border-zinc-200'
          }`}>
            <img 
              src={skill.iconUrl} 
              alt={skill.name} 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded ${
              isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
            }`}>
              {skill.category}
            </span>
          </div>
        </div>
        <span className="text-primary font-bold text-xs">{skill.level}</span>
      </div>
      <h3 className="font-semibold text-base mb-3">{skill.name}</h3>
    </div>
    <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
      <div 
        className="bg-primary h-full rounded-full transition-all duration-700 ease-out" 
        style={{ width: skill.level }}
      ></div>
    </div>
  </div>
);

export default Skills;