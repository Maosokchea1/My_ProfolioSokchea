import React, { useState } from 'react';
import TechIcon from '../components/TechIcon';

const Skills = ({ t, isDarkMode, lang }) => {
  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const currentFontClass = isKhmer ? 'font-khmer' : 'font-sans';

  const [activeCategory, setActiveCategory] = useState('all');

  const skillsList = [
    // Frontend
    { name: "HTML5 & CSS3", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web" },
    { name: "JavaScript", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" },
    { name: "React.jsx", category: "Frontend", url: "https://react.dev/reference/react" },
    { name: "Tailwind CSS", category: "Frontend", url: "https://tailwindcss.com/docs" },
    { name: "Bootstrap", category: "Frontend", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },

    // Backend
    { name: "Python", category: "Backend", url: "https://docs.python.org/3/" },
    { name: "FastAPI", category: "Backend", url: "https://fastapi.tiangolo.com/tutorial/" },
    { name: "PHP", category: "Backend", url: "https://www.php.net/manual/en/" },
    { name: "Laravel", category: "Backend", url: "https://laravel.com/docs" },

    // Database
    { name: "MySQL", category: "Database", url: "https://dev.mysql.com/doc/" },
    { name: "PostgreSQL", category: "Database", url: "https://www.postgresql.org/docs/" },
    { name: "Oracle DB", category: "Database", url: "https://docs.oracle.com/en/database/" },
    { name: "SQL Server", category: "Database", url: "https://learn.microsoft.com/en-us/sql/sql-server/" },

    // Tools
    { name: "Git & GitHub", category: "Tools", url: "https://docs.github.com/en" },
    { name: "VS Code", category: "Tools", url: "https://code.visualstudio.com/docs" },
    { name: "Docker", category: "Tools", url: "https://docs.docker.com/" },
    { name: "Postman", category: "Tools", url: "https://learning.postman.com/docs/getting-started/overview/" },
    { name: "Figma", category: "Tools", url: "https://help.figma.com/hc/en-us" },
    { name: "Telegram Bot API", category: "Tools", url: "https://core.telegram.org/bots/api" },
  ];

  const categories = [
    { id: 'all', labelKh: 'ទាំងអស់', labelEn: 'All Skills' },
    { id: 'Frontend', labelKh: 'Frontend', labelEn: 'Frontend' },
    { id: 'Backend', labelKh: 'Backend & API', labelEn: 'Backend' },
    { id: 'Database', labelKh: 'Database', labelEn: 'Databases' },
    { id: 'Tools', labelKh: 'ឧបករណ៍ & Tools', labelEn: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  // ចែកជា ២ ជួរ
  const halfLength = Math.ceil(filteredSkills.length / 2);
  const rowOneItems = filteredSkills.slice(0, halfLength);
  const rowTwoItems = filteredSkills.slice(halfLength);

  // គុណនឹង ២ ដើម្បីឱ្យរត់ loop មិនដាច់
  const rowOne = [...rowOneItems, ...rowOneItems];
  const rowTwo = [...rowTwoItems, ...rowTwoItems];

  const renderSkillCard = (skill, index) => (
    <a
      key={`${skill.name}-${index}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Read official ${skill.name} documentation`}
      className={`w-40 sm:w-44 flex-shrink-0 p-4 rounded-2xl border flex flex-col items-center text-center cursor-pointer select-none transition-all duration-200 ease-out transform hover:-translate-y-1.5 hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
        isDarkMode 
          ? 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-white' 
          : 'border-zinc-200 bg-white hover:border-primary shadow-xs text-zinc-900'
      }`}
    >
      <div className="w-10 h-10 mb-2.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
        <TechIcon name={skill.name} className="w-8 h-8 object-contain" />
      </div>

      <h3 className="text-xs sm:text-sm font-bold truncate w-full mb-1">
        {skill.name}
      </h3>

      <div className="flex items-center justify-between w-full mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
          isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'
        }`}>
          {skill.category}
        </span>
        <span className="text-[10px] text-zinc-400 font-medium">
          Docs ↗
        </span>
      </div>
    </a>
  );

  return (
    <section
      id="skills"
      className={`py-16 sm:py-20 border-t transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'border-zinc-800/80 bg-[#0c0c0e] text-white' : 'border-zinc-100 bg-white text-zinc-900'
      }`}
    >
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .track-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }
        .track-right {
          display: flex;
          width: max-content;
          animation: scrollRight 30s linear infinite;
        }
        .track-left:hover,
        .track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Container (ថត) កម្រិតត្រឹម max-w-6xl ស្មើនឹង Header & Buttons */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {isKhmer ? "ជំនាញបច្ចេកវិទ្យា" : "Technical Stack"}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {t?.skills?.title || (isKhmer ? "ជំនាញ & បច្ចេកវិទ្យាដែលប្រើប្រាស់" : "Skills & Technologies")}
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t?.skills?.subtitle || (isKhmer ? "បច្ចេកវិទ្យានិងឧបករណ៍ទំនើបៗដែលខ្ញុំបានសិក្សា និងប្រើប្រាស់ក្នុងការបង្កើតគម្រោង។" : "Modern tools and technologies I use to build scalable web apps.")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transform active:scale-95 transition-all duration-150 select-none ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/30 ring-2 ring-primary/40'
                    : isDarkMode
                    ? 'text-zinc-400 hover:text-primary hover:bg-zinc-900 border border-zinc-800'
                    : 'text-zinc-600 hover:text-primary hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {isKhmer ? cat.labelKh : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* រៀបចំ Marquee ២ ជួរ នៅក្នុង "ថត" នេះ (មាន overflow-hidden & rounded-3xl) */}
        <div className="relative overflow-hidden rounded-3xl p-2 flex flex-col gap-4">
          
          {/* Shadow ស្រាលៗបាំងគែមសងខាងកុំឱ្យទើសភ្នែក */}
          <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 bg-gradient-to-r ${
            isDarkMode ? 'from-[#0c0c0e] to-transparent' : 'from-white to-transparent'
          }`} />
          <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 bg-gradient-to-l ${
            isDarkMode ? 'from-[#0c0c0e] to-transparent' : 'from-white to-transparent'
          }`} />

          {/* ជួរទី ១៖ រត់ពីស្ដាំទៅឆ្វេង */}
          <div key={`row1-${activeCategory}`} className="track-left flex gap-3.5">
            {rowOne.map((skill, index) => renderSkillCard(skill, index))}
          </div>

          {/* ជួរទី ២៖ រត់ពីឆ្វេងទៅស្ដាំ */}
          <div key={`row2-${activeCategory}`} className="track-right flex gap-3.5">
            {rowTwo.map((skill, index) => renderSkillCard(skill, index))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;