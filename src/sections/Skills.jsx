import React, { useState } from 'react';

const Skills = ({ t, isDarkMode, lang }) => {
  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'font-khmer' : 'font-sans';

  // State សម្រាប់កំណត់ប្រភេទដែលត្រូវបង្ហាញ ("all" ឬឈ្មោះ category)
  const [activeCategory, setActiveCategory] = useState('all');

  // បញ្ជីជំនាញបច្ចេកវិទ្យា Database និង Software បន្ថែម
  const skillsList = [
    // Frontend
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
      name: "Bootstrap", 
      level: "85%", 
      category: "Styling", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
    },
    // Backend & Frameworks
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
    // Databases
    { 
      name: "MySQL", 
      level: "80%", 
      category: "Database", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
    },
    { 
      name: "MongoDB", 
      level: "70%", 
      category: "Database", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
    },
    { 
      name: "PostgreSQL", 
      level: "75%", 
      category: "Database", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
    },
    { 
      name: "Oracle", 
      level: "70%", 
      category: "Database", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
    },
    { 
      name: "SQL Server", 
      level: "75%", 
      category: "Database", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
    },
    // Software & Tools
    { 
      name: "Git & GitHub", 
      level: "75%", 
      category: "Tools", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
    { 
      name: "VS Code", 
      level: "90%", 
      category: "Software", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
    },
    { 
      name: "Visual Studio", 
      level: "80%", 
      category: "Software", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" 
    },
    { 
      name: "Docker", 
      level: "65%", 
      category: "Software", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
    },
    { 
      name: "Postman", 
      level: "80%", 
      category: "Tools", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" 
    },
    { 
      name: "Figma", 
      level: "75%", 
      category: "Software", 
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
    }
  ];

  // បញ្ជីប៊ូតុងសម្រាប់ចុចជ្រើសរើសប្រភេទ (Filter Tabs)
  const categories = [
    { 
      id: 'all', 
      labelKh: 'ទាំងអស់', 
      labelEn: 'All' 
    },
    { 
      id: 'Frontend', 
      labelKh: 'ហ្វ្រុនអិន (Frontend)', 
      labelEn: 'Frontend' 
    },
    { 
      id: 'Backend', 
      labelKh: 'បែកអិន និងហ្វ្រេមវើក', 
      labelEn: 'Backend & Frameworks' 
    },
    { 
      id: 'Database', 
      labelKh: 'មូលដ្ឋានទិន្នន័យ (Database)', 
      labelEn: 'Databases' 
    },
    { 
      id: 'Tools', 
      labelKh: 'ឧបករណ៍ និងកម្មវិធី', 
      labelEn: 'Tools & Software' 
    }
  ];

  // មុខងារត្រងទិន្នន័យតាមការចុច
  const filteredSkills = skillsList.filter(skill => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'Frontend') return skill.category === 'Frontend' || skill.category === 'Styling';
    if (activeCategory === 'Backend') return skill.category === 'Backend' || skill.category === 'Framework';
    if (activeCategory === 'Database') return skill.category === 'Database';
    if (activeCategory === 'Tools') return skill.category === 'Tools' || skill.category === 'Software';
    return true;
  });

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-200 overflow-hidden ${currentFontClass} ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit 50s linear infinite;
        }
        .animate-orbit:hover {
          animation-play-state: paused;
        }
        .animate-counter-rotate {
          animation: counter-rotate 50s linear infinite;
        }
        .animate-orbit:hover .animate-counter-rotate {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'ជំនាញរបស់ខ្ញុំ' : 'My Skills'}
          </h2>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' 
              ? 'បច្ចេកវិទ្យា មូលដ្ឋានទិន្នន័យ និងកម្មវិធីឧបករណ៍ដែលខ្ញុំប្រើប្រាស់ក្នុងការអភិវឌ្ឍន៍។' 
              : 'Core technologies, databases, and software tools I use to build robust applications.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black border border-zinc-200'
                }`}
              >
                {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? cat.labelKh : cat.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeCategory === 'all' ? (
          /* Circular Rotation (វិលជុំ) Effect when "All" is selected */
          <div className="relative w-full h-[520px] sm:h-[640px] flex items-center justify-center">
            {/* Center core placeholder or logo title */}
            <div className={`absolute z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full border flex items-center justify-center text-center p-4 shadow-xl ${
              isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-200' : 'bg-white border-zinc-200 text-zinc-800'
            }`}>
              <span className="text-xs sm:text-sm font-bold">
                {lang === 'ភាសាខ្មែរ' || lang === 'Khmer' ? 'ជំនាញទាំងអស់' : 'All Skills'}
              </span>
            </div>

            {/* Orbit Container */}
            <div className="absolute w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] animate-orbit">
              {skillsList.map((skill, index) => {
                const angle = (index / skillsList.length) * 360;
                const radius = 210; // ចម្ងាយពីកណ្តាល (Radius for desktop)
                const rad = (angle * Math.PI) / 180;
                // កូអរដោនេ X និង Y សម្រាប់តម្រៀបជារង្វង់
                const x = Math.cos(rad) * (window.innerWidth < 640 ? 130 : radius);
                const y = Math.sin(rad) * (window.innerWidth < 640 ? 130 : radius);

                return (
                  <div
                    key={`orbit-${index}`}
                    className="absolute top-1/2 left-1/2 -ml-[55px] -mt-[40px] sm:-ml-[65px] sm:-mt-[45px] w-[110px] sm:w-[130px]"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="animate-counter-rotate">
                      <div className={`p-2.5 rounded-xl border shadow-md flex items-center gap-2 ${
                        isDarkMode ? 'bg-zinc-900/90 border-zinc-800 text-white' : 'bg-white/90 border-zinc-200 text-black'
                      }`}>
                        <div className="w-6 h-6 flex-shrink-0">
                          <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-[11px] font-semibold truncate">{skill.name}</p>
                          <p className="text-[9px] text-primary font-bold">{skill.level}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Standard Grid Effect when specific category is selected */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={`grid-${index}`} skill={skill} isDarkMode={isDarkMode} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ skill, isDarkMode }) => (
  <div
    className={`w-full p-5 rounded-xl border transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col justify-between h-full ${
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