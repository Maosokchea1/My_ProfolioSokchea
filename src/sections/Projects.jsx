import React from 'react';
import dashboardImg from '../assets/icons/image.png';
import saleMovieImg from '../assets/Coming Soon/Sale_Moviec.png';
import websiteSchoolImg from '../assets/Coming Soon/Website_School.png';

const Projects = ({ t, isDarkMode }) => {
  // មុខងារសម្រាប់ទាញយក URL រូបភាព SVG ទៅតាមឈ្មោះ Tech
  const getTechIconUrl = (name) => {
    switch (name.toLowerCase()) {
      case 'html':
        return 'https://api.iconify.design/vscode-icons:file-type-html.svg';
      case 'css':
        return 'https://api.iconify.design/vscode-icons:file-type-css.svg';
      case 'javascript':
        return 'https://api.iconify.design/vscode-icons:file-type-js-official.svg';
      case 'telegram bot':
        return 'https://api.iconify.design/logos:telegram.svg';
      case 'react':
        return 'https://api.iconify.design/vscode-icons:file-type-reactjs.svg';
      case 'tailwind css':
        return 'https://api.iconify.design/logos:tailwindcss-icon.svg';
      case 'fastapi':
        return 'https://api.iconify.design/logos:fastapi.svg';
      case 'python':
        return 'https://api.iconify.design/logos:python.svg';
      case 'firebase':
        return 'https://api.iconify.design/logos:firebase.svg';
      case 'laravel':
        return 'https://api.iconify.design/logos:laravel.svg';
      case 'php':
        return 'https://api.iconify.design/vscode-icons:file-type-php.svg';
      case 'mysql':
        return 'https://api.iconify.design/vscode-icons:file-type-mysql.svg';
      default:
        return null;
    }
  };

  const defaultProjects = [
    {
      title: 'Coffice Phnom Penh',
      description:
        'A modern web platform for finding and exploring cafe and workspace options in Phnom Penh with seamless user experience and telegram-bot integration.',
      imageUrl:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=60',
      tags: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Telegram Bot', url: 'https://t.me/OfficeSensokPhnomPenhbot' },
      ],
      github: 'https://github.com/your-username/coffice-phnom-penh',
      live: 'https://coffice-phnom-penh.vercel.app/',
    },
    {
      title: 'E-Commerce Website',
      description:
        'A modern e-commerce platform built with React and Tailwind CSS, powered by FastAPI (Python) backend, featuring ABA Payway QR code checkout and instant Telegram Bot order notifications.',
      imageUrl: saleMovieImg,
      isComingSoon: true,
      tags: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Python', url: 'https://www.python.org' },
        { name: 'Telegram Bot', url: 'https://core.telegram.org/bots' },
      ],
      github: 'https://github.com/your-username/ecommerce-fastapi',
      live: '#',
    },
    {
      title: 'Dashboard Inventory',
      description:
        'A responsive inventory dashboard system powered by Laravel backend, featuring real-time data tracking and secure database operations.',
      imageUrl: dashboardImg, 
      isComingSoon: true,
      tags: [
        { name: 'Laravel', url: 'https://laravel.com' },
        { name: 'PHP', url: 'https://www.php.net' },
        { name: 'MySQL', url: 'https://www.mysql.com' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      ],
      github: 'https://github.com/your-username/portfolio-dashboard',
      live: '#',
    },
    {
      // បានកែប្រែពី Task Management App មកដាក់ Website School ជាមួយ FastAPI & Python
      title: 'Website School',
      description:
        'A comprehensive school management and educational platform built with React and Tailwind CSS, powered by a robust FastAPI (Python) backend for managing students, courses, and academic records.',
      imageUrl: websiteSchoolImg,
      isComingSoon: true,
      tags: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Python', url: 'https://www.python.org' },
      ],
      github: 'https://github.com/your-username/website-school',
      live: '#',
    },
  ];

  const projectsList = t?.projects?.list || defaultProjects;

  return (
    <section
      id="projects"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span
            className={`inline-block text-xs font-medium tracking-widest uppercase mb-3 ${
              isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}
          >
            {t?.projects?.badge || 'Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
            {t?.projects?.title || 'Featured Projects'}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed max-w-md mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            {t?.projects?.subtitle ||
              'A selection of recent work — each built with a focus on clean code and thoughtful design.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                isDarkMode
                  ? 'bg-[#141414] hover:bg-[#1a1a1a]'
                  : 'bg-zinc-50 hover:bg-white'
              } shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 -translate-y-0 hover:-translate-y-2 ring-1 ${
                isDarkMode
                  ? 'ring-white/5 hover:ring-indigo-500/30'
                  : 'ring-black/5 hover:ring-indigo-500/30'
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-zinc-800 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    project.isComingSoon ? 'object-contain p-8 opacity-60 bg-zinc-900' : ''
                  }`}
                  loading="lazy"
                />

                {/* Coming Soon Badge Overlay */}
                {project.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-600 text-white shadow-lg animate-pulse">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3
                  className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-[#111111]'
                  } group-hover:text-indigo-500`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-2.5 text-sm leading-relaxed ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags with Icons & Links */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags?.map((tag, tagIndex) => {
                    const tagName = typeof tag === 'string' ? tag : tag.name;
                    const tagUrl = typeof tag === 'object' && tag.url ? tag.url : '#';
                    const iconUrl = getTechIconUrl(tagName);

                    return (
                      <a
                        key={tagIndex}
                        href={tagUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide px-3 py-1 rounded-full transition-all duration-200 ${
                          isDarkMode
                            ? 'bg-zinc-800/80 text-zinc-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:ring-1 hover:ring-indigo-500/40'
                            : 'bg-zinc-200/70 text-zinc-600 hover:bg-indigo-500/10 hover:text-indigo-600 hover:ring-1 hover:ring-indigo-500/30'
                        }`}
                      >
                        {iconUrl && (
                          <img src={iconUrl} alt={tagName} className="w-3.5 h-3.5 object-contain" />
                        )}
                        <span>{tagName}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div
                  className={`mt-6 pt-5 flex items-center justify-between border-t ${
                    isDarkMode ? 'border-white/5' : 'border-black/5'
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium tracking-wider uppercase ${
                      isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}
                  >
                    {project.isComingSoon ? 'In Development' : (t?.projects?.cta || 'View Project')}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isDarkMode
                          ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                          : 'text-zinc-600 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </a>

                    {!project.isComingSoon && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isDarkMode
                            ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                            : 'text-zinc-600 hover:text-black hover:bg-black/5'
                        }`}
                      >
                        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;