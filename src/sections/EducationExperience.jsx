import React from 'react';
import TechIcon from '../components/TechIcon';

const EducationExperience = ({ t, isDarkMode, lang }) => {
  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  const currentFontClass = isKhmer ? 'font-khmer' : 'font-sans';

  const experienceList = [
    {
      period: "2025 - Present",
      role: isKhmer ? "អ្នកអភិវឌ្ឍន៍គេហទំព័រ (Frontend & Full-Stack)" : "Frontend & Full-Stack Developer",
      company: isKhmer ? "Freelance & គម្រោងផ្ទាល់ខ្លួន" : "Freelance / Personal Projects",
      description: isKhmer 
        ? "បង្កើតគេហទំព័រ Modern Web Applications, រៀបចំ UI ជាមួយ React & Tailwind CSS និងសរសេរ Backend REST APIs ដោយប្រើ Python FastAPI & Laravel។"
        : "Developing modern web applications, implementing responsive user interfaces with React & Tailwind CSS, and building robust backend APIs.",
      tags: ["React", "FastAPI", "Laravel", "Tailwind CSS", "Telegram Bot"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=60"
    },
    {
      period: "2024 - 2025",
      role: isKhmer ? "អ្នករៀន និងអនុវត្តការបង្កើតប្រព័ន្ធគេហទំព័រ" : "Web Development Student & Practicant",
      company: isKhmer ? "ការសិក្សាស្រាវជ្រាវ & គម្រោងសាលា" : "Self-Study & Academic Projects",
      description: isKhmer
        ? "បានកសាងប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ (POS systems), Telegram notification bots, និង Responsive layouts សម្រាប់ការប្រើប្រាស់ជាក់ស្តែង។"
        : "Built various database-driven systems including POS architectures, Telegram bots, and responsive frontend layouts.",
      tags: ["PHP", "MySQL", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&auto=format&fit=crop&q=60"
    }
  ];

  const educationList = [
    {
      period: "2024 - 2028",
      degree: isKhmer ? "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ (Computer Science)" : "Bachelor of Computer Science",
      institution: isKhmer ? "សាកលវិទ្យាល័យ បៀលប្រាយ (Build Bright University)" : "Build Bright University",
      description: isKhmer
        ? "ផ្តោតលើវិស្វកម្មផ្នែកទន់ (Software Engineering), ការសរសេរគេហទំព័រ, ក្បួនដោះស្រាយ (Algorithms) និងការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ (DBMS)។"
        : "Focused on software engineering, web development, algorithms, and database management systems.",
      tags: ["Computer Science", "Algorithms", "Database"],
      imageUrl: "https://bbu-webiste-space.sgp1.cdn.digitaloceanspaces.com/campus/pp/logo/20250816071156_bd0691f6fd091331c1bd902546ed881652946d43cc827c9d0c408c4b96cd8ffe.webp"
    },
    {
      period: "2025 - 2026",
      degree: isKhmer ? "វគ្គបណ្តុះបណ្តាល Full-Stack Web Development" : "Full-Stack Web Development Bootcamp",
      institution: isKhmer ? "កម្មវិធីបណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាជាក់ស្តែង" : "Intensive Tech Training & Bootcamp",
      description: isKhmer
        ? "បានបញ្ចប់វគ្គអនុវត្តជាក់ស្តែងលើបច្ចេកវិទ្យាទំនើបៗដូចជា React, Node.js, PHP Laravel និង Database structuring។"
        : "Completed hands-on training on modern web technologies including React, Node.js, PHP, and database structuring.",
      tags: ["React", "PHP", "Laravel"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section
      id="experience"
      className={`py-20 border-t transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'border-zinc-800/80 bg-[#0c0c0e] text-white' : 'border-zinc-100 bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {isKhmer ? "ប្រវត្តិការងារ & ការសិក្សា" : "Career Path"}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {t?.eduExp?.title || (isKhmer ? "ការសិក្សា និងបទពិសោធន៍" : "Education & Experience")}
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t?.eduExp?.subtitle || (isKhmer ? "ប្រវត្តិកាលសិក្សា និងដំណើរការអាជីពការងាររបស់ខ្ញុំ។" : "My academic background and professional journey.")}
          </p>
        </div>

        {/* 2 Columns: Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b flex items-center justify-between text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-800">
              <span>{t?.eduExp?.experienceTitle || (isKhmer ? "បទពិសោធន៍ការងារ" : "Work Experience")}</span>
              <span className="text-xs font-normal text-zinc-400">2024 - Present</span>
            </h3>

            <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-8">
              {experienceList.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Node */}
                  <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-white dark:ring-[#0c0c0e] transition-transform duration-200 group-hover:scale-125"></div>

                  <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none active:scale-[0.98] active:border-primary active:ring-2 active:ring-primary/20 ${
                    isDarkMode ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700' : 'border-zinc-200 bg-white hover:border-zinc-300 shadow-2xs'
                  }`}>
                    <div className="flex items-start gap-4">
                      {/* Organization / Project Logo Image */}
                      {item.imageUrl && (
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-2xs">
                          <img 
                            src={item.imageUrl} 
                            alt={item.company} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded mb-1 ${
                          isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                        }`}>
                          {item.period}
                        </span>
                        <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-xs font-medium text-primary mt-0.5 mb-2">
                          {item.company}
                        </p>
                        <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-lg border cursor-pointer select-none transform hover:-translate-y-0.5 active:scale-95 active:border-primary active:bg-primary/10 active:text-primary active:ring-1 active:ring-primary/30 transition-all duration-150 ${
                                isDarkMode 
                                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-primary hover:text-primary' 
                                  : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary hover:text-primary'
                              }`}
                            >
                              <TechIcon name={tag} className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b flex items-center justify-between text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-800">
              <span>{t?.eduExp?.educationTitle || (isKhmer ? "ការសិក្សា & សញ្ញាបត្រ" : "Education")}</span>
              <span className="text-xs font-normal text-zinc-400">2024 - 2028</span>
            </h3>

            <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-8">
              {educationList.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Node */}
                  <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-white dark:ring-[#0c0c0e] transition-transform duration-200 group-hover:scale-125"></div>

                  <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none active:scale-[0.98] active:border-primary active:ring-2 active:ring-primary/20 ${
                    isDarkMode ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700' : 'border-zinc-200 bg-white hover:border-zinc-300 shadow-2xs'
                  }`}>
                    <div className="flex items-start gap-4">
                      {/* Institution Logo Image */}
                      {item.imageUrl && (
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-2xs">
                          <img 
                            src={item.imageUrl} 
                            alt={item.institution} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded mb-1 ${
                          isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                        }`}>
                          {item.period}
                        </span>
                        <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                          {item.degree}
                        </h4>
                        <p className="text-xs font-medium text-primary mt-0.5 mb-2">
                          {item.institution}
                        </p>
                        <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-lg border cursor-pointer select-none transform hover:-translate-y-0.5 active:scale-95 active:border-primary active:bg-primary/10 active:text-primary active:ring-1 active:ring-primary/30 transition-all duration-150 ${
                                isDarkMode 
                                  ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-primary hover:text-primary' 
                                  : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary hover:text-primary'
                              }`}
                            >
                              <TechIcon name={tag} className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationExperience;