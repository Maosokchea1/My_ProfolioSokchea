import React from 'react';
import aboutImage from '../assets/images/imageabout.png';

const About = ({ t, isDarkMode, lang }) => {
  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer'
      ? 'font-khmer'
      : 'font-sans';

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer';

  const aboutHeading = isKhmer ? "តើខ្ញុំជានរណា?" : (t.about?.heading || "Who am I?");
  const aboutDescription = isKhmer
    ? "ខ្ញុំគឺជា Full-Stack & API Developer ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រ និង Web Applications ស្អាតៗ ល្បឿនលឿន និងមានសុវត្ថិភាពខ្ពស់។ ខ្ញុំមានជំនាញរៀបចំ Interface ជាមួយ React, Tailwind CSS និងសរសេរប្រព័ន្ធ Backend API ជាមួយ Python FastAPI និង Laravel ភ្ជាប់ជាមួយទិន្នន័យ MySQL & PostgreSQL យ៉ាងរលូន។"
    : (t.about?.description || "I am a dedicated full-stack and API developer passionate about creating responsive, high-performance web applications. I specialize in crafting clean user interfaces with React and Tailwind CSS, paired with robust backend services using Python FastAPI and Laravel.");

  const keyStrengths = [
    { titleKh: "Frontend Development", titleEn: "Frontend Development", descKh: "React.js, Tailwind CSS, Responsive Design", descEn: "React.js, Tailwind CSS, Responsive Design" },
    { titleKh: "Backend & REST APIs", titleEn: "Backend & REST APIs", descKh: "FastAPI (Python), Laravel (PHP), Webhooks", descEn: "FastAPI (Python), Laravel (PHP), Webhooks" },
    { titleKh: "Database Architecture", titleEn: "Database Architecture", descKh: "MySQL, PostgreSQL, Query Optimization", descEn: "MySQL, PostgreSQL, Query Optimization" },
    { titleKh: "Software & Tools", titleEn: "Software & Tools", descKh: "Git, GitHub, Docker, Postman, VS Code", descEn: "Git, GitHub, Docker, Postman, VS Code" },
  ];

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'border-zinc-800/80 bg-[#0c0c0e] text-white' : 'border-zinc-100 bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {isKhmer ? "សេចក្តីផ្តើម" : "Introduction"}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {t.about?.title || (isKhmer ? "អំពីខ្ញុំ" : "About Me")}
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t.about?.subtitle || (isKhmer ? "ស្វែងយល់បន្ថែមអំពីប្រវត្តិរូប ជំនាញ និងបទពិសោធន៍របស់ខ្ញុំ។" : "Get to know more about my background, skills, and coding journey.")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Clean Profile Image */}
          <div className="md:col-span-5">
            <div className={`rounded-2xl border overflow-hidden p-1 cursor-pointer transform hover:scale-[1.02] active:scale-95 active:border-primary active:ring-4 active:ring-primary/20 transition-all duration-300 ${
              isDarkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-100'
            }`}>
              <img
                src={aboutImage}
                alt="Mao Sokchea"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Side: Bio and Simple Grid */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {aboutHeading}
            </h3>
            
            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {aboutDescription}
            </p>

            {/* Clean Strengths List with Primary Feedback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {keyStrengths.map((item, index) => (
                <div
                  key={index}
                  className={`p-3.5 rounded-xl border cursor-pointer select-none transform hover:-translate-y-0.5 hover:border-primary active:scale-95 active:border-primary active:bg-primary/10 active:ring-2 active:ring-primary/30 transition-all duration-150 ${
                    isDarkMode 
                      ? 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900' 
                      : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100/80'
                  }`}
                >
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary">
                    {isKhmer ? item.titleKh : item.titleEn}
                  </h4>
                  <p className={`text-[11px] mt-1 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {isKhmer ? item.descKh : item.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Simple Stats with Primary Feedback */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div
                className={`p-4 rounded-xl border cursor-pointer select-none transform hover:-translate-y-0.5 hover:border-primary active:scale-95 active:border-primary active:bg-primary/10 active:ring-2 active:ring-primary/30 transition-all duration-150 ${
                  isDarkMode ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-zinc-50/50'
                }`}
              >
                <h4 className="text-2xl font-bold text-primary mb-0.5">1+</h4>
                <p className={`text-xs font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {isKhmer ? "ឆ្នាំបទពិសោធន៍" : (t.about?.experience || "Years of Experience")}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border cursor-pointer select-none transform hover:-translate-y-0.5 hover:border-primary active:scale-95 active:border-primary active:bg-primary/10 active:ring-2 active:ring-primary/30 transition-all duration-150 ${
                  isDarkMode ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-zinc-50/50'
                }`}
              >
                <h4 className="text-2xl font-bold text-primary mb-0.5">5+</h4>
                <p className={`text-xs font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {isKhmer ? "គម្រោងបានបញ្ចប់ និងកំពុងធ្វើ" : "Projects Completed & Active"}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;