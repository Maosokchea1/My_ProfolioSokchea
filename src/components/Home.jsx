import React, { useState, useEffect } from 'react';
import Button from './Button';
// 👈 Import រូបភាព Profile របស់អ្នកចូលមកទីនេះ
import profileImage from '../assets/images/mypicture.JPG';

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
        // កំពុងបន្ថែមអក្សរម្តងមួយ
        setDisplayedName(currentText.substring(0, index + 1));
        index++;

        // បើវាយចប់គ្រប់អក្សរ ឱ្យវាផ្អាកបន្តិចសិន ចាំចាប់ផ្តើមលុបវិញ
        if (index === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 1500); // រង់ចាំ ១.៥វិនាទីពេលវាយចប់
        }
      } else {
        // កំពុងលុបអក្សរចេញវិញ
        setDisplayedName(currentText.substring(0, index - 1));
        index--;

        // បើលុបអស់ហើយ ឱ្យវារត់សារឡើងវិញពីដើម
        if (index === 0) {
          isDeleting = false;
        }
      }

      // ល្បឿននៃការវាយ និងលុបអក្សរ (មីលីវិនាទី)
      const speed = isDeleting ? 100 : 150;
      timer = setTimeout(typeEffect, speed);
    };

    timer = setTimeout(typeEffect, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Flex container with reverse: Content (Left) | Image (Right) */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
          
          {/* Right Side: Profile Image */}
          <div className="flex-shrink-0 mb-10 md:mb-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl mx-auto">
              <img 
                src={profileImage} 
                alt="Mao Sokchea" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="text-center md:text-left max-w-xl">
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 tracking-tighter leading-none min-h-[1.1em]">
              <span>{displayedName}</span>
              {/* Cursor */}
              <span className="animate-pulse text-primary">|</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-semibold mb-6 text-primary">
              {t?.welcomeTitle || "Full Stack Developer & Student"}
            </p>
            <p className={`text-lg lg:text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {t?.welcomeSubtitle || "I am a passionate developer dedicated to building modern, scalable, and user-friendly web applications."}
            </p>
            
            {/* Action Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <Button href="#projects" variant="primary">
                {t?.viewProjects || "View Projects"}
              </Button>
              
              {/* 🛠 កែសម្រួលត្រង់នេះឱ្យត្រូវនឹងឈ្មោះ File ក្នុង public folder */}
              <a 
                href="/Intern%20developer.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-xl font-medium border transition-all duration-300 flex items-center justify-center shadow-sm hover:-translate-y-0.5 ${
                  isDarkMode 
                    ? 'border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600' 
                    : 'border-zinc-300 text-gray-900 hover:bg-gray-100 hover:border-zinc-400'
                }`}
              >
                {t?.viewCv || "View CV"}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;