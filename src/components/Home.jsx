import React, { useState, useEffect } from 'react';
import Button from './Button';
import profileImage from '../assets/images/Myself1.png';

const Home = ({ t, isDarkMode, lang }) => {
  const fullName = "Mao Sokchea";
  const [displayedName, setDisplayedName] = useState("");
  
  // បន្ថែម State សម្រាប់ 3D Tilt Effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
          }, 1500);
          return;
        }
      } else {
        setDisplayedName(currentText.substring(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      const speed = isDeleting ? 100 : 150;
      timer = setTimeout(typeEffect, speed);
    };

    timer = setTimeout(typeEffect, 150);

    return () => clearTimeout(timer);
  }, []);

  // គណនាចលនា 3D ពេល Mouse រំកិល
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15; // បែងចែកដើម្បីបន្ថយកម្រិតផ្អៀង
    const y = (e.clientY - top - height / 2) / -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer' || lang === 'km';
  
  const roleTitle = isKhmer 
    ? "អ្នកអភិវឌ្ឍន៍ Frontend និង Backend API & និស្សិត" 
    : (t?.welcomeTitle || "Frontend & Backend API Developer & Student");

  const roleSubtitle = isKhmer
    ? "ខ្ញុំគឺជា Developer ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើត Web Applications ទំនើបៗ ដោយអាចសរសេរបានទាំង Frontend និង Backend API ដែលប្រើប្រាស់លើ API FastAPI Python and Laravel ។"
    : (t?.welcomeSubtitle || "I am a passionate developer dedicated to building modern web applications, capable of developing both Frontend and Backend APIs powered by Python FastAPI and Laravel.");

  const viewProjectsText = isKhmer ? "មើលគម្រោង" : (t?.viewProjects || "View Projects");

  return (
    <section id="home" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      
      {/* បន្ថែម CSS Keyframes សម្រាប់ចលនាអណ្តែត */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-12 lg:gap-20">
          
          {/* Right Side: Profile Image (កែសម្រួលផ្នែកនេះ) */}
          <div 
            className="flex-shrink-0 mb-10 md:mb-0 relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }} // បន្ថែម Perspective សម្រាប់ 3D
          >
            {/* ពន្លឺចាំងនៅខាងក្រោយរូបភាព (Glowing Effect) */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-700"></div>

            <div 
              className="w-64 h-auto lg:w-80 mx-auto relative z-10 animate-float transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
              }}
            >
              <img 
                src={profileImage} 
                alt="Mao Sokchea" 
                // បន្ថែម drop-shadow ដើម្បីឲ្យរូបភាពមានជម្រៅ និង hover ឲ្យធំឡើងបន្តិច
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 tracking-tighter leading-none min-h-[1.1em]">
              <span>{displayedName}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-semibold mb-6 text-primary">
              {roleTitle}
            </p>
            <p className={`text-lg lg:text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {roleSubtitle}
            </p>
            
            <div className="flex justify-center md:justify-start gap-4">
              <Button href="#projects" variant="primary">
                {viewProjectsText}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;